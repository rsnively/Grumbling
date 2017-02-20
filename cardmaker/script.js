
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
var BubblingStout = {
	name: "Bubbling Stout",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", " + GetManaSymbol$("1") + GetManaSymbol$("B") + ": Each player loses X life and you gain X life, where X is the number of Beers you control."
};
var Forty = {
	name: "Forty",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", " + GetManaSymbol$("1") + GetManaSymbol$("R") + ": Each player drinks X, where X is the number of Beers you control.",
};
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
var NonAlcoholicBeer = {
	name: "Non-Alcoholic Beer",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", " + GetManaSymbol$("1") + GetManaSymbol$("W") + ": Abstain X, where X is the number of Beers you control. <span class='reminder'>(Prevent the next X drinks that would be dealt to you this turn.)</span>"
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
var YokedCrab = {
	name: "Yoked Crab",
	cost: "2U",
	types: ["Creature"],
	subtypes: ["Crab"],
	flavor: "\"Dude. Crab's yoked.\"",
	power: 1,
	toughness: 4
};

function GetColor(card) {
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
		return "<span class='ms ms-" + color.toLowerCase() + " ms-cost' style='font-size: 9px'></span>";
}

function GetTapSymbol$() {
	return "<span class='ms ms-cost ms-tap' style='font-size: 9x'></span>";
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
	if (card.subtypes.length > 0)
		typeline$ += "&mdash; ";
	for (var s in card.subtypes)
		typeline$ += card.subtypes[s] + " ";
	return typeline$ + "</span>";
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
		GetCardText$(card) +
		GetPT$(card) +
		"</div>";
}

function main() {
	$("body").html(
		GetCard$(AAMember) +
		GetCard$(Beer) +
		GetCard$(BubblingStout) +
		GetCard$(Forty) +
		GetCard$(MoggDrunkies) +
		GetCard$(NonAlcoholicBeer) +
		GetCard$(PBArborElf) +
		GetCard$(YokedCrab)
	);
}

$(document).ready(main);