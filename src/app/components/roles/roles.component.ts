import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { APIResponseModel } from '../../model/interface/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // firstName: string = 'John';
  // lastName: string = 'Doe';
  // age: number = 30;
  // is_active: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = 'checkbox';
  // selectedState: string = '';

  // showWelcomeAlert() {
  //   alert('Welcome to Angular 19');
  // }
  // showMessage(message: string) {
  //   alert(message);
  // }
  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get<APIResponseModel>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )
      .subscribe((res: APIResponseModel) => {
        this.roleList = res.data;
      });
  }
}
