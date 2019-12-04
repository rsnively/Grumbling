var UC01 = {
    name: "Kork River Swimmer",
    cost: "U",
    types: ["Creature"],
    subtypes: ["Merfolk", "Drunk"],
    rarity: "C",
    rules: "Drink 1: Kork River Swimmer can't be blocked this turn.",
    flavor: "The waters of the Kork River offer swift passage to those willing to take on a light buzz.",
    power: 1,
    toughness: 1
};
var UC02 = {
    name: "Drunken Excavator",
    cost: "1U",
    types: ["Creature"],
    subtypes: ["Drunk", "Artificer"],
    rarity: "C",
    rules: "When Drunken Excavator enters the battlefield, target player puts the top 4 cards of their library into their graveyard. If an artifact is put into that player's graveyard this way, you Drink 1.",
    flavor: "",
    power: 0,
    toughness: 4
};
var UC03 = {
    name: "Faerie Lightweight",
    cost: "1U",
    types: ["Creature"],
    subtypes: ["Faerie", "Rogue"],
    rarity: "C",
    rules: "Flying<br>" + GetManaSymbol$("U") + ", Drink 1: Faerie Lightweight gets +1/-1 until end of turn.",
    flavor: "",
    power: 1,
    toughness: 2
};
var UC04 = {
    name: "Fifth Legion Mage",
    cost: "2U",
    types: ["Creature"],
    subtypes: ["Human", "Wizard"],
    rarity: "C",
    rules: "When Fifth Legion Mage enters the battlefield, if you haven't taken a drink this turn, draw a card.",
    flavor: "",
    power: 2,
    toughness: 3
};
var UC05 = {
    name: "Weary Barman",
    cost: "2U",
    types: ["Creature"],
    subtypes: ["Human", "Bartender"],
    rarity: "C",
    rules: GetTapSymbol$() + ": Tap target Drunk creature.",
    flavor: "",
    power: 2,
    toughness: 2
};
var UC06 = {
    name: "Yoked Crab",
    cost: "3U",
    types: ["Creature"],
    subtypes: ["Crab"],
    rarity: "C",
    rules: "",
    flavor: "\"Dude. Crab's yoked.\"",
    power: 1,
    toughness: 6
};
var UC07 = {
    name: "Soberscale Drake",
    cost: "3U",
    types: ["Creature"],
    subtypes: ["Drake"],
    rarity: "C",
    rules: "Flying<br>Whenever you Drink, Soberscale Drake loses flying until end of turn.",
    flavor: "\"Its weakness is alcohol. Now, who wants to get near its mouth?\"",
    power: 3,
    toughness: 3
};
var UC08 = {
    name: "Vengeful Snapper",
    cost: "4UU",
    types: ["Creature"],
    subtypes: ["Turtle"],
    rarity: "C",
    rules: "When Vengeful Snapper enters the battlefield, destroy target Beer.",
    flavor: "",
    power: 5,
    toughness: 6
};
var UC09 = {
    name: "Acquired Taste",
    cost: "U",
    types: ["Instant"],
    rarity: "C",
    rules: "Draw a card and Drink 1, then draw cards equal to the number of cards named Acquired Taste in all graveyards.",
    flavor: ""
};
var UC10 = {
    name: "Attempt to Recall",
    cost: "2U",
    types: ["Sorcery"],
    rarity: "C",
    rules: "If you haven't taken a drink this turn, scry 1.<br>Draw 2 cards.",
    flavor: ""
};
var UC11 = {
    name: "Bounce",
    cost: "1U",
    types: ["Instant"],
    rarity: "C",
    rules: "Return target creature to its owner's hand. If a Drunk creature is returned to its owner's hand this way, draw a card.",
    flavor: ""
};
var UC12 = {
    name: "Questionable Leap",
    cost: "U",
    types: ["Instant"],
    rarity: "C",
    rules: "As an additional cost to cast this spell, Drink 2.<br>Target creature gains flying until end of turn.<br>Draw a card.",
    flavor: ""
};
var UC13 = {
    name: "Inebriate",
    cost: "2U",
    types: ["Instant"],
    rarity: "C",
    rules: "Target creature gets -4/-0 and is a Drunk in addition to its other types until end of turn.<br>Draw a card.",
    flavor: ""
};
var UC14 = {
    name: "Slosh",
    cost: "1UU",
    types: ["Instant"],
    rarity: "C",
    rules: "Counter target spell. Its controller Drinks 1.",
    flavor: ""
};
var UC15 = {
    name: "Two Drink Minimum",
    cost: "U",
    types: ["Instant"],
    rarity: "C",
    rules: "Counter target noncreature spell unless its controller Drinks 2.<br>Draw a card.",
    flavor: "\"By law, we can't force you to consume alcohol. Let's try magic instead.\"",
};
var UC16 = {
    name: "Teetotal",
    cost: "U",
    types: ["Instant"],
    rarity: "C",
    rules: "Until end of turn, spells and abilities your opponents control can't cause you to Drink.",
    flavor: "",
};
var UC17 = {
    name: "Top Off",
    cost: "2UU",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Put target nonland permanent on top of its owner's library.<br>That permanent's controller Drinks 1.",
    flavor: "",
};
var UC18 = {
    name: "Doubled Form",
    cost: "2U",
    types: ["Enchantment"],
    subtypes: ["Aura"],
    rarity: "C",
    rules: "Enchant creature<br>Enchanted creature gets +2/+2 and can't be blocked by Drunk creatures.",
    flavor: "",
};
var UC19 = {
    name: "Besottify",
    cost: "1UU",
    types: ["Enchantment"],
    subtypes: ["Aura"],
    rarity: "C",
    rules: "Enchant creature<br>Enchanted creature loses all abilities is a colorless Drunk creature with base power and toughness 1/1.",
    flavor: "",
};
var UC20 = {
    name: "On the Rocks",
    cost: "1U",
    types: ["Enchantment"],
    subtypes: ["Aura"],
    rarity: "C",
    rules: "Enchant creature<br>Whenever enchanted creature's controller Drinks, tap enchanted creature.",
    flavor: "\"This is the opposite of neat.\""
};