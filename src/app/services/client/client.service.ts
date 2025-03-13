import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { APIResponseModel } from '../../model/interface/common';
import { Client } from '../../model/class/Client';
import { Constant } from '../../constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClient():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+'GetAllClients');
  }
  getAllEmployee():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+ Constant.API_METHOD.GET_ALL_EMP);
  }
  addUpdate(obj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+'AddUpdateClient',obj);
  }
  deleteClientById(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+'DeleteClientByClientId?clientId='+id);
  }
}
