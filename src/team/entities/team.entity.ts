import { Developer } from "../../developer/entities/developer.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm";

@Entity('team')
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    name: string

    @Column({type: 'varchar', length: 255, unique: true})
    dept_name: string

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
    createdAt: Date;
    
    @UpdateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)'})
    updatedAt: Date;

    @ManyToMany(() => Developer, (developer) => developer.id)
    @JoinTable({name: 'team_developers'})
    developer_ids: Developer[]
}
