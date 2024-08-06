import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl;

@Injectable()
export class QuoteApiService {
    constructor(
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get(`${baseUrl}/quotes`);
    }

    get(id: string) {
        return this.http.get(`${baseUrl}/quotes/${id}`);
    }
}
