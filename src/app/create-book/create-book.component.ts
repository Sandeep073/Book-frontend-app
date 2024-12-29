import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  standalone: true,
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
  imports: [FormsModule]  // Add FormsModule here
})
export class CreateBookComponent implements OnInit {

  // Initialize the book object with default values
  book: Book = {
    id: 0, // Set default id, modify based on backend requirements
    title: '',
    author: '',
    genre: ''
  };

  constructor(private bookService: BookService,
              private router: Router) {}

  ngOnInit(): void {}

  saveBook() {
    this.bookService.createBook(this.book).subscribe(
      data => {
        console.log('Book saved:', data);
        this.goToBookList();
      },
      error => {
        console.error('Error:', error);
        alert('There was an error while saving the book. Please try again later.');
      }
    );
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }

  onSubmit() {
    console.log(this.book);
    this.saveBook();
  }
}
