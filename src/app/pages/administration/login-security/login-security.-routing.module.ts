import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LabdetailsComponent} from "./labdetails/labdetails.component";
import {ScreensMasterComponent} from "./screens-master/screens-master.component";
import {RolesMasterComponent} from "./roles-master/roles-master.component";
import {LoginUserMasterComponent} from "./login-user-master/login-user-master.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {MigrationMasterComponent} from "./migration-master/migration-master.component";
const routes: Routes = [
  {
    path: 'labdetails',
    component: LabdetailsComponent
  },
  {
    path: 'ScreensMaster',
    component: ScreensMasterComponent
  },
  {
    path: 'RolesMaster',
    component: RolesMasterComponent
  },
  {
    path: 'LoginUserMaster',
    component: LoginUserMasterComponent
  },
  {
    path: 'ChangePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'ResetPassword',
    component: ResetPasswordComponent
  },
  {
    path: 'MigrationMaster',
    component: MigrationMasterComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSecurityRoutingModule {

}
