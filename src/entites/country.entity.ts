import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('countries')
export class CountryEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único del país' })
    id: string;

    @Column({ type: 'varchar', length: 100, comment: 'Nombre del país' })
    name: string;

    @OneToMany(() => UserEntity, user => user.country)
    users: UserEntity[];
}
