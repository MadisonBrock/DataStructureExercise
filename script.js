const jedi = [`Luke`];

const player1= jedi.push(`Obi-Wan Kenobi`);

const player2 = jedi.unshift(`Yoda`);
 
console.log(jedi);// [ 'Yoda', 'Luke', 'Obi-Wan Kenobi' ]

const player3 = jedi.pop()

const player4 = jedi.shift()
console.log(jedi);// [ 'Luke' ]

const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`]

const imperialOfficers = [`Grand Moff Tarkin`, `Orson Krennic`]

const starWarsVillains = jedi.concat(sithLords, imperialOfficers);
console.log(starWarsVillains);
// [
//     'Luke',
//     'Darth Vader',
//     'Darth Sidious',
//     'Darth Maul',
//     'Grand Moff Tarkin',
//     'Orson Krennic'
//   ]

const starWarsVillain = starWarsVillains.slice(1, 3)
console.log(starWarsVillain);// [ 'Darth Vader', 'Darth Sidious' ]

droids = {
    
        astromech: `R2-D2`, 
        protocol: `C-3PO`,
        assassin: `IG-88`
    
};
console.log(droids[`astromech`]);// R2-D2

console.log(droids.protocol);// C-3PO

const droids.splice(0, 1, `IG-11`)
console.log(droids);
