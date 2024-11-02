import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private searchService : SearchService) {}

  onSearchChange(event:Event){
    const searchTerm = (event.target as HTMLInputElement).value;
    console.log("Search term from input:", searchTerm); // Debugging log
    this.searchService.setSearchTerm(searchTerm);
  }
}
