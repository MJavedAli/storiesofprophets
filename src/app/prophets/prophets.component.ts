import { Component, OnInit } from '@angular/core';
import { Prophet } from '../prophet';
import { PROPHETS } from '../mock-prophets';

@Component({
  selector: 'app-prophets',
  templateUrl: './prophets.component.html',
  styleUrls: ['./prophets.component.css']
})

export class ProphetsComponent implements OnInit {

  prophets = PROPHETS;
  selectedProphet: Prophet;

  constructor() { }

  ngOnInit() {
  }

  onSelect(prophet: Prophet): void {
    this.selectedProphet = prophet;
  }
}
