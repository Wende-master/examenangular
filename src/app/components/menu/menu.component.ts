import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Cubo } from '../../models/Cubo';
import { Marcas } from '../../models/Marcas';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  //public cubo!: Array<Cubo>;
  public cubos!: [];

  constructor(private _service: ServiceService) {

  }

  ngOnInit(): void {
    this.loadCubosMarca();
  }

  loadCubosMarca(): void {
    this._service.getCubosMarcas().subscribe(response =>{
      console.log(response);
      this.cubos = response;
    })
  }

}
