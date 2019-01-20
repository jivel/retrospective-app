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
import { MatCardModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatStepperModule, MatInputModule, MatRadioModule, MatButtonModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectRetrospectiveComponent } from './select-retrospective/select-retrospective.component';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    AppComponent,
    StartStopContinueComponent,
    GladSadMadComponent,
    SailboatComponent,
    TheFourLsComponent,
    QuickRetrospectiveComponent,
    SelectRetrospectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [{
    provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher
  }, {
    provide: MAT_STEPPER_GLOBAL_OPTIONS,
    useValue: {
      displayDefaultIndicatorType: true,
      showError: true
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
