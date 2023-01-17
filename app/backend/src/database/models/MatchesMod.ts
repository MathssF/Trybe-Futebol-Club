import { Model, BOOLEAN, INTEGER } from 'sequelize';
import TeamsMod from './TeamsMod';
import db from '.';

export default class MatchesMod extends Model {
  declare id: number;
  declare matchesName: string;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesMod.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

MatchesMod.belongsTo(TeamsMod, { foreignKey: 'homeTeam', as: 'teamHome' });
MatchesMod.belongsTo(TeamsMod, { foreignKey: 'awayTeam', as: 'teamAway' });

TeamsMod.hasMany(MatchesMod, { foreignKey: 'homeTeam', as: 'teamHome' });
TeamsMod.hasMany(MatchesMod, { foreignKey: 'awayTeam', as: 'teamAway' });
