import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Data } from '@angular/router';
import { Client, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(NgModel) filterInput!: NgModel;



  title = 'reto03';
  name!: string;
  names: Client[] = [];
  selection!: Client;
  criteria!: string;

  constructor(private readonly dataSvc: DataService) { }
  ngAfterViewInit(): void {
    this.filterInput.valueChanges?.subscribe(res => {
      console.log(res);
      this.filter(res)
    }
    );
  }
  filter(query: string): void {
    console.log(query);
  }


  ngOnInit(): void {
    this.dataSvc.selectedClient$.subscribe(client => {
      this.selection = client;
    })

    this.dataSvc.getClients().subscribe(clients => {
      this.names = [...clients];
    })
  }
  addNewName(client: string): void {
    //this.names.push(client);
    this.dataSvc.addNewClient(client).subscribe(res => {
      this.names.push(res);
    })
  }

  onClientSelected(name: Client): void {
    //this.selection = name;
    this.dataSvc.setClient(name);
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }

  onClientDelete(id: string): void {
    if (confirm('Are you sure?')) {
      this.dataSvc.deleteClient(id).subscribe(() => {
        const tempArr = this.names.filter(name => name._id !== id);
        this.names = [...tempArr];
      })
    }
  }
  updateClient(client: Client): void {
    if (confirm('Are you sure?')) {
      this.dataSvc.updateClient(client).subscribe(() => {
        const tempArr = this.names.filter(name => name._id !== client._id);
        this.names = [...tempArr, client];
        this.onClear();
      })
    }

  }

}
