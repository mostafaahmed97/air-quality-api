import { NextFunction, Request, Response } from 'express';

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export { NotFoundError, ValidationError };

export function errorHandlingMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log({ err });

  if (err instanceof NotFoundError) {
    return res.status(404).send({ error: err.message });
  }

  if (err instanceof ValidationError) {
    return res.status(400).send({ error: err.message });
  }

  // Default error code & msg
  return res.status(500).send({ error: 'Error occured' });
}
