import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  nome?: string;
  cpf?: string;
  email?: string;
  telefone?: string;
}
