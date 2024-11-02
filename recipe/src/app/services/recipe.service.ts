import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 private apiUrl = 'http://localhost:3000/api/recipes';
  constructor(private http:HttpClient) { }

  getRecipes():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);

  }
}
