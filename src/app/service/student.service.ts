import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api/';  
  
  constructor(private http:HttpClient) { }  
  
  getStudentList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'students');  
  }  
  
  createStudent(student: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save', student);  
  }  
  
  deleteStudent(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });  
  }  
  
  getStudent(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}find/${id}`);  
  }  
  
  updateStudent(id: number, student: object): Observable<Object> {  
    return this.http.put(`${this.baseUrl}update/${id}`, student);  
  }  
    
}  

