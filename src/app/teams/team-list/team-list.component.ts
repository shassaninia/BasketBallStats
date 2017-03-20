import { Component, OnInit } from '@angular/core';

import { Team } from "../shared/team";
import { MOCK_TEAMS } from '../shared/mock-teams';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  listOfTeams:Team[];

  constructor() { }

  ngOnInit() {
    this.listOfTeams = MOCK_TEAMS;
  }

}
