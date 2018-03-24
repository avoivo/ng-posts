import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { User } from "../../models";

@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit() {}
}
