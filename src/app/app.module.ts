import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SportService } from './sport.service';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8008', options: {} };

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
        ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  providers: [SportService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
