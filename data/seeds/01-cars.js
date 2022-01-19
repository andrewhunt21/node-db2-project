// STRETCH
const cars = [
    {
        vin: '12345678901234567',
        make: 'toyota',
        model: 'prius',
        mileage: 30000,
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '12345678901234678',
        make: 'toyota',
        model: 'corolla',
        mileage: 57000,
        title: 'clean'
    },
    {
        vin: '12345678901234901',
        make: 'ford',
        model: 'focus',
        mileage: 10000,
    }
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}

// exports.seed = async function (knex) {
//     await knex('cars').truncate()
//     await knex('cars').insert(cars)
// }
// ^either way works