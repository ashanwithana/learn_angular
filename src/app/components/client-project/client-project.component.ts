import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { APIResponseModel } from '../../model/interface/common';
import { IEmployee } from '../../model/interface/employee';
import { Client } from '../../model/class/Client';
import { ClientProjectService } from '../../services/clientProject/client-project.service';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientService = inject(ClientService);
  clientProjectService = inject(ClientProjectService);
  employeeList: IEmployee[] = [];
  clientList: Client[] = [];

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    });
  }
  getAllClients() {
    this.clientService.getAllClient().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientProjectService
      .addUpdateClientProject(formValue)
      .subscribe((result: APIResponseModel) => {
        if (result.result) {
          alert('Client Project Craeted Succesfully');
        } else {
          alert(result.message);
        }
      });
  }
}
