var acquired_taste = {
    name: "Acquired Taste",
    cost: "1U",
    types: ["Instant"],
    rarity: "C",
    rules: "Take a drink and draw a card, then draw cards equal to the number of cards named ~ in all graveyards. <i>(No. This one doesn't count.)</i>",
    flavor: "CR608.2b clearly states...",
};

var adult_red_blend = {
    name: "Adult Red Blend",
    cost: "4RR",
    types: ["Creature"],
    subtypes: ["Dragon"],
    rarity: "R",
    rules: "Flying<br>Whenever you take one or more drinks, ~ gets +1/+0 until end of turn.<br>" + GetManaSymbol$("R") + ", Take a drink: ~ deals 1 damage to any target.",
    power: 5,
    toughness: 5,
};

var adult_rose = {
    name: "Adult Ros&eacute",
    cost: "3RW",
    types: ["Creature"],
    subtypes: ["Dragon"],
    rarity: "R",
    rules: "Flying, lifelink<br>Whenever you take one or more drinks, Dragons you control get +1/+1 until end of turn.",
    power: 5,
    toughness: 5,
};

var adult_white_sangria = {
    name: "Adult White Sangria",
    cost: "3WW",
    types: ["Creature"],
    subtypes: ["Dragon"],
    rarity: "R",
    rules: "Flying " + GetFlyingReminderText$() + "<br>Whenever you take one or more drinks, you gain 1 life.<br>" + GetManaSymbol$("W") + ", Take a drink: Tap target creature.",
    power: 4,
    toughness: 4,
};

var alcoholic_ritual = {
    name: "Alcoholic Ritual",
    cost: "1R",
    types: ["Instant"],
    rarity: "C",
    rules: "Take a drink.<br><br>Add " + GetManaSymbol$("R") + GetManaSymbol$("R") + GetManaSymbol$("R") + ".",
    flavor: "",
};

var angel_of_better_judgment = {
    name: "Angel of Better Judgment",
    cost: "3WW",
    types: ["Creature"],
    subtypes: ["Angel"],
    rarity: "R",
    rules: "Flying, vigilance<br><br>Whenever a player takes a drink, ~deals 1 damage to that player.",
    power: 4,
    toughness: 4,
};

var bar_crawler = {
    name: "Bar Crawler",
    cost: "B",
    types: ["Creature"],
    subtypes: ["Zombie"],
    rarity: "R",
    rules: GetManaSymbol$("2") + GetManaSymbol$("B") + ": Return ~ from your graveyard to the battlefield tapped. Activate this ability only if you've taken a drink this turn.",
    power: 2,
    toughness: 1,
};

var beer = {
    name: "Beer",
    cost: "1",
    types: ["Artifact"],
    subtypes: ["Beer"],
    rarity: "C",
    rules: GetTapSymbol$() + ": Take a drink.",
    flavor: "\"Yep.\""
};

var beer_bong = {
    name: "Beer Bong",
    cost: "5GG",
    types: ["Creature"],
    subtypes: ["Wurm"],
    rarity: "R",
    rules: "Trample " + GetTrampleReminderText$() + "<br>Whenever you drink, create a 6/6 green Wurm creature token with trample.",
    power: 6,
    toughness: 6,
};

var beer_delivery_drone = {
    name: "Beer Delivery Drone",
    cost: "0",
    types: ["Artifact", "Creature"],
    subtypes: ["Thopter"],
    rarity: "C",
    rules: "Flying " + GetFlyingReminderText$() + "<br>When ~ enters the battlefield, take a drink.",
    power: 0,
    toughness: 2,
};

var beer_run = {
    name: "Beer Run",
    cost: "2G",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Search your library for a basic land card, put it onto the battlefield tapped, then shuffle. Then you may take a drink. If you do, untap that land.",
};

