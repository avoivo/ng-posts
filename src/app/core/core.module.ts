import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import * as fromContainers from "./containers";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers]
})
export class CoreModule {}
