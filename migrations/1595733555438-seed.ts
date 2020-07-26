import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { problemSeed } from './problem.seed';

export class seed1595733555438 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('problem').save(problemSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
