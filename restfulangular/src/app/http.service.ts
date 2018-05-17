import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
      // this.getPokemon();
      // this.getMoreAbilities();
      // this.getTasks();
  }
  getTasks(){
    return this._http.get('/tasks')
    // our http response is an Observable, store it in a variable
//     let tempObservable = this._http.get('/tasks');
//     // subscribe to the Observable and provide the code we would like to do with our data from the response
//     tempObservable.subscribe(data => console.log("Got our tasks!", data));
//  
  }
  addTask(newtask) {
    return this._http.post('/tasks', newtask)
  }
  destroyTask(task){
    return this._http.delete(`/tasks/${task._id}`)
  }
  updateTask(task){
    return this._http.put(`/tasks/${task._id}`, task)

  }
//  getPokemon(){
//    let pikachu = this._http.get('https://pokeapi.co/api/v2/pokemon/25/')
//    pikachu.subscribe(data => {
//      console.log(` the coolest ability is ${data.abilities[0].ability.name}`)
//    })

//  }
//  getMoreAbilities(){
//    let abilities = this._http.get('https://pokeapi.co/api/v2/ability/31/')
//     abilities.subscribe(data => {
//       for (var i = 0; i < data.pokemon.length; i++) {
//         console.log(data.pokemon[i].pokemon.name)
//       }
//     })
//   }
}
