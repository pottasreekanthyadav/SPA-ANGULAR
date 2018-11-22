import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { DepComponent } from './dep/dep.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';

const appRoutes:Routes=[
{path:"",component:HomeComponent},
{path:"Emp",component:EmpComponent},
{path:"Dep",component:DepComponent},
{path:"About",component:AboutComponent},
{path:"Details/:id",component:DetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpComponent,
    DepComponent,
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
