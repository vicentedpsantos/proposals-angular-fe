import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';
import { Observable, of, from, timer } from 'rxjs';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.sass'],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit {
  documents: Document[];
  mode = "Observable";
  errorMessage: string;

  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    let time = timer(0, 5000);
    time.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
      .subscribe(
        documents => this.documents = documents,
        error => this.errorMessage = <any>error
      );
  }
}
