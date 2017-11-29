import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class DataService {
    constructor(private http: Http) { }

    get(url: string, params?:any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        return this.http.get(url, options).map(
            (res: Response) => {
            return res;
        });
    }

    postWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, true, params);
    }

    post(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, false, params);
    }

    putWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPut(url, data, true, params);
    }

    private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        return this.http.post(url, data, options).map(
            (res: Response) => {
                return res;
        });
    }

    private doPut(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        return this.http.put(url, data, options).map(
            (res: Response) => {
                return res;
        });
    }

    delete(url: string, params?: any) {
        let options: RequestOptionsArgs = {};

        console.log('data.service deleting');

        this.http.delete(url, options).subscribe((res) => {
            console.log('deleted');
        });
    }
    
    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json();
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }
}