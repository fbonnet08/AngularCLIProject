import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIResponseModel} from '../model/interface/role';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Constant} from '../constant/Constant';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getRoles():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.GET_ALL_ROLES);
  }

  getDesignations():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.GET_ALL_DESIGNATION);
  }
}
