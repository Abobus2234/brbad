import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteApiService } from '../quote-api.service';

@Component({
  selector: 'br-quote-detail',
  templateUrl: './quote-detail.component.html',
})
export class QuotesDetailComponent { 
    constructor(
        private activatedRoute: ActivatedRoute,
        private quoteApiService: QuoteApiService,
        private router: Router,
    ) {}

    public quote!: any;

    ngOnInit() {
        const id: any = this.activatedRoute.snapshot.paramMap.get('id');
        this.quoteApiService.get(id).subscribe((quote: any) => {
            this.quote = quote
        })
    }

    goHome() {
        this.router.navigate(['/'])
    }
}
