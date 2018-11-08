export class Post {
  id: number;
  title: string;
  text: string;
  tags: any[];
  image: string;
  date: string;
  author: string;
  comments: number;

  constructor (
    id: number,
    title: string,
    text: string,
    tags: any[],
    image: string,
    date: string,
    author: string,
    comments: number
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.tags = tags;
    this.image = image;
    this.date = date;
    this.author = author;
    this.comments = comments;
  }
}
