
// Card dimensions
var card_width_actual = 223;
var card_height_actual = 311;

var card_width = card_width_actual;
var card_height = card_height_actual;

function Card(name, mvid, manaCost, color, type, set, rarity) {
    this.name = name;
    this.mvid = mvid; // The multiverse ID of the card
    this.manaCost = manaCost;
    
    // WUBRG, "" = colorless, M = multicolored
    this.color = color;
    
    // Land, Creature, Instant...
    this.type = type;
    
    this.set = set;
    
    // C, U, R, M
    this.rarity = rarity;
}


// Arrays for holding all of the card names.

var ktk_lands = [new Card("Forest", 386541, 0, "", "Land", "ktk", "C"),
                 new Card("Island", 386566, 0, "", "Land", "ktk", "C"),
                 new Card("Mountain", 386610, 0, "", "Land", "ktk", "C"),
                 new Card("Plains", 386624, 0, "", "Land", "ktk", "C"),
                 new Card("Swamp", 386684, 0, "", "Land", "ktk", "C")];
var ktk_commons =[new Card("Abomination of Gudul", 386463, 6, "M", "Creature", "ktk", "C"),
                  new Card("Abzan Banner", 386465, 3, "", "Artifact", "ktk", "C"),
                  new Card("Abzan Guide", 386469, 6, "M", "Artifact", "ktk", "C"),
                  new Card("Act of Treason", 386470, 3, "R", "Sorcery", "ktk", "C"),
                  new Card("Ainok Bond-Kin", 386471, 2, "W", "Creature", "ktk", "C"),
                  new Card("Ainok Tracker", 386472, 6, "R", "Creature", "ktk", "C"),
                  new Card("Alabaster Kirin", 386473, 4, "W", "Creature", "ktk", "C"),
                  new Card("Alpine Grizzly", 386474, 3, "G", "Creature", "ktk", "C"),
                  new Card("Archers&#39; Parapet", 386479, 2, "G", "Creature", "ktk", "C"),
                  new Card("Arrow Storm", 386481, 5, "R", "Sorcery", "ktk", "C"),
                  new Card("Awaken the Bear", 386484, 3, "G", "Instant", "ktk", "C"),
                  new Card("Barrage of Boulders", 386485, 3, "R", "Sorcery", "ktk", "C"),
                  new Card("Bitter Revelation", 386489, 4, "B", "Sorcery", "ktk", "C"),
                  new Card("Bloodfell Caves", 386491, 0, "", "Land", "ktk", "C"),
                  new Card("Bloodfire Expert", 386492, 3, "R", "Creature", "ktk", "C"),
                  new Card("Bloodfire Mentor", 386493, 3, "R", "Creature", "ktk", "C"),
                  new Card("Blossoming Sands", 386496, 0, "", "Land", "ktk", "C"),
                  new Card("Bring Low", 386499, 4, "R", "Instant", "ktk", "C"),
                  new Card("Cancel", 386502, 3, "U", "Instant", "ktk", "C"),
                  new Card("Canyon Lurkers", 386503, 5, "R", "Creature", "ktk", "C"),
                  new Card("Crippling Chill", 386510, 3, "U", "Instant", "ktk", "C"),
                  new Card("Debilitating Injury", 386514, 2, "B", "Enchantment", "ktk", "C"),
                  new Card("Defiant Strike", 386515, 1, "W", "Instant", "ktk", "C"),
                  new Card("Disdainful Stroke", 386519, 2, "U", "Instant", "ktk", "C"),
                  new Card("Dismal Backwater", 386520, 0, "", "Land", "ktk", "C"),
                  new Card("Disowned Ancestor", 386521, 1, "B", "Creature", "ktk", "C"),
                  new Card("Dragonscale Boon", 386525, 4, "G", "Instant", "ktk", "C"),
                  new Card("Dutiful Return", 386528, 4, "B", "Sorcery", "ktk", "C"),
                  new Card("Efreet Weaponmaster", 386529, 6, "M", "Creature", "ktk", "C"),
                  new Card("Embodiment of Spring", 386530, 1, "U", "Creature", "ktk", "C"),
                  new Card("Erase", 386533, 1, "W", "Instant", "ktk", "C"),
                  new Card("Feat of Resistance", 386534, 2, "W", "Instant", "ktk", "C"),
                  new Card("Feed the Clan", 386535, 2, "G", "Instant", "ktk", "C"),
                  new Card("Firehoof Cavalry", 386536, 1, "W", "Creature", "ktk", "C"),
                  new Card("Force Away", 386539, 2, "U", "Instant", "ktk", "C"),
                  new Card("Glacial Stalker", 386546, 6, "U", "Creature", "ktk", "C"),
                  new Card("Highland Game", 386555, 2, "G", "Creature", "ktk", "C"),
                  new Card("Hooting Mandrills", 386558, 6, "G", "Creature", "ktk", "C"),
                  new Card("Jeskai Banner", 386572, 3, "", "Artifact", "ktk", "C"),
                  new Card("Jeskai Student", 386575, 2, "W", "Creature", "ktk", "C"),
                  new Card("Jeskai Windscout", 386576, 3, "U", "Creature", "ktk", "C"),
                  new Card("Jungle Hollow", 386577, 0, "", "Land", "ktk", "C"),
                  new Card("Kheru Dreadmaw", 386579, 5, "B", "Creature", "ktk", "C"),
                  new Card("Kill Shot", 386582, 3, "W", "Instant", "ktk", "C"),
                  new Card("Kin-Tree Warden", 386584, 1, "G", "Creature", "ktk", "C"),
                  new Card("Krumar Bond-Kin", 386585, 5, "B", "Creature", "ktk", "C"),
                  new Card("Leaping Master", 386586, 2, "R", "Creature", "ktk", "C"),
                  new Card("Lens of Clarity", 386587, 1, "", "Artifact", "ktk", "C"),
                  new Card("Longshot Squad", 386588, 4, "G", "Creature", "ktk", "C"),
                  new Card("Mardu Banner", 386591, 3, "", "Artifact", "ktk", "C"),
                  new Card("Mardu Hateblade", 386594, 1, "W", "Creature", "ktk", "C"),
                  new Card("Mardu Hordechief", 386596, 3, "W", "Creature", "ktk", "C"),
                  new Card("Mardu Skullhunter", 386598, 2, "B", "Creature", "ktk", "C"),
                  new Card("Mardu Warshrieker", 386599, 4, "R", "Creature", "ktk", "C"),
                  new Card("Molting Snakeskin", 386606, 1, "B", "Enchantment", "ktk", "C"),
                  new Card("Monastery Flock", 386607, 3, "U", "Creature", "ktk", "C"),
                  new Card("Mystic of the Hidden Way", 386615, 5, "U", "Creature", "ktk", "C"),
                  new Card("Naturalize", 386617, 2, "G", "Instant", "ktk", "C"),
                  new Card("Ponyback Brigade", 386628, 6, "M", "Creature", "ktk", "C"),
                  new Card("Rakshasa&#39;s Secret", 386633, 3, "B", "Sorcery", "ktk", "C"),
                  new Card("Rite of the Serpent", 386637, 6, "B", "Sorcery", "ktk", "C"),
                  new Card("Rotting Mastodon", 386640, 5, "B", "Creature", "ktk", "C"),
                  new Card("Rugged Highlands", 386641, 0, "", "Land", "ktk", "C"),
                  new Card("Rush of Battle", 386642, 4, "W", "Instant", "ktk", "C"),
                  new Card("Sage-Eye Harrier", 386645, 5, "W", "Creature", "ktk", "C"),
                  new Card("Sagu Archer", 386646, 5, "G", "Creature", "ktk", "C"),
                  new Card("Salt Road Patrol", 386648, 4, "W", "Creature", "ktk", "C"),
                  new Card("Savage Punch", 386652, 2, "G", "Sorcery", "ktk", "C"),
                  new Card("Scaldkin", 386653, 4, "U", "Creature", "ktk", "C"),
                  new Card("Scoured Barrens", 386655, 0, "", "Land", "ktk", "C"),
                  new Card("Scout the Borders", 386656, 3, "G", "Sorcery", "ktk", "C"),
                  new Card("Shambling Attendants", 386662, 8, "B", "Creature", "ktk", "C"),
                  new Card("Shatter", 386663, 2, "R", "Instant", "ktk", "C"),
                  new Card("Sidisi&#39;s Pet", 386665, 4, "B", "Creature", "ktk", "C"),
                  new Card("Siegecraft", 386667, 4, "W", "Enchantment", "ktk", "C"),
                  new Card("Singing Bell Strike", 386668, 2, "U", "Enchantment", "ktk", "C"),
                  new Card("Smite the Monstrous", 386669, 4, "W", "Instant", "ktk", "C"),
                  new Card("Smoke Teller", 386670, 2, "G", "Creature", "ktk", "C"),
                  new Card("Snowhorn Rider", 386671, 6, "M", "Creature", "ktk", "C"),
                  new Card("Sultai Banner", 386675, 3, "", "Artifact", "ktk", "C"),
                  new Card("Sultai Scavenger", 386678, 6, "B", "Creature", "ktk", "C"),
                  new Card("Summit Prowler", 386680, 4, "R", "Creature", "ktk", "C"),
                  new Card("Swift Kick", 386688, 4, "R", "Instant", "ktk", "C"),
                  new Card("Swiftwater Cliffs", 386689, 0, "", "Land", "ktk", "C"),
                  new Card("Taigam&#39;s Scheming", 386690, 2, "U", "Sorcery", "ktk", "C"),
                  new Card("Temur Banner", 386693, 3, "", "Artifact", "ktk", "C"),
                  new Card("Thornwood Falls", 386696, 0, "", "Land", "ktk", "C"),
                  new Card("Throttle", 386698, 5, "B", "Instant", "ktk", "C"),
                  new Card("Tormenting Voice", 386701, 2, "R", "Sorcery", "ktk", "C"),
                  new Card("Tranquil Cove", 386703, 0, "", "Land", "ktk", "C"),
                  new Card("Treasure Cruise", 386705, 8, "U", "Sorcery", "ktk", "C"),
                  new Card("Trumpet Blast", 386706, 3, "R", "Instant", "ktk", "C"),
                  new Card("Tusked Colossodon", 386707, 6, "G", "Creature", "ktk", "C"),
                  new Card("Unyielding Krumar", 386710, 4, "B", "Creature", "ktk", "C"),
                  new Card("Valley Dasher", 386712, 2, "R", "Creature", "ktk", "C"),
                  new Card("War Behemoth", 386715, 6, "W", "Creature", "ktk", "C"),
                  new Card("Weave Fate", 386720, 4, "U", "Instant", "ktk", "C"),
                  new Card("Wetland Sambar", 386721, 2, "U", "Creature", "ktk", "C"),
                  new Card("Whirlwind Adept", 386722, 5, "U", "Creature", "ktk", "C"),
                  new Card("Wind-Scarred Crag", 386723, 0, "", "Land", "ktk", "C"),
                  new Card("Woolly Loxodon", 386730, 7, "G", "Creature", "ktk", "C")];
