var cardWidth = 234;
var cardHeight = 327;

var artWidth = cardWidth * 0.83;
var artHeight = cardHeight * 0.44;

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

function GetAbstainReminderText$(amount) {
    amount = typeof amount !== 'undefined' ? amount : 1;
    var plural = amount == 1 ? "" : "s"
    var text = String(amount) + " drink" + plural;
    return "<span class='reminder'>(Abstain from the next " + text + " that would be dealt to you this turn.)</span>";
}

function GetCheersReminderText$(amount) {
    amount = typeof amount !== 'undefined' ? amount : 1;
    return "<span class='reminder'>(Each player Drinks " + String(amount) + ".)</span>";
}

function GetEnableReminderText$() {
    return "<span class='reminder'>(This creature deals damage to creatures in the form of -1/-1 counters and to players in the form of Drinks.)</span>";
}