import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET;

const prisma = new PrismaClient();

export const userRegister = async (req, res) => {
  try {
    const user = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    const dbUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });

    res.status(200).json({
      message: "Usuário cadastrado com sucesso",
      id: dbUser.id,
      name: dbUser.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const userInfo = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: userInfo.email,
      },
    });

    if (!user) {
      return res.status(500).json({ mesage: "User nao encontrado" });
    }

    const isMatch = await bcrypt.compare(userInfo.password, user.password);

    if (!isMatch) {
      return res.status(500).json({ message: "Senha invalida" });
    }

    const token = jwt.sign({ id: user.id, name: user.name }, jwt_secret, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token: token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login" });
  }
};

export const removeUser = async (req, res) => {
  try {
    const userInfo = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: userInfo.id,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário nao encontrado" });
    }

    await prisma.task.deleteMany({
      where: {
        userId: userInfo.id,
      },
    });

    await prisma.user.delete({
      where: {
        id: user.id,
      },
    });

    res.status(200).json({ message: "Usuario removido" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Erro ao remover usuário" });
  }
};
