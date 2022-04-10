import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageInvalidComponent } from './common/page-invalid/page-invalid.component';
import { MainComponent } from './common/main/main.component';
import {ProjectsFormComponent} from './projects/components/projects-form/projects-form.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsViewComponent } from './projects/components/projects-view/projects-view.component';
import { ProjectsListComponent } from './projects/components/projects-list/projects-list.component';
import { ProjectsFormContainerComponent } from './projects/containers/projects-form-container/projects-form-container.component';
import { ProjectsListContainerComponent } from './projects/containers/projects-list-container/projects-list-container.component';
import { ProjectsViewContainerComponent } from './projects/containers/projects-view-container/projects-view-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsFormComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LogInComponent,
    PageInvalidComponent,
    MainComponent,
    ProjectsViewComponent,
    ProjectsListComponent,
    ProjectsFormContainerComponent,
    ProjectsListContainerComponent,
    ProjectsViewContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