var belch = {
    name: "Belch",
    cost: "2R",
    types: ["Sorcery"],
    rarity: "R",
    rules: "As an additional cost to cast this spell, take 2 drinks.<br>~ deals 2 damage to each creature."
};

var booze_cruise = {
    name: "Booze Cruise",
    cost: "7U",
    types: ["Sorcery"],
    rarity: "C",
    rules: "This spell costs " + GetManaSymbol$("1") + " less to cast for each drink you've taken this turn.<br><br>Draw 3 cards.",
};

var boozeplague_rats = {
    name: "Boozeplague Rats",
    cost: "1B",
    types: ["Creature"],
    subtypes: ["Rat"],
    rarity: "C",
    rules: "Deathtouch " + GetDeathtouchReminderText$() + "<br>Whenever ~ deals combat damage to a player, they take a drink.",
    power: 1,
    toughness: 1,
};

var bounce = {
    name: "Bounce",
    cost: "1U",
    types: ["Instant"],
    rarity: "C",
    rules: "Return target creature to its owner's hand. If that creature's controller took a drink this turn, draw a card.",
    flavor: ""
};

var burp_hurler = {
    name: "Burp Hurler",
    cost: "1R",
    types: ["Creature"],
    subtypes: ["Goblin", "Archer"],
    rarity: "C",
    rules: "Reach " + GetReachReminderText$() + "<br>Whenever you take one or more drinks, ~ deals 1 damage to target opponent.",
    power: 2,
    toughness: 1,
};

var buzz = {
    name: "Buzz",
    cost: "R",
    types: ["Instant"],
    rarity: "C",
    rules: "Target player takes a drink.<br>Draw a card.",
    flavor: "\"To infinity and beyond!\"",
};

var cheers = {
    name: "Cheers!",
    cost: "R",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Each player takes a drink.",
    flavor: "Know my name."
};

var chug = {
    name: "Chug",
    cost: "GG",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Until end of turn, any time you could activate a mana ability, you may take a drink. If you do, add " + GetManaSymbol$("C") + ".",
};

var consternated_sphinx = {
    name: "Consternated Sphinx",
    cost: "4UU",
    types: ["Creature"],
    subtypes: ["Sphinx"],
    rarity: "R",
    rules: "Flying " + GetFlyingReminderText$() + "<br>Whenever an opponent draws a card, you may take 2 drinks. If you do, draw 2 cards.",
    power: 4,
    toughness: 6,
};

var coping_mechanism = {
    name: "Coping Mechanism",
    cost: "1",
    types: ["Artifact"],
    rarity: "R",
    rules: "Whenever you lose life, put that many charge counters on ~.<br>At the beginning of your turn, you may remove a charge counter from ~. If you do, take a drink and you gain 1 life.",
};

var cup_of_kings = {
    name: "Cup of Kings",
    cost: "4",
    supertypes: ["Legendary"],
    types: ["Artifact"],
    rarity: "R",
    rules: "At the beginning of your turn, reveal the top card of your library and put that card into your hand. If a nonland card is revealed this way, you take a drink. Otherwise, each opponent takes a drink."
};

var designated_driver = {
    name: "Designated Driver",
    cost: "1W",
    types: ["Creature"],
    subtypes: ["Human", "Soldier"],
    rarity: "U",
    rules: "Indestructible " + GetIndestructibleReminderText$() + "<br>Whenever you take one or more drinks, tap ~ and it loses indestructible until end of turn.",
    power: 3,
    toughness: 3,
};

var deteriorating_liver = {
    name: "Deteriorating Liver",
    cost: "B",
    types: ["Creature"],
    subtypes: ["Ooze"],
    rarity: "C",
    rules: "When ~ enters the battlefield, take a drink.<br>Whenever you take one or more drinks, mill a card. " + GetMillReminderText$(),
    power: 1,
    toughness: 1,
};

