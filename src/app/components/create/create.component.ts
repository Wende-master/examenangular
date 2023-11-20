import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  public cubos!: Cubo[];
  @ViewChild('compraForm') compraFormRef!: NgForm;
  @ViewChild('selectcubo') selectCuboRef!: ElementRef;


  constructor(private _service: ServiceService) {

  }

  ngOnInit(): void {
    this._service.getCubos().subscribe(response =>{
      this.cubos = response;
    })
  }

  comprar(): void {

  }

}
