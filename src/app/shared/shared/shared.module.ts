import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  imports: [CommonModule, QuicklinkModule],
  exports: [QuicklinkModule]
})
export class SharedModule {}
