import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:4202/proposals.json';

  constructor(
    private http: Http
  ) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .pipe(map((res:Response) => <Proposal[]>res.json()), catchError(this.handleError))
  }

  private handleError(error: Response | any) {
    // Error Handling provided by Angular
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
