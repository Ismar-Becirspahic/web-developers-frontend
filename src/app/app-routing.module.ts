import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./common/home/home.component";
import {LogInComponent} from "./log-in/log-in.component";
import {ContactComponent} from "./contact/contact.component";
import {Route} from "./routing/route";
import {PageInvalidComponent} from "./common/page-invalid/page-invalid.component";
import {MainComponent} from "./common/main/main.component";


const routes: Routes = [
  { path: Route.EMPTY,
    component: MainComponent,
    children: [
      { path: Route.LOGIN,
        component: LogInComponent },
      { path: Route.CONTACT,
        component: ContactComponent },
      { path: Route.HOME,
        component: HomeComponent },
    ]
  },

  { path: '**',
    component: PageInvalidComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
