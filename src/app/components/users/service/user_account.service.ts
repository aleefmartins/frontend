import { UserAccount } from './../model/user_account.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {


  baseUrl = "http://localhost:3001/UserAccount";


  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-sucess']
    })
  }

  create(userAccount: UserAccount): Observable<UserAccount> {
    return this.http.post<UserAccount>(this.baseUrl, userAccount).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>(this.baseUrl).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  readById(userId: string): Observable<UserAccount> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<UserAccount>(url).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  update(userAccount: UserAccount): Observable<UserAccount> {
    const url = `${this.baseUrl}/${userAccount.userId}`;
    return this.http.put<UserAccount>(url, userAccount).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  deletProduct(userId: string): Observable<UserAccount> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.delete<UserAccount>(url).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMenssage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
