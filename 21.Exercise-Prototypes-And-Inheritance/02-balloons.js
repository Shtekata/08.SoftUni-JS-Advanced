function solve() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);

      const _ribbon = {
        color: ribbonColor,
        length: ribbonLength,
      };

      Object.defineProperty(this, 'ribbon', {
        get: () => _ribbon,
      });
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }

    get text() {
      return this._text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

const balloons = solve();
const Balloon = balloons.Balloon;
const PartyBalloon = balloons.PartyBalloon;
const BirthdayBalloon = balloons.BirthdayBalloon;

const balloon = new Balloon('red', 5);
const partyBalloon = new PartyBalloon('red', 5, 'blue', 6);
partyBalloon.ribbon = { color: 'rrr', lenght: 7 };
console.log(partyBalloon.ribbon);
console.log(partyBalloon._ribbon);

const birthdayBalloon = new BirthdayBalloon('red', 5, 'blue', 6, 'gas');
