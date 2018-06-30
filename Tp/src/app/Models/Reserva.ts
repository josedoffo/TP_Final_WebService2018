import { Usuario } from './Usuario';
import { Vehiculo } from './Vehiculo';
import { ViewEncapsulation } from '@angular/compiler/src/core';

export class Reserva {
    id: number
    usuario: Usuario
    vehiculo: Vehiculo
    dias: number
    costoRenta: number
    fechaRenta: Date
    estado: string
    
    constructor(id?:number,user?:Usuario,vehiculo?:Vehiculo,dias?:number,costoRenta?:number,fechaRenta?:Date,estado?:string){
        this.id=id;
        this.usuario=user;
        this.vehiculo=vehiculo;
        this.dias=dias;
        this.costoRenta=costoRenta;
        this.fechaRenta=fechaRenta;
        this.estado=estado;

    }
}