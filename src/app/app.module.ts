import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { TestServiceDetailComponent } from './test-service-detail/test-service-detail.component';
import { UsersService } from './users.service';
import { TestServiceHttpComponent } from './test-service-http/test-service-http.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReativeFormsComponent } from './reative-forms/reative-forms.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    ChildComponent,
    TestServiceComponent,
    TestServiceDetailComponent,
    TestServiceHttpComponent,
    FormsComponent,
    ReativeFormsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
