import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [CommonModule, SecondRoutingModule],
  declarations: [SecondComponent]
})
export class SecondModule {}
