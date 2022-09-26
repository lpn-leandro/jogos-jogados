export class User {
  constructor( username, password, games = []) {
    this.username = username;
    this.password = password;
    this.games = games;
  }

  addGames(games) {
    this.games.push(games);
  }
}
