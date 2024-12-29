import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

export const routes: Routes = [
    { path: 'books', component: BookListComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' },  // Default route
    { path: 'create-books', component: CreateBookComponent },
    { path: 'update-book/:id', component: UpdateBookComponent } 
];
