import { TeamsInt } from '../interfaces/TeamsInt';
import TeamsMod from '../database/models/TeamsMod';

export default class TeamsSer {
  static async teamsList(): Promise<TeamsInt[]> {
    const list: TeamsInt[] = await TeamsMod.findAll();
    return list;
  }

  static async teamById(id: number): Promise<TeamsInt> {
    const teamId = await TeamsMod.findByPk(id) as TeamsInt;
    return teamId;
  }
}
