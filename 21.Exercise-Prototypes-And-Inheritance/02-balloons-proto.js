function solve() {
    function Balloon(color, gasWeight) {
        this.color = color;
        this.gasWeight = gasWeight;
    }

    function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
        Balloon.call(this, color, gasWeight);

        this._ribbon = {
            color: ribbonColor,
            length: ribbonLength,
        };
    }

    // PartyBalloon.prototype = Object.create(Balloon.prototype);
    Object.setPrototypeOf(PartyBalloon, Balloon);

    Object.defineProperty(PartyBalloon.prototype, 'ribbon', {
        get: function () {
            return this._ribbon;
        },
    });

    function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {
        PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);

        this._text = text;
    }

    // BirthdayBalloon.prototype = Object.create(PartyBalloon.prototype);
    Object.setPrototypeOf(BirthdayBalloon, PartyBalloon);
    Object.setPrototypeOf(BirthdayBalloon.prototype, PartyBalloon.prototype);

    Object.defineProperty(BirthdayBalloon.prototype, 'text', {
        get: function () {
            return this._text;
        },
    });

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
console.log(balloon);
const partyBalloon = new PartyBalloon('red', 5, 'blue', 6);
console.log(partyBalloon);
console.log(partyBalloon.ribbon);
const birthdayBalloon = new BirthdayBalloon('red', 5, 'blue', 6, 'gas');
console.log(birthdayBalloon);
console.log(birthdayBalloon.ribbon);
console.log(birthdayBalloon.text);
