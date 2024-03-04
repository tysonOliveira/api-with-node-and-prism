import { prisma } from "../services/prisma.js";

export const createUser = async (data) => {

  // Criação de um novo registro de usuário e definição de retorno dos campos criados usando select
  const users = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return users;
}

export const getAll = async () => {
  const users = await prisma.user.findMany({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return users;  
}

// Obtém um usuário específico
export const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return user;  
}

export const updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return user;  
}

export const deleteUser = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  })
  return;  
}
