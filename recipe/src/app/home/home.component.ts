import {  Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service'
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  recipes : any[]=[];
  filteredRecipes: any[]=[];
  private searchSubscription: Subscription | undefined;

  constructor(private recipeService:RecipeService, private searchService: SearchService, Router:Router){}

  ngOnInit() {
    this.loadRecipes();

  // subscribe to the search term to filter recipes
  this.searchSubscription = this.searchService.searchTerm$.subscribe((term : string)=>{
    console.log("Filter with term:",term);
     this.filterRecipes(term);
  }
);
}
  loadRecipes() {
    this.recipeService.getRecipes().subscribe({
    next: (data) => {
    this.recipes = data;
    this.filteredRecipes = [...this.recipes]
      console.log('Fetched recipes:',this.recipes ); // Check if this logs the correct data
      console.log('Recipes length:',this.recipes.length); 
    },
    error: (error) => {
      console.error('Error fetching recipes:', error);
    }
    });
  }
  // Helper menthod to filter recipes
  filterRecipes(term:string){
    if(!term){
      this.filteredRecipes = [...this.recipes];
    } else {
      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
    }
    console.log("Filtered recipes:",this.filteredRecipes);
    
  }

  ngOnDestroy(): void {
    if(this.searchSubscription){
      this.searchSubscription.unsubscribe();
    }
      
    }
  }

  // onLogin(){
  //   this.router.navigate(['/login']);
  // }

  // onSignUp(){
  //   this.router.navigate(['/signup']);
  // }