var draft = {
    name: "Draft",
    cost: "1W",
    types: ["Instant"],
    rarity: "C",
    rules: "As an additional cost to cast this spell, take a drink.<br>Create two 1/1 white Soldier creature tokens.",
    flavor: "(Not draught.)"
};

var drinking_alone = {
    name: "Drinking Alone",
    cost: "2B",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Target player takes 2 drinks, draws 2 cards, and loses 2 life.",
};

var drinking_buddy = {
    name: "Drinking Buddy",
    cost: "1GW",
    types: ["Creature"],
    subtypes: ["Human", "Knight"],
    rarity: "U",
    rules: "Vigilance " + GetVigilanceReminderText$() + "<br>Whenever an opponent takes one or more drinks, you may take a drink. If you do, ~ gets +1/+1 until end of turn.",
    power: 2,
    toughness: 2,
};

var drinks_undrank = {
    name: "Drinks Undrank",
    cost: "3U",
    types: ["Instant"],
    rarity: "R",
    rules: "Take 4 drinks.<br>Search your library for up to four cards with different names and reveal them. Target opponent chooses two of those cards. Put the chosen cards into your graveyard and the rest into your hand. Then shuffle.",
    flavor: "",
};

var drunken_rage = {
    name: "Drunken Rage",
    cost: "R",
    types: ["Instant"],
    rarity: "C",
    rules: "Take a drink, then target creature gets +1/+0 for each drink you've taken this turn.",
};

var ear_lender = {
    name: "Ear Lender",
    cost: "1B",
    types: ["Creature"],
    subtypes: ["Zombie", "Bartender"],
    rarity: "U",
    rules: "Whenever you lose life, you may take a drink. If you do, put a +1/+1 counter on another target creature you control.",
    power: 1,
    toughness: 1,
};

var edward_fortyhands = {
    name: "Edward Fortyhands",
    cost: "2WB",
    supertypes: ["Legendary"],
    types: ["Creature"],
    subtypes: ["Vampire"],
    rarity: "R",
    rules: "Deathtouch: " + GetDeathtouchReminderText$() + "<br>~ can block an additional 39 creatures.<br>Whenever ~ blocks a creature, take a drink.",
    power: 4,
    toughness: 4,
};

var empty_can = {
    name: "Empty Can",
    cost: "0",
    types: ["Artifact", "Creature"],
    subtypes: ["Construct"],
    rarity: "C",
    rules: "When ~ attacks, take drinks equal to its power.",
    power: 0,
    toughness: 1,
};

var finish_off = {
    name: "Finish Off",
    cost: "R",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Destroy target artifact. Take a drink.",
};

var fire_breath = {
    name: "Fire Breath",
    cost: "XR",
    types: ["Sorcery"],
    rarity: "M",
    rules: "As an additional cost to cast this spell, take a drink for each target beyond the first.<br>~ deals X damage divided evenly, rounded down, among any number of targets."
};

var gambool = {
    name: "Gambool",
    cost: "1R",
    types: ["Sorcery"],
    rarity: "U",
    rules: "Draw two cards, then discard a card at random. Take X drinks where X is that card's mana value.",
};

var goblin_sommelier = {
    name: "Goblin Sommelier",
    cost: "1R",
    types: ["Creature"],
    subtypes: ["Goblin", "Shaman"],
    rarity: "U",
    rules: "Dragon spells you cast cost " + GetManaSymbol$("1") + " less to cast. As long as you've taken a drink this turn, they cost " + GetManaSymbol$("2") + " less to cast instead.",
    power: 1,
    toughness: 3,
};

var hair_of_the_dog = {
    name: "Hair of the Dog",
    cost: "B",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Put target creature card from a graveyard onto the battlefield under your control. You take drinks equal to its mana value.",
};

var happy_hour = {
    name: "Happy Hour",
    cost: "1RR",
    types: ["Enchantment"],
    rarity: "R",
    rules: "If a player would take one or more drinks, they instead take that many drinks plus one.",
};

