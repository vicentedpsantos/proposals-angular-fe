import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html'
})
export class ProposalListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  proposalOne: Proposal = new Proposal(32, 'Abc Company', 'http://portfolio.vicentesantos.com', 'Ruby on Rails', 150, 120, 15, 'vicente@freelancing.com')
  proposalTwo: Proposal = new Proposal(33, 'Augustos Law Office', 'http://portfolio.augustosantos.com', 'Law and Order', 150, 120, 15, 'augusto@lawyer.com')
  proposalThree: Proposal = new Proposal(34, 'Engineering Beto', 'http://portfolio.robertosantos.com', 'AutoCAD', 150, 120, 15, 'beto@engineering.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];
}
