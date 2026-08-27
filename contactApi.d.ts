import type {
  ErrorRequestHandler,
  RequestHandler,
  Router,
} from "express";

export declare const handleContactPost: RequestHandler;
export declare const handleContactHealthGet: RequestHandler;
export declare const createContactRouter: () => Router;
export declare const contactJsonParser: RequestHandler;
export declare const contactPayloadErrorHandler: ErrorRequestHandler;
export declare const logSmtpBootstrap: () => void;
