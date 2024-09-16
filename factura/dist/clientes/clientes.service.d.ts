import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesService {
    cliente: any[];
    create(createClienteDto: CreateClienteDto): string;
    findAll(): any[];
    findOne(id: number): any;
    update(id: number, updateClienteDto: UpdateClienteDto): string;
    remove(id: number): string;
}
