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

function GetDeathtouchReminderText$() {
    return "<span class='reminder'>(Any amount of damage this deals to a creature is enough to destroy it.)</span>";
}

function GetDefenderReminderText$() {
    return "<span class='reminder'>(This creature can't attack.)</span>";
}

function GetFlyingReminderText$() {
    return "<span class='reminder'>(This creature can't be blocked except by creatures with flying and/or reach.)</span>";
}

function GetHasteReminderText$() {
    return "<span class='reminder'>(This creature can attack and " + GetTapSymbol$() + " as soon as it comes under your control.)</span>";
}

function GetIndestructibleReminderText$() {
    return "<span class='reminder'>(Damage and effects that say \"destroy\" don't destroy this.)</span>";
}

function GetLifelinkReminderText$() {
    return "<span class='reminder'>(Damage dealt by this creature also causes you to gain that much life.)</span>";
}

function GetMillReminderText$() {
    return "<span class='reminder'>(Put the top card of your library into your graveyard.)</span>";
}

function GetReachReminderText$() {
    return "<span class='reminder'>(This creature can block creatures with flying.)</span>";
}

function GetTrampleReminderText$() {
    return "<span class='reminder'>(This creature can deal excess combat damage to a player or planeswalker it's attacking.)</span>";
}
function GetVigilanceReminderText$() {
    return "<span class='reminder'>(Attacking does not cause this creature to tap.)</span>";
}