var ktk_uncommons = [new Card("Abzan Battle Priest", 386466, 4, "W", "Creature", "ktk", "U"),
                     new Card("Abzan Charm", 386467, 3, "M", "Instant", "ktk", "U"),
                     new Card("Abzan Falconer", 386468, 3, "W", "Creature", "ktk", "U"),
                     new Card("Arc Lightning", 386478, 3, "R", "Sorcery", "ktk", "U"),
                     new Card("Armament Corps", 386480, 5, "M", "Creature", "ktk", "U"),
                     new Card("Bear&#39;s Companion", 386486, 5, "M", "Creature", "ktk", "U"),
                     new Card("Become Immense", 386487, 6, "G", "Instant", "ktk", "U"),
                     new Card("Bellowing Saddlebrute", 386488, 4, "B", "Creature", "ktk", "U"),
                     new Card("Blinding Spray", 386490, 5, "U", "Instant", "ktk", "U"),
                     new Card("Brave the Sands", 386497, 2, "W", "Enchantment", "ktk", "U"),
                     new Card("Briber&#39;s Purse", 386498, 0, "", "Artifact", "ktk", "U"),
                     new Card("Burn Away", 386500, 5, "R", "Instant", "ktk", "U"),
                     new Card("Chief of the Edge", 386504, 2, "M", "Creature", "ktk", "U"),
                     new Card("Chief of the Scale", 386505, 2, "M", "Creature", "ktk", "U"),
                     new Card("Cranial Archive", 386508, 2, "", "Artifact", "ktk", "U"),
                     new Card("Dazzling Ramparts", 386511, 5, "W", "Creature", "ktk", "U"),
                     new Card("Dead Drop", 386512, 10, "B", "Sorcery", "ktk", "U"),
                     new Card("Death Frenzy", 386513, 5, "M", "Sorcery", "ktk", "U"),
                     new Card("Despise", 386517, 1, "B", "Sorcery", "ktk", "U"),
                     new Card("Dragon Grip", 386522, 3, "R", "Enchantment", "ktk", "U"),
                     new Card("Dragon&#39;s Eye Savants", 386524, 2, "U", "Creature", "ktk", "U"),
                     new Card("Frontier Bivouac", 386544, 0, "", "Land", "ktk", "U"),
                     new Card("Goblinslide", 386547, 3, "R", "Enchantment", "ktk", "U"),
                     new Card("Gurmag Swiftwing", 386549, 2, "B", "Creature", "ktk", "U"),
                     new Card("Heart-Piercer Bow", 386551, 2, "", "Artifact", "ktk", "U"),
                     new Card("Heir of the Wilds", 386552, 2, "G", "Creature", "ktk", "U"),
                     new Card("Highspire Mantis", 386556, 4, "M", "Creature", "ktk", "U"),
                     new Card("Horde Ambusher", 386559, 2, "R", "Creature", "ktk", "U"),
                     new Card("Hordeling Outburst", 386560, 3, "R", "Sorcery", "ktk", "U"),
                     new Card("Icefeather Aven", 386562, 2, "M", "Creature", "ktk", "U"),
                     new Card("Incremental Growth", 386564, 5, "G", "Sorcery", "ktk", "U"),
                     new Card("Jeskai Charm", 386573, 3, "M", "Instant", "ktk", "U"),
                     new Card("Jeskai Elder", 386574, 2, "U", "Creature", "ktk", "U"),
                     new Card("Kheru Bloodsucker", 386578, 3, "B", "Creature", "ktk", "U"),
                     new Card("Kin-Tree Invocation", 386583, 2, "M", "Sorcery", "ktk", "U"),
                     new Card("Mardu Blazebringer", 386592, 3, "R", "Creature", "ktk", "U"),
                     new Card("Mardu Charm", 386593, 3, "M", "Instant", "ktk", "U"),
                     new Card("Mardu Heart-Piercer", 386595, 4, "R", "Creature", "ktk", "U"),
                     new Card("Mardu Roughrider", 386597, 5, "M", "Creature", "ktk", "U"),
                     new Card("Master the Way", 386601, 5, "M", "Sorcery", "ktk", "U"),
                     new Card("Mer-EK Nightblade", 386603, 4, "B", "Creature", "ktk", "U"),
                     new Card("Mistfire Weaver", 386605, 4, "U", "Creature", "ktk", "U"),
                     new Card("Monastery Swiftspear", 386608, 1, "R", "Creature", "ktk", "U"),
                     new Card("Murderous Cut", 386613, 5, "B", "Instant", "ktk", "U"),
                     new Card("Mystic Monastery", 386614, 0, "", "Land", "ktk", "U"),
                     new Card("Nomad Outpost", 386619, 0, "", "Land", "ktk", "U"),
                     new Card("Opulent Palace", 386620, 0, "", "Land", "ktk", "U"),
                     new Card("Pine Walker", 386622, 5, "G", "Creature", "ktk", "U"),
                     new Card("Quiet Contemplation", 386629, 3, "U", "Enchantment", "ktk", "U"),
                     new Card("Raiders&#39; Spoils", 386630, 4, "B", "Enchantment", "ktk", "U"),
                     new Card("Ride Down", 386636, 2, "M", "Instant", "ktk", "U"),
                     new Card("Riverwheel Aerialists", 386638, 6, "U", "Creature", "ktk", "U"),
                     new Card("Roar of Challenge", 386639, 3, "G", "Sorcery", "ktk", "U"),
                     new Card("Ruthless Ripper", 386643, 1, "U", "Creature", "ktk", "U"),
                     new Card("Sandsteppe Citadel", 386649, 0, "", "Land", "ktk", "U"),
                     new Card("Scion of Glaciers", 386654, 4, "U", "Creature", "ktk", "U"),
                     new Card("Secret Plans", 386657, 2, "M", "Enchantment", "ktk", "U"),
                     new Card("Seek the Horizon", 386659, 4, "G", "Sorcery", "ktk", "U"),
                     new Card("Seeker of the Way", 386660, 2, "W", "Creature", "ktk", "U"),
                     new Card("Set Adrift", 386661, 6, "U", "Sorcery", "ktk", "U"),
                     new Card("Stubborn Denial", 386673, 1, "U", "Instant", "ktk", "U"),
                     new Card("Sultai Charm", 386676, 3, "M", "Instant", "ktk", "U"),
                     new Card("Sultai Flayer", 386677, 4, "G", "Creature", "ktk", "U"),
                     new Card("Sultai Soothsayer", 386679, 5, "M", "Creature", "ktk", "U"),
                     new Card("Suspension Field", 386682, 2, "W", "Enchantment", "ktk", "U"),
                     new Card("Swarm of Bloodflies", 386687, 5, "B", "Creature", "ktk", "U"),
                     new Card("Take Up Arms", 386691, 5, "W", "Instant", "ktk", "U"),
                     new Card("Temur Charger", 386694, 2, "G", "Creature", "ktk", "U"),
                     new Card("Temur Charm", 386695, 3, "M", "Instant", "ktk", "U"),
                     new Card("Timely Hordemate", 386699, 4, "W", "Creature", "ktk", "U"),
                     new Card("Tomb of the Spirit Dragon", 386700, 0, "", "Land", "ktk", "U"),
                     new Card("Tuskguard Captain", 386708, 3, "G", "Creature", "ktk", "U"),
                     new Card("Venerable Lammasu", 386713, 7, "W", "Creature", "ktk", "U"),
                     new Card("Warden of the Eye", 386716, 5, "M", "Creature", "ktk", "U"),
                     new Card("War-Name Aspirant", 386717, 2, "R", "Creature", "ktk", "U"),
                     new Card("Watcher of the Roost", 386718, 3, "W", "Creature", "ktk", "U"),
                     new Card("Waterwhirl", 386719, 6, "U", "Instant", "ktk", "U"),
                     new Card("Windstorm", 386724, 1, "G", "Instant", "ktk", "U"),
                     new Card("Winterflame", 386727, 3, "M", "Instant", "ktk", "U"),
                     new Card("Witness of the Ages", 386728, 6, "", "Creature", "ktk", "U")];
