import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartStopContinueComponent } from './start-stop-continue/start-stop-continue.component';
import { GladSadMadComponent } from './glad-sad-mad/glad-sad-mad.component';
import { SailboatComponent } from './sailboat/sailboat.component';
import { TheFourLsComponent } from './the-four-ls/the-four-ls.component';
import { QuickRetrospectiveComponent } from './quick-retrospective/quick-retrospective.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatStepperModule, MatInputModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CreateRetrospectiveComponent } from './home/create-retrospective/create-retrospective.component';
import { SelectTemplateComponent } from './home/select-template/select-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StartStopContinueComponent,
    GladSadMadComponent,
    SailboatComponent,
    TheFourLsComponent,
    QuickRetrospectiveComponent,
    HomeComponent,
    CreateRetrospectiveComponent,
    SelectTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatToolbarModule, MatCardModule, BrowserAnimationsModule, MatTabsModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
