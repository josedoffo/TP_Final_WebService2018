export class Usuario {
    apellido: String
    nombres: String
    dni: number
    email: String
    telefono: number
    usuario: string
    password: string
    perfil: string

    constructor (apellido?:string,nombres?:string,dni?:number,email?:string,telefono?:number,usuario?:string,password?:string,perfil?:string){
    this.apellido=apellido;
    this.nombres=nombres;
    this.dni=dni;
    this.email=email;
    this.telefono=telefono;
    this.usuario=usuario;
    this.password=password;
    this.perfil=perfil;
    }
}