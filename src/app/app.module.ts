//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRoute } from '@angular/router/src/router_module';
import { SharedModule } from './shared/shared.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { TopMenuComponent } from './navigation/top-menu/top-menu.component';
import { MenuHeaderComponent } from './navigation/menu-header/menu-header.component';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';

//Services
import { CatalogService } from './catalog/catalog.service';

//config
import { rootRouterConfig } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TopMenuComponent,
    MenuHeaderComponent,
    BasketComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, {useHash:false}),
    SharedModule.forRoot()
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
