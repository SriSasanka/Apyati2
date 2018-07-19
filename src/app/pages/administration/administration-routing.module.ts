import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
const routes: Routes = [
  {
    path: 'login-security',
    loadChildren: './login-security/login-security.module#LoginSecurityModule'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {
}
