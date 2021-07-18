import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGroup1600294147671 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'group',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },
          // //////// Acessos dos grupos //////////
          {
            name: 'cm1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm1u',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm1r1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm1r2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm1e',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm2c',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm2e',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm2r',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm2u',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm2d',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm3',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm3a1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm3a2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm3a3',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm4',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm4a1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm4a2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a1c',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a1e',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a1r',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a1u',
            type: 'boolean',
            isNullable: false,
          },

//
          {
            name: 'cm5a1d',
            type: 'boolean',
            isNullable: false,
          },

          {
            name: 'cm5a2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a2c',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a2e',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a2r',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a2u',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a2d',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm5a3',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a1u',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a2c',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a2u',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a3',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a3u1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a3u2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a4',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a4c1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a4c2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a4c3',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a5',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a5u1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm6a5u2',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm7',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm7a1',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'cm7a2',
            type: 'boolean',
            isNullable: false,
          },


          // //////////////////////////////////////

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('group');
  }
}
