import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { PostsModule } from "./posts";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PostsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
