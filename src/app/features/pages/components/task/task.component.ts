import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/User';
import { Task } from 'src/app/interfaces/Task'; 

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  private baseUrl: string =  "http://localhost:3000";
  public form: FormGroup = new FormGroup({});
  public submitted: boolean = false;
  public task = '';
  public tasks: Task[] = [];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      isCompleted: new FormControl(),
    })
    this.getTasks();
  }

  getTasks(): void {
    const user: User = JSON.parse(localStorage!['user']);

    this.http.get<Task[]>(`${this.baseUrl}/tasks`).subscribe(tasks => {
      this.tasks = tasks.filter((task: Task) => task.user_id === user.id)
    });
  }

  removeTask(id: number): void {
    this.http.delete<Task>(`${this.baseUrl}/tasks/${id}`).subscribe(() => {
      const taskIndex = this.tasks.findIndex(task => task.id === id)
      this.tasks.splice(taskIndex, 1)
    });
  }

  updateTask(event: any, id: number): void {
    this.http.patch<Task>(`${this.baseUrl}/tasks/${id}`, {
      isCompleted: event.target.checked
    }).subscribe(() => {
      const taskIndex = this.tasks.findIndex(task => task.id === id)
      this.tasks[taskIndex].isCompleted = event.target.checked;
    });
  }

  addTask(): void {
    if (this.form.valid === false) {
      alert('Task description must be between 3 and 200 characters.');
      return;
    }
    const user: User = JSON.parse(localStorage!['user']);

    this.http.post<Task>(`${this.baseUrl}/tasks`, {
      description: this.form.get('description')?.value,
      user_id: user.id,
      isCompleted: false
    }).subscribe((task) => {
      this.tasks.push(task)
      this.form.get('description')?.setValue('')
    });
  }
}
