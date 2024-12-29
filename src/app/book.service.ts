import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL = 'http://localhost:8080/api/books';

  constructor(private httpClient: HttpClient) {}

  // Fetch list of books from backend
  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseURL);
  }
  // Create a new book
  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.baseURL}/addBook`, book);
  }

  // Fetch a book by its ID
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }

  // Update an existing book
  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.baseURL}/${id}`, book);
  }

  // Delete a book by its ID
  deleteBook(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
