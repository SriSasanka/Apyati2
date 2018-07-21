import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: '',
    redirectTo: 'login'
  },
    {path: '**',
    redirectTo: 'login'
  },
    {
      path: 'login',
      component: LoginComponent,
    }],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export  class AuthRoutingModule {

}
