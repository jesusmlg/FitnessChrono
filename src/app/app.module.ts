import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SetupChronosComponent } from "./setup-chronos/setup-chronos.component";
import { ChronometerComponent } from "./chronometer/chronometer.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, SetupChronosComponent, ChronometerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
