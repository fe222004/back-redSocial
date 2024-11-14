import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('resolvers')
export class ResolverEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único de la resolución' })
    id: string;

    @Column({ type: 'varchar', length: 40, comment: 'Nombre del resolutor' })
    name: string;

    @Column({ type: 'varchar', length: 40, comment: 'Apellido del resolutor' })
    last_name: string;

    @Column({ type: 'varchar', comment: 'Correo electrónico del resolutor' })
    email: string;

    @Column({ type: 'varchar', comment: 'Solución proporcionada' })
    solution: string;

    @Column({ type: 'date', comment: 'Fecha de la resolución' })
    date: Date;

    @Column({ type: 'varchar', comment: 'Número de queja' })
    complaint_number: string;

    @Column({ type: 'boolean', comment: 'Cuenta suspendida' })
    suspended_account: boolean;
    
    @Column({ type: 'varchar', comment: 'Estado de cuenta' })
    status: string;

    @Column({ type: 'varchar', comment: 'Responsable' })
    responsible: string;
    
    @ManyToOne(() => UserEntity, user => user.resolvers)
    user: UserEntity;
}
