export interface Problem {
  id: number;
  problem_text: string;
  type: number;
  choices: string;
  answer: string;
}

export interface Problems {
  problems: Problem[];
}
