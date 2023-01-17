import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class TeamsMod extends Model {
  declare id: number;
  declare teamName: string;
}

TeamsMod.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default TeamsMod;
