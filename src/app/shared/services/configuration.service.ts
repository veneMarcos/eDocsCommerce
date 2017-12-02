import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { IConfiguration } from '../models/configuration.model';
import { StorageService } from './storage.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConfigurationService {
    serverSettings: IConfiguration;

    private settingsLoadedSource = new Subject();
    settingsLoaded$ = this.settingsLoadedSource.asObservable();
    isReady: boolean = false;

    constructor(private http: Http, private storateService: StorageService) {}

    load() {
        const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
        let url = `${baseURI}Home/Configuration`;
        this.http.get(url).subscribe((response: Response) => {
            console.log('server settings loaded');
            this.serverSettings = response.json();
            console.log(this.serverSettings);
            this.storateService.store('catalogUrl', this.serverSettings.catalogUrl);
            this.storateService.store('brandUrl', this.serverSettings.brandUrl);
            this.storateService.store('activateCompaignDetailFunction', this.serverSettings.activateCompaignDetailFunction);
            this.isReady = true;
            this.settingsLoadedSource.next();
        });
    }
}
