class Statistics {
    constructor() {
        this.gameResults = [{ win: true, bid: 2 }, { win: true, bid: 12 }, { win: false, bid: -10 }];
    }
    addGameStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        };
        this.gameResults.push(gameResult);
    }
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filtet(result => !result.win).length;
        return [games, wins, losses];
    }

}
