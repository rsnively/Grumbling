var a = {
    name: "The Rack",
    cost: "1",
    types: ["Artifact"],
    rarity: "R",
    rules: "At the beginning of each player's upkeep, that player drinks X, where X is 3 minus the number of cards in their hand.",
    flavor: "",
};

var b = {
    name: "Drinkscard",
    cost: "2BB",
    types: ["Enchantment"],
    rarity: "U",
    rules: "Whenever an opponent discards a card, you may have that player drink 1.",
    flavor: "",
};

var overserve = {
    name: "Overserve",
    cost: "2B",
    types: ["Sorcery"],
    rarity: "U",
    rules: "Target player drinks 1, then discards X cards, where X is the number of drinks they've taken this turn.",
    flavor: "",
};

var DECK_DISCARD = [
    a, a, a, a,
    b, b, b, b,
    overserve, overserve, overserve, overserve,
];