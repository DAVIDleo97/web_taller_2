import { Component } from '@angular/core';
import { AutoServiceService } from 'src/app/services/auto-service.service';

@Component({
  selector: 'app-lista-de-autos',
  templateUrl: './lista-de-autos.component.html',
  styleUrls: ['./lista-de-autos.component.css']
})
export class ListaDeAutosComponent {

  constructor( private servicio: AutoServiceService){}

  dataAuto: any;

  ngOnInit(){
    this.servicio.getAutos().subscribe(autos =>{
      this.dataAuto = autos
    })
  }

}
