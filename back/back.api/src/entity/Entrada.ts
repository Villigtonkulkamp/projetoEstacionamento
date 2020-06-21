import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Entrada {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placa: string;

    
    @Column()
    modelo: string;
    
    @Column()
    horarioentrada: string;

    @Column()
    dataentrada: string;

    @Column()
    horariosaida: string;

    @Column()
    datasaida: string;


}
