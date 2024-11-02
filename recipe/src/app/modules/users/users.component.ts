import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  term:any;
  imgUrl:string='assets/usera.png';


 
  // Trigger file input click when the image is clicked
  onImageClick(): void {
    const fileInput = document.querySelector('input[type="file"]') as HTMLElement;
    fileInput.click(); // Simulate a click on the hidden file input
  }

  // When a new file is selected, update the image URL dynamically
  onFileSelected(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      // Set the new image URL when the file is read
      reader.onload = (e: any) => {
        this.imgUrl = e.target.result; // Update imgUrl with the selected image (Base64 encoded)
      };
      reader.readAsDataURL(file); // Convert the file to a Base64-encoded URL
    }
  }
}
