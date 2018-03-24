import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "user-list-header-item",
  templateUrl: "./user-list-header-item.component.html",
  styleUrls: ["./user-list-header-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListHeaderItemComponent implements OnInit {
  @Input() text: string;
  @Input() direction: number;

  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
