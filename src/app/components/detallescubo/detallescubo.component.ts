import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cubo } from '../../models/Cubo';


@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrl: './detallescubo.component.css'
})
export class DetallescuboComponent implements OnInit {

  public cubo!: Cubo [];

  constructor(private _service: ServiceService, private _activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    
    this.loadDetallesPorMarca();
  }

  loadDetallesPorMarca(): void {

    this._activeRoute.params.subscribe((parametros: Params) => {
      var marca = parametros['marca'];
      console.log(marca);
      this._service.getDetallesMarca(marca).subscribe(response => {
        console.log(response);
        this.cubo = response;
      })

    })

  }


}
