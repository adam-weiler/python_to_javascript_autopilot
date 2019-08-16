const get_new_car = function() { return { 'city': 'Toronto', 'passengers': 0, 'gas': 100, } }


const add_car = (cars, new_car) => {
    // console.log('add_car');
    cars.push(new_car);
    return `Adding new car to fleet. Fleet size is now ${cars.length}.`;
}


const pick_up_passenger = (car) => {
    // console.log('pick_up_passenger');
    car['passengers'] += 1;
    car['gas'] -= 10;
    return `Picked up passenger. Car now has ${car['passengers']} passengers.`;
}


const get_destination = (car) => {
    // console.log('get_destination');
    if (car['city'] == 'Toronto') {
        return 'Mississauga';
    } else if (car['city'] == 'Mississauga') {
        return 'London';
    } else if (car['city'] == 'London') {
        return 'Toronto';
    }
}


const fill_up_gas = (car) => {
    // console.log('fill_up_gas');
    let old_gas = car['gas'];
    car['gas'] = 100;
    return `Filled up to ${get_gas_display(car['gas'])} on gas from ${get_gas_display(old_gas)}.`
}


const get_gas_display = (gas_amount) => gas_amount


const drive = (car, city_distance) => {
    // console.log('drive');
    if (car['gas'] < city_distance) {
        return fill_up_gas(car);
    }

    car['city'] = get_destination(car);
    car['gas'] -= city_distance;
    return `Drove to ${car['city']}. Remaining gas: ${get_gas_display(car['gas'])}`;
}


const drop_off_passengers = (car) => {
    // console.log('drop_off_passengers');
    previous_passengers = car['passengers'];
    car['passengers'] = 0;
    return `Dropped off ${previous_passengers} passengers.`;
}


const act = (car) => {
    // console.log('act');
    let distance_between_cities = 50;

    if (car['gas'] < 20) {
        // console.log('--Not enough gas.');
        return fill_up_gas(car);
    } else if (car['passengers'] < 3) {
        // console.log('--Not enough passengers.');
        return pick_up_passenger(car);
    } else {
        // console.log('--Third option.');
        if (car['gas'] < distance_between_cities) {
            return fill_up_gas(car);
        }

        drove_to = drive(car, distance_between_cities);
        passengers_dropped = drop_off_passengers(car);
        return `${drove_to} ${passengers_dropped}`;
    }
}


const command_fleet = (cars) => {
    // console.log('command_fleet');
    let i = 1;
    for (car of cars) {
        let action = act(car);
        console.log(`Car ${i}: ${action}`);
        i++;
    }

    console.log('---');
}


const add_one_car_per_day = (cars, num_days) => {
    // console.log('add_one_car_per_day');
    for (let day=0; day < num_days; day++) {
        let new_car = get_new_car();
        console.log(add_car(cars, new_car));
        command_fleet(cars);
    }
}


let cars = [];
add_one_car_per_day(cars, 10);