var hangover_cure = {
    name: "Hangover Cure",
    cost: "1G",
    types: ["Instant"],
    rarity: "C",
    rules: "As an additional cost to cast this spell, take a drink.<br>Target creature gets +3/+3 until end of turn. Untap it.",
};

var high_functioning_alcoholic = {
    name: "High-Functioning Alcoholic",
    cost: "1BB",
    types: ["Creature"],
    subtypes: ["Vampire", "Rogue"],
    rarity: "R",
    rules: "Lfelink " + GetLifelinkReminderText$() + "<br>Whenever you take one or more drinks, you may draw a card. If you do, you lose 3 life.",
    power: 3,
    toughness: 1,
};

var hip_flask = {
    name: "Hip Flask",
    cost: "2",
    types: ["Artifact"],
    rarity: "U",
    rules: GetTapSymbol$() + ": Add " + GetManaSymbol$("C") + ".<br><br>" + GetManaSymbol$("2") + ", " + GetTapSymbol$() + ", Take a drink: Draw a card.",
};

var hype_man = {
    name: "Hype Man",
    cost: "1GW",
    types: ["Creature"],
    subtypes: ["Human"],
    rarity: "U",
    rules: "Reach<br><br>Whenever you drink, create a 1/1 white Soldier creature token.",
    power: 0,
    toughness: 4,
};

var imbibe = {
    name: "Imbibe",
    cost: "B",
    types: ["Instant"],
    rarity: "C",
    rules: "As an additional cost to cast this spell, take 2 drinks.<br>Target creature gets -2/-2 until end of turn.",
};

var inner_demon = {
    name: "Inner Demon",
    cost: "2BB",
    types: ["Creature"],
    subtypes: ["Demon"],
    rarity: "R",
    rules: "Trample " + GetTrampleReminderText$() + "<br>At the beginning of your end step, if you haven't taken a drink this turn, sacrifice ~.",
    power: 6,
    toughness: 6,
};

var keg_fiend = {
    name: "Keg Fiend",
    cost: "1R",
    types: ["Creature"],
    subtypes: ["Elemental", "Beast"],
    rarity: "U",
    rules: "Whenever you cast an instant or sorcery spell, you may take a drink. If you do, ~ gets +3/+0 until end of turn.",
    power: 1,
    toughness: 2,
};

var keg_stand = {
    name: "Keg Stand",
    cost: "1R",
    types: ["Sorcery"],
    rarity: "U",
    rules: "Target player takes a drink.<br><br>Storm <i>(When you cast this spell, copy it for each spell cast before it this turn. You may choose new targets for the copies.)</i>",
    flavor: "",
};

var king_of_beers = {
    name: "King of Beers",
    cost: "3",
    types: ["Artifact", "Creature"],
    subtypes: ["Beer", "Construct"],
    rarity: "R",
    rules: "~'s power and toughness are each equal to the number of beers you control.<br>" + GetTapSymbol$() + ": Target player takes a drink.",
    power: "*",
    toughness: "*",
};

var last_call = {
    name: "Last Call",
    cost: "2R",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Each player takes a drink.<br>Take an extra turn after this one. At the beginning of that turn's end step, you lose the game.",
};

var let_it_breathe = {
    name: "Let It Breathe",
    cost: "2W",
    types: ["Enchantment"],
    rarity: "U",
    rules: "When ~ enters the battlefield, exile target nonland permanent an opponent controls until ~ leaves the battlefield.<br>When ~ leaves the battlefield, each player takes a drink.",
};

var lightning_breath = {
    name: "Lightning Breath",
    cost: "R",
    types: ["Instant"],
    rarity: "U",
    rules: "As an additional cost to cast this spell, take a drink.<br><br>~ deals 3 damage to any target.",
    flavor: "",
};

var liquor_license = {
    name: "Liquor License",
    cost: "1B",
    types: ["Enchantment"],
    subtypes: ["Aura"],
    rarity: "U",
    rules: "Enchant land<br>When ~ enters the battlefield, draw a card.<br>Whenever enchanted land becomes tapped, its controller takes a drink.",
};

