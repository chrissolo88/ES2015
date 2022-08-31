function createInstructor(firstName,lastName){
    return{
        firstName,
        lastName
    }
}

let favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite'
}

const instructorSpeak = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi';
    },
    sayBye() {
        return this.firstName + ' says Bye';
    } 
}

const createAnimal = (species,verb,noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

const createAnimal2 = (species,verb,noise) => ({
    species,
    [verb]: () => noise
})
