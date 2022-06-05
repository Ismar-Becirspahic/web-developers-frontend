import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./common/home/home.component";
import {LogInComponent} from "./log-in/log-in.component";
import {ContactComponent} from "./common/contact/contact.component";
import {Route} from "./routing/route";
import {PageInvalidComponent} from "./common/page-invalid/page-invalid.component";
import {MainComponent} from "./common/main/main.component";
import {ProjectListContainerComponent} from "./projects/containers/project-list-container/project-list-container.component";
import {ProjectFormContainerComponent} from "./projects/containers/project-form-container/project-form-container.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProfileListContainerComponent} from "./profile/containers/profile-list-container/profile-list-container.component";
import {HomeSearchContainerComponent} from "./home-search/containers/home-search-container.component";
import {ProjectsResolver} from "./resolver/projects-resolver";
import {AuthorizedGuard} from "./guards/authorized.guard";


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
        component: HomeComponent },
      { path: Route.CONTACT,
        component: ContactComponent },
      { path: Route.HOME2,
        component: HomeSearchContainerComponent,
        resolve: {
          'projects': ProjectsResolver,
        },
      },
      { path: Route.PROJECTS,
        canActivateChild: [AuthorizedGuard],
        children: [
          { path: Route.EMPTY,
            component: ProjectListContainerComponent,},
          { path: Route.CREATE,
            component: ProjectFormContainerComponent },
        ]
      },
      { path: Route.PROFILES,
        canActivateChild: [AuthorizedGuard],
        children: [
          { path: Route.EMPTY,
            component: ProfileListContainerComponent,},
          { path: Route.CREATE,
            component: ProfileListContainerComponent },
          { path: Route.ID,
            component: ProfileListContainerComponent,},
          { path: Route.EDIT + Route.SEPARATOR + Route.ID,
            component: ProfileListContainerComponent, },
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
