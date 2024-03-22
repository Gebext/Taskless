import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from "@/app/utils/connect";

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