import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {Todo} from '../model/todo';

@Component({
  selector   : 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls  : ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  addTodo(todoForm: NgForm) {
    if (todoForm.value.content) {
      const body = {
        content: todoForm.value.content,
        done: false,
      };
      this.todoService.addTodo(body).subscribe(
        data => {
          console.log(data);
          todoForm.reset();
          this.getList();
        }
      );
    }
  }

  private getList() {
    this.todoService.getList().subscribe(
      data => this.todos = data
    );
  }

  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      data => {
        this.getList();
      }
    );
  }

  toggleDone(todo: Todo) {
    todo.done = !todo.done;
    this.todoService.updateTodo(todo.id, todo).subscribe(
      data => {
        this.getList();
      }
    )
  }
}
