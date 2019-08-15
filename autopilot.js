function get_new_car() {
    return {
        'city': 'Toronto',
        'passengers': 0,
        'gas': 100,
    }
}


function add_car(cars, new_car) {
    cars.push(new_car);
    return `Adding new car to fleet. Fleet size is now ${cars.length}.`;
}


function pick_up_passenger(car) {

}


function get_destination(car) {

}


function fill_up_gas(car) {

}


function get_gas_display(gas_amount) {

}


function drive(car, city_distance) {

}


function drop_off_passengers(car) {

}


function act(car) {
    let distance_between_cities = 50;

    if (car['gas'] < 20) {
        return fill_up_gas(car);
    } else if (car['[passengers'] < 3) {
        return pick_up_passenger(car);
    } else {
        if (car['gas'] < distance_between_cities) {
            return fill_up_gas(car)
        }

        drove_to = drive(car, distance_between_cities);
        passengers_dropped = drop_off_passengers(car);
        return `${drove_to} ${passengers_dropped}`;
    }
}


function command_fleet(cars) {
    let i = 1;
    for (car of cars) {
        let action = act(car);
        console.log(`Car ${i}: ${action}`);
        i++;
    }

    console.log('---');
}


function add_one_car_per_day(cars, num_days) {
    for (let day=0; day < num_days; day++) {
        let new_car = get_new_car();
        console.log(add_car(cars, new_car));
        command_fleet(cars);
    }
}


let cars = [];
add_one_car_per_day(cars, 10);