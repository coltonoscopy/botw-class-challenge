let classes = [
    {
        name: 'Alchemist',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/c/c5/Breath_of_the_Wild_Potions_Energizing_Elixir_%28Icon%29.png/revision/latest?cb=20170416210910',
        equipment: [
            'Any one-handed weapon, bow, shield, or armor set (head, torso, and legs combined) that the alchemist equips must not have a rating higher than 30.  Alchemists may not equip the Master Sword.',
            'Any spear-type weapon that the alchemist equips must not have a rating higher than 20.',
            'Any two-handed melee weapon that the alchemist equips must not have a rating higher than 40.'
        ],
        traits: [
            'The alchemist class is the only one (besides the Freelancer) allowed to use 5 ingredients when preparing an elixir.'
        ],
        armor_color: 'Red'
    },
    {
        name: 'Ancient Warrior',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/0/07/Breath_of_the_Wild_Guardian_Battle_Axe_Ancient_Battle_Axe_%28Icon%29.png/revision/latest?cb=20170330160729',
        equipment: [
            'Ancient Warriors have exclusive access to the Ancient and Guardian equipment, including Ancient Arrows.',
            'They also have exclusive access to the upgraded Sheikah Slate runes provided by Purah.',
            "This class has exclusive access to the Ancient Bridle and Ancient Saddle from The Champions’ Ballad."
        ],
        traits: [
            "These devout warriors still believe in the original prophecy set forth by King Rhoam that the Guardians would be the ones to rescue Hyrule from Ganon, even after the Calamity.  They have devoted themselves to the research performed by Purah and Robbie."
        ],
        armor_color: 'Blue'
    },
    {
        name: 'Archer',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/3/3f/Breath_of_the_Wild_Gerudo_Bow_Golden_Bow_%28Icon%29.png/revision/latest?cb=20170827054320',
        equipment: [
            'Archers have access to all bows (excluding snipers) and boomerangs.',
            'The Archer also gains exclusive access to Bomb Arrows outside of the Vah Naboris boss battle.',
            'The Archer also gains access to the elemental arrows, along with the Mystic Knight.'
        ],
        traits: [
            'An archer specializes in long-range weaponry.'
        ],
        armor_color: 'Light Yellow'
    },
    {
        name: 'Berserker',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/4/43/Breath_of_the_Wild_Faron_Barbarian_Armor_Set_Barbarian_Helm_%28Icon%29.png/revision/latest?cb=20170403224812',
        equipment: [
            'They are allowed to utilize two-handed axes and hammers (except Guardian/Ancient), as well as any weapon from the Boko, Moblin, and Lynel equipment sets.',
            'Berserkers are not allowed to equip shields.',
            'They are the only class allowed to wear the Barbarian armor.',
            'Berserkers may wear the four Monster masks crafted by Kilton.',
            'Berserkers may utilize the Urbosa’s Fury blessing after obtaining it.',
        ],
        traits: [
            'These warrior people are not known for their interest in strategy, but rather in their tendencies to rush in and do a lot of damage.'
        ],
        armor_color: 'Crimson Red'
    },
    {
        name: 'Cavalier',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/5/5d/BotW_Royal_Guard_Armor_Set_%28The_Champion%27_Ballad_DLC%29_Royal_Guard_Uniform_%28Icon%29.png/revision/latest?cb=20180714132203',
        equipment: [
            "This class is only one of three that has access to the Soldier’s Armor and the Royal Guard’s Armor.",
            'The cavalier has access to all spear-type weapons (except Guardian and Ancient) and all bows that do not fire multiple arrows per shot or snipe.',
            'The cavalier has access to all shields that the Paladin has access to.',
            'The cavalier is the only class (besides the Freelancer) that gains access to the white horse and the giant horse, obtained from their respective side quests.'
        ],
        traits: [
            'The cavalier is a mounted knight, and thus gains several distinct advantages.'
        ],
        armor_color: 'Yellow'
    },
    {
        name: 'Chef',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/1/17/Breath_of_the_Wild_Food_Dish_%28Curry%29_Gourmet_Meat_Curry_%28Icon%29.png/revision/latest?cb=20170410075023',
        equipment: [
            "Any one-handed weapon, bow, shield, or armor set (head, torso, and legs combined) that the chef equips must not have a rating higher than 30.  Chefs may not equip the Master Sword.",
            'Any spear-type weapon that the chef equips must not have a rating higher than 20.',
            'Any two-handed melee weapon that the chef equips must not have a rating higher than 40.',
        ],
        traits: [
            'The chef class is the only one (besides the Freelancer) allowed to use 5 ingredients when preparing a meal.'
        ],
        armor_color: 'Peach'
    },
    {
        name: 'Dark Image',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/d/d0/BotW_Dark_Armor_%28The_Champion%27_Ballad_DLC%29_Phantom_Ganon_Skull_%28Icon%29.png/revision/latest?cb=20180714132542',
        equipment: [
            'The Dark Image is not allowed to wield the Bow of Light during the final battle.',
            'The Dark Image is proficient with all weapons that are not created by one of the races aligned with the Royal Family or by using Guardian parts.  (He is allowed to use any weapons created by a monster or a member of the Yiga Clan.)',
            'The Dark Image is the only class besides the Freelancer that is allowed access to the Dark armour, the Phantom Ganon set, Majora’s Mask, Zant’s Helmet, and the Spring-Loaded Hammer sold by Kilton.',
            'The Dark Image is allowed access to the monster masks sold by Kilton.',
        ],
        traits: [
            'This warrior was created by Ganon in the image of Link in order to kill him; however, he feels betrayed by Ganon for some grievance and now works to oppose him.',
            'The Dark Image is obliterated from the holy power of the Master Sword if he steps on the pedestal where it rests.  (If playing Mode 4, this results in the loss of the Dark Image as a class.)',
            'Utilizing the services of the Demon Statue in Hateno Village infuses the Dark Image with demonic energy, and allows him to create one meal or elixir with five ingredients per use.'
        ],
        armor_color: 'Black'
    },
    {
        name: 'Druid',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/b/b4/Breath_of_the_Wild_Improvised_Weapons_%28Wood%29_Tree_Branch_%28Icon%29.png/revision/latest?cb=20170502191349',
        equipment: [
            'This class, inspired by the Druid class from 1st and 2nd edition Advanced Dungeons and Dragons, may not use any equipment (besides regular arrows) that has metal or a Guardian part in it.  They are allowed all other equipment except for bows that either snipe or shoot multiple arrows.',
            'This class may utilize the Revali’s Gale and Urbosa’s Fury blessings after obtaining them.'

        ],
        traits: [
            'Druids are not allowed to hunt wild animals that are not actively attacking them.'
        ],
        armor_color: 'Brown'
    },
    {
        name: 'Explorer',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/f/f7/Breath_of_the_Wild_Improvised_Weapons_Boat_Oar_%28Icon%29.png/revision/latest?cb=20170801140000',
        equipment: [
            'The Explorer is always prepared to work in the harshest environments.  As such, he is allowed to wear the Climber’s equipment, the Snowquill equipment, the Flamebreaker equipment, the Desert Voe equipment, the Rubber Suit, the sand boots, the snow boots, the Thunder Helm, Rex’s armor from the Xenoblade Chronicles 2 DLC, and the Zora equipment.',
            'The Explorer has access to the Revali’s Gale blessing once he obtains it.',
            "The Explorer’s weapon set largely falls under the the theme of exploration: he is allowed to utilize the Boat Oar, the Traveler’s equipment, the Drillshaft, the Farmer’s equipment, the Iron Sledgehammer, the Soup Ladle, the Woodcutter’s Axe, and the Wooden Mop."
        ],
        traits: [

        ],
        armor_color: 'Navy Blue'
    },
    {
        name: 'Freelancer',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/9/99/Breath_of_the_Wild_Key_Items_Spirit_Orb_%28Icon%29.png/revision/latest?cb=20170407145341',
        equipment: [
            'Is free to use any weapon, armor, blessing, or item in the game.'
        ],
        traits: [
            'If playing Mode 2, Mode 3, Mode 5, or Mode 6, this is the class you start as.',
            'If you are playing Mode 1 and you decide to use this class throughout the entire game, you may not spend any more Spirit Orbs than those given in the Great Plateau, and then only on Stamina Upgrades.  (Mode 1 Freelancer is a variation on the 3 Heart challenge.)',
            'Can use any number of ingredients when cooking a meal or an elixir.',
            'This class is forfeited once you have received at least 3 upgrades of any kind (Heart Container or Stamina Vessel) or once you have freed a Divine Beast, whichever comes earlier.'
        ],
        armor_color: 'Any'
    },
    {
        name: 'Hero',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/2/2e/Breath_of_the_Wild_Shield_of_the_Hero_Hylian_Shield_%28Icon%29.png/revision/latest?cb=20170810225626',
        equipment: [
            'This class is the only one allowed to utilize Amiibo-exclusive equipment.  In addition, the Hero may wield the Master Sword, the Hylian Shield, the Bow of Light, the Champions’ exclusive weapons, the Champion’s Tunic, Tingle’s Outfit, the Korok Mask, Midna’s Helmet, Ravio’s Hood, the Island Lobster shirt, and the “-of the Wild” armor set.',
            'The Hero may utilize all four of the blessings granted to him by the other Champions.',
            'The Hero is the only class that gains access to Epona.'
        ],
        traits: [

        ],
        armor_color: 'Green'
    },
    {
        name: 'Mystic Knight',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/8/84/Breath_of_the_Wild_Elemental_Spears_%28Fire%29_Flamespear_%28Icon%29.png/revision/latest?cb=20170421230343',
        equipment: [
            'He gets access to the Windcleaver, all Flame weapons, Frost Weapons, and Thunder Weapons, as well as the elemental arrows to pair with any bow that can fire one arrow (same as the Cavalier).  This is also the only class that gains access to the Elemental rods.',
            'In order to wield a weapon, the Mystic Knight must wear the set of armor that gives him a resistance to that element, and vice versa.',
            'He may use Flame weapons, the Fire Rod, the Meteor Rod, the Daruk’s Protection blessing, or fire arrows if and only if he is wearing either Flamebreaker armor, Desert Voe Armour, Sapphire Jewelry, or all three pieces of the Gerudo Vai armor.',
            'He may use Frost weapons, the Ice Rod, the Blizzard Rod, the Mipha’s Grace blessing, or ice arrows if and only if he is wearing either Snowquill Equipment, the Warm Doublet, or Ruby Jewelry.',
            'He may use Thunder weapons, the Lightning Rod, the Thunderstorm Rod, the Urbosa’s Fury blessing, or shock arrows if and only if he is wearing the Rubber Suit or Topaz Jewelry.',
            'He may use the Windcleaver or the Revali’s Gale Blessing if and only if he is wearing the Hylian armour.',
        ],
        traits: [
            'The Mystic Knight specializes in infusing his weapons with the power of the elements to strike down his foes.'
        ],
        armor_color: 'White'
    },
    {
        name: 'Noble',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/b/bb/Breath_of_the_Wild_Zora_Shield_Silver_Shield_%28Icon%29.png/revision/latest?cb=20170407050723',
        equipment: [
            'They are allowed access to Silver/Zora weapons, the Ceremonial and Lightscale Tridents, Feathered weapons, Golden weapons, Urbosa’s equipment, Gerudo jewelry, Royal weapons, Royal Guard’s weapons, and the Desert Voe armour.'
        ],
        traits: [
            'Descended from nobility, these people have an appreciation for the finer things in life.  As such, they will only utilize weapons and armor of the finest craftsmanship.',
            'They will not eat any food that has not been prepared in a cooking pot.'

        ],
        armor_color: 'Purple'
    },
    {
        name: 'Paladin',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/c/c6/Soldiers_helm.png/revision/latest?cb=20170318233416',
        equipment: [
            'This class is only one of three that has access to the Soldier’s Armor and the Royal Guard’s Armor.',
            'This class has access to the Flamebreaker armor.',
            'The Paladin is allowed to utilize any equipment from the Rusty, Traveler, Soldier, Knight, Royal, and Royal Guard’s equipment sets.',
            'The Paladin may wield the Master Sword and the Hylian Shield if he has access to one of his blessings.',
            'The Paladin may utilize the Daruk’s Protection, Urbosa’s Fury, and Mipha’s Grace blessings once he receives them after completing their respective divine beasts.'
        ],
        traits: [
            'If a Paladin sees a traveler in distress and does not help him/her or utilizes the services of the Demon Statue in Hateno Village, he becomes a Fallen Paladin and cannot utilize his blessings, the Master Sword, or the Hylian Shield until he either frees a Divine Beast or completes a side quest.  Any objective that he does to regain his abilities: he must abandon the reward from it.'
        ],
        armor_color: 'Gray'
    },
    {
        name: 'Queasy',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/4/43/Breath_of_the_Wild_Failed_Food_Dish_Dubious_Food_%28Icon%29.png/revision/latest?cb=20170409233042',
        equipment: [
            'As such, the Queasy can utilize any and all weapons and armor, with the exception of the Master Sword, the Hylian Shield, Guardian/Ancient weapons, and multi-shot bows.',
            'The Queasy can also utilize any armor in the game that is not Barbarian armor or Ancient armor.'
        ],
        traits: [
            'The Queasy is the product of a strange curse.  Queasies are proficient in virtually all types of weapons and armor, at the cost of his stomach capacity and strength.',
            'The Queasy cannot consume more than one meal, elixir, or material every 6 in-game hours.',
            'In addition, the Queasy cannot eat any meals or elixirs that restore his health and provide him with an additional benefit.  They must do either one or the other.'
        ],
        armor_color: 'Orange'
    },
    {
        name: 'Rogue',
        img: 'https://vignette.wikia.nocookie.net/zelda/images/a/ae/Breath_of_the_Wild_Sheikah_Armor_Stealth_Mask_%28Icon%29.png/revision/latest?cb=20170407203451',
        equipment: [
            'The Rogue has exclusive access to the Sheikah armor set.',
            'The Rogue is allowed access to all one-handed melee weapons that are not magic rods, Guardian weapons, Ancient weapons, or boomerangs.',
            'The Rogue is allowed access to all shields except for Guardian and Ancient shields.',
            'No spears or two-handed weapons (except for the Eightfold Longblade, the Serpentine Spear, the Windcleaver, and the Edge of Duality).',
            'The Rogue has exclusive access to bows that allow one to enter first-person when shooting, and he also has access to all single shot bows and the Duplex Bow.'
        ],
        traits: [

        ],
        armor_color: 'Light Blue'
    }
];

