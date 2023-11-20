import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { Cubo } from '../models/Cubo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) {

  }

  getCubos(): Observable<any> {
    var request = "api/cubos";
    var url = environment.urlApi + request;
    return this._http.get(url);
  }

  getCubosMarcas(): Observable<any> {
    var request = "api/cubos/marcas";
    var url = environment.urlApi + request;
    return this._http.get(url);
  }

  getDetallesMarca(marca: string): Observable<any> {
    var request = "api/cubos/cubosmarca/" + marca;
    var url = environment.urlApi + request;
    console.log(url);
    return this._http.get(url);
  }

  getComentariosIdCubo(idCubo: number): Observable<any> {
    var request = "api/comentarioscubo/getcomentarioscubo/" + idCubo;
    var url = environment.urlApi + request;
    console.log(url);
    return this._http.get(url);
  }

  loginAuth(user: User): Observable<any> {
    let body = JSON.stringify(user);
    var request = "api/manage/login";
    var url = environment.urlApi + request;
    console.log(url);
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(url, body, { headers });
  }

  verPerfil(token: string): Observable<any> {
    var request = "api/manage/perfilusuario";
    var url = environment.urlApi + request;
    console.log(url);
    var headers = new HttpHeaders().set("Authorization", 'Bearer '+ token);
    return this._http.get(url, { headers });
  }

  postCompra(cubo: Cubo, idCubo: number): Observable<any>{
    let body = JSON.stringify(cubo);
    var request = "api/compra/insertarpedido/" + idCubo;
    var url = environment.urlApi + request;
    console.log(body);
    var headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set("Authorization", 'Bearer '+ localStorage.getItem("token"));
    return this._http.post(url, body,{headers});
  }
  

}
