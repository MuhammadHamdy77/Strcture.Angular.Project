import { environment } from 'src/environments/environment';
import { ApiresonseVM } from './../interfaces/apiresonsevm';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  headers:any;
  constructor(private _http:HttpClient) {}

  // Handle request
  private handleError(error: HttpErrorResponse) {   
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // Get All Data Of Apis
  getAll(apiRoute:string):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.baseUrl}${apiRoute}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Get Data By Id
  getById(id:number,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.baseUrl}${apiRoute}/${id}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getByIdYear(id:number,apiRoute:string,year:any):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.baseUrl}${apiRoute}/${id}/${year}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Get Data By Id
  getByIdQ(apiRoute:string):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.baseUrl}${apiRoute}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // Add Data To Api
  post(newObject:any,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.post<ApiresonseVM>(`${environment.baseUrl}${apiRoute}` , newObject,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // Update Data By Id
  put(newObject:any,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.put<ApiresonseVM>(`${environment.baseUrl}${apiRoute}` , newObject,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // Delete Data From Api By Id
  delete(id:number,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.delete<ApiresonseVM>(`${environment.baseUrl}${apiRoute}/${id}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


  // Delete file From Api By Id
  deleteFileByName(apiRoute:string):Observable<ApiresonseVM>{
    return this._http.delete<ApiresonseVM>(`${environment.baseUrl}${apiRoute}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


}
