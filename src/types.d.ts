import { D1Tables, D1Columns, VARIANTS } from "./index.js";

export interface ImageData {
  table: "Group_Photos" | "Headshots_Sm" | "Headshots_Lg";
  hash: string;
  transformUrl?: string;
}
