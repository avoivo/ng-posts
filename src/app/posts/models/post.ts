import { Comment } from "./comment";

export class Post {
  id: number;
  userId: string;
  title: string;
  body: string;

  comments?: Comment[];
}