var ktk_rares = [new Card("Abzan Ascendancy", 386464, 3, "M", "Enchantment", "ktk", "R"),
                 new Card("Altar of the Brood", 386475, 1, "", "Artifact", "ktk", "R"),
                 new Card("Ankle Shanker", 386477, 5, "M", "Creature", "ktk", "R"),
                 new Card("Avalanche Tusker", 386483, 5, "M", "Creature", "ktk", "R"),
                 new Card("Bloodsoaked Champion", 386494, 1, "B", "Creature", "ktk", "R"),
                 new Card("Bloodstained Mire", 386495, 0, "", "Land", "ktk", "R"),
                 new Card("Butcher of the Horde", 386501, 4, "M", "Creature", "ktk", "R"),
                 new Card("Crackling Doom", 386507, 3, "M", "Instant", "ktk", "R"),
                 new Card("Crater&#39;s Claws", 386509, 1, "R", "Sorcery", "ktk", "R"),
                 new Card("Deflecting Palm", 386516, 2, "M", "Instant", "ktk", "R"),
                 new Card("Dig Through Time", 386518, 8, "U", "Instant", "ktk", "R"),
                 new Card("Dragon Throne of Tarkir", 386523, 4, "", "Artifact", "ktk", "R"),
                 new Card("Dragon-Style Twins", 386526, 5, "R", "Creature", "ktk", "R"),
                 new Card("Duneblast", 386527, 7, "M", "Sorcery", "ktk", "R"),
                 new Card("End Hostilities", 386532, 5, "W", "Sorcery", "ktk", "R"),
                 new Card("Flooded Strand", 386537, 0, "", "Land", "ktk", "R"),
                 new Card("Flying Crane Technique", 386538, 6, "M", "Instant", "ktk", "R"),
                 new Card("Ghostfire Blade", 386545, 1, "", "Artifact", "ktk", "R"),
                 new Card("Grim Haruspex", 386548, 3, "B", "Creature", "ktk", "R"),
                 new Card("Hardened Scales", 386550, 1, "G", "Enchantment", "ktk", "R"),
                 new Card("Herald of Anafenza", 386553, 1, "W", "Creature", "ktk", "R"),
                 new Card("High Sentinels of Arashin", 386554, 4, "W", "Creature", "ktk", "R"),
                 new Card("Howl of the Horde", 386561, 3, "R", "Sorcery", "ktk", "R"),
                 new Card("Icy Blast", 386563, 1, "U", "Instant", "ktk", "R"),
                 new Card("Ivorytusk Fortress", 386569, 5, "M", "Creature", "ktk", "R"),
                 new Card("Jeering Instigator", 386570, 2, "R", "Creature", "ktk", "R"),
                 new Card("Jeskai Ascendancy", 386571, 3, "M", "Enchantment", "ktk", "R"),
                 new Card("Kheru Lich Lord", 386580, 6, "M", "Creature", "ktk", "R"),
                 new Card("Kheru Spellsnatcher", 386581, 4, "U", "Creature", "ktk", "R"),
                 new Card("Mantis Rider", 386589, 3, "M", "Creature", "ktk", "R"),
                 new Card("Mardu Ascendancy", 386590, 3, "M", "Enchantment", "ktk", "R"),
                 new Card("Master of Pearls", 386600, 2, "W", "Creature", "ktk", "R"),
                 new Card("Meandering Towershell", 386602, 5, "G", "Creature", "ktk", "R"),
                 new Card("Mindswipe", 386604, 2, "M", "Instant", "ktk", "R"),
                 new Card("Necropolis Fiend", 386618, 9, "B", "Creature", "ktk", "R"),
                 new Card("Polluted Delta", 386627, 0, "", "Land", "ktk", "R"),
                 new Card("Rakshasa Deathdealer", 386631, 2, "M", "Creature", "ktk", "R"),
                 new Card("Rakshasa Vizier", 386632, 5, "M", "Creature", "ktk", "R"),
                 new Card("Rattleclaw Mystic", 386634, 2, "G", "Creature", "ktk", "R"),
                 new Card("Retribution of the Ancients", 386635, 1, "B", "Enchantment", "ktk", "R"),
                 new Card("Sage of the Inward Eye", 386644, 5, "M", "Creature", "ktk", "R"),
                 new Card("Sagu Mauler", 386647, 6, "M", "Creature", "ktk", "R"),
                 new Card("Savage Knuckleblade", 386651, 3, "M", "Creature", "ktk", "R"),
                 new Card("Siege Rhino", 386666, 4, "M", "Creature", "ktk", "R"),
                 new Card("Sultai Ascendancy", 386674, 3, "M", "Enchantment", "ktk", "R"),
                 new Card("Temur Ascendancy", 386692, 3, "M", "Enchantment", "ktk", "R"),
                 new Card("Thousand Winds", 386697, 6, "U", "Creature", "ktk", "R"),
                 new Card("Trail of Mystery", 386702, 2, "G", "Enchantment", "ktk", "R"),
                 new Card("Trap Essence", 386704, 3, "M", "Instant", "ktk", "R"),
                 new Card("Utter End", 386711, 4, "M", "Instant", "ktk", "R"),
                 new Card("Villainous Wealth", 386714, 3, "M", "Sorcery", "ktk", "R"),
                 new Card("Windswept Heath", 386725, 0, "", "Land", "ktk", "R"),
                 new Card("Wooded Foothills", 386729, 0, "", "Land", "ktk", "R")];
var ktk_mythics = [new Card("Anafenza, the Foremost", 386476, 3, "M", "Creature", "ktk", "M"),
                   new Card("Ashcloud Phoenix", 386482, 4, "R", "Creature", "ktk", "M"),
                   new Card("Clever Impersonator", 386506, 4, "U", "Creature", "ktk", "M"),
                   new Card("Empty the Pits", 386531, 4, "B", "Instant", "ktk", "M"),
                   new Card("Hooded Hydra", 386557, 2, "G", "Creature", "ktk", "M"),
                   new Card("Narset, Enlightened Master", 386616, 6, "M", "Creature", "ktk", "M"),
                   new Card("Pearl Lake Ancient", 386621, 7, "U", "Creature", "ktk", "M"),
                   new Card("Sarkhan, the Dragonspeaker", 386650, 5, "R", "Planeswalker", "ktk", "M"),
                   new Card("See the Unwritten", 386658, 6, "G", "Sorcery", "ktk", "M"),
                   new Card("Sidisi, Brood Tyrant", 386664, 4, "M", "Creature", "ktk", "M"),
                   new Card("Sorin, Solemn Visitor", 386672, 4, "M", "Planeswalker", "ktk", "M"),
                   new Card("Surrak Dragonclaw", 386681, 5, "M", "Creature", "ktk", "M"),
                   new Card("Ugin&#39;s Nexus", 386709, 5, "", "Artifact", "ktk", "M"),
                   new Card("Wingmate Roc", 386726, 5, "W", "Creature", "ktk", "M"),
                   new Card("Zurgo Helmsmasher", 386731, 5, "M", "Creature", "ktk", "M")];

var frf_lands = [new Card("Bloodfell Caves", 391802, 0, "", "Land", "frf", "C"),
                 new Card("Blossoming Sands", 391804, 0, "", "Land", "frf", "C"),
                 new Card("Dismal Backwater", 391820, 0, "", "Land", "frf", "C"),
                 new Card("Jungle Hollow", 391865, 0, "", "Land", "frf", "C"),
                 new Card("Rugged Highlands", 391908, 0, "", "Land", "frf", "C"),
                 new Card("Scoured Barrens", 391915, 0, "", "Land", "frf", "C"),
                 new Card("Swiftwater Cliffs", 391936, 0, "", "Land", "frf", "C"),
                 new Card("Thornwood Falls", 391944, 0, "", "Land", "frf", "C"),
                 new Card("Tranquil Cove", 391946, 0, "", "Land", "frf", "C"),
                 new Card("Wind-Scarred Crag", 391963, 0, "", "Land", "frf", "C")];
