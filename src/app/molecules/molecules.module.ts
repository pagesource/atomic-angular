import { AtomsModule } from '../atoms/atoms.module';
import { DirectivesModule } from '../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule, 
    AtomsModule
  ],
  declarations: []
})
export class MoleculesModule { }
