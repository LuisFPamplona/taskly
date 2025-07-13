import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTask = async (req, res) => {
  try {
    const user = req.body.user;
    const task = req.body.task;

    const newTask = await prisma.task.create({
      data: {
        content: task.content,
        done: false,
        priority: task.priority,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    res.status(200).json({ message: "Sucesso ao criar task", task: newTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar task" });
  }
};

export const removeTask = async (req, res) => {
  try {
    const { taskId } = req.query;
    await prisma.task.delete({
      where: { id: taskId },
    });

    res.status(200).json({ message: "Sucesso ao remover task" });
  } catch (error) {
    res.status(404).json({ message: "Erro ao remover tarefa" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = req.body;
    await prisma.task.update({
      where: {
        id: task.id,
      },
      data: {
        content: task.content,
      },
    });

    res.status(200).json({ message: "Sucesso ao atualizar a tarefa" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Erro ao editar tarefa" });
  }
};

export const isTaskDone = async (req, res) => {
  try {
    const task = req.body;
    await prisma.task.update({
      where: {
        id: task.id,
      },
      data: {
        done: task.done,
      },
    });

    res.status(200).json({ message: "Estado DONE alterado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Erro ao alterar estado DONE da tarefa" });
  }
};

export const listUserTask = async (req, res) => {
  try {
    const { userId } = req.query;

    const tasks = await prisma.task.findMany({
      where: { userId: userId },
    });

    if (!tasks) {
      return res.status(404).json({ message: "Nao foram encontradas tarefas" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "Erro ao listas tarefas" });
  }
};
