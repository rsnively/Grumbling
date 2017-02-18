
var cardWidth = 234;
var cardHeight = 327;

var artWidth = cardWidth * 0.83;
var artHeight = cardHeight * 0.44;

function GetBackground(manaCost, cardType) {
	// TODO
	return "<img class='background' src='../img/cardmaker/blue_creature.jpg' width=" + cardWidth + " height=" + cardHeight + " />";
}

function GetCardname(name) {
	return "<span class='cardname'>" + name + "</span>";
}

function GetManaCost(manaCost) {
	return "<span class='ms ms-cost ms-3 ms-shadow mana1'></span><span class='ms ms-cost ms-u ms-shadow mana0'></span>";
}

function GetCardArt(loc) {
	return "<img class='cardart' src='" + loc + "' width=" + artWidth + " height=" + artHeight + " />";
}

function GetCardType(type) {
	return "<span class='cardtype'>" + type + "</span>";
}

function GetCardText(text, flavor) {
	return "<span class='cardtext'>" + text + "<br><br><span style='font-family: \"MPlantin Italic\" arial serif;'><i>" + flavor + "</i></span></span>";
}

function GetPT(power, toughness) {
	return "<span class='powertoughness'>" + power + "/" + toughness + "</span>";
}

function getCardDiv(name, manaCost, type, power, toughness, text, flavor) {
	var r = "<div class='card'>"
	r += GetBackground(manaCost, "todo");
	r += GetCardname(name);
	r += GetManaCost(manaCost);
	r += GetCardArt("../img/cardmaker/arttest.png");
	r += GetCardType(type);
	r += GetCardText(text, flavor);
	r += GetPT(power, toughness);
	r += "</div>"
	return r;
}

function main() {
	$("body").html(getCardDiv("Drownyard Explorers", "3U", "Creature &mdash; Human Wizard", 2, 4, "When Drownyard Explorers enters the battlefield, investigate. <span style='font-family: \"MPlantin Italic\" arial serif;'><i>(Put a colorless Clue artifact token onto the battlefield with \"</i></span><span class='ms ms-cost ms-2 ms-2' style='font-size:7px' /><span style='font-family: \"MPlantin Italic\" arial serif;'><i>, Sacrifice this artifact: Draw a card.\")</i></span>", "\"Angels and inquisitors terrorize villages, but no one seems to notice the stirring out at sea.\""));
}

$(document).ready(main);