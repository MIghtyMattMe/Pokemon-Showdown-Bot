const Sim = require('pokemon-showdown');
stream = new Sim.BattleStream();
p1Actions = "";
p2Actions = "";

//create a readstream instead of this \/\/\/ so we can read at runtime
(async () => {
    for await (const output of stream) {
        console.log(output);
        parsedOutput = output.split('|');
        switch (parsedOutput[1]) {
            case 'request':
                actions = JSON.parse(parsedOutput[2]);
                if (actions.side.id == "p1") {
                    p1Actions = actions;
                } else {
                    p2Actions = actions;
                }
                break;
            default:
                console.log('unknown or unrecorded sim-protocol')
                break;
        }
    }
})();

stream.write('>start {"formatid":"gen9randomdoublesbattle"}');
stream.write('>player p1 {"name":"Celica"}');
stream.write('>player p2 {"name":"Alm"}');

//Player 1

seed = Math.floor(Math.random() * 10);
p1Action = ">p1";
/*
if (seed % 5 == 0 && p1Actions.side.pokemon.length > 0) {
    pokemonLeft = {};
    p1Actions.side.pokemon.forEach(element => {
        health = element.condition.split('/')
        if (Number(health[0]) > 0) {
            pokemonLeft.push(element.details.split(',')[0]);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p1Action += ' switch ' + pokemonLeft[(seed % pokemonLeft.length)] + ',';
} else {
    movesLeft = {};
    p1Actions.active[0].forEach(element => {
        if (Number(element.pp) > 0) {
            movesLeft.push(element.move);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p1Action += ' move ' + movesLeft[(seed % pokemonLeft.length)] + ' default,';
}*/
/*
seed = Math.floor(Math.random() * 10);
if (seed % 5 == 0 && p1Actions.side.pokemon.length > 0) {
    pokemonLeft = {};
    p1Actions.side.pokemon.forEach(element => {
        health = element.condition.split('/')
        if (Number(health[0]) > 0) {
            pokemonLeft.push(element.details.split(',')[0]);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p1Action += ' switch ' + pokemonLeft[(seed % pokemonLeft.length)] + ',';
} else {
    movesLeft = {};
    p1Actions.active[1].forEach(element => {
        if (Number(element.pp) > 0) {
            movesLeft.push(element.move);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p1Action += ' move ' + movesLeft[(seed % pokemonLeft.length)] + ' default,';
}*/
stream.write(p1Action);


//Player 2
/*
seed = Math.floor(Math.random() * 10);
p2Action = ">p2";
if (seed % 5 == 0 && p2Actions.side.pokemon.length > 0) {
    pokemonLeft = {};
    p2Actions.side.pokemon.forEach(element => {
        health = element.condition.split('/')
        if (Number(health[0]) > 0) {
            pokemonLeft.push(element.details.split(',')[0]);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p2Action += ' switch ' + pokemonLeft[(seed % pokemonLeft.length)] + ',';
} else {
    movesLeft = {};
    p2Actions.active[0].forEach(element => {
        if (Number(element.pp) > 0) {
            movesLeft.push(element.move);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p2Action += ' move ' + movesLeft[(seed % pokemonLeft.length)] + ' default,';
}
seed = Math.floor(Math.random() * 10);
if (seed % 5 == 0 && p2Actions.side.pokemon.length > 0) {
    pokemonLeft = {};
    p2Actions.side.pokemon.forEach(element => {
        health = element.condition.split('/')
        if (Number(health[0]) > 0) {
            pokemonLeft.push(element.details.split(',')[0]);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p2Action += ' switch ' + pokemonLeft[(seed % pokemonLeft.length)] + ',';
} else {
    movesLeft = {};
    p2Actions.active[1].forEach(element => {
        if (Number(element.pp) > 0) {
            movesLeft.push(element.move);
        }
    });
    seed = Math.floor(Math.random() * 10);
    p2Action += ' move ' + movesLeft[(seed % pokemonLeft.length)] + ' default,';
}
*/