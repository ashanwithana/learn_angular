import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../../model/interface/common';
import { environment } from '../../../environments/environment.development';
import { IClientProject } from '../../model/interface/clientProject';
import { Constant } from '../../constants/Constant';

@Injectable({
  providedIn: 'root',
})
export class ClientProjectService {
  constructor(private http: HttpClient) {}

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT_PROJECT
    );
  }
  addUpdateClientProject(obj: IClientProject): Observable<APIResponseModel> {
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
