interface Person {
    firstName: string;
    lastName: string;
}

function quoteSomething(person: Person) {
    return "Making up a decent quote is easy.   -" + person.firstName + " " + person.lastName;
}

function quoteSomethingFromMyCreator() {
    var myCreator = {firstName: "Emil", lastName: "Toermoen"};
    return quoteSomething(myCreator);
}