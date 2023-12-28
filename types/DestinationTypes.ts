import { Image } from "sanity";

type SanityBlock = {
  _type: 'block';
  children: {
    _type: 'span';
    text: string;
    marks: string[];
  }[];
  markDefs: any[];
  style: string;
};


export type DestinationTypes = {
    name: string;
    _id: string;
    _createdAt: Date;
    image: Image;
    slug:string;
    content: string;
}