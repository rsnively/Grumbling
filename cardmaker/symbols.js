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
    var number_of_counters = (amount == 1) ? "an Abstinence counter" : (String(amount) + "Abstinence counters");
    return "<span class='reminder'>(You get " + number_of_counters + ", which can be removed to prevent one Drink you would be dealt.)</span>";
}

function GetEnableReminderText$() {
    return "<span class='reminder'>(This creature deals damage to creatures in the form of -1/-1 counters and to players in the form of Drinks.)</span>";
}