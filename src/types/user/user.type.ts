import { Level } from "../common/enum.type";
import { CoreEntity } from "./coreEntity.type";

export enum UserRole {
  PLAYER = "PLAYER",
  ADMIN = "ADMIN",
}

export interface User extends CoreEntity {
  id: string;
  username: string;
  email: string;
  score: number;
  userRole: UserRole;
  level: Level;
  avatar?: {
    url: string;
    key?: string;
  } | null;
}
