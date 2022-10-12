import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../services/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ClientsComponent implements OnInit {


  @Input() name!: Client;
  @Input() selection!: Client;

  @Output() clientSelectedEvent = new EventEmitter<Client>();
  @Output() clientDeleteEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClientSelect(name: Client): void {
    this.clientSelectedEvent.emit(name);
  }

  onClientDelete(id: string): void {
this.clientDeleteEvent.emit(id);
    }

}
