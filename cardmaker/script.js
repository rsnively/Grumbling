
var cardWidth = 234;
var cardHeight = 327;

var artWidth = cardWidth * 0.83;
var artHeight = cardHeight * 0.44;

var AAMember = {
	name: "AA Member",
	cost: "W",
	types: ["Creature"],
	subtypes: ["Sober", "Human"],
	rarity: "C",
	rules: "Sacrifice AA Member: Abstain 1 <span class='reminder'>(Prevent the next 1 drink that would be dealt to you this turn.)</span>",
	flavor: "The first step towards recovery is having a problem.",
	power: 1,
	toughness: 2
};
var Beer = {
	name: "Beer",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "C",
	rules: GetTapSymbol$() + ": Drink 1.",
	flavor: "\"Yep.\""
};
var BeerBong = {
	name: "Beer Bong",
	cost: "3",
	types: ["Artifact"],
	subtypes: ["Equipment"],
	rarity: "R",
	rules: "Equipped creature gets shotguntouch. <span class='reminder'>(When this creature deals damage to a player, that player shotguns a beer.)</span><br>Equip " + GetManaSymbol$("4")
};
var Beerbear = {
	name: "Beerbear",
	cost: "1G",
	types: ["Creature"],
	subtypes: ["Drunk", "Bear"],
	rarity: "C",
	rules: GetManaSymbol$("1") + GetManaSymbol$("G") + ", Drink 1: Beerbear gets +2/+2 until end of turn. Activate this ability only once each turn.",
	power: 2,
	toughness: 2
}
var BigBird = {
	name: "Big Bird",
	cost: "4W",
	types: ["Creature"],
	subtypes: ["Sober", "Bird"],
	rarity: "C",
	rules: "Flying, vigilance<br>Whenever Big Bird attacks, Abstain 1. <span class='reminder'>(Prevent the next 1 drink that would be dealt to you this turn.)</span>",
	power: 3,
	toughness: 3
};
var BigSlurp = {
	name: "Big Slurp",
	cost: "3R",
	types: ["Sorcery"],
	rarity: "C",
	rules: "Big slurp deals 4 damage to target player. That player drinks 4."
};
var Brid = {
	name: "Brid",
	cost: "2W",
	types: ["Creature"],
	subtypes: ["Bird"],
	rarity: "C",
	rules: "Flying",
	power: 2,
	toughness: 2
};
var BubblingStout = {
	name: "Bubbling Stout",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", " + GetManaSymbol$("1") + GetManaSymbol$("B") + ": Each player loses X life and you gain X life, where X is the number of Beers you control."
};
var DiligentBouncer = {
	name: "Diligent Bouncer",
	cost: "2W",
	types: ["Creature"],
	subtypes: ["Sober", "Human"],
	rarity: "C",
	rules: "Flash<br>When Diligent Bouncer enters the battlefield, Abstain 1. <span class='reminder'>(Prevent the next 1 drink that would be dealt to you this turn.)</span>",
	power: 1,
	toughness: 4
};
var DrinkAlone = {
	name: "Drink Alone",
	cost: "1B",
	types: ["Sorcery"],
	rarity: "C",
	rules: "Target player draws 2 cards, loses 2 life, and drinks 2."
};
var Forty = {
	name: "Forty",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", " + GetManaSymbol$("1") + GetManaSymbol$("R") + ": Each player drinks X, where X is the number of Beers you control."
};
var LightBeer = {
	name: "Light Beer",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", "  + GetManaSymbol$("1") + GetManaSymbol$("G") + ": Target creature gets +X/+X until end of turn, where X is the number of Beers you control."
}
var MoggDrunkies = {
	name: "Mogg Drunkies",
	cost: "1R",
	types: ["Creature"],
	subtypes: ["Drunk", "Goblin"],
	rarity: "C",
	rules: "Mogg Drunkies can't attack or block unless you've taken a drink this turn.",
	power: 3,
	toughness: 3
};
var MonkBrewedIPA = {
	name: "Monk-Brewed IPA",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", "  + GetManaSymbol$("1") + GetManaSymbol$("U") + ": Scry X, where X is the number of Beers you control."
};
var NonAlcoholicBeer = {
	name: "Non-Alcoholic Beer",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", " + GetManaSymbol$("1") + GetManaSymbol$("W") + ": Abstain X, where X is the number of Beers you control. <span class='reminder'>(Prevent the next X drinks that would be dealt to you this turn.)</span>"
};
var PartyStarter = {
	name: "Party Starter",
	cost: "1R",
	types: ["Creature"],
	subtypes: ["Human", "Rogue"],
	rarity: "U",
	rules: "Haste<br>When Party Starter enters the battlefield, each player Drinks 1.",
	power: 2,
	toughness: 1
};
var PBArborElf = {
	name: "PBArbor Elf",
	cost: "G",
	types: ["Creature"],
	subtypes: ["Drunk", "Elf"],
	rarity: "C",
	rules: GetTapSymbol$() + ": Add " + GetManaSymbol$("G") + " to your mana pool.",
	power: 1,
	toughness: 1
};
var Shocktop = {
	name: "Shocktop",
	cost: "R",
	types: ["Instant"],
	rarity: "C",
	rules: "Shocktop deals 2 damage to target creature or player. Target player drinks 1."
};
var SulbeericVortex = {
	name: "Sulbeeric Vortex",
	cost: "1RR",
	types: ["Enchantment"],
	rarity: "U",
	rules: "At the beginning of each player's upkeep, that player loses 2 life and drinks 1."
};
var TheWheel = {
	name: "The Wheel",
	cost: "5",
	types: ["Artifact"],
	rarity: "R",
	rules: "At the beginning of your upkeep, you may pay " + GetManaSymbol$("W") + GetManaSymbol$("U") + GetManaSymbol$("B") + GetManaSymbol$("R") + GetManaSymbol$("G") + ". If you do, target player takes a shot."
};
var WizardsStaff = {
	name: "Wizard&#39;s Staff",
	cost: "3",
	types: ["Artifact"],
	rarity: "R",
	rules: GetTapSymbol$() + ", Shotgun a beer: Put a drink counter on Wizard's Staff.<br>" + GetTapSymbol$() + ": Gain control of target creature with converted mana cost less than or equal to the number of drink counters on Wizard's Staff."
};
var YokedCrab = {
	name: "Yoked Crab",
	cost: "2U",
	types: ["Creature"],
	subtypes: ["Crab"],
	rarity: "C",
	flavor: "\"Dude. Crab's yoked.\"",
	power: 1,
	toughness: 4
};