var frf_commons = [new Card("Abzan Advantage", 391781, 2, "W", "Instant", "frf", "C"),
                   new Card("Abzan Runemark", 391784, 3, "W", "Enchantment", "frf", "C"),
                   new Card("Abzan Skycaptain", 391785, 4, "W", "Creature", "frf", "C"),
                   new Card("Ainok Guide", 391786, 2, "G", "Creature", "frf", "C"),
                   new Card("Alesha&#39;s Vanguard", 391788, 4, "B", "Creature", "frf", "C"),
                   new Card("Ambush Krotiq", 391789, 6, "G", "Creature", "frf", "C"),
                   new Card("Ancestral Vengeance", 391790, 2, "B", "Enchantment", "frf", "C"),
                   new Card("Arashin Cleric", 391791, 2, "W", "Creature", "frf", "C"),
                   new Card("Archers of Qarsi", 391794, 4, "G", "Creature", "frf", "C"),
                   new Card("Aven Skirmisher", 391797, 1, "W", "Creature", "frf", "C"),
                   new Card("Aven Surveyor", 391798, 5, "U", "Creature", "frf", "C"),
                   new Card("Bathe in Dragonfire", 391799, 3, "R", "Sorcery", "frf", "C"),
                   new Card("Collateral Damage", 391811, 1, "R", "Instant", "frf", "C"),
                   new Card("Cunning Strike", 391814, 5, "M", "Instant", "frf", "C"),
                   new Card("Defiant Ogre", 391817, 6, "R", "Creature", "frf", "C"),
                   new Card("Douse in Gloom", 391821, 3, "B", "Instant", "frf", "C"),
                   new Card("Dragon Bell Monk", 391822, 3, "W", "Creature", "frf", "C"),
                   new Card("Enhanced Awareness", 391827, 5, "U", "Instant", "frf", "C"),
                   new Card("Ethereal Ambush", 391828, 5, "M", "Instant", "frf", "C"),
                   new Card("Feral Krushok", 391831, 5, "G", "Creature", "frf", "C"),
                   new Card("Fierce Invocation", 391832, 5, "R", "Sorcery", "frf", "C"),
                   new Card("Formless Nurturing", 391837, 4, "G", "Sorcery", "frf", "C"),
                   new Card("Frontier Mastodon", 391839, 3, "G", "Creature", "frf", "C"),
                   new Card("Goblin Heelcutter", 391845, 4, "R", "Creature", "frf", "C"),
                   new Card("Gore Swine", 391846, 3, "R", "Creature", "frf", "C"),
                   new Card("Great-Horn Krushok", 391848, 5, "W", "Creature", "frf", "C"),
                   new Card("Grim Contest", 391849, 3, "M", "Instant", "frf", "C"),
                   new Card("Gurmag Angler", 391850, 7, "B", "Creature", "frf", "C"),
                   new Card("Harsh Sustenance", 391851, 3, "M", "Instant", "frf", "C"),
                   new Card("Hooded Assassin", 391855, 3, "B", "Creature", "frf", "C"),
                   new Card("Hunt the Weak", 391858, 4, "G", "Sorcery", "frf", "C"),
                   new Card("Jeskai Runemark", 391863, 3, "U", "Enchantment", "frf", "C"),
                   new Card("Jeskai Sage", 391864, 2, "U", "Creature", "frf", "C"),
                   new Card("Lightning Shrieker", 391868, 5, "R", "Creature", "frf", "C"),
                   new Card("Lotus Path Djinn", 391869, 4, "U", "Creature", "frf", "C"),
                   new Card("Map the Wastes", 391871, 3, "G", "Sorcery", "frf", "C"),
                   new Card("Mardu Runemark", 391873, 3, "R", "Enchantment", "frf", "C"),
                   new Card("Mardu Scout", 391874, 2, "R", "Creature", "frf", "C"),
                   new Card("Pressure Point", 391896, 2, "W", "Instant", "frf", "C"),
                   new Card("Rakshasa&#39;s Disdain", 391900, 3, "U", "Instant", "frf", "C"),
                   new Card("Reach of Shadows", 391902, 5, "B", "Instant", "frf", "C"),
                   new Card("Refocus", 391904, 2, "U", "Instant", "frf", "C"),
                   new Card("Return to the Earth", 391906, 4, "G", "Instant", "frf", "C"),
                   new Card("Sandblast", 391912, 3, "W", "Instant", "frf", "C"),
                   new Card("Sandsteppe Outcast", 391914, 3, "W", "Creature", "frf", "C"),
                   new Card("Sibsig Host", 391922, 5, "B", "Creature", "frf", "C"),
                   new Card("Smoldering Efreet", 391925, 2, "R", "Creature", "frf", "C"),
                   new Card("Soul Summons", 391926, 2, "W", "Sorcery", "frf", "C"),
                   new Card("Sultai Emissary", 391930, 2, "B", "Creature", "frf", "C"),
                   new Card("Sultai Runemark", 391931, 3, "B", "Enchantment", "frf", "C"),
                   new Card("Sultai Skullkeeper", 391932, 2, "U", "Creature", "frf", "C"),
                   new Card("Tasigur&#39;s Cruelty", 391938, 6, "B", "Sorcery", "frf", "C"),
                   new Card("Temur Battle Rage", 391940, 2, "R", "Instant", "frf", "C"),
                   new Card("Temur Runemark", 391941, 3, "G", "Enchantment", "frf", "C"),
                   new Card("Typhoid Rats", 391947, 1, "B", "Creature", "frf", "C"),
                   new Card("War Flare", 391953, 4, "M", "Instant", "frf", "C"),
                   new Card("Whisk Away", 391956, 3, "U", "Instant", "frf", "C"),
                   new Card("Whisperer of the Wilds", 391957, 2, "G", "Creature", "frf", "C"),
                   new Card("Will of the Naga", 391961, 6, "U", "Instant", "frf", "C"),
                   new Card("Write into Being", 391964, 3, "U", "Sorcery", "frf", "C")];
var frf_uncommons = [new Card("Abzan Beastmaster", 391782, 3, "G", "Creature", "frf", "U"),
                     new Card("Abzan Kin-Guard", 391783, 4, "G", "Creature", "frf", "U"),
                     new Card("Arashin War Beast", 391792, 7, "G", "Creature", "frf", "U"),
                     new Card("Battle Brawler", 391800, 2, "B", "Creature", "frf", "U"),
                     new Card("Battlefront Krushok", 391801, 5, "G", "Creature", "frf", "U"),
                     new Card("Bloodfire Enforcers", 391803, 4, "R", "Creature", "frf", "U"),
                     new Card("Break Through the Line", 391805, 2, "R", "Enchantment", "frf", "U"),
                     new Card("Cached Defenses", 391807, 3, "G", "Sorcery", "frf", "U"),
                     new Card("Channel Harm", 391808, 6, "G", "Sorcery", "frf", "U"),
                     new Card("Cloudform", 391810, 3, "U", "Enchantment", "frf", "U"),
                     new Card("Dark Deal", 391816, 3, "B", "Sorcery", "frf", "U"),
                     new Card("Destructor Dragon", 391818, 6, "G", "Creature", "frf", "U"),
                     new Card("Diplomacy of the Wastes", 391819, 3, "B", "Sorcery", "frf", "U"),
                     new Card("Dragonrage", 391823, 3, "R", "Instant", "frf", "U"),
                     new Card("Elite Scaleguard", 391826, 5, "W", "Creature", "frf", "U"),
                     new Card("Fascination", 391829, 2, "U", "Sorcery", "frf", "U"),
                     new Card("Fearsome Awakening", 391830, 5, "B", "Sorcery", "frf", "U"),
                     new Card("Friendly Fire", 391838, 4, "R", "Instant", "frf", "U"),
                     new Card("Frost Walker", 391841, 2, "U", "Creature", "frf", "U"),
                     new Card("Fruit of the First Tree", 391842, 4, "G", "Enchantment", "frf", "U"),
                     new Card("Goblin Boom Keg", 391844, 4, "", "Artifact", "frf", "U"),
                     new Card("Grave Strength", 391847, 2, "B", "Sorcery", "frf", "U"),
                     new Card("Hero&#39;s Blade", 391852, 2, "", "Artifact", "frf", "U"),
                     new Card("Hewed Stone Retainers", 391853, 3, "", "Creature", "frf", "U"),
                     new Card("Honor&#39;s Reward", 391854, 3, "W", "Instant", "frf", "U"),
                     new Card("Humble Defector", 391856, 2, "R", "Creature", "frf", "U"),
                     new Card("Hungering Yeti", 391857, 5, "R", "Creature", "frf", "U"),
                     new Card("Jeskai Barricade", 391861, 2, "W", "Creature", "frf", "U"),
                     new Card("Lightform", 391867, 3, "W", "Enchantment", "frf", "U"),
                     new Card("Lotus-Eye Mystics", 391870, 4, "W", "Creature", "frf", "U"),
                     new Card("Marang River Prowler", 391872, 3, "U", "Creature", "frf", "U"),
                     new Card("Mardu Shadowspear", 391875, 1, "B", "Creature", "frf", "U"),
                     new Card("Mardu Woe-Reaper", 391877, 1, "W", "Creature", "frf", "U"),
                     new Card("Merciless Executioner", 391879, 3, "B", "Creature", "frf", "U"),
                     new Card("Mindscour Dragon", 391880, 6, "U", "Creature", "frf", "U"),
                     new Card("Mistfire Adept", 391881, 4, "U", "Creature", "frf", "U"),
                     new Card("Neutralizing Blast", 391887, 2, "U", "Instant", "frf", "U"),
                     new Card("Noxious Dragon", 391888, 6, "B", "Creature", "frf", "U"),
                     new Card("Orc Sureshot", 391890, 4, "B", "Creature", "frf", "U"),
                     new Card("Pilgrim of the Fires", 391893, 7, "", "Creature", "frf", "U"),
                     new Card("Pyrotechnics", 391897, 5, "R", "Sorcery", "frf", "U"),
                     new Card("Qarsi High Priest", 391898, 1, "B", "Creature", "frf", "U"),
                     new Card("Rageform", 391899, 4, "R", "Enchantment", "frf", "U"),
                     new Card("Reality Shift", 391903, 2, "U", "Instant", "frf", "U"),
                     new Card("Renowned Weaponsmith", 391905, 2, "U", "Creature", "frf", "U"),
                     new Card("Rite of Undoing", 391907, 5, "U", "Instant", "frf", "U"),
                     new Card("Ruthless Instincts", 391909, 3, "G", "Instant", "frf", "U"),
                     new Card("Sage&#39;s Reverie", 391910, 4, "W", "Enchantment", "frf", "U"),
                     new Card("Shifting Loyalties", 391919, 6, "U", "Sorcery", "frf", "U"),
                     new Card("Shockmaw Dragon", 391920, 6, "R", "Creature", "frf", "U"),
                     new Card("Sibsig Muckdraggers", 391923, 9, "B", "Creature", "frf", "U"),
                     new Card("Sudden Reclamation", 391929, 4, "G", "Instant", "frf", "U"),
                     new Card("Temur Sabertooth", 391942, 4, "G", "Creature", "frf", "U"),
                     new Card("Ugin&#39;s Construct", 391949, 4, "", "Creature", "frf", "U"),
                     new Card("Valorous Stance", 391950, 2, "W", "Instant", "frf", "U"),
                     new Card("Vaultbreaker", 391951, 4, "R", "Creature", "frf", "U"),
                     new Card("Wandering Champion", 391952, 2, "W", "Creature", "frf", "U"),
                     new Card("Wardscale Dragon", 391955, 6, "W", "Creature", "frf", "U"),
                     new Card("Wild Slash", 391959, 1, "R", "Instant", "frf", "U"),
                     new Card("Winds of Qal Sisma", 391962, 2, "G", "Instant", "frf", "U")];
