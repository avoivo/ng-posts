import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Post } from "../../models";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  @Input() toggledComments: number[];
  @Output()
  toggleCommentCollapse: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
}
