import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigrations1715063566297 implements MigrationInterface {
    name = 'UserMigrations1715063566297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "position" varchar NOT NULL, "phone" varchar NOT NULL, "email" varchar NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
