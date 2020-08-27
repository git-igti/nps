import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('nps_notes')
class Nps {
  @PrimaryColumn()
  id: string;

  @Column()
  note: string;

  @Column()
  comment: string

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Nps;
