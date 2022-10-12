import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Client, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  title = 'reto03';
  name!: string;
  names:Client[]=[];
  selection!: Client;
  criteria!: string;

  constructor(private readonly dataSVc: DataService ){}
  ngOnInit(): void {
    this.dataSVc.getClients().subscribe(clients => {
      this.names= [...clients];
    })
  }
  addNewName(client: string): void {
    //this.names.push(client);
    this.dataSVc.addNewClient(client).subscribe(res => {
      this.names.push(res);
    })
  }

  onClientSelected(name: Client): void {
    this.selection = name;
  }

  onClear(): void {
    this.selection = {
_id:'',
name:'',
    };
    }

  onClientDelete(id: string): void {
    if (confirm('Are you sure?')){
      this.dataSVc.deleteClient(id).subscribe(() => {
        const tempArr = this.names.filter(name => name._id !== id);
        this.names = [...tempArr];
      })
    }
  }
  updateClient(client: Client): void {
    if (confirm('Are you sure?')){
      this.dataSVc.updateClient(client).subscribe(() => {
        const tempArr = this.names.filter(name => name._id !== client._id);
        this.names = [...tempArr, client];
        this.onClear();
      })
    }

  }

}
