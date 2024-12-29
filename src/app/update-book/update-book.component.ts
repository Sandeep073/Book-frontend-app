import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
  imports: [FormsModule]
})
export class UpdateBookComponent implements OnInit {

  // Initialize the book object with default values
  book: Book = {
    id: 0,  // Default value
    title: '',
    author: '',
    genre: '', // Update based on the actual fields of Book
  };

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');  // Get the book ID from route params
    if (bookId) {
      this.getBookDetails(+bookId);  // Fetch book details if ID is present
    }
  }

  // Method to fetch book details by ID
  getBookDetails(id: number) {
    this.bookService.getBookById(id).subscribe((data: Book) => {
      this.book = data;  // Populate book details in the form
    }, error => {
      console.error('Error fetching book details:', error);
      alert('There was an error fetching the book details.');
    });
  }

  // Placeholder for form submission - no update function in service
  onSubmit() {
    alert('Update functionality is not implemented in BookService.');
  }
}
