import { CategoryQuestion } from '@type/category-question/category-question.type';
import { CoreEntity, S3Object } from '@type/common/cores.type';
import { Game } from '@type/game/game.type';
import { QuestionOption } from '@type/question-option/question-option.type';

export interface Question extends CoreEntity {
  questionText: string;

  category: CategoryQuestion;

  options: QuestionOption[];

  categoryId: string;

  timeLimit: number; // debe ser en milisegundo

  media?: S3Object;

  games: Game[];
}
