import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interface } from '../interface/interface';


@Injectable({
  providedIn: 'root'
})
export class MovieService {



  constructor(private http:HttpClient) { }

getmovie(data:number): Observable<Array<Interface>>{
      return this.http.get<Array<Interface>>('https://638492184ce192ac605bc39a.mockapi.io/Movie/'+ data);
      
}
}
