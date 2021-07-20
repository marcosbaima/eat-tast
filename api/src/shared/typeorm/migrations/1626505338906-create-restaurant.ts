import {MigrationInterface, QueryRunner,Table} from "typeorm";

export default class createRestaurant1626505338906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'restaurant',
              columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    
                },
            
                {
                    name: 'active',
                    type:'Boolean',
                    default:false,
                    isNullable:false

                },
                {
                    name:'name',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'email',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'password_hash',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'restaurant_name',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'restaurant_address',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'restaurant_city',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'culinary',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'description',
                    type:'varchar',
                    isNullable:false
                },

                {
                    name:'delivery_price',
                    type:'float',
                    isNullable:true
                },

                {
                    name:'logo_path',
                    type:'varchar',
                    isNullable:true
                },
            
                {
                    name:'banner_path',
                    type:'varchar',
                    isNullable:true
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('restaurant');
    }

}
