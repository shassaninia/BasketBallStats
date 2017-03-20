import { Component, OnInit } from '@angular/core';

import { Player } from "../shared/Player";
import { MOCK_PLAYERS } from "app/players/shared/mock-players";


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  listOfPlayers: Player[];
  constructor() { }

  ngOnInit() {
    this.listOfPlayers = MOCK_PLAYERS;
  }

}
