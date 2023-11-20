import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;

  constructor(private _service: ServiceService) {

  }

  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos(): void {
    this._service.getCubos().subscribe(response => {
      if (response) {
        this.cubos = response;

      }
    })
  }


}
