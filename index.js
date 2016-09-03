class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!";
  }

  passBill() {
    return "You can do that!";
  }

  doCharity() {
    return "I like to help people.";
  }

  conductPressInterview() {
    return "I am proud to be an American.";
  }

  sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".";
  }
}

var washington = new President("George Washington", "Independent", "1789-1797", "Virginia");
var lincoln = new President("Abraham Lincoln", "Republican", "1861-1865", "Illinois");
var nixon = new President("Richard Nixon", "Republican", "1969-1974", "California");
var carter = new President("Jimmy Carter", "Democrat", "1977-1981", "Georgia");
