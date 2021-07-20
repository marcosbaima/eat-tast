import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export default class createDashboard1626508494163 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'dashboard',
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
                    name:'balance',
                    type:'float',
                    default:0.00,
                    isNullable:false
                },

                {
                    name:'delivery_balance',
                    default:0.00,
                    type:'float',
                    isNullable:false
                },

                {
                    name:'total_orders',
                    type:'integer',
                    default:0,
                    isNullable:false
                },

                {
                    name:'top_items',
                    type:'text',
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
              name: 'items_dashboard',
              columnNames: ['restaurant_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'restaurant',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dashboard');
    }

}
