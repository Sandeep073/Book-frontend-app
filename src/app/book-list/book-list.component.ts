import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  // Fetch and load the list of books
  private loadBooks(): void {
    this.bookService.getBookList().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Error fetching book list:', error);
      }
    });
  }

  // Navigate to update book page
  updateBook(book: Book): void {
    this.router.navigate(['/update-book', book.id]);
  }

  // Delete a book and refresh the list
  deleteBook(id: number): void {
    if (!id) {
      console.error('Invalid book ID:', id);
      return;
    }
  
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        console.log(`Book with ID ${id} deleted successfully.`);
        this.loadBooks(); // Refresh the list
      },
      error: (error) => {
        console.error('Error deleting book:', error);
      }
    });
  }
  
}
