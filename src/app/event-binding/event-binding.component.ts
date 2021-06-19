import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}
  number: number = 0;
  increment() {
    // let number = 1;
    this.number = this.number + 1;
  }
  ngOnInit(): void {}

  updateNumber(e) {
    this.number = +e.target.value;
  }
}
