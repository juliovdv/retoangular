import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Client } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements OnInit {

  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: Client;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewItem(item: string) {
    this.newItemEvent.emit(item);
  }

  onUpdateItem(item: Client, change: string) {
    const client: Client = {
      _id: item._id,
      name: change,

    }
    this.updateItemEvent.emit(client);
  }

}
