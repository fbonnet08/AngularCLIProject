import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClientModel} from '../model/class/ClientModel';
import {environment} from '../../environments/environment';
import {APIResponseModel} from '../model/interface/role';
import {Constant} from '../constant/Constant';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private http: HttpClient) { }

  //https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients
  getAllClients():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.GET_ALL_CLIENT);
  }

  //https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient
  addUpdateClient(obj: ClientModel):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+Constant.API_METHOD.ADD_UPDATE_CLIENT,obj);
  }

  //https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteClientByClientId
  deleteClientByClientId(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+Constant.API_METHOD.DELETE_CLIENT_BY_ID+"?clientId="+id);
  }

  getAllEmployees():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.GET_ALL_EMPLOYEES);
  }

  addClientProjectUpdate(obj: ClientModel):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+Constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT,obj);
  }

  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


}
