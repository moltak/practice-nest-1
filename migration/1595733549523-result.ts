import { MigrationInterface, QueryRunner } from 'typeorm';

export class result1595733549523 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "result" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "problem_id" integer NOT NULL, "answer" varchar NOT NULL, "result" boolean NOT NULL)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "result"');
  }
}
