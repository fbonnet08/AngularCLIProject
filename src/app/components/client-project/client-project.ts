import {Component, inject, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {APIResponseModel, IEmployee} from '../../model/interface/role';
import {ClientModel} from '../../model/class/ClientModel';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css',
})
export class ClientProject implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  })

  clientSrv = inject(ClientService);
  employeeList: IEmployee[] = [];
  clientList: ClientModel[] = [];

  firstName = signal("Angular 18")
  projectList = signal<any>([]);

  ngOnInit(): void {
    const name = this.firstName();
    this.getAllEmployees();
    this.getAllClient();
  }

  changeFirstName(){
    this.firstName.set("ReactJS");
  }


  getAllEmployees(){
    this.clientSrv.getAllEmployees().subscribe((res:APIResponseModel)=>
    {
      this.employeeList = res.data;
    })
  }

  getAllClient(){
    this.clientSrv.getAllEmployees().subscribe((res:APIResponseModel)=>
    {
      this.clientList = res.data;
    })
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    this.clientSrv.addClientProjectUpdate(this.projectForm.value).subscribe((res:APIResponseModel)=>
      {
      if(res.result) {
        alert("Project Added Successfully");
      }else {
        alert(res.message)
      }
      })
  }
}
