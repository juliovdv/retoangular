import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { PermissionGuard } from './guards/permission.guard';
import { WithoutSaveGuard } from './guards/without-save.guard';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DataResolverService } from './resolvers/data.resolver.service';
import { DetailsComponent } from './user/details/details.component';
import { ListComponent } from './user/list/list.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // LAZY LOADING PASADO A CONTACT-REACTIVE-ROUTING { path: 'contact-reactive', component: ContactReactiveComponent, canDeactivate: [WithoutSaveGuard],resolve:{departaments: DataResolverService} },
  // AGREGADO PARA QUE FUNCIONE LAZY LOADING
  {
    path:'contact-reactive', loadChildren: ()=>
    import('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule)
  },
  { path: 'contact-template/:id', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent, canActivate: [PermissionGuard],
  children: [
    {path:'list', component: ListComponent},
    {path:'details', component:DetailsComponent},
  ] },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
