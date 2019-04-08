import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje1 = 30;
  porcentaje2 = 70;

  constructor() {
  }

  ngOnInit() {
  }
}
