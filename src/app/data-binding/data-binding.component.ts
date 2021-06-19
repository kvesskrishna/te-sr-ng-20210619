import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  title = '';
  // life cycle hook - method that is called automatically when a component life cycle phase is occured.
  ngOnInit() {
    this.title = 'I am from data binding component';
    console.log('oninit called from databinding component..');
  }
}