var liquored_up = {
    name: "Liquored Up",
    cost: "2UU",
    types: ["Enchantment"],
    subtypes: ["Aura"],
    rarity: "R",
    rules: "Enchant creature<br>When ~ enters the battlefield, take drinks equal to enchanted creature's mana value.<br>You control enchanted creature.",
};

var monastery_brewmaster = {
    name: "Monastery Brewmaster",
    cost: "R",
    types: ["Creature"],
    subtypes: ["Human", "Monk"],
    rarity: "U",
    rules: "Haste " + GetHasteReminderText$() + "<br>Whenever you take one or more drinks, ~ gets +1/+1 until end of turn.",
    power: 1,
    toughness: 2,
};

var mull = {
    name: "Mull",
    cost: "U",
    types: ["Instant"],
    rarity: "C",
    rules: "Take a drink.<br>Draw a card.<br>Mill cards equal to the number of drinks you've taken this turn. <i>(Put that many cards from the top of your library into your graveyard.)</i>",
    flavor: "",
};

var open_bar = {
    name: "Open Bar",
    cost: "6",
    types: ["Artifact"],
    rarity: "R",
    rules: "Take a drink: Add one mana of any color.<br>Take 2 drinks: You gain 1 life.<br>Take 3 drinks: Put a +1/+1 counter on target creature.<br>Take 4 drinks: Draw a card.",
};

var partner_in_crime = {
    name: "Partner in Crime",
    cost: "1B",
    types: ["Creature"],
    subtypes: ["Human", "Rogue"],
    rarity: "C",
    rules: "Deathtouch " + GetDeathtouchReminderText$() + "<br>Whenever you drink, target opponent takes that many drinks.",
    power: 1,
    toughness: 1,
};

var party_fowl = {
    name: "Party Fowl",
    cost: "G",
    types: ["Creature"],
    subtypes: ["Bird"],
    rarity: "R",
    rules: "Flying<br>" + GetTapSymbol$() + ", Take a drink: Add one mana of any color.",
    power: 0,
    toughness: 1,
};

var party_starter = {
    name: "Party Starter",
    cost: "1R",
    types: ["Creature"],
    subtypes: ["Human", "Rogue"],
    rarity: "C",
    rules: "Haste<br>When Party Starter enters the battlefield, each player takes a drink.",
    flavor: "\"I require a fellowship of fierce warriors, wise counsel, and loyal friends.\"",
    power: 2,
    toughness: 1
};

var past_mistakes = {
    name: "Past Mistakes",
    cost: "3R",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Each instant and sorcery card in your graveyard gains flashback until end of turn. The flashback cost is its mana cost plus a drink.<br>Flashback " + GetManaSymbol$("4") + GetManaSymbol$("R") + " <i>(You may cast this card from your graveyard for its flashback cost. Then exile it.)</i>",
    flavor: "",
};

var pay_your_respects = {
    name: "Pay Your Respects",
    cost: "1BB",
    types: ["Instant"],
    rarity: "C",
    rules: "Destroy target creature. Each player takes a drink.",
};

var peerless_presser = {
    name: "Peerless Presser",
    cost: "3RW",
    types: ["Creature"],
    subtypes: ["Giant", "Artificer"],
    rarity: "R",
    rules: "Trample " + GetTrampleReminderText$() + "<br>Whenever you take one or more drinks, each opponent takes a drink.",
    power: 4,
    toughness: 5,
};

var ping_pong_ball = {
    name: "Ping Pong Ball",
    cost: "3",
    types: ["Artifact"],
    rarity: "U",
    rules: "Whenever a player takes one or more drinks, they lose 1 life.<br>" + GetManaSymbol$("3") + ", " + GetTapSymbol$() + ": Target player takes a drink.",
};

