import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "./task-model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API: string = 'api/v2/tasks';
  // private API: string = 'assets/api/task.json';

  constructor(private _http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this.API);
  }

  getTaskById(taskId: number): Observable<Task> {
    return this._http.get<Task>(`${this.API}/${taskId}`)
  }
}
