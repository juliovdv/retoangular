import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {

  @Input() color!: string;
  @Input() label!: string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Destroy ->');
  }

}
