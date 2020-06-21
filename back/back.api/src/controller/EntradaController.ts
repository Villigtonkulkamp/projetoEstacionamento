import { getRepository, Like, In, Equal } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Entrada } from "../entity/Entrada";


export class EntradaController {

    private EntradaRepository = getRepository(Entrada);

    async one(request: Request, response: Response, next: NextFunction) {
        console.log(request.params.id);
        return this.EntradaRepository.findOne(request.params.id);
    }

    // ------------------------------------------

    async all(request: Request, response: Response, next: NextFunction) {
        console.log("get All entrada");
        return this.EntradaRepository.find();
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.EntradaRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let registroToRemove = await this.EntradaRepository.findOne(request.params.id);
        return await this.EntradaRepository.remove(registroToRemove);
    }
    async allOpen(request: Request, response: Response, next: NextFunction) {
        console.log("Filtro por placa");
        return this.EntradaRepository
            .find({
                where:
                    { placa: Like('%' + request.params.placa + '%'), datasaida: " " }
            });
    }
    
    async savePut(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        let entradaToAtualizar = await this.EntradaRepository.merge(await this.EntradaRepository.findOne(request.params.id), request.body);
        console.log("Salve atualilar");
        return this.EntradaRepository.save(entradaToAtualizar);
    }

}