var pitcher = {
    name: "Pitcher",
    cost: "2",
    types: ["Artifact"],
    subtypes: ["Beer"],
    rarity: "U",
    rules: GetTapSymbol$() + ": Each player takes a drink.",
};

var power_hour = {
    name: "Power Hour",
    cost: "2BB",
    types: ["Enchantment"],
    rarity: "R",
    rules: "At the beginning of each end step, if no creatures are on the battlefield, sacrifice ~.<br>" + GetManaSymbol$("B") + ", Take a drink: ~ deals one damage to each creature and each player.",
};

var prohibition = {
    name: "Prohibition",
    cost: "3W",
    types: ["Enchantment"],
    rarity: "R",
    rules: "Players can't drink.",
};

var slosh = {
    name: "Slosh",
    cost: "1UU",
    types: ["Instant"],
    rarity: "C",
    rules: "Counter target spell. Its controller Drinks 1.",
    flavor: ""
};

var slurp_up = {
    name: "Slurp Up",
    cost: "XB",
    types: ["Instant"],
    rarity: "R",
    rules: "As an additional cost to cast ~, take X drinks.<br>Target creature gets -X/-X until end of turn.",
};

var spill = {
    name: "Spill",
    cost: "B",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Target player takes a drink, then that player discards a card at random.",
};

var steel_bartender = {
    name: "Steel Bartender",
    cost: "2",
    types: ["Artifact", "Creature"],
    subtypes: ["Bartender"],
    rarity: "R",
    rules: GetTapSymbol$() + ": For each artifact creature you control, tou may take a drink. If you do, put a +1/+1 counter on that creature.",
    power: 2,
    toughness: 2,
};

var stirring_eulogist = {
    name: "Stirring Eulogist",
    cost: "1B",
    types: ["Creature"],
    subtypes: ["Vampire"],
    rarity: "U",
    rules: "Whenever a creature dies, target player takes a drink.",
    power: 0,
    toughness: 1,
    flavor: "\"Or did you think I was too stupid to know what a eugoogooly was?\"",
};

var thermo_alchoholic = {
    name: "Thermo-Alcoholic",
    cost: "1R",
    types: ["Creature"],
    subtypes: ["Human", "Shaman"],
    rarity: "U",
    rules: "Defender " + GetDefenderReminderText$() + "<br>" + GetTapSymbol$() + ": ~ deals 1 damage to each opponent.<br>Whenever you take one or more drinks, untap ~.",
    power: 0,
    toughness: 3,
};

var thoughtslurp = {
    name: "Thoughtslurp",
    cost: "B",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Target player reveals their hand. You choose a nonland card from it. That player discards that card. You take drinks equal to its mana value.",
};

var toastmaster = {
    name: "Toastmaster",
    cost: "W",
    types: ["Creature"],
    subtypes: ["Human", "Cleric"],
    rarity: "C",
    rules: "Whenever another creature enters the battlefield under your control, take a drink.",
    flavor: "",
    power: 1,
    toughness: 1,
};

var top_off = {
    name: "Top Off",
    cost: "2UU",
    types: ["Sorcery"],
    rarity: "C",
    rules: "Put target nonland permanent on top of its owner's library.<br><br>That permanent's controller takes a drink.",
    flavor: "",
};

var wallflower = {
    name: "Wallflower",
    cost: "1G",
    types: ["Creature"],
    subtypes: ["Plant", "Wall"],
    rarity: "C",
    rules: "Defender " + GetDefenderReminderText$() + "<br>When ~ enters the battlefield, each other player takes a drink.",
    power: 0,
    toughness: 4,
};

var waterfall = {
    name: "Waterfall",
    cost: "2U",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Starting with you, each player may take a drink. If they do, they draw a card. Continue in this way until a player chooses not to drink. <i>(This process can go around the table multiple times.)</i>",
};

