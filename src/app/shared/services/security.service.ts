import { Injectable }                   from '@angular/core';
import { Http, Response, Headers }      from '@angular/http';

@Injectable()
export class SecurityService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
}