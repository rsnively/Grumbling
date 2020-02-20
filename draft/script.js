
// Card dimensions
var card_width_actual = 223;
var card_height_actual = 311;

var card_width = card_width_actual;
var card_height = card_height_actual;

function Card(name, manaCost, color, type, rarity) {
    this.name = name;
    this.manaCost = manaCost;

    // WUBRG, "" = colorless, M = multicolored
    this.color = color;

    // Land, Creature, Instant...
    this.type = type;

    // C, U, R, M
    this.rarity = rarity;
}


// Arrays for holding all of the card names.

var grumbling_uncommons = [
    new Card("Bubbling Stout", 1, "", "Artifact", "U"),
    new Card("Forty", 1, "", "Artifact", "U"),
    new Card("Non Alcoholic Beer", 1, "", "Artifact", "U")
];
var grumbling_rares = [
    new Card("Steve Ballmer Executive", 3, "M", "Creature", "R")
]


var draftTypeChosen = [];

var collection = [];

var sortedByCMC = true;         // CMC > Color > Name (the default sorting method)
var sortedByColor = false;      // Color > Name
var sortedByRarity = false;     // Rarity > Color > Name

var sideboard = [];

function makeImageTag(card) {
    return "<img src='./../img/cards/" + card.name + ".png' width=" + card_width + " height= " + card_height + " />";
}

function makeRelativeImageTag(card, left, top) {
    return "<img src='./../img/cards/" + card.name + ".png' width=" + card_width + " height=" + card_height + " style='position: absolute; left: " + left + "px; top: " + top + "px' />";
}

function grumbling_pack() {
    return generatePack(grumbling_rares, grumbling_uncommons, grumbling_commons);
}

function generatePack(rares, uncommons, commons) {
    var pack = [];

    var rare_r = Math.floor(Math.random() * rares.length);
    pack.push(rares[rare_r]);

    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * uncommons.length);
        pack.push(uncommons[r]);
    }

    for (var i = 0; i < 10; i++) {
        var r = Math.floor(Math.random() * commons.length);
        pack.push(commons[r]);
    }

	/* This'll work once we have enough cards
	 TODO: mythics???
    var mythic_or_rare = Math.random() * 8;
    if (mythic_or_rare < 1) {
        var r = Math.floor(Math.random() * mythics.length);
        pack.push(mythics[r]);
    }
    else {
        var r = Math.floor(Math.random() * rares.length);
        pack.push(rares[r]);
    }
    
    var used_uncommons = [];
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * uncommons.length);
        if ($.inArray(uncommons[r], used_uncommons) === -1) {
            pack.push(uncommons[r]);
            used_uncommons.push(uncommons[r]);
        }
        else {
            i--;
        }
    }
    
    var used_commons = [];
    for (var i = 0; i < 10; i++) {
        var r = Math.floor(Math.random() * commons.length);
        if ($.inArray(commons[r], used_commons) === -1) {
            pack.push(commons[r]);
            used_commons.push(commons[r]);
        }
        else {
            i--;
        }
    }
	*/

	/* If we ever do foils...
    var foil_or_land = Math.random() * 6.5;
    if (foil_or_land < 1) {
        var rarity = Math.random() * 120;
        if (rarity < 80) {
            var r = Math.floor(Math.random() * commons.length);
            pack.push(commons[r]);
        }
        else if (rarity < 104) {
            var r = Math.floor(Math.random() * uncommons.length);
            pack.splice(3, 0, uncommons[r]);
        }
        else if (rarity < 111) {
            var r = Math.floor(Math.random() * rares.length);
            pack.splice(1, 0, rares[r]);
        }
        else if (rarity < 112) {
            var r = Math.floor(Math.random() * mythics.length);
            pack.splice(0, 0, mythics[r]);
        }
        else {
            var r = Math.floor(Math.random() * lands.length);
            pack.push(lands[r]);
        }
    }
    else {
        var r = Math.floor(Math.random() * lands.length);
        pack.push(lands[r]);
    }
	*/
    return pack;
}

