var city_of_class = {
    name: "City of Class",
    cost: "",
    types: ["Land"],
    rarity: "R",
    rules: "Whenever ~ becomes tapped, take a drink.<br><br>" + GetTapSymbol$() + ": Add one mana of any color.",
    flavor: "",
};

var unstable_ground = {
    name: "Unstable Ground",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: GetTapSymbol$() + ", Take a drink, Sacrifice ~: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle.",
    flavor: "",
};

var country_club = {
    name: "Country Club",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("W") + " or " + GetManaSymbol$("B") + ".",
};

var fairy_ring = {
    name: "Fairy Ring",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("B") + " or " + GetManaSymbol$("G") + ".",
};

var fermenting_caverns = {
    name: "Fermenting Caverns",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("B") + " or " + GetManaSymbol$("R") + ".",
};

var festive_campground = {
    name: "Lazy River",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("R") + " or " + GetManaSymbol$("G") + ".",
};

var hunting_lodge = {
    name: "Hunting Lodge",
    cost: "",
    types: ["Land"],
    subtypes: ["Mountain", "Forest"],
    rarity: "R",
    rules: "<i>(" + GetTapSymbol$() + ": Add " + GetManaSymbol$("R") + " or " + GetManaSymbol$("G") + ".)</i><br>As ~ enters the battlefield, you may take 2 drinks. If you don't, it enters the battlefield tapped.",
};

var lazy_river = {
    name: "Lazy River",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("W") + " or " + GetManaSymbol$("U") + ".",
};

var murky_lagoon = {
    name: "Picnic Clearing",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("U") + " or " + GetManaSymbol$("B") + ".",
};

var night_club = {
    name: "Night Club",
    cost: "",
    types: ["Land"],
    subtypes: ["Swamp", "Mountain"],
    rarity: "R",
    rules: "<i>(" + GetTapSymbol$() + ": Add " + GetManaSymbol$("B") + " or " + GetManaSymbol$("R") + ".)</i><br>As ~ enters the battlefield, you may take 2 drinks. If you don't, it enters the battlefield tapped.",
};

var picnic_clearing = {
    name: "Picnic Clearing",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("G") + " or " + GetManaSymbol$("W") + ".",
};

var pirates_cove = {
    name: "Pirate's Cove",
    cost: "",
    types: ["Land"],
    subtypes: ["Island", "Swamp"],
    rarity: "R",
    rules: "<i>(" + GetTapSymbol$() + ": Add " + GetManaSymbol$("U") + " or " + GetManaSymbol$("B") + ".)</i><br>As ~ enters the battlefield, you may take 2 drinks. If you don't, it enters the battlefield tapped.",
};

var terraced_vineyard = {
    name: "Terraced Vineyard",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("R") + " or " + GetManaSymbol$("W") + ".",
};

var tunnel_of_love = {
    name: "Tunnel of Love",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("R") + " or " + GetManaSymbol$("U") + ".",
}

var watering_hole = {
    name: "Watering Hole",
    cost: "",
    types: ["Land"],
    rarity: "C",
    rules: "~ enters the battlefield tapped.<br>When ~ enters the battlefield, take a drink.<br>" + GetTapSymbol$() + ": Add " + GetManaSymbol$("G") + " or " + GetManaSymbol$("U") + ".",
};

var wine_lounge = {
    name: "Wine Lounge",
    cost: "",
    types: ["Land"],
    subtypes: ["Mountain", "Plains"],
    rarity: "R",
    rules: "<i>(" + GetTapSymbol$() + ": Add " + GetManaSymbol$("R") + " or " + GetManaSymbol$("W") + ".)</i><br>As ~ enters the battlefield, you may take 2 drinks. If you don't, it enters the battlefield tapped.",
};

var LANDS = [
    city_of_class,
    unstable_ground,

    // ETB Drink 2 or tapped
    // wu
    pirates_cove,
    night_club,
    hunting_lodge,
    // gw
    // wb
    // ur
    // bg
    wine_lounge,
    // gu

    // ETB Tapped, Drink 1
    lazy_river,
    murky_lagoon,
    fermenting_caverns,
    festive_campground,
    picnic_clearing,
    tunnel_of_love,
    terraced_vineyard,
    watering_hole,
    country_club,
    fairy_ring,
];