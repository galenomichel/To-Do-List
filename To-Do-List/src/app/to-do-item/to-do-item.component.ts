import { Component } from '@angular/core';
import { ToDoItem } from '../to-do-item.model';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
  toDoItens: ToDoItem[] = [];
  newToDoDescription: string;

  addToDoItem() {
    if (this.newToDoDescription.trim().length) {
      const newToDoItem: ToDoItem = {
        id: Date.now(),
        description: this.newToDoDescription,
        completed:false
      };
      this.toDoItens.push(newToDoItem);
      this.newToDoDescription = "";
    }
  }
  
  toggleToDoCheckbox(toDoItem: ToDoItem) {
    toDoItem.completed = !toDoItem.completed;
  }

  //removeToDoItem(toDoItemID = ToDoItem){
  //  this.toDoItens = this.toDoItens.filter(toDoItemID => toDoItemID.id !== toDoItemID);
  //}
}
