import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../model/class/Client';
import { ClientService } from '../../services/client/client.service';
import { APIResponseModel } from '../../model/interface/common';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { ButtonComponent } from "../../reusableComponent/button/button.component";

@Component({
  selector: 'app-client',
  imports: [FormsModule, AlertComponent, ButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getAllClient().subscribe((result: APIResponseModel) => {
      this.clientList = result.data;
    });
  }

  onSaveClient(data:string) {
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((result: APIResponseModel) => {
        if (result.result) {
          alert('Client Created Successfully');
          this.getClients();
          this.clientObj = new Client();
        } else {
          alert(result.message);
        }
      });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this?');
    if (isDelete) {
      this.clientService
        .deleteClientById(id)
        .subscribe((result: APIResponseModel) => {
          if (result.result) {
            alert('Client Deleted Successfully');
            this.getClients();
          } else {
            alert(result.message);
          }
        });
    }
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }
}
