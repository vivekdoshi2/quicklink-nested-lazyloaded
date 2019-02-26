import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';

const route = [
  {
    path: 'first',
    loadChildren: './first/first.module#FirstModule'
  },
  {
    path: 'second',
    loadChildren: './second/second.module#SecondModule'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(route, {
      preloadingStrategy: QuicklinkStrategy
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
