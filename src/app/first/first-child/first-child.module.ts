import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstChildRoutingModule } from './first-child-routing.module';
import { FirstChildComponent } from './first-child.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, FirstChildRoutingModule],
  declarations: [FirstChildComponent]
})
export class FirstChildModule {}
