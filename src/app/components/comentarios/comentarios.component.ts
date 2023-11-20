import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cubo } from '../../models/Cubo';
import { Coments } from '../../models/Coments';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {

  public comentario!: Coments[];

  constructor(private _service: ServiceService, private _activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadComentarios();
  }

  loadComentarios(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var idcubo = parametros['idcubo'];
      var marca = parametros['marca'];
      console.log("Marcas: "+marca)
      console.log("IDCUBO: " + idcubo);

      this._service.getComentariosIdCubo(idcubo).subscribe(response => {
        console.log("Comentarios: ", response);
        this.comentario = response;
      })
    })
  }

}
