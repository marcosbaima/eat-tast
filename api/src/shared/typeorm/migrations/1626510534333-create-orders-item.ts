import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export default class createOrdersItem1626510534333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'orders',
              columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                  
                },
                {
                    name:'customer_id',
                    type:'uuid',
                    isNullable:false
                },
                {
                    name: 'restaurant_id',
                    type:'uuid',
                    isNullable:false
                },
                {
                    name:'items',
                    type:'text',
                    isNullable:false
                },

                {
                    name:'subtotal',
                    type:'float',
                    isNullable:false
                },

                {
                    name:'fees',
                    type:'float',
                    isNullable:false
                },

                {
                    name:'delivery_price',
                    type:'float',
                    isNullable:false
                },
                {
                    name:'total',
                    type:'float',
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
            'orders',
            new TableForeignKey({
              name: 'orders_restaurant',
              columnNames: ['restaurant_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'restaurant',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            }),
          );
          await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
              name: 'orders_customers',
              columnNames: ['customer_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'customers',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            }),
          );   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
