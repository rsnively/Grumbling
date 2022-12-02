var acquired_taste = {
    name: "Acquired Taste",
    cost: "1U",
    types: ["Instant"],
    rarity: "C",
    rules: "Draw a card and drink 1, then draw cards equal to the number of cards named ~ in all graveyards.",
    flavor: ""
};

var alcoholic_ritual = {
    name: "Alcoholic Ritual",
    cost: "1R",
    types: ["Instant"],
    rarity: "C",
    rules: "Drink 1.<br><br>Add " + GetManaSymbol$("R") + GetManaSymbol$("R") + GetManaSymbol$("R") + ".",
    flavor: "",
};

var drinks_undrank = {
    name: "Drinks Undrank",
    cost: "3U",
    types: ["Instant"],
    rarity: "R",
    rules: "Drink 4.<br>Search your library for up to four cards with different names and reveal them. Target opponent chooses two of those cards. Put the chosen cards into your graveyard and the rest into your hand. Then shuffle.",
    flavor: "",
};

var drunken_pillaging = {
    name: "Drunken Pillaging",
    cost: "R",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Drink 2, then draw two cards, then discard two cards.<br><br>Flashback: " + GetManaSymbol$("2") + GetManaSymbol$("R") + " <i>(You may cast this card from your graveyard for its flashback cost. Then exile it.)</i>",
    flavor: "",
};

var goblin_alchomancer = {
    name: "Goblin Alchomancer",
    cost: "UR",
    types: ["Creature"],
    subtypes: ["Goblin", "Wizard"],
    rarity: "C",
    rules: "As long as you've taken a drink this turn, instant and sorcery spells you cast cost " + GetManaSymbol$("1") + " less to cast.",
    flavor: "",
    power: 2,
    toughness: 2,
};

var keg_stand = {
    name: "Keg Stand",
    cost: "1R",
    types: ["Sorcery"],
    rarity: "U",
    rules: "Target player drinks 1.<br><br>Storm <i>(When you cast this spell, copy it for each spell cast before it this turn. You may choose new targets for the copies.)</i>",
    flavor: "",
};

var lightning_breath = {
    name: "Lightning Breath",
    cost: "R",
    types: ["Instant"],
    rarity: "U",
    rules: "As an additional cost to cast this spell, drink 1.<br><br>~ deals 3 damage to any target.",
    flavor: "",
};

var mull = {
    name: "Mull",
    cost: "U",
    types: ["Instant"],
    rarity: "C",
    rules: "Drink 1.<br>Draw a card.<br>Mill cards equal to the number of drinks you've taken this turn. <i>(Put that many cards from the top of your library into your graveyard.)</i>",
    flavor: "",
};

var past_mistakes = {
    name: "Past Mistakes",
    cost: "3R",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Each instant and sorcery card in your graveyard gains flashback until end of turn. The flashback cost is equal to its mana cost plus a drink.<br>Flashback " + GetManaSymbol$("4") + GetManaSymbol$("R") + "<i>(You may cast this card from your graveyard for its flashback cost. Then exile it.)</i>",
    flavor: "",
}

var DECK_STORM = [
    acquired_taste, acquired_taste, acquired_taste, acquired_taste,
    alcoholic_ritual, alcoholic_ritual, alcoholic_ritual, alcoholic_ritual,
    drinks_undrank, drinks_undrank, drinks_undrank, drinks_undrank,
    drunken_pillaging, drunken_pillaging, drunken_pillaging, drunken_pillaging,
    goblin_alchomancer, goblin_alchomancer, goblin_alchomancer, goblin_alchomancer,
    keg_stand, keg_stand, keg_stand, keg_stand,
    lightning_breath, lightning_breath, lightning_breath, lightning_breath,
    mull, mull, mull, mull,
    past_mistakes, past_mistakes, past_mistakes, past_mistakes,
];