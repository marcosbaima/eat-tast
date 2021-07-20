import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export default class createItemsRest1626506859932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'items',
              columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                   
                },
            
                {
                    name: 'restaurant_id',
                    type:'uuid',
                    isNullable:false
                    

                },
                {
                    name:'title',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'description',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'price',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'thumbnail_path',
                    type:'varchar',
                    isNullable:false
                },

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
          await queryRunner.createForeignKey(
            'items',
            new TableForeignKey({
              name: 'items',
              columnNames: ['restaurant_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'restaurant',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items');
    }

}
