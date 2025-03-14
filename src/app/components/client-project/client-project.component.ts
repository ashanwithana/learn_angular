import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { APIResponseModel } from '../../model/interface/common';
import { IEmployee } from '../../model/interface/employee';
import { Client } from '../../model/class/Client';
import { ClientProjectService } from '../../services/clientProject/client-project.service';
import { IClientProject } from '../../model/interface/clientProject';
import { DatePipe } from '@angular/common';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { ButtonComponent } from "../../reusableComponent/button/button.component";

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent, ButtonComponent],
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
  projectList = signal<IClientProject[]>([]);

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
    this.getAllClientProject();
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

  getAllClientProject() {
    this.clientProjectService
      .getAllClientProjects()
      .subscribe((res: APIResponseModel) => {
        this.projectList.set(res.data);
      });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    this.clientProjectService
      .addUpdateClientProject(formValue)
      .subscribe((result: APIResponseModel) => {
        if (result.result) {
          alert('Client Project Craeted Succesfully');
          this.getAllClientProject();
        } else {
          alert(result.message);
        }
      });
  }
}
