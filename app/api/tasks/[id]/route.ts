import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from "@/app/utils/connect";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const task = await prisma.task.findUnique({
      where: { id: id },
    });

    if (!task) {
      return NextResponse.json({ error: "Task not found", status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR DELETING TASK: " + error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return NextResponse.json({ error: "Unathorized", status: 401 });
    }

    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    console.log("Task deleted:", task);
    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR DELETING TASK: " + error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;
    const { isCompleted, isImportant, title, description, date } =
      await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task || task.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    console.log(title, description, date, isCompleted, isImportant);

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        date,
        isCompleted,
        isImportant,
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}