$(document).ready(() => {
    console.log('Code is working!');

    classes.forEach((e) => {
        populatePage(e);
    });

    document.getElementById('roll-btn').onclick = () => {
        let clNum = Math.floor(Math.random()*classes.length);
        let cl = classes[clNum];

        populateLeftPane(cl);
        $('.class-list').children().eq(clNum).addClass('selected');
        console.log(cl.name + ' chosen randomly!');
    }
});

const populatePage = (e) => {
    let classIcon = document.createElement('div');
    classIcon.classList.add('class-icon');
    let classImg = document.createElement('img');
    classImg.src = e.img;

    classIcon.onclick = () => {
        populateLeftPane(e);
        classIcon.classList.add('selected');
    };
    
    classIcon.appendChild(classImg);
    document.querySelector('.class-list').appendChild(classIcon);
}

const populateLeftPane = (e) => {
    document.querySelector('#class-name').innerHTML = e.name;
    $('.class-icon').removeClass('selected');
    
    let equipmentList = document.getElementById("equipment-list");
    while (equipmentList.firstChild) {
        equipmentList.removeChild(equipmentList.firstChild);
    }

    let traitList = document.getElementById("trait-list");
    while (traitList.firstChild) {
        traitList.removeChild(traitList.firstChild);
    }
    
    e.equipment.forEach((equipment) => {
        let li = document.createElement('li');
        li.innerHTML = equipment;
        
        document.querySelector('#equipment-list').appendChild(li);
    });

    e.traits.forEach((trait) => {
        let li = document.createElement('li');
        li.innerHTML = trait;
        
        document.querySelector('#trait-list').appendChild(li);
    });
}