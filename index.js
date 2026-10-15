class Student {
    town = "New-York city"
    constructor(name, email) {
        this.name = name
        this.email = email
    }
}

const studentAlex = new Student("Alex")
const studentPeter = new Student("Peter", "peter@peter.com")

console.log(studentAlex)
studentAlex.city2222 = "My City"
console.log("City: ", studentAlex.city2222)