var wedding_crasher = {
    name: "Wedding Crasher",
    cost: "1RG",
    types: ["Creature"],
    subtypes: ["Beast"],
    rarity: "U",
    rules: "Haste " + GetHasteReminderText$() + "<br>Whenever an opponent takes one or more drinks, you take a drink.",
    power: 3,
    toughness: 3,
};

var wine_mom = {
    name: "Wine Mom",
    cost: "W",
    types: ["Creature"],
    subtypes: ["Human"],
    rarity: "R",
    rules: GetTapSymbol$() + ", Take a drink: Target creature you control gains protection from the color of your choice until end of turn. <i>(That creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything of the chosen color.)</i>",
    flavor: "",
    power: 1,
    toughness: 1,
};

var wingman = {
    name: "Wingman",
    cost: "3W",
    types: ["Creature"],
    subtypes: ["Angel"],
    rarity: "U",
    rules: "Flying " + GetFlyingReminderText$() + "<br>When ~ attacks you may take 2 drinks. If you do, another target creature gains flying until end of turn.",
    power: 2,
    toughness: 2,
};

var wizards_staff = {
    name: "Wizard&#39s Staff",
    cost: "4",
    supertypes: ["Legendary"],
    types: ["Artifact"],
    rarity: "R",
    rules: "Whenever you take one or more drinks, put that many charge counters on ~.<br>" + GetManaSymbol$("4") + ", " + GetTapSymbol$() + ", Remove 10 charge counters from ~: Take an extra turn after this one.",
};

var wrath_of_morning = {
    name: "Wrath of Morning",
    cost: "2WW",
    types: ["Sorcery"],
    rarity: "R",
    rules: "Each player who controls a creature takes a drink. Then destroy all creatures.",
};

var young_red_blend = {
    name: "Young Red Blend",
    cost: "2RR",
    types: ["Creature"],
    subtypes: ["Dragon"],
    rarity: "U",
    rules: "Flying " + GetFlyingReminderText$() + "<br>" + GetManaSymbol$("R") + ", Take a drink: ~ gets +1/+0 until end of turn.",
    power: 2,
    toughness: 2,
};

var MISHMASH = [
    acquired_taste,
    adult_red_blend,
    adult_rose,
    adult_white_sangria,
    alcoholic_ritual,
    angel_of_better_judgment,
    bar_crawler,
    beer,
    beer_bong,
    beer_delivery_drone,
    beer_run,
    belch,
    bounce,
    booze_cruise,
    boozeplague_rats,
    burp_hurler,
    buzz,
    cheers,
    chug,
    consternated_sphinx,
    coping_mechanism,
    cup_of_kings,
    designated_driver,
    deteriorating_liver,
    draft,
    drinking_alone,
    drinking_buddy,
    drinks_undrank,
    drunken_rage,
    ear_lender,
    edward_fortyhands,
    empty_can,
    finish_off,
    fire_breath,
    gambool,
    goblin_sommelier,
    hair_of_the_dog,
    hangover_cure,
    happy_hour,
    high_functioning_alcoholic,
    hip_flask,
    hype_man,
    imbibe,
    inner_demon,
    keg_fiend,
    keg_stand,
    king_of_beers,
    last_call,
    let_it_breathe,
    lightning_breath,
    liquor_license,
    liquored_up,
    monastery_brewmaster,
    mull,
    open_bar,
    partner_in_crime,
    party_fowl,
    party_starter,
    past_mistakes,
    pay_your_respects,
    peerless_presser,
    ping_pong_ball,
    pitcher,
    power_hour,
    prohibition,
    thoughtslurp,
    toastmaster,
    top_off,
    slosh,
    slurp_up,
    spill,
    steel_bartender,
    stirring_eulogist,
    thermo_alchoholic,
    wallflower,
    waterfall,
    wedding_crasher,
    wine_mom,
    wingman,
    wizards_staff,
    wrath_of_morning,
    young_red_blend,
];