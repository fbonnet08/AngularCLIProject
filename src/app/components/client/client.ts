import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ClientModel} from '../../model/class/ClientModel';
import {ClientService} from '../../services/client.service';
import {APIResponseModel} from '../../model/interface/role';
import {AsyncPipe, DatePipe, JsonPipe, UpperCasePipe} from '@angular/common';
import {async, Observable} from 'rxjs';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe ],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client implements OnInit {

  clientModelObj: ClientModel = new ClientModel();
  clientService = inject(ClientService);
  clientModelList: ClientModel[] = [];
  currentDate: Date = new Date();
  userList$: Observable<any> = new Observable<any>;

  ngOnInit() {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=> {
      this.clientModelList = res.data
    })
  }

  onSaveClient(){
    //debugger;
    this.clientService.addUpdateClient(this.clientModelObj).subscribe((res:APIResponseModel)=>
    {
      if(res.result) {
        alert("Client Added Success");
        this.loadClient();
        this.clientModelObj = new ClientModel();
      } else {
        alert(res.message)
      }
      //this.clientModelObj = new ClientModel(); this.loadClient();
    })
  }

  //https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients

  onDelete(id: number){
    const confirmDelete = confirm("Are you sure to delete this client?");
    if(!confirmDelete) return;
    this.clientService.deleteClientByClientId(id).subscribe((res:APIResponseModel)=>
    {
      if(res.result) {
        alert("Client Delete Success");
        this.loadClient();
        this.clientModelObj = new ClientModel();
      } else {
        alert(res.message)
      }
      //this.clientModelObj = new ClientModel(); this.loadClient();
    })
  }

  onEdit(item: ClientModel){
    this.clientModelObj = item;
  }


}



