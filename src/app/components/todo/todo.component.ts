import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTask: string;
  counter: number = 0;
  faPlus = faPlus


  todos = [];

  onAddTask(){
    this.todos.push(
      {
        id: this.counter,
        task: this.newTask, isDone: false,
      }
    );
    this.counter++;

    //clear input
    this.newTask = '';
  }

  onItemDelete(id: number){
    console.log('Id of item to delete: '+ id);

    //delete
    const index = this.todos.findIndex(todo => todo.id == id);

    if(index != -1){
      this.todos.splice(index, 1);
    }

  }

  onItemDone(id: number){
    console.log('Id of item to done: '+id);

    //done
    const index = this.todos.findIndex(todo => todo.id == id);

    if(index != -1){
      this.todos.at(index).isDone = !this.todos.at(index).isDone;
    }
  }

}
