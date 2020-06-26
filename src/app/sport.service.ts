import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Sport } from './data/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  sports = this.socket.fromEvent<Sport[]>('sports');

  constructor(
    private socket: Socket
  ) { }

  getSport(id: string) {
    this.socket.emit('getSport', id);
  }

  newSport(sport) {
    console.log(sport);
    sport.id = this.sportId();
    this.socket.emit('addSport', {sport});
  }

  private sportId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
