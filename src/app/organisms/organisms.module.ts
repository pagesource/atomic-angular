import { ServicesModule } from '../services/services.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { DirectivesModule } from '../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    ServicesModule,
    MoleculesModule
  ],
  declarations: []
})
export class OrganismsModule { }
