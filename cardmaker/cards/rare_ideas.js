var Afterparty = {
    name: "Afterparty",
    cost: "1RW",
    types: ["Sorcery"],
    rarity: "M",
    rules: "Take an extra turn after this one.<br>At the beginning of your next upkeep, Drink N, where N is your life total.<br>At the end of your next turn, you lose the game.",
    flavor: "",
};

var TheWizardsStaff = {
    name: "The Wizard's Staff",
    cost: "6",
    supertypes: ["Legendary"],
    types: ["Artifact"],
    rarity: "M",
    rules: "At the beginning of your upkeep, Drink 1.<br>Whenever you Drink, put that many Charge counters on ~.<br>Whenever an opponent Drinks, remove that many charge counters from ~.<br>" + GetManaSymbol$("4") + ", " + GetTapSymbol$() + ", Remove 10 Charge counters from ~: You control target opponent during their next turn.",
    flavor: "",
};

var SpuriousTavern = {
    name: "Spurious Tavern",
    cost: "",
    types: ["Land"],
    rarity: "R",
    rules: GetTapSymbol$() + "Add " + GetManaSymbol$("U") + ". If you Drank this turn, add " + GetManaSymbol$("B") + " instead.",
    flavor: "",
};

var RowdyPub = {
    name: "Rowdy Pub",
    cost: "",
    types: ["Land"],
    rarity: "R",
    rules: "When ~ enters the battlefield, Cheers! " + GetCheersReminderText$() + "<br><br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("R") + " or " + GetManaSymbol$("G") + ".",
    flavor: "",
};

var BudweiserKingOfBeers = {
    name: "Budweiser, King of Beers",
    cost: "3",
    supertypes: ["Legendary"],
    types: ["Artifact"],
    subtypes: ["Beer"],
    rarity: "R",
    rules: "Beers you control have \"" + GetTapSymbol$() + ", Drink 1: Add one mana of any color.",
    flavor: "",
};

var AlcoholicsAnonymous = {
    name: "Alcoholics Anonymous",
    cost: "WW",
    types: ["Enchantment"],
    rarity: "R",
    rules: "At the beginning of your end step, put a Chip counter on ~, then if it has 12 or more Chip counters on it, you win the game.<br>Whenever you drink, remove a Chip counter from ~.<br>As long as ~ has 3 or more Chip counters on it, creatures you control get +1/+1.",
    flavor: "",
};

var NeverHaveIEver = {
    name: "Never Have I Ever",
    cost: "2BB",
    types: ["Enchantment"],
    rarity: "M",
    rules: "At the beginning of your end step, choose one that hasn't been chosen:<br>- ~ deals 3 damage to any target and you gain 3 life.<br>- Draw 3 cards.<br>- Drink 3.<br>- You lose the game.",
    flavor: "",
};

var PukeVault = {
    name: "Pukevault",
    cost: "",
    types: ["Land"],
    rarity: "R",
    rules: GetTapSymbol$() + ": Add " + GetManaSymbol$("C") + "<br><br>" + GetManaSymbol$("2") + ", drink 2: ~ becomes a 2/2 creature with all creature types until end of turn. Its still a a land.",
    flavor: "",
};

var SixPackRat = {
    name: "Six Pack Rat",
    cost: "1B",
    types: ["Creature"],
    subtypes: ["Rat"],
    rarity: "R",
    rules: "~ gets +1/+1 for each creature named ~ you control.<br><br>" + GetManaSymbol$("3") + ", drink 1, discard a card: Create a token that's a copy of ~.",
    flavor: "",
    power: 0,
    toughness: 0,
};

var CityOfClass = {
    name: "City of Class",
    cost: "",
    types: ["Land"],
    rarity: "R",
    rules: "Whenever ~ becomes tapped, drink 1.<br><br>" + GetTapSymbol$() + ": Add one mana of any color.",
    flavor: "",
};