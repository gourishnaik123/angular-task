import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  private jsonapiEndpointUrl = 'http://localhost:3000/Createtask';

  constructor(private http: HttpClient) { }


  createTask(taskData: any): Observable<any> {
    return this.http.post<any>(this.jsonapiEndpointUrl, taskData);
  }
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonapiEndpointUrl);
  }
  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.jsonapiEndpointUrl}/${taskId}`);
  }
  getTaskById(taskId: string): Observable<any> {
    return this.http.get<any>(`${this.jsonapiEndpointUrl}/${taskId}`);
  }
  updateTask(taskId: string, updatedTaskData: any): Observable<any> {
    return this.http.put<any>(`${this.jsonapiEndpointUrl}/${taskId}`, updatedTaskData);
  }
  
 
}