// Cut a card from a pack
function makePick(pack) {
    for (var i = 0; i < pack.length; i++) {
        var pick = Math.random();
        if (pick < 0.5) {
            pack.splice(i, 1);
            return;
        }
    }

    pack.splice(0, 1);
}

function addToCollection(card) {
    var colorOrder = ["W", "U", "B", "R", "G", "M", ""];
    var rarityOrder = ["M", "R", "U", "C"];

    if (sortedByCMC) {
        for (var i = 0; i < collection.length; i++) {
            // New card's mana cost already exists, insert it.
            if (collection[i][0].manaCost === card.manaCost) {
                // Find appropriate color.
                for (var j = 0; j < collection[i].length; j++) {
                    // No existing cards of appropriate color.
                    if (colorOrder.indexOf(collection[i][j].color) > colorOrder.indexOf(card.color)) {
                        collection[i].splice(j, 0, card);
                        return;
                    }
                    // Find alphabetical location to place card within color.
                    if (collection[i][j].color === card.color && collection[i][j].name >= card.name) {
                        collection[i].splice(j, 0, card);
                        return;
                    }
                }
                // No cards of appropriate color, place at end.
                collection[i].push(card);
                return;
            }
            // New card is first of its mana cost, add new column.
            if (collection[i][0].manaCost > card.manaCost) {
                collection.splice(i, 0, [card]);
                return;
            }
        }
        // New card is first of its mana cost and greater than the rest, add new column.
        collection.push([card]);
        return;
    }
    else if (sortedByColor) {
        for (var i = 0; i < collection.length; i++) {
            // Found column of appropriate color, insert alphabetically.
            if (collection[i][0].color === card.color) {
                for (var j = 0; j < collection[i].length; j++) {
                    if (card.name <= collection[i][j].name) {
                        collection[i].splice(j, 0, card);
                        return;
                    }
                }
                // Card is last in column alphabetically.
                collection[i].push(card);
                return;
            }
            // No cards of appropriate color, add new column.
            if (colorOrder.indexOf(collection[i][0].color) > colorOrder.indexOf(card.color)) {
                collection.splice(i, 0, [card]);
                return;
            }
        }
        // Got to end of collection, push new column to end.
        collection.push([card]);
        return;
    }
    else if (sortedByRarity) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i][0].rarity === card.rarity) {
                for (var j = 0; j < collection[i].length; j++) {
                    // Found appropriate color and alphabetical position.
                    if (collection[i][j].color === card.color && collection[i][j].name >= card.name) {
                        collection[i].splice(j, 0, card);
                        return;
                    }
                    // Found color greater than card's.
                    if (colorOrder.indexOf(collection[i][j].color) > colorOrder.indexOf(card.color)) {
                        collection[i].splice(j, 0, card);
                        return;
                    }
                }
                // Put at end of column.
                collection[i].push(card);
                return;
            }
            if (rarityOrder.indexOf(collection[i][0].rarity) > rarityOrder.indexOf(card.rarity)) {
                collection.splice(i, 0, [card]);
                return;
            }
        }
        collection.push([card]);
        return;
    }
    else {
        console.log("All of the sorting methods returned FALSE.");
    }
}

function drawSideboard() {
    $("#sideboard").html("");

    for (var i = 0; i < sideboard.length; i++) {
        $("#sideboard").append(makeImageTag(sideboard[i]));
    }

    $("#sideboard img").click(function () {
        var cardIndex = ($("#sideboard img").index(this));
        addToCollection(sideboard[cardIndex]);
        sideboard.splice(cardIndex, 1);

        drawSideboard();
        drawCollection();
    });
}

function sortCollection() {
    var tempCollection = collection;
    collection = [];

    for (var i = 0; i < tempCollection.length; i++) {
        for (var j = 0; j < tempCollection[i].length; j++) {
            addToCollection(tempCollection[i][j]);
        }
    }
}

