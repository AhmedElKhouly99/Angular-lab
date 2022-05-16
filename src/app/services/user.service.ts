import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../Shared Classes and types/iUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  users:IUser[] = [];
  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(catchError((err)=>{
      return throwError(()=> err.message || "Server Error");
    }))
  }
}
