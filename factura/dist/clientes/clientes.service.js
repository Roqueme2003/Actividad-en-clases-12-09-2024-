"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
let ClientesService = class ClientesService {
    constructor() {
        this.cliente = [];
    }
    create(createClienteDto) {
        this.cliente.push(createClienteDto);
        console.log(this.cliente);
        return 'This action adds a new cliente';
    }
    findAll() {
        return this.cliente;
        `This action returns all clientes`;
    }
    findOne(id) {
        return this.cliente.find(cliente => cliente.id === id);
    }
    update(id, updateClienteDto) {
        return `This action updates a #${id} cliente`;
    }
    remove(id) {
        const index = this.cliente.findIndex(cliente => cliente.id === id);
        if (index >= 0) {
            this.cliente.splice(index, 1);
            return `Cliente con ID ${id} eliminado correctamente`;
        }
        else {
            return `Cliente con ID ${id} no encontrado`;
        }
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)()
], ClientesService);
//# sourceMappingURL=clientes.service.js.map