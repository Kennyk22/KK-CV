import { Request } from "express";
export interface PromptReq extends Request {
    params: {
        Company : string
        Quality1 : string
        Quality2 : string
        Focus : string
    }
}