function drawCollection() {
    $("#player_collection").html("");

    // Generate numbers
    var num_cards = 0;
    var num_lands = 0;
    var num_creatures = 0;
    for (var i = 0; i < collection.length; i++) {
        for (var j = 0; j < collection[i].length; j++) {
            num_cards++;

            if (collection[i][j].type === "Land") {
                num_lands++;
            }
            else if (collection[i][j].type === "Creature") {
                num_creatures++;
            }
        }
    }

    $("#player_collection").append("<p style='color: orange'>Cards: " + num_cards + "  Lands: " + num_lands + "  Creatures: " + num_creatures + "  Other: " + (num_cards - num_lands - num_creatures) + "</p>");



    // Draw cards
    for (var i = 0; i < collection.length; i++) {
        var bin = collection[i];

        for (var j = 0; j < bin.length; j++) {
            $("#player_collection").append(makeRelativeImageTag(bin[j], i * (card_width + 20), 40 + j * 32));
        }
    }

    $("#player_collection img").click(function () {
        var cardIndex = ($("#player_collection img").index(this));

        var index = 0;
        for (var i = 0; i < collection.length; i++) {
            for (var j = 0; j < collection[i].length; j++) {
                if (index === cardIndex) {
                    sideboard.push(collection[i][j]);
                    collection[i].splice(j, 1);
                    if (collection[i].length === 0) {
                        collection.splice(i, 1);
                    }

                    drawSideboard();
                    drawCollection();
                    return;
                }
                index++;
            }
        }

        drawSideboard();
        drawCollection();
    });
}

function drawPack(rounds, roundNumber, packNumber) {
    $("#pack").html("");
    var pack = rounds[roundNumber][packNumber];
    for (var i = 0; i < pack.length; i++) {
        $("#pack").append(makeImageTag(pack[i]));
    }
    drawCollection();

    $("#pack img").click(function () {
        var cardIndex = ($("#pack img").index(this));
        addToCollection(pack[cardIndex]);
        pack.splice(cardIndex, 1);

        for (var i = 0; i < rounds[roundNumber].length; i++) {
            if (i !== packNumber) {
                makePick(rounds[roundNumber][i]);
            }
        }
        if (pack.length === 0) {
            if (roundNumber === 2) {
                $("#pack").html("");
                drawCollection();
            }
            else {
                drawPack(rounds, roundNumber + 1, 0);
            }
        }
        else {
            drawPack(rounds, roundNumber, (packNumber + 1) % 8);
        }
    });
}

function redrawSite() {
    $("body").html("");

    $("body").append("<div id='pack'></div>");
    $("body").append("<hr>");
    $("body").append("<span class='button' id='sort_cmc'>Sort by Converted Mana Cost</span>");
    $("body").append("<span class='button' id='sort_color'>Sort by Color</span>");
    $("body").append("<span class='button' id='sort_rarity'>Sort by Rarity</span>");
    $("body").append("<hr>");
    $("body").append("<div id='player_collection'></div>");
    $("body").append("<hr>");
    $("body").append("<div id='sideboard'></div>");
    main();
}

function main() {

    var rounds = [];
    for (var i = 0; i < 3; i++) {
        var packs = [];
        for (var j = 0; j < 8; j++) {
            packs.push(grumbling_pack());
        }
        rounds.push(packs);
    }

    drawPack(rounds, 0, 0);

    $("#sort_cmc").click(function () {
        sortedByCMC = true;
        sortedByColor = false;
        sortedByRarity = false;
        sortCollection();
        drawCollection();
    });

    $("#sort_color").click(function () {
        sortedByCMC = false;
        sortedByColor = true;
        sortedByRarity = false;
        sortCollection();
        drawCollection();
    });

    $("#sort_rarity").click(function () {
        sortedByCMC = false;
        sortedByColor = false;
        sortedByRarity = true;
        sortCollection();
        drawCollection();
    });
}

$(document).ready(main);