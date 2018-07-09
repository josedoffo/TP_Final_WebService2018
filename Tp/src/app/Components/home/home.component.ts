import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VehiculoServiceService } from '../../Services/vehiculo-service.service';
import { Vehiculo } from '../../Models/Vehiculo';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ VehiculoServiceService]
})

export class HomeComponent implements OnInit {
vehiculos: Array<Vehiculo>;
vehDispo:Array<Vehiculo>;
  constructor(private vehService:VehiculoServiceService, public authenticationService:AuthenticationService,private router: Router,public storageservice:StorageService) { 
    this.vehDispo = new Array<Vehiculo>();
    console.log(authenticationService.userLogged);
    this.storageservice.setUsuarioLogeado(this.authenticationService.userLogged);
    console.error(this.storageservice.usuarioLogeado);
    this.vehService.getVehiculo().subscribe(
      result => {
        this.vehiculos = JSON.parse(result.vehiculos);
        for(let veh of this.vehiculos)
        {
          if(veh.disponible) this.vehDispo.push(veh);
        }
      }
    );
//    this.imagenes=["assets/Images/1.jpg","assets/Images/2.jpg","assets/Images/3.jpg"]
  }

  ngOnInit() {
  }

  elegir(item:Vehiculo){
    this.storageservice.setVehiculoSeleccionado(item);
    console.log(this.storageservice.getVehiculoSeleccioado());
    this.router.navigateByUrl('reservas');
    
  }

}
