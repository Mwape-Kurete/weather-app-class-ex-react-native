import { Timestamp } from "firebase/firestore";

export interface Reading {
  id?: string | null;
  temp: number;
  time: Timestamp;
}
