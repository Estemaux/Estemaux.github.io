function find_winner(id1, id2, id3, id4, id5, id6, loc)
{
    nets_average = (Number(document.getElementById(id1).value) + Number(document.getElementById(id2).value) 
    + Number(document.getElementById(id3).value))/3;

    knicks_average = (Number(document.getElementById(id4).value) + Number(document.getElementById(id5).value) 
    + Number(document.getElementById(id6).value))/3;

    if( nets_average > knicks_average && nets_average >= 100)
    {
         document.getElementById(loc).innerHTML = "Nets Win!";
    }

    else if( knicks_average > nets_average && knicks_average >= 100)
    {
        document.getElementById(loc).innerHTML = "Knicks Win!";
    }

    else if (nets_average === knicks_average && (nets_average >= 100 && knicks_average))
    {
        document.getElementById(loc).innerHTML = "It's a Draw!";
    }

    else
    {
        document.getElementById(loc).innerHTML = "Nobody Wins";
    }
}


function tip_calculator(cost, loc)
{
    n = Number(document.getElementById(cost).value);
    switch(n > 30 && n < 100){
        case true:
            document.getElementById(loc).innerHTML= n + (n * .15);
            break;
        case false:
            document.getElementById(loc).innerHTML= n + (n * .20);
            break;
    }
}


const convert_celsius_fahrenheit = (input, loc) => {
    temp = Number(document.getElementById(input).value);
    document.getElementById(loc).innerHTML = `${((temp * 1.8) + 32).toFixed(1)}°F`;
}

const convert_fahrenheit_celsius = (input, loc) => {
    temp = Number(document.getElementById(input).value);
    document.getElementById(loc).innerHTML = `${((temp - 32) * 5/9).toFixed(1)}°C`;
}

