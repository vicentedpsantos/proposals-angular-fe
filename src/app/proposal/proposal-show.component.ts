import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.sass']
})
export class ProposalShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
  }

  id: number;
  routeId: any;


}
