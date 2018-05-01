
var cardWidth = 234;
var cardHeight = 327;

var artWidth = cardWidth * 0.83;
var artHeight = cardHeight * 0.44;

var DesignatedDriver = {
    name: "Designated Driver",
    cost: "1RW",
    types: ["Creature"],
    subtypes: ["Drunk", "Sober", "Human"],
    rarity: "U",
    rules: "Whenever Designated Driver attacks, abstain 1 <span class='reminder'>(Prevent the next 1 drink that would be dealt to you this turn.)</span><br>Whenever Designated Driver deals combat damage to an opponent, each player drinks 1.",
    power: 3,
    toughness: 3
}

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
var BackalleyBeerman = {
	name: "Backalley Beerman",
	cost: "2B",
	types: ["Creature"],
	subtypes: ["Drunk", "Rogue"],
	rarity: "C",
	rules: "When Backalley Beerman dies, you may drink 1. If you do, put a +1/+1 counter on target creature.",
	power: 3,
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
};
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
var BoomRoasted = {
	name: "Boom! Roasted",
	cost: "1R",
	types: ["Sorcery"],
	rarity: "C",
	rules: "Boom! Roasted deals 5 damage to target non-drunk creature."
};
var BoozeplagueRat = {
	name: "Boozeplague Rat",
	cost: "1B",
	types: ["Creature"],
	subtypes: ["Drunk", "Rat"],
	rarity: "C",
	rules: "Deathtouch</br>Drinktouch <span class='reminder'>(Whenever this creature deals damage to a player, that player drinks 1.)</span>",
	power: 1,
	toughness: 1
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
var DrownYourSorrows = {
	name: "Drown Your Sorrows",
	cost: "2B",
	types: ["Sorcery"],
	rarity: "U",
	rules: "As an additional cost to cast Drown Your Sorrows, drink X. Target creature gets -X/-X until end of turn.",
};
var DrunkenPillaging = {
	name: "Drunken Pillaging",
	cost: "R",
	types: ["Sorcery"],
	rarity: "C",
	rules: "Draw two cards, then discard two cards.<br>Flashback " + GetManaSymbol$("2") + GetManaSymbol$("R") + ", Drink 1 <span class='reminder'>(You may cast this card from your graveyard for its flashback cost. Then exile it.)</span>"
};
var FinishOff = {
	name: "Finish Off",
	cost: "1W",
	types: ["Instant"],
	rarity: "C",
	rules: "Destroy target artifact or enchantment. If it's an untapped beer, you drink 1 and gain 2 lfe.",
};
var Forty = {
	name: "Forty",
	cost: "1",
	types: ["Artifact"],
	subtypes: ["Beer"],
	rarity: "U",
	rules: GetTapSymbol$() + ", " + GetManaSymbol$("1") + GetManaSymbol$("R") + ": Each player drinks X, where X is the number of Beers you control."
};
var GoblinBarsonist = {
	name: "Goblin Barsonist",
	cost: "R",
	types: ["Creature"],
	subtypes: ["Goblin"],
	rarity: "C",
	rules: "When Goblin Barsonist dies, it deals 1 drink to target player.",
	power: 1,
	toughness: 1
};
var GoblinDrinkslinger = {
	name: "Goblin Drinkslinger",
	cost: "2R",
	types: ["Creature"],
	subtypes: ["Goblin", "Bartender"],
	rarity: "C",
	rules: GetTapSymbol$() + ": Target player drinks 1.",
	power: 2,
	toughness: 2
};
var IgnitionInterlockDevice = {
	name: "Ignition Interlock Device",
	cost: "1W",
	types: ["Enchantment"],
	subtypes: ["Aura"],
	rarity: "C",
	rules: "Enchant creature<br>Enchanted creature can't attack or block if it's controller has taken a drink this turn."
};
var InsistentImp = {
	name: "Insistent Imp",
	cost: "2R",
	types: ["Creature"],
	subtypes: ["Devil"],
	rarity: "C",
	rules: "Drinktouch <span class='reminder'>(Whenever this creature deals damage to a player, that player drinks 1.)</span>",
	power: 3,
	toughness: 2
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
var ParoleOfficer = {
	name: "Parole Officer",
	cost: "1W",
	types: ["Creature"],
	subtypes: ["Sober", "Human"],
	rarity: "C",
	rules: "Parole Officer can't be blocked by drunks.",
	power: 3,
	toughness: 1
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
var ThirstyMarauder = {
	name: "Thirsty Marauder",
	cost: "1R",
	types: ["Creature"],
	subtypes: ["Drunk", "Warrior"],
	rarity: "C",
	rules: "Whenever Thirsty Marauder attacks, you may drink 1. If you do, it gets +2/+0 until end of turn.",
	power: 1,
	toughness: 2
};
var VampireEnabler = {
	name: "Vampire Enabler",
	cost: "1BB",
	types: ["Creature"],
	subtypes: ["Vampire"],
	rarity: "U",
	rules: "Flying, lifelink<br>Drinktouch <span class='reminder'>(Whenever this creature deals damage to a player, that player drinks 1.)</span>",
	power: 2,
	toughness: 3
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
var YokedIguana = {
	name: "Yoked Iguana",
	cost: "3R",
	types: ["Creature"],
	subtypes: ["Lizard"],
	rarity: "C",
	flavor: "\"Bruh.\"",
	power: 4,
	toughness: 2
};

//Red commons TODO
// - big creature (4/5 upside for 5?)
// - good 4 drop (3/3 haste upside?)
// - combat trick
// - removal (1 damage drink for additional targets?)
// - bad sorc cantrip (can't block? tap? untap? haste?)
// - art/land destruction
// - threaten
// - bad aura
// - artifact




var allcards = [
	AAMember,
	BackalleyBeerman,
	Beer,
	BeerBong,
	Beerbear,
	BigBird,
	BigSlurp,
	BoomRoasted,
	BoozeplagueRat,
	Brid,
	BubblingStout,
    DesignatedDriver,
	DiligentBouncer,
	DrinkAlone,
	DrownYourSorrows,
	DrunkenPillaging,
	FinishOff,
	Forty,
	GoblinBarsonist,
	GoblinDrinkslinger,
	IgnitionInterlockDevice,
	InsistentImp,
	LightBeer,
	MoggDrunkies,
	MonkBrewedIPA,
	NonAlcoholicBeer,
	ParoleOfficer,
	PartyStarter,
	PBArborElf,
	Shocktop,
	SulbeericVortex,
	TheWheel,
	ThirstyMarauder,
	VampireEnabler,
	WizardsStaff,
	YokedCrab,
	YokedIguana
];

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
	
	/**
	// 1 of each card
	for (var c = 0; c < allcards.length; c++) {
		cards$ += GetCard$(allcards[c]);
	}**/
	
	// 3 commons, 1 uncommon
	for (var c = 0; c < allcards.length; c++) {
		if (GetColor(allcards[c]) != "U" && GetColor(allcards[c]) != "G" && allcards[c].name != "Monk-Brewed IPA" && allcards[c].name != "Light Beer") {
			if (allcards[c].rarity == "C") {
				for (var i = 0; i < 3; i++) {
					if (allcards[c].name == "Finish Off" || allcards[c].name == "Ignition Interlock Device")
						i++;
					cards$ += GetCard$(allcards[c]);
				}
			}
			if (allcards[c].name == "Beer") {
				for (var i = 0; i < 3; i++) {
					cards$ += GetCard$(allcards[c]);
				}
			}
			else if (allcards[c].rarity == "U") {
				cards$ += GetCard$(allcards[c]);
			}
		}
	}
	
	$("body").html(cards$);
}

$(document).ready(main);
