var slosh = {
    name: "Slosh",
    cost: "1UU",
    types: ["Instant"],
    rarity: "C",
    rules: "Counter target spell. Its controller takes a drink.",
    flavor: ""
};
var two_drink_minimum = {
    name: "Two Drink Minimum",
    cost: "U",
    types: ["Instant"],
    rarity: "C",
    rules: "Counter target spell unless its controller takes 2 drinks.",
    flavor: "\"By law, we can't force you to consume alcohol. Let's try magic instead.\"",
};

var acquired_taste = {
    name: "Acquired Taste",
    cost: "1U",
    types: ["Instant"],
    rarity: "C",
    rules: "As an additional cost to cast this spell, take a drink.<br><br>Draw a card, then draw cards equal to the number of cards named ~ in all graveyards.",
    flavor: ""
};
var bounce = {
    name: "Bounce",
    cost: "1U",
    types: ["Instant"],
    rarity: "C",
    rules: "Return target creature to its owner's hand. If that creature's controller took a drink this turn, draw a card.",
    flavor: ""
};
var top_off = {
    name: "Top Off",
    cost: "2UU",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Put target nonland permanent on top of its owner's library.<br><br>That permanent's controller takes a drink.",
    flavor: "",
};

var call_the_lads = {
    name: "Call the Lads",
    cost: "2W",
    types: ["Instant"],
    rarity: "C",
    rules: "Create two 1/1 white Soldier creature tokens. Take a drink.",
    flavor: "(Not draught.)"
};

var DECK_UW_CONTROL = [
    slosh, slosh, slosh, slosh,
    acquired_taste, acquired_taste, acquired_taste, acquired_taste,
    bounce, bounce,
    two_drink_minimum, two_drink_minimum,
    top_off, top_off,
    call_the_lads, call_the_lads, call_the_lads, call_the_lads
];
