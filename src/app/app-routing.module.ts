import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartStopContinueComponent } from './start-stop-continue/start-stop-continue.component';
import { GladSadMadComponent } from './glad-sad-mad/glad-sad-mad.component';
import { SailboatComponent } from './sailboat/sailboat.component';
import { TheFourLsComponent } from './the-four-ls/the-four-ls.component';
import { QuickRetrospectiveComponent } from './quick-retrospective/quick-retrospective.component';
import { SelectRetrospectiveComponent } from './select-retrospective/select-retrospective.component';

const routes: Routes = [
  {
    path: 'select',
    component: SelectRetrospectiveComponent
  },
  {
    path: 'start-stop-continue/:retrospectiveId',
    component: StartStopContinueComponent
  },
  {
    path: 'glad-sad-mad/:retrospectiveId',
    component: GladSadMadComponent
  },
  {
    path: 'sailboat/:retrospectiveId',
    component: SailboatComponent
  },
  {
    path: 'the-4-ls/:retrospectiveId',
    component: TheFourLsComponent
  },
  {
    path: 'quick-retrospective/:retrospectiveId',
    component: QuickRetrospectiveComponent
  },
  {
    path: '',
    redirectTo: 'select',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
