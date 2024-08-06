import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuotesListComponent } from "./quote-list/quote-list.component";
import { QuotesDetailComponent } from "./quote-detail/quote-detail.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuoteApiService } from "./quote-api.service";

const routes: Routes = [
    { path: '', component: QuotesListComponent },
    { path: 'details/:id', component: QuotesDetailComponent }
];

@NgModule({
    declarations: [
        QuotesListComponent,
        QuotesDetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        QuoteApiService
    ]
})
export class QuotesModule { }