import { Usuario } from "./Usuario";
export class Novedad {
    Id: number
    Usuario: Usuario
    Texto: string
    estado: string
    constructor(id?:number,usuario?:Usuario,texto?:string,estado?:string){
        this.Id=id;
        this.Usuario=usuario;
        this.Texto=texto;
        this.estado=estado;
    }
}
