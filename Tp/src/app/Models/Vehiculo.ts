export class Vehiculo {
    patente: number
    marca: string
    modelo: string
    pathimagen: string
    disponible: boolean
    
    constructor(patente?:number,marca?:string,modelo?:string,pathimgen?:string,disponible?:boolean)
    {

        this.patente=patente;
        this.marca=marca;
        this.modelo=modelo;
        this.pathimagen=pathimgen;
        this.disponible=disponible;

    }
}