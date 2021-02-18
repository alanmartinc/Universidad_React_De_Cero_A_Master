const user1 = {
    name: 'Gerardo Gallegos',
    username: 'luxfenix',
    country: 'Mexico',
    social: {
        facebook: 'https://fb...',
        twitter: 'htpps://tw...'
    }
}

const saluda = (user) => {
    const {name, country, social} = user
    const {twitter} = social

    const orden = ['pizza', 'te verde', 'pay', 124, false, "otro"]
    const [comida, bebida, postre, ...restantes] = orden

    console.log(
        `Hola soy ${name}, vivo en ${country} y mi twitter es ${twitter}`
    )

    console.log(restantes)
}

saluda(user1)