import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { QuoteApiService } from '../quote-api.service';

@Component({
    selector: 'br-quote-list',
    templateUrl: './quote-list.component.html',
})
export class QuotesListComponent {
    modalRef!: BsModalRef;
    quotes: any[] = [];

    constructor(
        private modalService: BsModalService,
        private router: Router,
        private quoteApiService: QuoteApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.quoteApiService.getAll().subscribe((quotes: any) => {
            this.quotes = quotes;
        });
    }

    goTo(id: string) {
        this.router.navigate(['/quotes/details', id]);
    }
}
