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
    }
];

$(document).ready(() => {
    console.log('Code is working!');

    classes.forEach((e) => {
        populatePage(e);
    });

    document.getElementById('roll-btn').onclick = () => {
        let cl = classes[Math.floor(Math.random()*classes.length)];
        populateLeftPane(cl);
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
    };
    
    classIcon.appendChild(classImg);
    document.querySelector('.class-list').appendChild(classIcon);
}

const populateLeftPane = (e) => {
    document.querySelector('#class-name').innerHTML = e.name;
    
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