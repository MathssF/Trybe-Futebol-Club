export interface MatchesInt { // default
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome: {
    teamName: string;
  };
  teamAway: {
    teamName: string;
  };
}

export interface addMatchesInt {
  homeTeam: number;
  awayTeam: number;
  awayTeamGoals: number;
  homeTeamGoals: number;
  inProgress?: boolean
}

export interface editMatchesInt {
  awayTeamGoals: number;
  homeTeamGoals: number;
}
