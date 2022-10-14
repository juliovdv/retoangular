import { NgIf } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Client } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements OnInit, AfterViewInit {

  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: Client;

  @ViewChild('newItem')newItem!:ElementRef;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<Client>();

  
  constructor() { }
  ngAfterViewInit(): void {
    this.newItem.nativeElement.focus();
    
  }

  ngOnInit(): void {
    
  }

  onAddNewItem() {
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }

  onUpdateItem() {
    const client: Client = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value,

    }
    this.updateItemEvent.emit(client);
    this.onClear();
  }

  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }

}
