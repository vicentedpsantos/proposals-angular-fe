import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal'

@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: './proposal-new.component.html'
})
export class ProposalNewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  proposal = new Proposal;
}
