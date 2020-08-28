import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateCommentColumn1598634788418 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.addColumn('nps_notes', new TableColumn({
      name: 'comment',
      type: 'varchar',
      isNullable: true,
    }));

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('nps_notes', 'comment');
  }

}
