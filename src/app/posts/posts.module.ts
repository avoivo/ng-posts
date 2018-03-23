import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromReducers from "./reducers";
import * as fromEffects from "./effects";
import * as fromServices from "./services";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("Users", fromReducers.reducers),
    EffectsModule.forFeature([...fromEffects.effects])
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services],
  exports: [...fromContainers.containers]
})
export class PostsModule {}
