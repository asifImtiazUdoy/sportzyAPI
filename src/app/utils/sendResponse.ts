import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  token?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  if ((Array.isArray(data.data) && data.data.length > 0) || (typeof data.data === 'object' && Object.values(data.data as object).length > 0)) {
    if (data.token) {
      res.status(data?.statusCode).json({
        success: data.success,
        message: data.message,
        token: data.token,
        data: data.data,
      });
    } else {
      res.status(data?.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
      });
    }
  } else {
    res.status(data?.statusCode).json({
      success: false,
      message: "No Data Found",
      data: data.data,
    });
  }
};

export default sendResponse;