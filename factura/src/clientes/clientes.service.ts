import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  cliente = []
  create(createClienteDto: CreateClienteDto) {
    this.cliente.push(createClienteDto)
    console.log(this.cliente)
    return 'This action adds a new cliente';
  }

  findAll() {
    return this.cliente; `This action returns all clientes`;
  }

  findOne(id: number) {
    return this.cliente.find(cliente => cliente.id === id);
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number): string { 
    const index = this.cliente.findIndex(cliente => cliente.id === id);
    if (index >= 0) {
      this.cliente.splice(index, 1);
      return `Cliente con ID ${id} eliminado correctamente`; 
    } else {
      return `Cliente con ID ${id} no encontrado`; 
    }
  }
}
