import {AdministrationComponent} from "./administration.component";
import {NgModule} from "@angular/core";
import {AdministrationRoutingModule} from "./administration-routing.module";
import {LoginSecurityComponent} from "./login-security/login-security.component";
import {LoginSecurityModule} from "./login-security/login-security.module";
const ADMINISTRATION_COMPONENTS = [
  AdministrationComponent
];
@NgModule({
  imports: [
    AdministrationRoutingModule,
    LoginSecurityModule
  ],
  declarations: [
    ...ADMINISTRATION_COMPONENTS
  ],
})
export  class AdministrationModule {
}
