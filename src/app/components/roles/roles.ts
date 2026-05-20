import { Component, inject, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {APIResponseModel, IRole} from '../../model/interface/role';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles implements OnInit {

  rolesList : IRole [] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<APIResponseModel>(
      "/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel) =>
      {this.rolesList = res.data;}
    )
   }

}
