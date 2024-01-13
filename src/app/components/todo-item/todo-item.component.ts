import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todoItem: {id: number, task: string, isDone: boolean}

  @Output() deleteItem = new EventEmitter();
  @Output() doneItem = new EventEmitter();

  faTrash = faTrash;
  faCheck = faCheck;

  onTaskDelete(id: number){
    this.deleteItem.emit(id);
  }

  onTaskDone(id: number){
    this.doneItem.emit(id);
  }
}
