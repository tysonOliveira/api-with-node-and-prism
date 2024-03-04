import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation.js";
import { createUser, getAll, getById, updateUser, deleteUser } from "../repositorys/user.repository.js";

export const create = async (req, res) => {
  try {
    // Validação dos dados do usuário
    await userValidation.validate(req.body);
    
    // Hash da senha usando bcrypt com um salt de 10
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    
    // Criação do usuário
    const users = await createUser(req.body);
    res.status(201).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req, res) => {
  try {
    // 
    const users = await getAll();
    res.status(201).send(users);
  } catch (e) {
    res.status(400).send(e);  
  }
}

export const getId = async (req, res) => {
  try {
    // Obtém o usuário pelo ID usando a função getById
    const user = await getById(Number(req.params.id));
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);  
  }
}

export const update = async (req, res) => {
  try {
    const user = await updateUser(Number(req.params.id), req.body);
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);  
  }
}

export const remove = async (req, res) => {
  try {
    await deleteUser(Number(req.params.id));
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);  
  }
}
