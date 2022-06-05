import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {ContactComponent} from "./common/contact/contact.component";
import {Route} from "./routing/route";
import {PageInvalidComponent} from "./common/page-invalid/page-invalid.component";
import {MainComponent} from "./common/main/main.component";
import {ProjectListContainerComponent} from "./projects/containers/project-list-container/project-list-container.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProjectsResolver} from "./resolver/projects-resolver";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {HomeContainerComponent} from "./common/home/home-container.component";


const routes: Routes = [

  { path: Route.EMPTY,
    component: MainComponent,
    children: [
      { path: Route.LOGIN,
        component: LogInComponent },
      { path: Route.SIGNUP,
        component: SignUpComponent },
      { path: Route.CONTACT,
        component: ContactComponent },
      { path: Route.HOME,
        canActivate: [AuthorizedGuard],
        component: HomeContainerComponent,
        resolve: {
          'projects': ProjectsResolver,
        },
      },
      { path: Route.CONTACT,
        component: ContactComponent },
      { path: Route.PROJECTS,
        canActivateChild: [AuthorizedGuard],
        children: [
          { path: Route.EMPTY,
            component: ProjectListContainerComponent,},
          { path: Route.CREATE,
            component: ProjectListContainerComponent },
        ]
      },
      ],
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
