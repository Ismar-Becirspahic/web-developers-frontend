import {IterableDiffers, KeyValueDiffers, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ContactComponent } from './common/contact/contact.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageInvalidComponent } from './common/page-invalid/page-invalid.component';
import { MainComponent } from './common/main/main.component';
import {ProjectFormComponent} from './projects/components/project-form/project-form.component'
import { ProjectListComponent } from './projects/components/project-list/project-list.component';
import { ProjectFormContainerComponent } from './projects/containers/project-form-container/project-form-container.component';
import { ProjectListContainerComponent } from './projects/containers/project-list-container/project-list-container.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { SignUpComponent } from './sign-up/sign-up.component';
import {ProjectResolver} from "./resolver/project-resolver";
import {ProjectService} from "./service/project.service";
import {ProjectsResolver} from "./resolver/projects-resolver";
import { ProfileListComponent } from './profile/components/profile-list/profile-list.component';
import { ProfileListContainerComponent } from './profile/containers/profile-list-container/profile-list-container.component';
import {ProfileResolver} from "./resolver/profile-resolver";
import {ProfileService} from "./service/profile-service.service";
import {ProfilesResolver} from "./resolver/profiles-resolver";
import { DialogComponent } from './dialog/dialog.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { HomeSearchComponent } from './home-search/components/home-search.component';
import {HomeSearchContainerComponent} from "./home-search/containers/home-search-container.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {provideAuthorizationInterceptor} from "./interceptors/authorization.interceptor";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {AuthServiceService} from "./service/auth-service.service";
import {SignUpService} from "./service/sign-up.service";

@NgModule({
  declarations: [
    AppComponent,
    ProjectFormComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    LogInComponent,
    PageInvalidComponent,
    MainComponent,
    ProjectListComponent,
    ProjectFormContainerComponent,
    ProjectListContainerComponent,
    SignUpComponent,
    ProfileListComponent,
    ProfileListContainerComponent,
    DialogComponent,
    HomeSearchComponent,
    HomeSearchContainerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
  ],
  providers: [
    provideAuthorizationInterceptor(),
    AuthorizedGuard,
    AuthServiceService,
    SignUpService,
    ProjectResolver,
    ProjectService,
    ProjectsResolver,
    ProfileResolver,
    ProfileService,
    ProfilesResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
