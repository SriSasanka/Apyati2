import {LoginSecurityComponent} from "./login-security.component";
import {NgModule} from "@angular/core";
import {LoginSecurityRoutingModule} from "./login-security.-routing.module";
import { LabdetailsComponent } from './labdetails/labdetails.component';
import { ScreensMasterComponent } from './screens-master/screens-master.component';
import { RolesMasterComponent } from './roles-master/roles-master.component';
import { LoginUserMasterComponent } from './login-user-master/login-user-master.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MigrationMasterComponent } from './migration-master/migration-master.component';

const LOGIN_SECURITY_COMPONENTS = [
  LoginSecurityComponent
];
@NgModule({
  imports: [
    LoginSecurityRoutingModule
  ],
  declarations: [
    ...LOGIN_SECURITY_COMPONENTS,
    LabdetailsComponent,
    ScreensMasterComponent,
    RolesMasterComponent,
    LoginUserMasterComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    MigrationMasterComponent,

  ],
})
export class LoginSecurityModule {

}
