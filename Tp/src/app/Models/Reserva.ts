import { Usuario } from './Usuario';
import { Vehiculo } from './Vehiculo';
import { ViewEncapsulation } from '@angular/compiler/src/core';

export class Reserva {
    usuario: Usuario
    vehiculo: Vehiculo
    dias: number
    costoRenta: number
    fechaRenta: Date
    estado: string
    
    constructor(user?:Usuario,vehiculo?:Vehiculo,dias?:number,costoRenta?:number,fechaRenta?:Date,estado?:string){
        this.usuario=user;
        this.vehiculo=vehiculo;
        this.dias=dias;
        this.costoRenta=costoRenta;
        this.fechaRenta=fechaRenta;
        this.estado=estado;

    }
}