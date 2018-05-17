import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API';
  tasks = [];
  indtask = ''
  newTask: any;
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.newTask = {title: "", description: ""}
  }

  // showOne(i: number){
  //   this.indtask = this.tasks[i]
  // }
  
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['data'];
      console.log(data['data'])
    })
  }
  createTask(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""};
    })
    this.getTasksFromService();
  }
  updateTask(task){
    let observable = this._httpService.updateTask(task);
    observable.subscribe(data => {
      console.log("Got data from put back", data);
    })
    this.getTasksFromService();
  }
  deleteTask(task){
    let observable = this._httpService.destroyTask(task)
    observable.subscribe(data => {
      console.log("Got data from put back", data);
    })
    this.getTasksFromService();
  }
}

