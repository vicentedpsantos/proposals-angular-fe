import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.sass']
})
export class DocumentsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  
  documents: Document[] = [
    {
      title: "A new doc",
      description: "A random description",
      file_url: "https://www.arandomurl.com/file.pdf",
      updated_at: "20th of March, 2019",
      image_url: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076533_960_720.jpg"
    },
    {
      title: "Another doc",
      description: "A randomer description",
      file_url: "https://www.arandomurl.com/file.pdf",
      updated_at: "20th of March, 2019",
      image_url: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076533_960_720.jpg"
    },
    {
      title: "Yet another doc...",
      description: "A randomerer description",
      file_url: "https://www.arandomurl.com/file.pdf",
      updated_at: "20th of March, 2019",
      image_url: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076533_960_720.jpg"
    }
  ]
}
