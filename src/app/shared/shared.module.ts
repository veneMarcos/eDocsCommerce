import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';

//Services
import { DataService } from './services/data.service';
import { StorageService } from './services/storage.service';
import { SecurityService } from './services/security.service';
import { ConfigurationService } from './services/configuration.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    RouterModule
  ],
  declarations: []
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        StorageService,
        SecurityService,
        DataService,
        ConfigurationService
      ]
    }
  }
}

