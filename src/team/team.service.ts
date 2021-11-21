import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository, getManager } from 'typeorm';
import { UnprocessableEntityException, BadRequestException } from '@nestjs/common';
import { DeveloperService } from '../developer/developer.service';
import { Developer } from '../developer/entities/developer.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private readonly teamRepo: Repository<Team>,
    @InjectRepository(Developer) private readonly developerRepo: Repository<Developer>,
    private readonly developerService: DeveloperService
  ){}

  public async get() {
    return await this.teamRepo.find();
  }

  public async create(createTeamDto: CreateTeamDto) {
    const isTeamPresent = await this.teamRepo.createQueryBuilder()
    .where('name = :name AND dept_name = :dept_name', {
      name: createTeamDto.name,
      dept_name: createTeamDto.dept_name
    }).getOne();

    if (isTeamPresent) throw new UnprocessableEntityException("team already exists");
    const developers: Developer[] = await this.developerRepo.findByIds(createTeamDto.developer_ids);
    
    const team = new Team();
    team.dept_name = createTeamDto.dept_name;
    team.name = createTeamDto.name;
    team.developer_ids = developers;
    
    if (createTeamDto.developer != null) {
      try {
        createTeamDto.developer.forEach(async (developer) => {
          const newDeveloper = await this.developerService.create(developer);
          team.developer_ids.push(newDeveloper);
        })
      } catch (error) {
        throw new Error(error);
      }
    }
    
    return await this.teamRepo.save(team);
  }

  public async update(id: number, updateTeamDto: UpdateTeamDto) {
    const isTeamPresent = await this.teamRepo.createQueryBuilder()
    .where('id = :id', {
      id: id
    }).getOne();

    if (!isTeamPresent) throw new BadRequestException("team does not exist");

    const team = new Team();
    
    if (updateTeamDto.dept_name != null && updateTeamDto.developer_ids != null) {
      team.dept_name = updateTeamDto.dept_name;
      const developers = [];
      updateTeamDto.developer_ids.forEach(async (developerId) => {
        const developer: Developer = await this.developerRepo.findOne({id: developerId});
        if (developer != null) developers.push(developer);
      })
      team.developer_ids = developers;
    } else {
      throw new BadRequestException("Nothing to update");
    }

    return this.teamRepo.save({id, ...team});
  }

  public async getTeam(id: number) {
    const isTeamPresent = await this.teamRepo.createQueryBuilder()
    .where('id = :id', {id})
    .getOne();

    if (!isTeamPresent) throw new BadRequestException("team does not exist");

    const manager = getManager();
    const developers = await manager.query(`select d.* from developer d join team_developers td on td.developerId = d.id where td.teamId=${id}`);

    return developers;
  }

}
