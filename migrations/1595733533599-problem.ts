import { MigrationInterface, QueryRunner } from 'typeorm';

export class problem1595733533599 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "problem" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "problem_text" varchar NOT NULL, "type" integer NOT NULL, "choices" varchar default "", "answer" varchar NOT NULL)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "problem"');
  }
}
