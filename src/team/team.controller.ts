import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  get() {
    return this.teamService.get();
  }

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    try {
      return this.teamService.create(createTeamDto);
    } catch(error) {
      return error;
    }
  }

  @Get('devs')
  getDevs() {
    return this.teamService.getTeam(1);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    try {
      return this.teamService.update(+id, updateTeamDto);
    } catch(error) {
      return error;
    }
  }
}
