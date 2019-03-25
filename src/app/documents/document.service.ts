import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Document } from './document';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:4201/freelance_documents.json';

  constructor(
    private http: Http
  ) { }

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsUrl)
                    .pipe(map((res:Response) => <Document[]>res.json()), catchError(this.handleError))
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