var frf_rares = [new Card("Alesha, Who Smiles at Death", 391787, 3, "R", "Creature", "frf", "R"),
                 new Card("Arcbond", 391793, 3, "R", "Instant", "frf", "R"),
                 new Card("Archfiend of Depravity", 391795, 5, "B", "Creature", "frf", "R"),
                 new Card("Atarka, World Render", 391796, 7, "M", "Creature", "frf", "R"),
                 new Card("Citadel Siege", 391809, 4, "W", "Enchantment", "frf", "R"),
                 new Card("Crucible of the Spirit Dragon", 391812, 0, "", "Land", "frf", "R"),
                 new Card("Crux of Fate", 391813, 5, "B", "Sorcery", "frf", "R"),
                 new Card("Daghatar the Adamant", 391815, 4, "W", "Creature", "frf", "R"),
                 new Card("Dragonscale General", 391824, 4, "W", "Creature", "frf", "R"),
                 new Card("Dromoka, the Eternal", 391825, 5, "M", "Creature", "frf", "R"),
                 new Card("Flamerush Rider", 391833, 5, "R", "Creature", "frf", "R"),
                 new Card("Flamewake Phoenix", 391834, 3, "R", "Creature", "frf", "R"),
                 new Card("Frontier Siege", 391840, 4, "G", "Enchantment", "frf", "R"),
                 new Card("Jeskai Infiltrator", 391862, 3, "U", "Creature", "frf", "R"),
                 new Card("Kolaghan, the Storm&#39;s Fury", 391866, 5, "M", "Creature", "frf", "R"),
                 new Card("Mardu Strike Leader", 391876, 3, "B", "Creature", "frf", "R"),
                 new Card("Mastery of the Unseen", 391878, 2, "W", "Enchantment", "frf", "R"),
                 new Card("Mob Rule", 391882, 6, "R", "Sorcery", "frf", "R"),
                 new Card("Monastery Siege", 391884, 3, "U", "Enchantment", "frf", "R"),
                 new Card("Ojutai, Soul of Winter", 391889, 7, "M", "Creature", "frf", "R"),
                 new Card("Outpost Siege", 391891, 4, "R", "Enchantment", "frf", "R"),
                 new Card("Palace Siege", 391892, 5, "B", "Enchantment", "frf", "R"),
                 new Card("Rally the Ancestors", 391901, 2, "W", "Instant", "frf", "R"),
                 new Card("Sage-Eye Avengers", 391911, 6, "U", "Creature", "frf", "R"),
                 new Card("Sandsteppe Mastodon", 391913, 7, "G", "Creature", "frf", "R"),
                 new Card("Scroll of the Masters", 391916, 2, "", "Artifact", "frf", "R"),
                 new Card("Shamanic Revelation", 391918, 5, "G", "Sorcery", "frf", "R"),
                 new Card("Shu Yun, the Silent Tempest", 391921, 3, "U", "Creature", "frf", "R"),
                 new Card("Silumgar, the Drifting Death", 391924, 6, "M", "Creature", "frf", "R"),
                 new Card("Soulflayer", 391928, 6, "B", "Creature", "frf", "R"),
                 new Card("Supplant Form", 391933, 6, "U", "Instant", "frf", "R"),
                 new Card("Tasigur, the Golden Fang", 391937, 6, "B", "Creature", "frf", "R"),
                 new Card("Temur War Shaman", 391943, 6, "G", "Creature", "frf", "R"),
                 new Card("Wildcall", 391960, 2, "G", "Sorcery", "frf", "R"),
                 new Card("Yasova Dragonclaw", 391965, 3, "G", "Creature", "frf", "R")];
var frf_mythics = [new Card("Brutal Hordechief", 391806,  4, "B", "Creature", "frf", "M"),
                   new Card("Ghastly Conscription", 391843, 7, "B", "Sorcery", "frf", "M"),
                   new Card("Monastery Mentor", 391883, 3, "W", "Creature", "frf", "M"),
                   new Card("Shaman of the Great Hunt", 391917, 4, "R", "Creature", "frf", "M"),
                   new Card("Soulfire Grand Master", 391927, 2, "W", "Creature", "frf", "M"),
                   new Card("Temporal Trespass", 391939, 11, "U", "Sorcery", "frf", "M"),
                   new Card("Torrent Elemental", 391945, 5, "U", "Creature", "frf", "M"),
                   new Card("Ugin, the Spirit Dragon", 391948, 8, "", "Planeswalker", "frf", "M"),
                   new Card("Warden of the First Tree", 391954, 1, "G", "Creature", "frf", "M"),
                   new Card("Whisperwood Elemental", 391958, 5, "G", "Creature", "frf", "M")];
                   
var dtk_lands = [new Card("Forest", 394573, 0, "", "Land", "dtk", "C"),
                 new Card("Island", 394603, 0, "", "Land", "dtk", "C"),
                 new Card("Mountain", 394628, 0, "", "Land", "dtk", "C"),
                 new Card("Plains", 394649, 0, "", "Land", "dtk", "C"),
                 new Card("Swamp", 394722, 0, "", "Land", "dtk", "C")];
