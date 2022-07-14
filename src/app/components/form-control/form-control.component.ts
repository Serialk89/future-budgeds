import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
