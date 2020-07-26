import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProblemEntity } from './problem.entity';

@Entity({ name: 'result' })
export class ResultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  problem_id: number;

  @OneToMany(
    type => ProblemEntity,
    problem => problem.id,
  )
  problem: ProblemEntity;

  @Column()
  answer: string;

  @Column()
  result: boolean;
}
