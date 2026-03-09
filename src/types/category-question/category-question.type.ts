import { Level } from '@type/common/enum.type';
import { Question } from '@type/question/question.type';

export interface CategoryQuestion {
  id: string;
  level: Level;
  descriptionCategory: string;
  type: TypeQuestionCategory;
  questions?: Question[];
}

export enum TypeQuestionCategory {
  LISTENING = 'LISTENING',
  GRAMMAR = 'GRAMMAR',
  READING = 'READING',
  VOCABULARY = 'VOCABULARY',
  WRITING = 'WRITING',
  SPEAKING = 'SPEAKING',
}
