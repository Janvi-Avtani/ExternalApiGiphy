import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyComponent } from './giphy/giphy.component';
import { SearchgifsComponent } from './searchgifs/searchgifs.component';

const routes: Routes = [
  {path:'trending',component:GiphyComponent},
  {path:'',redirectTo:'trending',pathMatch:'full'},
  {path:'search',component:SearchgifsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
