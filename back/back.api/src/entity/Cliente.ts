import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    sobrenome: string;
    
    @Column()
    nascimento: string;
    
    @Column()
    placa: string;
    
    @Column()
    modelo: string;


}
