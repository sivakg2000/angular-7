import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component'
import { DbindingComponent } from './dbinding/dbinding.component'
import { SDirectivesComponent } from './s-directives/s-directives.component'
import { CompTestComponent } from './comp-test/comp-test.component'
import { ParentComponent } from './parent/parent.component'
import { DiComponent } from './di/di.component'
import { MypipesComponent } from './mypipes/mypipes.component'
import { MyformsComponent } from './myforms/myforms.component';
import { Page404Component } from './page404/page404.component'



const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'interPolation', component: InterpolationComponent },
  { path: 'dataBinding', component: DbindingComponent },
  { path: 'sDirective', component: SDirectivesComponent },
  { path: 'component', component: CompTestComponent },
  { path: 'component-interaction', component: ParentComponent },
  { path: 'di', component: DiComponent },
  { path: 'pipes', component: MypipesComponent },
  { path: 'myforms', component: MyformsComponent },
  { path: '**', component: Page404Component }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutComponent,
  ContactUsComponent, InterpolationComponent, DbindingComponent,
  SDirectivesComponent, CompTestComponent, ParentComponent,
  DiComponent, MypipesComponent, MyformsComponent, Page404Component
];
