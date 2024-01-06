import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // template: `
  // <h1>Hola Angular desde {{ city.toUpperCase() }}</h1>
  // <app-user />
  // `,
  templateUrl: './app.component.html'
  // styles: `h1 { color: aqua; }`
})
export class AppComponent {
  city = 'Santa Tecla'
}