var dtk_commons = [new Card("Aerie Bowmasters", 394486, 4, "G", "Creature", "dtk", "C"),
                   new Card("Ainok Artillerist", 394487, 3, "G", "Creature", "dtk", "C"),
                   new Card("Ancestral Statue", 394491, 4, "", "Creature", "dtk", "C"),
                   new Card("Ancient Carp", 394492, 5, "U", "Creature", "dtk", "C"),
                   new Card("Anticipate", 394493, 2, "U", "Instant", "dtk", "C"),
                   new Card("Artful Maneuver", 394496, 2, "W", "Instant", "dtk", "C"),
                   new Card("Atarka Beastbreaker", 394498, 2, "G", "Creature", "dtk", "C"),
                   new Card("Atarka Efreet", 394499, 4, "R", "Creature", "dtk", "C"),
                   new Card("Aven Tactician", 394505, 5, "W", "Creature", "dtk", "C"),
                   new Card("Butcher&#39;s Glee", 394513, 3, "B", "Instant", "dtk", "C"),
                   new Card("Center Soul", 394514, 2, "W", "Instant", "dtk", "C"),
                   new Card("Champion of Arashin", 394515, 4, "W", "Creature", "dtk", "C"),
                   new Card("Coat with Venom", 394518, 1, "B", "Instant", "dtk", "C"),
                   new Card("Colossodon Yearling", 394520, 3, "G", "Creature", "dtk", "C"),
                   new Card("Conifer Stalker", 394522, 4, "G", "Creature", "dtk", "C"),
                   new Card("Contradict", 394523, 5, "U", "Instant", "dtk", "C"),
                   new Card("Custodian of the Trove", 394527, 3, "", "Creature", "dtk", "C"),
                   new Card("Defeat", 394534, 2, "B", "Sorcery", "dtk", "C"),
                   new Card("Dirgur Nemesis", 394537, 6, "U", "Creature", "dtk", "C"),
                   new Card("Dragon Fodder", 394540, 2, "R", "Sorcery", "dtk", "C"),
                   new Card("Dragon&#39;s Eye Sentry", 394544, 1, "W", "Creature", "dtk", "C"),
                   new Card("Dragon-Scarred Bear", 394553, 3, "G", "Creature", "dtk", "C"),
                   new Card("Dromoka Dunecaster", 394555, 1, "W", "Creature", "dtk", "C"),
                   new Card("Dromoka Warrior", 394557, 2, "W", "Creature", "dtk", "C"),
                   new Card("Duress", 394560, 1, "B", "Sorcery", "dtk", "C"),
                   new Card("Dutiful Attendant", 394561, 3, "B", "Creature", "dtk", "C"),
                   new Card("Elusive Spellfist", 394563, 2, "U", "Creature", "dtk", "C"),
                   new Card("Enduring Victory", 394566, 5, "W", "Instant", "dtk", "C"),
                   new Card("Epic Confrontation", 394567, 2, "G", "Sorcery", "dtk", "C"),
                   new Card("Evolving Wilds", 394568, 0, "", "Land", "dtk", "C"),
                   new Card("Fate Forgotten", 394570, 3, "W", "Instant", "dtk", "C"),
                   new Card("Flatten", 394571, 4, "B", "Instant", "dtk", "C"),
                   new Card("Foul-Tongue Shriek", 394578, 1, "B", "Instant", "dtk", "C"),
                   new Card("Glade Watcher", 394580, 2, "G", "Creature", "dtk", "C"),
                   new Card("Glaring Aegis", 394581, 1, "W", "Enchantment", "dtk", "C"),
                   new Card("Glint", 394583, 2, "U", "Instant", "dtk", "C"),
                   new Card("Gravepurge", 394585, 3, "B", "Instant", "dtk", "C"),
                   new Card("Guardian Shield-Bearer", 394587, 2, "G", "Creature", "dtk", "C"),
                   new Card("Gurmag Drowner", 394589, 4, "U", "Creature", "dtk", "C"),
                   new Card("Hand of Silumgar", 394590, 2, "B", "Creature", "dtk", "C"),
                   new Card("Hardened Berserker", 394592, 3, "R", "Creature", "dtk", "C"),
                   new Card("Herald of Dromoka", 394595, 2, "W", "Creature", "dtk", "C"),
                   new Card("Impact Tremors", 394600, 2, "R", "Enchantment", "dtk", "C"),
                   new Card("Keeper of the Lens", 394606, 1, "", "Creature", "dtk", "C"),
                   new Card("Kindled Fury", 394607, 1, "R", "Instant", "dtk", "C"),
                   new Card("Kolaghan Aspirant", 394608, 2, "R", "Creature", "dtk", "C"),
                   new Card("Kolaghan Skirmisher", 394611, 2, "B", "Creature", "dtk", "C"),
                   new Card("Kolaghan Stormsinger", 394612, 1, "R", "Creature", "dtk", "C"),
                   new Card("Lightwalker", 394616, 2, "W", "Creature", "dtk", "C"),
                   new Card("Lose Calm", 394618, 4, "R", "Sorcery", "dtk", "C"),
                   new Card("Magmatic Chasm", 394620, 2, "R", "Sorcery", "dtk", "C"),
                   new Card("Marsh Hulk", 394622, 6, "B", "Creature", "dtk", "C"),
                   new Card("Mind Rot", 394623, 3, "B", "Sorcery", "dtk", "C"),
                   new Card("Misthoof Kirin", 394626, 3, "W", "Creature", "dtk", "C"),
                   new Card("Monastery Loremaster", 394627, 4, "U", "Creature", "dtk", "C"),
                   new Card("Mystic Meditation", 394631, 4, "U", "Sorcery", "dtk", "C"),
                   new Card("Naturalize", 394634, 2, "G", "Instant", "dtk", "C"),
                   new Card("Negate", 394636, 2, "U", "Instant", "dtk", "C"),
                   new Card("Ojutai Interceptor", 394639, 4, "U", "Creature", "dtk", "C"),
                   new Card("Ojutai&#39;s Breath", 394641, 3, "U", "Instant", "dtk", "C"),
                   new Card("Ojutai&#39;s Summons", 394643, 5, "U", "Sorcery", "dtk", "C"),
                   new Card("Pacifism", 394645, 2, "W", "Enchantment", "dtk", "C"),
                   new Card("Palace Familiar", 394646, 2, "U", "Creature", "dtk", "C"),
                   new Card("Pinion Feast", 394647, 5, "G", "Instant", "dtk", "C"),
                   new Card("Qarsi Sadist", 394658, 2, "B", "Creature", "dtk", "C"),
                   new Card("Reckless Imp", 394661, 3, "B", "Creature", "dtk", "C"),
                   new Card("Reduce in Stature", 394662, 3, "U", "Enchantment", "dtk", "C"),
                   new Card("Resupply", 394664, 6, "W", "Instant", "dtk", "C"),
                   new Card("Revealing Wind", 394665, 3, "G", "Instant", "dtk", "C"),
                   new Card("Sabertooth Outrider", 394669, 4, "R", "Creature", "dtk", "C"),
                   new Card("Sandcrafter Mage", 394672, 3, "W", "Creature", "dtk", "C"),
                   new Card("Sandsteppe Scavenger", 394673, 5, "G", "Creature", "dtk", "C"),
                   new Card("Sandstorm Charger", 394674, 5, "W", "Creature", "dtk", "C"),
                   new Card("Sarkhan&#39;s Rage", 394676, 5, "R", "Instant", "dtk", "C"),
                   new Card("Screamreach Brawler", 394682, 3, "R", "Creature", "dtk", "C"),
                   new Card("Segmented Krotiq", 394684, 6, "G", "Creature", "dtk", "C"),
                   new Card("Servant of the Scale", 394687, 1, "G", "Creature", "dtk", "C"),
                   new Card("Shambling Goblin", 394689, 1, "B", "Creature", "dtk", "C"),
                   new Card("Shape the Sands", 394690, 1, "G", "Instant", "dtk", "C"),
                   new Card("Sheltered Aerie", 394691, 3, "G", "Enchantment", "dtk", "C"),
                   new Card("Sibsig Icebreakers", 394694, 3, "B", "Creature", "dtk", "C"),
                   new Card("Sidisi&#39;s Faithful", 394696, 1, "U", "Creature", "dtk", "C"),
                   new Card("Silumgar Butcher", 394701, 5, "B", "Creature", "dtk", "C"),
                   new Card("Spidersilk Net", 394708, 0, "", "Artifact", "dtk", "C"),
                   new Card("Sprinting Warbrute", 394709, 5, "R", "Creature", "dtk", "C"),
                   new Card("Stampeding Elk Herd", 394710, 5, "G", "Creature", "dtk", "C"),
                   new Card("Student of Ojutai", 394716, 4, "W", "Creature", "dtk", "C"),
                   new Card("Summit Prowler", 394717, 4, "R", "Creature", "dtk", "C"),
                   new Card("Taigam&#39;s Strike", 394726, 4, "U", "Sorcery", "dtk", "C"),
                   new Card("Tail Slash", 394727, 3, "R", "Instant", "dtk", "C"),
                   new Card("Territorial Roc", 394729, 2, "W", "Creature", "dtk", "C"),
                   new Card("Tormenting Voice", 394731, 2, "R", "Sorcery", "dtk", "C"),
                   new Card("Tread Upon", 394732, 2, "G", "Instant", "dtk", "C"),
                   new Card("Twin Bolt", 394733, 2, "R", "Instant", "dtk", "C"),
                   new Card("Updraft Elemental", 394736, 3, "U", "Creature", "dtk", "C"),
                   new Card("Vandalize", 394737, 5, "R", "Sorcery", "dtk", "C"),
                   new Card("Vial of Dragonfire", 394738, 2, "", "Artifact", "dtk", "C"),
                   new Card("Volcanic Rush", 394741, 5, "R", "Instant", "dtk", "C"),
                   new Card("Vulturous Aven", 394743, 4, "B", "Creature", "dtk", "C"),
                   new Card("Wandering Tombshell", 394744, 4, "B", "Creature", "dtk", "C"),
                   new Card("Zephyr Scribe", 394747, 3, "U", "Creature", "dtk", "C")];
