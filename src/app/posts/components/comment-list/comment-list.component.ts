import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

import { Comment } from "../../models";

@Component({
  selector: "comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() collapsed: boolean;
  @Output() toggleCollapse: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}
