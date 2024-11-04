export interface IBlog {
  id: number;
  image_blog: string;
  data: Date;
  user: string;
  title: string;
  content: string;
}

export interface IComment {
  id: number;
  icon_user: string;
  content: string;
  username: string;
  star: string;
}

export interface ICardCredit {
  id: number;
  card_image: string;
  name: string;
  content: string;
  accepted: string;
  valid_in: string;
  transaction: string;
}
