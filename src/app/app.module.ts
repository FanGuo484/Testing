import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HtmldemoComponent } from './htmldemo/htmldemo.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TestComponent,
    HomeComponent,
    HtmldemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
