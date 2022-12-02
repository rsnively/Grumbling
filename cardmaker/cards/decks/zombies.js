var bar_crawler = {
    name: "Bar Crawler",
    cost: "B",
    types: ["Creature"],
    subtypes: ["Zombie", "Soldier"],
    rarity: "R",
    rules: "~ enters the battlefield tapped.<br><br>" + GetManaSymbol$("2") + GetManaSymbol$("B") + ": Return ~ from your graveyard to your hand. Activate this ability only if you took a drink this turn.",
    flavor: "",
    power: 2,
    toughness: 1,
};

var grower = {
    name: "Grower", // Champion of the Perished
    cost: "B",
    types: ["Creature"],
    subtypes: ["Zombie"],
    rarity: "R",
    rules: "Whenever another Zombie enters the battlefield under your control, you may drink 1. If you do, put a +1/+1 counter on ~.",
    flavor: "",
    power: 1,
    toughness: 1,
};

var undead_something = {
    name: "Undead Something",
    cost: "BB",
    types: ["Creature"],
    subtypes: ["Zombie", "Cleric"],
    rarity: "U",
    rules: "Whenever ~ or another Zombie you control dies, you draw a card and drink 1.",
    flavor: "",
    power: 2,
    toughness: 2,
};

var brain_slurper = {
    name: "Brain Slurper",
    cost: "1B",
    types: ["Creature"],
    subtypes: ["Zombie"],
    rarity: "C",
    rules: "When ~ enters the battlefield, target opponent discards a card. If a land card is discarded this way, that player drinks 1. Otherwise you drink 1.",
    flavor: "",
    power: 1,
    toughness: 1,
};

var lord = {
    name: "Zombie Lord",
    cost: "2B",
    types: ["Creature"],
    subtypes: ["Zombie"],
    rarity: "U",
    rules: "Other Zombies you control get +1/+1 and have \"When this creature deals combat damage to a player, that player drinks 1.\"",
    flavor: "",
    power: "2",
    toughness: "2",
};

var empty_grave = {
    name: "Empty Grave",
    cost: "3BB",
    types: ["Enchantment"],
    rarity: "R",
    rules: "Zombies you control get +1/+1 as long as you've taken a drink this turn.<br>When ~ enters the battlefield, create two 2/2 black Zombie creature tokens.",
    flavor: "",
};

var removal = {
    name: "Removal",
    cost: "BB",
    types: ["Instant"],
    rarity: "U",
    rules: "As an additional cost to cast this spell, drink 2.<br>Target creature gets -2/-2 until end of turn. If that creature would die this turn, instead exile it and you create a tapped 2/2 black zombie creature token.",
    flavor: "",
};

var DECK_ZOMBIES = [
    bar_crawler, bar_crawler, bar_crawler, bar_crawler,
    brain_slurper, brain_slurper, brain_slurper, brain_slurper,
    grower, grower, grower, grower,
    lord, lord, lord, lord,
    removal, removal, removal, removal,
    undead_something, undead_something, undead_something, undead_something,
    empty_grave, empty_grave, empty_grave, empty_grave,
];