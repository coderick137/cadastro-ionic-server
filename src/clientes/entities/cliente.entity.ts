import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  telefone: string;
}
