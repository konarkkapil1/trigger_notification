import { Team } from "../../team/entities/team.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";

@Entity('developer')
export class Developer {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 255})
    full_name: string

    @Column({type: 'varchar', length: 302, unique: true})
    email: string

    @Column({type: 'varchar', length: 10, unique: true})
    mobile: string

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
    createdAt: Date;
    
    @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)'})
    updatedAt: Date;

    @ManyToMany(() => Team, (team) => team.id)
    team: Team[]
}
