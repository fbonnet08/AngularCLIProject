import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';
import {APIResponseModel, IDesignation} from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})
export class Designation implements OnInit {

  masterService= inject(MasterService);
  designationList: IDesignation [] = [];
  isLoader: boolean = true;

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res:APIResponseModel) =>
    {
      this.designationList = res.data;
      this.isLoader = false;
    },error => {
      console.log(error)
      this.isLoader = false;
    })
  }



}
