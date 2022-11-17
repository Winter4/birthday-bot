import { PrimaryColumn, Column, Entity, Unique } from "typeorm";

export enum ScenesID {
  mainMenu = "MENU_MAIN",
}

@Entity()
@Unique(["nickname"])
export class User {
  @PrimaryColumn({ length: 20 })
  id!: string;

  @Column({
    type: "enum",
    enum: ScenesID,
  })
  scene_id!: ScenesID;

  @Column()
  nickname!: string;

  @Column()
  @Column()
  birth_day!: number;

  @Column()
  birth_month!: number;

  @Column()
  birth_year!: number;
}
