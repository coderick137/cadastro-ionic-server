import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const { nome, cpf, email, telefone } = createClienteDto;

    const cliente = await this.clientesRepository.save({
      nome,
      cpf,
      email,
      telefone,
    });

    return cliente;
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clientesRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    return await this.clientesRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const { nome, cpf, email, telefone } = updateClienteDto;

    const clienteToUpdate = await this.clientesRepository.findOne({
      where: { id },
    });

    clienteToUpdate.nome = nome;
    clienteToUpdate.cpf = cpf;
    clienteToUpdate.email = email;
    clienteToUpdate.telefone = telefone;

    const clienteUpdated = await this.clientesRepository.save(clienteToUpdate);
    return clienteUpdated;
  }

  async remove(id: number): Promise<void> {
    const clienteToRemove = await this.clientesRepository.findOne({
      where: { id },
    });

    await this.clientesRepository.remove(clienteToRemove);
  }
}
