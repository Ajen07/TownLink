import { NextResponse } from "next/server";

export function handleErrorResponse(error: any) {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return NextResponse.json({ error: message }, { status: statusCode });
}

export class BadRequestError extends Error {
  statusCode: number;
  name: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.name = "BadRequestError";
  }
}

export class InternalServerError extends Error {
  statusCode: number;
  name: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 500;
    this.name = "InternalServerError";
  }
}

export class UnAuthenticatedError extends Error {
  statusCode: number;
  name: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 401;
    this.name = "UnAuthenticatedError";
  }
}

export class ForbiddenError extends Error {
  statusCode: number;
  name: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 403;
    this.name = "ForbiddenError";
  }
}

export class NotFoundError extends Error {
  statusCode: number;
  name: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFoundError";
  }
}

export class ConflictError extends Error {
  statusCode: number;
  name: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 409;
    this.name = "ConflictError";
  }
}
