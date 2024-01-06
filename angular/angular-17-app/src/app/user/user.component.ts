import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  username = 'Alessandrror'
  isLoggedIn = false
  favGame = ''

  getFavorite(gameName: string) {
    this.favGame = gameName
  }

  greet() {
    alert(`Hola ${this.username}`)
  }
}
