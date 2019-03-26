import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';
import { Observable, of, from, timer } from 'rxjs';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.sass'],
  providers: [ProposalService]
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  mode = "Observable";
  errorMessage: string

  constructor(
    private proposalService: ProposalService
  ) { }

  ngOnInit(): void {
    let time = timer(0, 5000);
    time.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
      .subscribe(
        proposals => this.proposals = proposals,
        error => this.errorMessage = <any> error
      );
  }
}
