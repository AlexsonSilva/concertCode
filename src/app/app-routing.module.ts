import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConcertlistingComponent } from './components/concertlisting/concertlisting.component';

const routes: Routes = [
  
   {path: 'concerts', component: ConcertlistingComponent},
   {path: '', redirectTo: 'concerts', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
