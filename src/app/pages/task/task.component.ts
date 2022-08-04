import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const BASE_URL = "http://localhost:3000";

interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}
@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  form: FormGroup
  public task = '';
  public tasks: Task[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.form = new FormGroup({
      description: new FormControl(),
      // isCompleted: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.http.get<any>(`${BASE_URL}/tasks`).subscribe(tasks => {
      this.tasks = tasks
    });
  }

  removeTask(id: number) { 
    this.http.delete<any>(`${BASE_URL}/tasks/${id}`).subscribe(() => {
      const taskIndex = this.tasks.findIndex(task => task.id === id)
      this.tasks.splice(taskIndex, 1)
    });
  }

  addTask() {
    this.http.post<any>(`${BASE_URL}/tasks`, {
      description: this.form.get('description')?.value,
      isCompleted: false

    }).subscribe(task => {
      this.tasks.push(task)
    });
  }
}
