import { IPost } from ".";

export type PostType = {
    _id: string;
    title: string;
    images: string[];
    category: string;
  };


  export interface PostsResponse {
    data: IPost[];
  }