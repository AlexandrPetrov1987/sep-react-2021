class User {
    constructor(public id: number, private name: string, public age: number) {
        this.id = id;
        this.age = age;
        this.name = name;
    }
}

const user = new User(12,'Vasya',13);

console.log(user);


