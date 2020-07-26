import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProblemEntity } from './problem.entity';

@Entity({ name: 'result' })
export class ResultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'problem_id', type: 'int' })
  problemId: number;

  @OneToMany(
    type => ProblemEntity,
    problem => problem.id,
  )
  problems: ProblemEntity[];

  @Column('text')
  answer: string;

  @Column()
  result: boolean;
}