var dtk_uncommons = [new Card("Acid-Spewer Dragon", 394485, 6, "B", "Creature", "dtk", "U"),
                     new Card("Ainok Survivalist", 394488, 2, "G", "Creature", "dtk", "U"),
                     new Card("Ambuscade Shaman", 394489, 3, "B", "Creature", "dtk", "U"),
                     new Card("Atarka Monument", 394500, 3, "", "Artifact", "dtk", "U"),
                     new Card("Atarka Pummeler", 394501, 5, "R", "Creature", "dtk", "U"),
                     new Card("Aven Sunstriker", 394504, 3, "W", "Creature", "dtk", "U"),
                     new Card("Battle Mastery", 394506, 3, "W", "Enchantment", "dtk", "U"),
                     new Card("Belltoll Dragon", 394507, 6, "U", "Creature", "dtk", "U"),
                     new Card("Blood-Chin Rager", 394511, 2, "B", "Creature", "dtk", "U"),
                     new Card("Circle of Elders", 394516, 4, "G", "Creature", "dtk", "U"),
                     new Card("Cunning Breezedancer", 394526, 6, "M", "Creature", "dtk", "U"),
                     new Card("Dance of the Skywise", 394529, 2, "U", "Instant", "dtk", "U"),
                     new Card("Deadly Wanderings", 394530, 5, "B", "Enchantment", "dtk", "U"),
                     new Card("Death Wind", 394531, 1, "B", "Instant", "dtk", "U"),
                     new Card("Display of Dominance", 394538, 2, "G", "Instant", "dtk", "U"),
                     new Card("Draconic Roar", 394539, 2, "R", "Instant", "dtk", "U"),
                     new Card("Dragon Hunter", 394541, 1, "W", "Creature", "dtk", "U"),
                     new Card("Dragonloft Idol", 394545, 4, "", "Creature", "dtk", "U"),
                     new Card("Dragonlord&#39;s Servant", 394552, 2, "R", "Creature", "dtk", "U"),
                     new Card("Dromoka Captain", 394554, 3, "W", "Creature", "dtk", "U"),
                     new Card("Dromoka Monument", 394556, 3, "", "Artifact", "dtk", "U"),
                     new Card("Dromoka&#39;s Gift", 394559, 5, "G", "Instant", "dtk", "U"),
                     new Card("Echoes of the Kin Tree", 394562, 2, "W", "Enchantment", "dtk", "U"),
                     new Card("Encase in Ice", 394564, 2, "U", "Enchantment", "dtk", "U"),
                     new Card("Enduring Scalelord", 394565, 6, "M", "Creature", "dtk", "U"),
                     new Card("Explosive Vegetation", 394569, 4, "G", "Sorcery", "dtk", "U"),
                     new Card("Foul-Tongue Invocation", 394577, 3, "B", "Instant", "dtk", "U"),
                     new Card("Gate Smasher", 394579, 3, "", "Artifact", "dtk", "U"),
                     new Card("Graceblade Artisan", 394584, 3, "W", "Creature", "dtk", "U"),
                     new Card("Great Teacher&#39;s Decree", 394586, 4, "W", "Sorcery", "dtk", "U"),
                     new Card("Gudul Lurker", 394588, 1, "U", "Creature", "dtk", "U"),
                     new Card("Herdchaser Dragon", 394596, 6, "G", "Creature", "dtk", "U"),
                     new Card("Inspiring Call", 394601, 3, "G", "Creature", "dtk", "U"),
                     new Card("Kolaghan Forerunners", 394609, 3, "R", "Creature", "dtk", "U"),
                     new Card("Kolaghan Monument", 394610, 3, "", "Artifact", "dtk", "U"),
                     new Card("Learn from the Past", 394614, 4, "U", "Instant", "dtk", "U"),
                     new Card("Lightning Berserker", 394615, 1, "R", "Creature", "dtk", "U"),
                     new Card("Lurking Arynx", 394619, 5, "G", "Creature", "dtk", "U"),
                     new Card("Marang River Skeleton", 394621, 2, "B", "Creature", "dtk", "U"),
                     new Card("Minsiter of Pain", 394624, 3, "B", "Creature", "dtk", "U"),
                     new Card("Ojutai Monument", 394640, 3, "", "Artifact", "dtk", "U"),
                     new Card("Orator of Ojutai", 394644, 2, "W", "Creature", "dtk", "U"),
                     new Card("Press the Advantage", 394652, 4, "G", "Instant", "dtk", "U"),
                     new Card("Qal Sima Behemoth", 394656, 3, "R", "Creature", "dtk", "U"),
                     new Card("Qarsi Deceiver", 394657, 2, "U", "Creature", "dtk", "U"),
                     new Card("Rakshasa Gravecaller", 394660, 5, "B", "Creature", "dtk", "U"),
                     new Card("Rending Volley", 394663, 1, "R", "Instant", "dtk", "U"),
                     new Card("Roast", 394667, 2, "R", "Sorcery", "dtk", "U"),
                     new Card("Ruthless Deathfang", 394668, 6, "M", "Creature", "dtk", "U"),
                     new Card("Salt Road Ambushers", 394670, 4, "G", "Creature", "dtk", "U"),
                     new Card("Salt Road Quartermasters", 394671, 3, "G", "Creature", "dtk", "U"),
                     new Card("Sarkhan&#39;s Triumph", 394677, 3, "R", "Instant", "dtk", "U"),
                     new Card("Savage Ventmaw", 394678, 6, "M", "Creature", "dtk", "U"),
                     new Card("Scale Blessing", 394679, 4, "W", "Instant", "dtk", "U"),
                     new Card("Scaleguard Sentinels", 394680, 2, "G", "Creature", "dtk", "U"),
                     new Card("Scion of Ugin", 394681, 6, "", "Creature", "dtk", "U"),
                     new Card("Seismic Rupture", 394685, 3, "R", "Sorcery", "dtk", "U"),
                     new Card("Self-Inflicted Wound", 394686, 2, "B", "Sorcery", "dtk", "U"),
                     new Card("Shieldhide Dragon", 394692, 6, "W", "Creature", "dtk", "U"),
                     new Card("Sight Beyond Sight", 394697, 4, "U", "Sorcery", "dtk", "U"),
                     new Card("Sight of the Scalelords", 394698, 5, "G", "Enchantment", "dtk", "U"),
                     new Card("Silkwrap", 394699, 2, "W", "Enchantment", "dtk", "U"),
                     new Card("Silumgar Monument", 394702, 3, "", "Artifact", "dtk", "U"),
                     new Card("Silumgar Sorcerer", 394703, 3, "U", "Creature", "dtk", "U"),
                     new Card("Silumgar Spell-Eater", 394704, 3, "U", "Creature", "dtk", "U"),
                     new Card("Silumgar&#39;s Scorn", 394706, 2, "U", "Instant", "dtk", "U"),
                     new Card("Skywise Teachings", 394707, 4, "U", "Enchantment", "dtk", "U"),
                     new Card("Stormcrag Elemental", 394711, 6, "R", "Creature", "dtk", "U"),
                     new Card("Stormrider Rig", 394712, 2, "", "Artifact", "dtk", "U"),
                     new Card("Stormwing Dragon", 394713, 6, "R", "Creature", "dtk", "U"),
                     new Card("Strongarm Monk", 394715, 5, "W", "Creature", "dtk", "U"),
                     new Card("Surge of Righteousness", 394720, 2, "W", "Instant", "dtk", "U"),
                     new Card("Swift Warkite", 394725, 6, "M", "Creature", "dtk", "U"),
                     new Card("Tapestry of the Ages", 394728, 4, "", "Artifact", "dtk", "U"),
                     new Card("Ukud Cobra", 394734, 4, "B", "Creature", "dtk", "U"),
                     new Card("Ultimate Price", 394735, 2, "B", "Instant", "dtk", "U"),
                     new Card("Virulent Plague", 394739, 3, "B", "Enchantment", "dtk", "U"),
                     new Card("Void Squall", 394740, 5, "U", "Sorcery", "dtk", "U"),
                     new Card("Warbringer", 394745, 4, "R", "Creature", "dtk", "U"),
                     new Card("Youthful Scholar", 394746, 4, "U", "Creature", "dtk", "U")];
