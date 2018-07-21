import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";

const components = [
  AuthComponent,
  LoginComponent
];

@NgModule({
  imports: [
    AuthRoutingModule,
  ],
  declarations: [
    ...components,
  ],
})
export class AuthModule {
}