var allcards = [
	AAMember,
	Beer,
	BeerBong,
	Beerbear,
	BigBird,
	BigSlurp,
	Brid,
	BubblingStout,
	DiligentBouncer,
	DrinkAlone,
	Forty,
	MonkBrewedIPA,
	LightBeer,
	MoggDrunkies,
	NonAlcoholicBeer,
	PartyStarter,
	PBArborElf,
	Shocktop,
	SulbeericVortex,
	TheWheel,
	WizardsStaff,
	YokedCrab
];

function GetColor(card) {
	console.log(card.cost);
	var w = card.cost.includes("W");
	var u = card.cost.includes("U");
	var b = card.cost.includes("B");
	var r = card.cost.includes("R");
	var g = card.cost.includes("G");
	
	if (w + u + b + r + g > 1) return "M";
	if (w) return "W";
	if (u) return "U";
	if (b) return "B";
	if (r) return "R";
	if (g) return "G";
	return "";
}

function GetBackground$(card) {
	var base = "";
	var color = GetColor(card);
	if (card.types.includes("Creature")) {
		if (color == "W") base = "white_creature";
		else if (color == "U") base = "blue_creature";
		else if (color == "B") base = "black_creature";
		else if (color == "R") base = "red_creature";
		else if (color == "G") base = "green_creature";
		else if (color == "M") base = "multicolor_creature";
		else base = "artifact_creature";
	}
	else {
		if (color == "W") base = "white_noncreature";
		else if (color == "U") base = "blue_noncreature";
		else if (color == "B") base = "black_noncreature";
		else if (color == "R") base = "red_noncreature";
		else if (color == "G") base = "green_noncreature";
		else if (color == "M") base = "multicolor_noncreature";
		else base = "artifact_noncreature";
	}
	return "<img class='background' src='../img/cardmaker/" + base + ".jpg' width=" + cardWidth + " height=" + cardHeight + " />";
}

function GetCardName$(card) {
	return "<span class='cardname'>" + card.name + "</span>";
}

function GetCostSymbol$(symbol, index) {
	return "<span class='ms ms-cost ms-" + symbol.toLowerCase() + " ms-shadow mana" + index + "'></span>";
}

function GetManaSymbol$(color) {
	var fontsize = cardHeight * 0.028;
	return "<span class='ms ms-" + color.toLowerCase() + " ms-cost' style='font-size: " + fontsize + "px'></span>";
}

function GetTapSymbol$() {
	var fontsize = cardHeight * 0.028;
	return "<span class='ms ms-cost ms-tap' style='font-size: " + fontsize + "px'></span>";
}

function GetManaCost$(card) {
	var mc$ = "";
	for (var i = 0; i < card.cost.length; i++)
		mc$ += GetCostSymbol$(card.cost.charAt(card.cost.length - i - 1), i);
	return mc$;
}

function GetCardArt$(card) {
	return "<img class='cardart' src='../img/art/" + card.name + ".jpg' width=" + artWidth + " height=" + artHeight + " />";
}

function GetCardType$(card) {
	var typeline$ = "<span class='cardtype'>";
	for (var t in card.types)
		typeline$ += card.types[t] + " ";
	if (card.subtypes != undefined) {
		typeline$ += "&mdash; ";
		for (var s in card.subtypes)
			typeline$ += card.subtypes[s] + " ";
	}
	return typeline$ + "</span>";
}

function GetCardRarity$(card) {
	var r = "";
	if (card.rarity == "C") r = "common";
	else if (card.rarity == "U") r = "uncommon";
	else r ="rare";
	
	var height = cardHeight * 0.04;
	var width = cardWidth * 0.04;
	
	return "<img class='rarity' src='../img/cardmaker/rarity_" + r + ".png' width=" + width + " height=" + height + " />";
}

function GetCardText$(card) {
	var rules$ = card.rules == undefined ? "" :"<span class='cardtext'>" + card.rules + "</span>";
	var flavor$ = card.flavor == undefined ? "" : "<span class='cardflavor'><i>" + card.flavor + "</i></span>";
	return rules$ + flavor$;
}

function GetPT$(card) {
	if (!card.types.includes("Creature"))
		return "";
	return "<span class='powertoughness'>" + card.power + "/" + card.toughness + "</span>";
}

function GetCard$(card) {
	return "<div class='card'>" +
		GetBackground$(card) +
		GetCardName$(card) +
		GetManaCost$(card) +
		GetCardArt$(card) +
		GetCardType$(card) +
		GetCardRarity$(card) +
		GetCardText$(card) +
		GetPT$(card) +
		"</div>";
}

function main() {
	var cards$ = "";
	for (var c = 0; c < allcards.length; c++) {
		cards$ += GetCard$(allcards[c]);
	}
	$("body").html(cards$);
}

$(document).ready(main);