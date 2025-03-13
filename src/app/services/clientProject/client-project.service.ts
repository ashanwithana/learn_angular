import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../../model/interface/common';
import { environment } from '../../../environments/environment.development';
import { Client } from '../../model/class/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientProjectService {
  constructor(private http: HttpClient) {}

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + 'GetAllClientProjects'
    );
  }
  addUpdateClientProject(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      environment.API_URL + 'AddUpdateClientProject',
      obj
    );
  }
  deleteById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      environment.API_URL + 'DeleteProjectByProjectId?projectId=' + id
    );
  }
}
