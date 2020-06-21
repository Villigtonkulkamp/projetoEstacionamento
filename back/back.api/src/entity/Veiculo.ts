import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Veiculo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placa: string;

    @Column()
    modelo: string;

}
