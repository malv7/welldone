import { NgModule } from "@angular/core";
import { UserService } from "./user.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/user-login.component";
import { UserConfiguration } from "./components/user-configuration.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    UserConfiguration
  ],
  exports: [
    LoginComponent,
    UserConfiguration
  ],
  providers: [ UserService ]
})
export class UserModule {

}