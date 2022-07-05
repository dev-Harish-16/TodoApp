import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'practice1';

  // ? binding the inputData
  inputData: any = ''
  // ? push the inputData into this Araay
  taskArray: any[] = []
  // ? to store the dateMethod 
  date?: Date

  constructor() {

  }

  // ** To Display the Date and Time
  ngOnInit(): void {
    // ?to display Live Time & Date
    setInterval(() => {
      this.date = new Date()
    }, 1000)
    
  }

  // ** Add the task
  addTask() {
    const finalData = {
      data: this.inputData,
      dateValue: new Date().getTime()
    }
    this.taskArray.push(finalData)
    // this.taskArray.reverse()
    this.inputData = ''

  }

}

