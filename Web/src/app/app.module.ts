import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: '/quotes', pathMatch: 'full' },
    {
        path: 'quotes',
        loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule)
    }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
