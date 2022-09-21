export class User {
  constructor(firstname, lastname, username, password, email, games = []) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.games = games;
  }

  addGames(games) {
    this.games.push(games);
  }
}
