import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IPost {
  _id: string
  title: string
  images: string[]
  content: string
  tags: string[]
  category: string
  author: Author
  upvotes: number
  downvotes: number
  isPremium: boolean
  views: number
  pdfVersion: string
  isDeleted: boolean
  comments: number
  createdAt: string
  updatedAt: string
}

export interface Author {
  _id: string
  username: string
  email: string
  role: string
  bio: string
  profilePhoto: string
  isVerified: boolean
  status: string
  isPremiumUser: boolean
  followers: number
  followings: number
  posts: number
  createdAt: string
  updatedAt: string
  __v: number
}



export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  _id: string;
  userId?: string;
  name: string;
  role: string;
  email: string;
  status?: string;
  mobileNumber?: string;
  profilePhoto?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  className?: string;
  disabled?: boolean;
}


export interface IClaimRequest {
  item: string
  description: string
  answers: string[]
}


export interface ISearchResults {
  id: string
  title: string
  description: string
  thumbnail: string
}
