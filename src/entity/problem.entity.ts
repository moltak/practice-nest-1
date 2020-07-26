import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'problem' })
export class ProblemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'problem_text' })
  problemText: string;

  @Column('int')
  type: number;

  @Column({ nullable: true, default: '' })
  choices: string;

  @Column()
  answer: string;
}
