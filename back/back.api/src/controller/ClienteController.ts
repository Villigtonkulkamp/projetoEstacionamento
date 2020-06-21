import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Cliente} from "../entity/Cliente";

export class ClienteController {

    private clienteRepository = getRepository(Cliente);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.save(request.body);
       
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let clienteToRemove = await this.clienteRepository.findOne(request.params.id);
        await this.clienteRepository.remove(clienteToRemove);
    }

}