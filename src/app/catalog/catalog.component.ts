import { Component, OnInit } from '@angular/core';

//Models & Interfaces
import { ICatalog } from '../shared/models/catalog.model';
import { IPager } from '../shared/models/pager.model';

//Services
import { CatalogService } from './catalog.service';
import { ConfigurationService } from '../shared/services/configuration.service';
import { SecurityService } from '../shared/services/security.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalog: ICatalog;
  errorReceived: boolean;
  paginationInfo: IPager;

  constructor(private service: CatalogService, private configurationService: ConfigurationService, private securityService: SecurityService) { 
  }

  ngOnInit() {
    // configurações
    if (this.configurationService.isReady)
      this.loadData();
    else 
      this.configurationService.settingsLoaded$.subscribe(x => {
        this.loadData();
      });
  }

  loadData(){
    this.getCatalog(10, 0);
  }

  getCatalog(pageSize: number, pageIndex: number) {
    this.service.getCatalog(pageIndex, pageSize, 0, 0)
      .catch((err) => this.handlerError(err))
      .subscribe(catalog => {
          this.catalog = catalog;
          this.paginationInfo = {
              actualPage: catalog.pageIndex,
              itemsPage: catalog.pageSize,
              totalItems: catalog.count,
              totalPages: Math.ceil(catalog.count / catalog.pageSize),
              items: catalog.pageSize
          }; 
      });
  }

  private handlerError(error: any) {
    this.errorReceived = true;
    return Observable.throw(error);
  }
}
