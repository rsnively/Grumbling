var AC01 = {
    name: "Army in a Can",
    cost: "4",
    types: ["Artifact"],
    rarity: "C",
    rules: "Drink 2, " + GetTapSymbol$() + ", Sacrifice ~: Create two 1/1 colorless Servo artifact creature tokens.",
    flavor: "",
};
var AC02 = {
    name: "Crimson Longhorn",
    cost: "1",
    types: ["Artifact", "Creature"],
    subtypes: ["Ox"],
    rarity: "C",
    rules: "Whenever you Drink, you may pay " + GetManaSymbol$("4") + ". If you do, ~ gets +2/+0 and gains flying until end of turn.",
    flavor: "",
    power: 0,
    toughness: 3
};
var AC03 = {
    name: "creature, large",
    cost: "",
    types: ["Artifact", "Creature"],
    subtypes: ["TODO"],
    rarity: "C",
    rules: "",
    flavor: "",
    power: 0,
    toughness: 0
};
// TODO: Would like the art to fit in with a medieval setting more
var AC04 = {
    name: "Beer",
    cost: "1",
    types: ["Artifact"],
    subtypes: ["Beer"],
    rarity: "C",
    rules: GetTapSymbol$() + ": Drink 1.",
    flavor: "\"Yup.\""
};
var AC05 = {
    name: "Frosty Mug",
    cost: "2",
    types: ["Artifact"],
    rarity: "C",
    rules: "When Frosty Mug enters the battlefield, Drink 1 and draw a card.<br><br>" + GetManaSymbol$("1") + ", " + GetTapSymbol$() + ": Add one mana of any color.",
    flavor: ""
};