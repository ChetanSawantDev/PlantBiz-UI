import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPBasic } from '../constants/HttpConstants';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpResponseModel } from '../model/HttpResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient:HttpClient) { }

  private getRequestHeader():HttpHeaders{
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if(token){
      headers = headers.set('Authorization', `Bearer ${token}`)
    }
    return headers;
  }

  private handleResponse<T>(response: T): HttpResponseModel<T> {
    return new HttpResponseModel<T>(response, null, true);
  }

  private handleError<T>(error: any): HttpResponseModel<T> {
    return new HttpResponseModel<T>(null, error, false);
  }

  httpGet<T>(endPoint:string) :Observable<HttpResponseModel<T>>{
    const headers = this.getRequestHeader();
    return this.httpClient.get<T>(`${HTTPBasic.BASE_URL}/${endPoint}`, {headers}).pipe(
      map(response => this.handleResponse<T>(response)),
      catchError(error => of(this.handleError<T>(error)))
    );
  }

  httpPost<T>(endPoint:string, dataModel:any):Observable<HttpResponseModel<T>>{
    const headers = this.getRequestHeader();
    return this.httpClient.post<T>(`${HTTPBasic.BASE_URL}/${endPoint}`,dataModel, {headers}).pipe(
      map(response => this.handleResponse<T>(response)),
      catchError(error=>of(this.handleError<T>(error)))
    );
  }

  put<T>(endPoint: string, data: any): Observable<HttpResponseModel<T>> {
    const headers = this.getRequestHeader();
    return this.httpClient.put<T>(`${HTTPBasic.BASE_URL}/${endPoint}`,data ,{headers})
      .pipe(
        map(response => this.handleResponse<T>(response)),
        catchError(error => of(this.handleError<T>(error)))
      );
  }

  delete<T>(endPoint: string): Observable<HttpResponseModel<T>> {
    const headers = this.getRequestHeader();
    return this.httpClient.delete<T>(`${HTTPBasic.BASE_URL}/${endPoint}`, {headers},)
      .pipe(
        map(response => this.handleResponse<T>(response)),
        catchError(error => of(this.handleError<T>(error)))
      );
  }


}
