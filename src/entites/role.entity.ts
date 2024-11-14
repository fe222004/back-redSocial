import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único del rol' })
    id: string;

    @Column({ type: 'varchar', length: 20, comment: 'Nombre del rol' })
    name: string;

    @OneToMany(() => UserEntity, user => user.role)
    users: UserEntity[];
}
