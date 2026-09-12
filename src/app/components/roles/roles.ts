import { Component, inject, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {APIResponseModel, IRole} from '../../model/interface/role';
import {CommonModule} from '@angular/common';
import {MasterService} from '../../services/master.service';

@Component({
  selector: 'app-roles',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles implements OnInit {

  rolesList : IRole [] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.masterService.getRoles().subscribe((res:APIResponseModel) =>
      {this.rolesList = res.data;}
    )
   }

}
