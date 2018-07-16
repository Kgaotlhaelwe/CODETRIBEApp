import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgrammesPage } from './programmes';

@NgModule({
  declarations: [
    ProgrammesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgrammesPage),
  ],
})
export class ProgrammesPageModule {}
