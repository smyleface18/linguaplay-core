import { CoreEntity } from '@type/common/cores.type';
import { Level } from '@type/common/enum.type';
import { Question } from '@type/question/question.type';
import { User } from '@type/user/user.type';

export interface Game extends CoreEntity {
  difficulty: Level;

  questions: Question[];

  userGames: UserGame[];
}

export interface UserGame extends CoreEntity {
  user: User;

  userId: string;

  game: Game;

  gameId: string;

  score: number;

  position: number;
}
