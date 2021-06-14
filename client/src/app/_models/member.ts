import { photo } from "./photo";

export interface Member {
  id: number;
  username: string;
  photoUrl: string;
  password?: any;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: photo[];
}