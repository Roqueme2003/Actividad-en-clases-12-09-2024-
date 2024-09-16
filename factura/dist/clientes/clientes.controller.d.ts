import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): string;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateClienteDto: UpdateClienteDto): string;
    remove(id: string): string;
}
