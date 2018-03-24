import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { User } from "../../models";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  @Input() activeSorting: number;
  @Output() select: EventEmitter<number> = new EventEmitter<number>();
  @Input() users: User[];
  constructor() {}

  ngOnInit() {}
}
