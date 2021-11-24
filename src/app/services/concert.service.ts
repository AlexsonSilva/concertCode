import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concert } from '../models/concert';


@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) { }

  getConcerts() : Observable<Concert[]>{

    const endpoint = `https://my-json-server.typicode.com/AlexsonSilva/music-concert/concerts`;
    

    return this.http.get<Concert[]>(endpoint).pipe();
  }

  
}
