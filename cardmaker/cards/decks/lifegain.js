var brewmother = {
    name: "Brewmother",
    cost: "W",
    types: ["Creature"],
    subtypes: ["Human"],
    rarity: "R",
    rules: GetTapSymbol$() + ", drink 1: Target creature you control gains protection from the color of your choice until end of turn. <i>(That creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything of the chosen color.)</i>",
    flavor: "",
    power: 1,
    toughness: 1,
};

var cool_cat = {
    name: "Cool Cat",
    cost: "1W",
    types: ["Creature"],
    subtypes: ["Cat", "Soldier"],
    rarity: "U",
    rules: "Lifelink <i>(Damage dealt by this creature also causes you to gain that much life.)</i><br><br>Whenever you drink, put a +1/+1 counter on ~.",
    flavor: "",
    power: 1,
    toughness: 1,
}

var squad_up = {
    name: "Squad Up",
    cost: "1W",
    types: ["Instant"],
    rarity: "C",
    rules: "Create two 1/1 white human soldier creature tokens.<br><br>Drink 1.",
    flavor: "",
};

var toastmaster = {
    name: "Toastmaster",
    cost: "W",
    types: ["Creature"],
    subtypes: ["Human", "Cleric"],
    rarity: "C",
    rules: "Whenever another creature enters the battlefield under your control, drink 1.",
    flavor: "",
    power: 1,
    toughness: 1,
};

var DECK_LIFEGAIN = [
    brewmother, brewmother, brewmother, brewmother,
    cool_cat, cool_cat, cool_cat, cool_cat,
    squad_up, squad_up, squad_up, squad_up,
    toastmaster, toastmaster, toastmaster, toastmaster
];