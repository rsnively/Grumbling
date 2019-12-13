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