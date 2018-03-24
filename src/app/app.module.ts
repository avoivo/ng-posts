import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./core/containers/app";
import { PostsModule } from "./posts";
import { CoreModule } from "./core";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: true }),
    CoreModule,
    PostsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
