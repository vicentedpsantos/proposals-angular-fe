import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service'
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ProposalShowComponent,
    DocumentsComponent,
    HomepageComponent,
    ProposalListComponent,
    ProposalNewComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpModule
  ],
  providers: [
    DocumentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
