var WC01 = {
    name: "AA Member",
    cost: "W",
    types: ["Creature"],
    subtypes: ["Human", "Drunk"],
    rarity: "C",
    rules: "Sacrifice AA Member: Abstain 1 " + GetAbstainReminderText$(),
    flavor: "The first step towards recovery is having a problem.",
    power: 1,
    toughness: 2
};
var WC02 = {
    name: "Birb",
    cost: "W",
    types: ["Creature"],
    subtypes: ["Bird"],
    rarity: "C",
    rules: "Flying, lifelink",
    flavor: "",
    power: 1,
    toughness: 1
};
var WC03 = {
    name: "Goody Two-Shoes",
    cost: "1W",
    types: ["Creature"],
    subtypes: ["Human", "Cleric"],
    rarity: "C",
    rules: "Whenever you abstain from drinking, you gain 2 life.",
    flavor: "",
    power: 2,
    toughness: 1
};
var WC04 = {
    name: "Self-Assured Partygoer",
    cost: "1W",
    types: ["Creature"],
    subtypes: ["Human", "Monk"],
    rarity: "C",
    rules: "Whenever you abstain from drinking, ~ gets +1/+1 until end of turn.",
    flavor: "",
    power: 2,
    toughness: 2
};
var WC05 = {
    name: "Emotional Support Pouncer",
    cost: "1W",
    types: ["Creature"],
    subtypes: ["Cat", "Soldier"],
    rarity: "C",
    rules: "~ has first strike as long as you haven't taken a drink this turn.",
    flavor: "",
    power: 2,
    toughness: 1
};
var WC06 = {
    name: "Brid",
    cost: "1WW",
    types: ["Creature"],
    subtypes: ["Bird"],
    rarity: "C",
    rules: "Flying<br><br>" + GetManaSymbol$("1") + GetManaSymbol$("W") + ", " + GetTapSymbol$() + ": Abstain 1 " + GetAbstainReminderText$(1),
    flavor: "",
    power: 2,
    toughness: 2
};
var WC07 = {
    name: "Pretty Unicorn",
    cost: "2W",
    types: ["Creature"],
    subtypes: ["Unicorn"],
    rarity: "C",
    rules: "Whenever ~ is dealt damage by a source an opponent controls, that player Drinks 2.",
    flavor: "",
    power: 2,
    toughness: 3
};
var WC08 = {
    name: "Diligent Bouncer",
    cost: "2W",
    types: ["Creature"],
    subtypes: ["Human", "Sentry"],
    rarity: "C",
    rules: "Flash<br><br>When ~ enters the battlefield, Abstain 1. " + GetAbstainReminderText$(),
    flavor: "",
    power: 1,
    toughness: 4
};
var WC09 = {
    name: "Emotional Support Hound",
    cost: "3W",
    types: ["Creature"],
    subtypes: ["Dog", "Soldier"],
    rarity: "C",
    rules: "~ has vigilance as long as you haven't taken a drink this turn.",
    flavor: "",
    power: 3,
    toughness: 4
};
var WC10 = {
    name: "Fifth Legion Paladin",
    cost: "3W",
    types: ["Creature"],
    subtypes: ["Human", "Knight"],
    rarity: "C",
    rules: "Lifelink<br><br>When ~ enters the battlefield, if you haven't taken a drink this turn, you gain 2 life.",
    flavor: "",
    power: 2,
    toughness: 4
};
var WC11 = {
    name: "Borb",
    cost: "3WW",
    types: ["Creature"],
    subtypes: ["Bird"],
    rarity: "C",
    rules: "Flying<br><br>" + GetManaSymbol$("2") + GetManaSymbol$("W") + ", " + GetTapSymbol$() + ": Abstain 2 " + GetAbstainReminderText$(2),
    flavor: "",
    power: 3,
    toughness: 4
};
var WC12 = {
    name: "Unquenchable Tusker",
    cost: "4WW",
    types: ["Creature"],
    subtypes: ["Elephant", "Cleric"],
    rarity: "C",
    rules: GetManaSymbol$("3") + GetManaSymbol$("W") + ": Abstain 1. " + GetAbstainReminderText$(),
    flavor: "How many beers could an elephant store in its trunk?",
    power: 5,
    toughness: 4
};
var WC13 = {
    name: "Draft",
    cost: "2W",
    types: ["Instant"],
    rarity: "C",
    rules: "Create two 1/1 white Soldier creature tokens. If you have abstained from drinking this turn, this spell costs " + GetManaSymbol$("2") + " less to cast.",
    flavor: "(Not draught.)"
};
var WC14 = {
    name: "Prudish Advantage",
    cost: "1W",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Target creature gets +2/+2 until end of turn. If you haven't taken a drink this turn, that creature gains vigilance until end of turn.",
    flavor: ""
};
var WC15 = {
    name: "Alcoholics Anonymous",
    cost: "3W",
    types: ["Instant"],
    rarity: "C",
    rules: "Until end of turn, creatures you control gain +1/+1 and \"" + GetTapSymbol$() + ": Abstain 1.\"" + GetAbstainReminderText$(),
    flavor: "",
};
var WC16 = {
    name: "Shattered Glass",
    cost: "1W",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Destroy target artifact or enchantment. If a Beer is destroyed in this way, its controller loses 2 life.",
    flavor: "",
};
var WC17 = {
    name: "Speed Trap",
    cost: "1W",
    types: ["Instant"],
    rarity: "C",
    rules: "~ deals 4 damage to target attacking or Drunk creature.",
    flavor: "",
};
var WC18 = {
    name: "Field Sobriety Test",
    cost: "4W",
    types: ["Instant"],
    rarity: "C",
    rules: "Exile target creature. If that creature's controller took a Drink this turn, you gain 3 life.",
    flavor: "",
};
var WC19 = {
    name: "Successful Intervention",
    cost: "2W",
    types: ["Enchantment"],
    subtypes: ["Aura"],
    rarity: "C",
    rules: "Enchant creature<br><br>Enchanted creature gets +2/+2 and has \"" + GetTapSymbol$() + ": Abstain 1.\"" + GetAbstainReminderText$(),
    flavor: "",
};
var WC20 = {
    name: "Ignition Interlock Device",
    cost: "W",
    types: ["Enchantment"],
    subtypes: ["Aura"],
    rarity: "C",
    rules: "Enchant creature<br><br>Enchanted creature can't attack or block if its controller has taken a drink this turn.",
    flavor: "",
};