var dtk_rares = [new Card("Anafenza, Kin-Tree Spirit", 394490, 2, "W", "Creature", "dtk", "R"),
                 new Card("Arashin Foremost", 394494, 3, "W", "Creature", "dtk", "R"),
                 new Card("Arashin Sovereign", 394495, 7, "M", "Creature", "dtk", "R"),
                 new Card("Assault Formation", 394497, 2, "G", "Enchantment", "dtk", "R"),
                 new Card("Atarka&#39;s Command", 394502, 2, "M", "Instant", "dtk", "R"),
                 new Card("Avatar of the Resolute", 394503, 2, "G", "Creature", "dtk", "R"),
                 new Card("Berserkers&#39; Onslaught", 394508, 5, "R", "Creature", "dtk", "R"),
                 new Card("Blessed Reincarnation", 394509, 4, "U", "Instant", "dtk", "R"),
                 new Card("Blood-Chin Fanatic", 394510, 3, "B", "Creature", "dtk", "R"),
                 new Card("Boltwing Marauder", 394512, 5, "M", "Creature", "dtk", "R"),
                 new Card("Collected Company", 394519, 4, "G", "Instant", "dtk", "R"),
                 new Card("Commune with Lava", 394521, 2, "R", "Instant", "dtk", "R"),
                 new Card("Corpseweft", 394524, 3, "B", "Enchantment", "dtk", "R"),
                 new Card("Crater Elemental", 394525, 3, "R", "Creature", "dtk", "R"),
                 new Card("Damnable Pact", 394528, 2, "B", "Sorcery", "dtk", "R"),
                 new Card("Deathbringer Regent", 394532, 7, "B", "Creature", "dtk", "R"),
                 new Card("Den Protector", 394535, 2, "G", "Creature", "dtk", "R"),
                 new Card("Dragon Tempest", 394542, 2, "R", "Enchantment", "dtk", "R"),
                 new Card("Dragonlord&#39;s Perogative", 394551, 6, "U", "Instant", "dtk", "R"),
                 new Card("Dromoka&#39;s Command", 394558, 2, "M", "Instant", "dtk", "R"),
                 new Card("Foe-Razer Regent", 394572, 7, "G", "Creature", "dtk", "R"),
                 new Card("Foul Renewal", 394576, 4, "B", "Instant", "dtk", "R"),
                 new Card("Gleam of Authority", 394582, 2, "W", "Enchantment", "dtk", "R"),
                 new Card("Harbinger of the Hunt", 394591, 5, "M", "Creature", "dtk", "R"),
                 new Card("Haven of the Spirit Dragon", 394593, 0, "", "Land", "dtk", "R"),
                 new Card("Hedonist&#39;s Trove", 394594, 7, "B", "Enchantment", "dtk", "R"),
                 new Card("Hidden Dragonslayer", 394597, 2, "W", "Creature", "dtk", "R"),
                 new Card("Icefall Regent", 394598, 5, "U", "Creature", "dtk", "R"),
                 new Card("Illusory Gains", 394599, 5, "U", "Enchantment", "dtk", "R"),
                 new Card("Ire Shaman", 394602, 2, "R", "Creature", "dtk", "R"),
                 new Card("Kolaghan&#39;s Command", 394613, 3, "M", "Instant", "dtk", "R"),
                 new Card("Living Lore", 394617, 4, "U", "Creature", "dtk", "R"),
                 new Card("Mirror Mockery", 394625, 2, "U", "Enchantment", "dtk", "R"),
                 new Card("Myth Realized", 394632, 1, "W", "Enchantment", "dtk", "R"),
                 new Card("Necromaster Dragon", 394635, 5, "M", "Creature", "dtk", "R"),
                 new Card("Obscuring Aether", 394637, 1, "G", "Enchantment", "dtk", "R"),
                 new Card("Ojutai&#39;s Command", 394642, 4, "M", "Instant", "dtk", "R"),
                 new Card("Pitiless Horde", 394648, 3, "B", "Creature", "dtk", "R"),
                 new Card("Pristine Skywise", 394653, 6, "M", "Creature", "dtk", "R"),
                 new Card("Profaner of the Dead", 394654, 4, "U", "Creature", "dtk", "R"),
                 new Card("Profound Jouney", 394655, 7, "W", "Sorcery", "dtk", "R"),
                 new Card("Radiant Purge", 394659, 2, "W", "Instant", "dtk", "R"),
                 new Card("Secure the Wastes", 394683, 1, "W", "Instant", "dtk", "R"),
                 new Card("Sidisi, Undead Vizier", 394695, 5, "B", "Creature", "dtk", "R"),
                 new Card("Silumgar Assassin", 394700, 2, "B", "Creature", "dtk", "R"),
                 new Card("Silumgar&#39;s Command", 394705, 5, "M", "Instant", "dtk", "R"),
                 new Card("Stratus Dancer", 394714, 2, "U", "Creature", "dtk", "R"),
                 new Card("Sunbringer&#39;s Touch", 394718, 4, "G", "Sorcery", "dtk", "R"),
                 new Card("Sunscorch Regent", 394719, 5, "W", "Creature", "dtk", "R"),
                 new Card("Surrak, the Hunt Caller", 394721, 4, "G", "Creature", "dtk", "R"),
                 new Card("Thunderbreak Regent", 394730, 4, "R", "Creature", "dtk", "R"),
                 new Card("Volcanic Vision", 394742, 7, "R", "Sorcery", "dtk", "R"),
                 new Card("Zurgo Bellstriker", 394748, 1, "R", "Creature", "dtk", "R")];
var dtk_mythics = [new Card("Clone Legion", 394517, 9, "U", "Sorcery", "dtk", "M"),
                   new Card("Deathmist Raptor", 394533, 3, "G", "Creature", "dtk", "M"),
                   new Card("Descent of the Dragons", 394536, 6, "R", "Sorcery", "dtk", "M"),
                   new Card("Dragon Whisperer", 394543, 2, "R", "Creature", "dtk", "M"),
                   new Card("Dragonlord Atarka", 394546, 7, "M", "Creature", "dtk", "M"),
                   new Card("Dragonlord Dromoka", 394547, 6, "M", "Creature", "dtk", "M"),
                   new Card("Dragonlord Kolaghan", 394548, 6, "M", "Creature", "dtk", "M"),
                   new Card("Dragonlord Ojutai", 394549, 5, "M", "Creature", "dtk", "M"),
                   new Card("Dragonlord Silumgar", 394550, 6, "M", "Creature", "dtk", "M"),
                   new Card("Narset Transcendent", 394633, 4, "M", "Planeswalker", "dtk", "M"),
                   new Card("Ojutai Exemplars", 394638, 4, "W", "Creature", "dtk", "M"),
                   new Card("Risen Executioner", 394666, 4, "B", "Creature", "dtk", "M"),
                   new Card("Sarkhan Unbroken", 394675, 5, "M", "Planeswalker", "dtk", "M"),
                   new Card("Shaman of Forgotten Ways", 394688, 3, "G", "Creature", "dtk", "M"),
                   new Card("Shorecrasher Elemental", 394693, 3, "U", "Creature", "dtk", "M")];
                   
                   
var draftTypeChosen = [];
                   
var collection = [];

var sortedByCMC = true;         // CMC > Color > Name (the default sorting method)
var sortedByColor = false;      // Color > Name
var sortedByRarity = false;     // Rarity > Color > Name

var sideboard = [];

function makeImageTag(card) {
    return "<img src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=" + card.mvid + "&type=card' width=" + card_width + " height= " + card_height + " />";
}

function makeRelativeImageTag(card, left, top) {
    return "<img src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=" + card.mvid + "&type=card' width=" + card_width + " height=" + card_height + " style='position: absolute; left: " + left + "px; top: " + top + "px' />";
}

function dtkPack() {
    return generatePack(dtk_mythics, dtk_rares, dtk_uncommons, dtk_commons, dtk_lands);
}

function frfPack() {
    return generatePack(frf_mythics, frf_rares, frf_uncommons, frf_commons, frf_lands);
}

function ktkPack() {
    return generatePack(ktk_mythics, ktk_rares, ktk_uncommons, ktk_commons, ktk_lands);
}

function generatePack(mythics, rares, uncommons, commons, lands) {
    var pack = [];
    
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
    
    $("#sideboard img").click(function() {
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
            $("#player_collection").append(makeRelativeImageTag(bin[j], i*(card_width + 20), 40 + j*32));
        }
    }
    
    $("#player_collection img").click(function() {
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
    
    $("#pack img").click(function() {
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

    if (draftTypeChosen.length === 0) {
        $("#dtk").click(function() {
            draftTypeChosen = ["dtk", "dtk", "frf"];
            redrawSite();
        });
        $("#ktk").click(function() {
            draftTypeChosen = ["ktk", "ktk", "ktk"];
            redrawSite();
        });
        $("#frf").click(function() {
            draftTypeChosen = ["frf", "ktk", "ktk"];
            redrawSite();
        });
    }
    else {
        var rounds = [];
        for (var i = 0; i < 3; i++) {
            var packs = [];
            for (var j = 0; j < 8; j++) {
                switch(draftTypeChosen[i]) {
                    case "frf": packs.push(frfPack()); break;
                    case "ktk": packs.push(ktkPack()); break;
                    case "dtk": packs.push(dtkPack()); break;
                    default: console.log("Unknown set: " + draftTypeChosen[i]);
                }
            }
            rounds.push(packs);
        }

        drawPack(rounds, 0, 0);
        
        $("#sort_cmc").click(function() {
            sortedByCMC = true;
            sortedByColor = false;
            sortedByRarity = false;
            sortCollection();
            drawCollection();
        });
        
        $("#sort_color").click(function() {
            sortedByCMC = false;
            sortedByColor = true;
            sortedByRarity = false;
            sortCollection();
            drawCollection();
        });
        
        $("#sort_rarity").click(function() {
            sortedByCMC = false;
            sortedByColor = false;
            sortedByRarity = true;
            sortCollection();
            drawCollection();
        });
    }
}

$(document).ready(main);