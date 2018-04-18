import { Component, OnInit } from '@angular/core';
import { Team } from '../team/team';
import { TEAMS } from '../team/mock-team-service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  teams = TEAMS;

  constructor() { }

  ngOnInit() {
  }

}
