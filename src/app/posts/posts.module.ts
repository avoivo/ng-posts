import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromReducers from "./reducers";
import * as fromEffects from "./effects";
import * as fromServices from "./services";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";

import { UsersComponent } from "./containers/users";
import { PostsComponent } from "./containers/posts";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("Posts", fromReducers.reducers),
    EffectsModule.forFeature([...fromEffects.effects]),
    RouterModule.forChild([
      {
        path: ":id",
        component: PostsComponent
      },
      { path: "", component: UsersComponent }
    ])
  ],
  declarations: [...fromComponents.components, ...fromContainers.containers],
  providers: [...fromServices.services],
  exports: [...fromContainers.containers]
})
export class PostsModule {}
