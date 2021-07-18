import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationUserGroup1600723079008
  implements MigrationInterface {
  name = 'RelationUserGroup1600723079008';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "groupsId" uuid NOT NULL`);
    // await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "groupsId" uuid `);
    // await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_11516be7bc9c9cf70a4f67c9297" FOREIGN KEY ("groupsId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_11516be7bc9c9cf70a4f67c9297"`,
    );
    // yarn typeorm migration:run await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "groupsId"`);
  }
}
