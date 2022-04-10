import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./common/home/home.component";
import {LogInComponent} from "./log-in/log-in.component";
import {ContactComponent} from "./contact/contact.component";
import {Route} from "./routing/route";
import {PageInvalidComponent} from "./common/page-invalid/page-invalid.component";
import {MainComponent} from "./common/main/main.component";
import {ProjectsFormComponent} from "./projects/components/projects-form/projects-form.component";
import {ProjectsListContainerComponent} from "./projects/containers/projects-list-container/projects-list-container.component";
import {ProjectsViewContainerComponent} from "./projects/containers/projects-view-container/projects-view-container.component";
import {ProjectsResolver} from "./resolver/projects-resolver";
import {ProjectResponse} from "./routing/project-response";
import {ProjectsFormContainerComponent} from "./projects/containers/projects-form-container/projects-form-container.component";
import {SignUpComponent} from "./sign-up/sign-up.component";


const routes: Routes = [
  {
    path: Route.EMPTY,
    component: MainComponent,
    children: [
      { path: Route.LOGIN,
        component: LogInComponent },
      { path: Route.SIGNUP,
        component: SignUpComponent },
      { path: Route.CONTACT,
        component: ContactComponent },
      { path: Route.HOME,
        component: HomeComponent },
      { path: Route.PROJECTS,
        children: [
          { path: Route.EMPTY,
            component: ProjectsListContainerComponent },
          { path: Route.CREATE,
            component: ProjectsFormContainerComponent },
          { path: Route.ID,
            component: ProjectsViewContainerComponent,
            resolve: {[ProjectResponse.PROJECT]: ProjectsResolver}, },
          { path: Route.ID + Route.SEPARATOR + Route.EDIT,
            component: ProjectsFormContainerComponent,
            resolve: {item: ProjectsResolver}, }
        ]
      },
    ]
  },
  { path: '**',
    component: PageInvalidComponent }
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
