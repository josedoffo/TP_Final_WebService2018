export class Usuario {
    id: number
    apellido: String
    nombres: String
    dni: number
    email: String
    teléfono: number
    usuario: string
    password: string
    perfil: string

    constructor (id?:number,apellido?:string,nombres?:string,dni?:number,email?:string,telefono?:number,usuario?:string,password?:string,perfil?:string){
    this.id=id;
    this.apellido=apellido;
    this.nombres=nombres;
    this.dni=dni;
    this.email=email;
    this.teléfono=telefono;
    this.usuario=usuario;
    this.password=password;
    this.perfil=perfil;
    }
}