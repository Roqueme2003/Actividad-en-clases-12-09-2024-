import { IsNumber, IsString } from "class-validator";

export class CreateClienteDto {

@IsString()
nombre : string;
@IsString()
fecha : string;
@IsNumber()
id : number;
}

