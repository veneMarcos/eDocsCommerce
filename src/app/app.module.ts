import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRoute } from '@angular/router/src/router_module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { TopMenuComponent } from './navigation/top-menu/top-menu.component';
import { MenuHeaderComponent } from './navigation/menu-header/menu-header.component';

//config
import { rootRouterConfig } from './app.routes';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TopMenuComponent,
    MenuHeaderComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, {useHash:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
