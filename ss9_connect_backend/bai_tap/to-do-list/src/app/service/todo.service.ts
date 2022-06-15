import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../model/todo';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:5000/todos';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL, todo);
  }
  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/${id}`);
  }
  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/${id}`, todo);
  }
}
