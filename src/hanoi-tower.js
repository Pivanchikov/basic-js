module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let Hanoi = {
      turns: 0,
      seconds: 0,
}
      turns = Math.pow(2, disksNumber) - 1;
      Hanoi.turns = turns;
      Hanoi.seconds = turns / (turnsSpeed / 3600);
return Hanoi
}
