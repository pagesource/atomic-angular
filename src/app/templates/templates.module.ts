import { ServicesModule } from '../services/services.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { DirectivesModule } from '../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    ServicesModule,
    OrganismsModule
  ],
  declarations: []
})
export class TemplatesModule { }
