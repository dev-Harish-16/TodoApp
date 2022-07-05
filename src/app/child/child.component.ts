import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // ? Receiving data from the Parent
  @Input() taskArray: any[] = []
  // ? Adding the Completed data into this Array
  taskDone: any[] = []
  // ? using this boolean to toggle the button and display the content of Completed Data
  isTrue: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

  // *==> Toggle the button to display
  displayData() {
    this.isTrue === true ? this.isTrue = false : this.isTrue = true

  }
  // *==> CompletedTask
  completedTask(id: number) {
    this.taskDone.push(this.taskArray[id])
    this.taskArray.splice(id, 1);

  }
  // *==> Deleted Task
  deletedTask(id: number) {
    this.taskArray.splice(id, 1);
  }
  // *==> Remove all Task
  removeAll() {
    this.taskDone = []

  }
}
