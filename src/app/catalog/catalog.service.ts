import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

//Services
import { DataService } from '../shared/services/data.service';
import { ConfigurationService } from '../shared/services/configuration.service';

//Interfaces
import { ICatalog } from '../shared/models/catalog.model';
import { ICatalogBrand } from '../shared/models/catalogBrand.model';
import { ICatalogType } from '../shared/models/catalogType.model';

//rxjs Modules
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {
    private catalogUrl: string = '';
    private brandUrl: string = '';
    private typesUrl: string = '';

    constructor(private service: DataService, private configurationService: ConfigurationService) { 
        this.configurationService.settingsLoaded$.subscribe(x => {
            this.catalogUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/items';
            this.brandUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/catalogbrands';        
        });
    }

    getCatalog(pageIndex: number, pageSize: number, brand: number, type: number): Observable<ICatalog> {
        let url = this.catalogUrl;
        if (brand || type) {
            url = this.catalogUrl + '/type/' + ((type) ? type.toString() : 'null') + '/brand/' + ((brand) ? brand.toString() : 'null');
        }

        url = url + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize;

        return this.service.get(url).map((response: Response) => {
            return response.json();
        });
    }
}