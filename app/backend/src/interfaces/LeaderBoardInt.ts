export interface TeamsBoardInt {
  id?: number;
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

// Array com objetos, cada objeto TeamBoardInt
// Passa por cada time, dentro de cada time, passa por cada Partida
// Para cada partida, soma as infos number que começam com Zero.

export interface TeamsListBoardInt {
  leaderBoard: Array<TeamsBoardInt>;
}

export interface LeaderBoardInt {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}
