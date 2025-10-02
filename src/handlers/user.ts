// import { Request, Response } from "express-serve-static-core";
import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dt";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(request: Request, response: Response) {
  // const cus = request.customField; // Example of using the custom field
  request.customField = "example"; // Setting a value to the custom field
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  const { id } = request.params;
  response.send({ id });
}

export function createUser(
  request: Request<{ id: string }, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) {
  const { id } = request.params;
  const { username, email } = request.body;
  const { loginAfterCreate } = request.query;

  response.status(201).send({ id: 1, username, email });
}
