//Basic types
let age: number;
age = 12;

let userName: string = "12";
// userName = "12"

let isPresent: boolean;
isPresent = true

//arrays & objects
let players: string[]

players = [
    "mad", "logan"
]

let hobbies: [
    string, number
];

hobbies = [
    "cricket", 24]

let person: {
    name: string[];
    age: number;
}[];

person = [{
    name: ["mad", "sundar"],
    age: 24
}, {
    name: ["mdop", "abi"],
    age: 25
}
];
console.log("person", person);

//type inference & union types

let company: string | number = "10decoders";
company = 10;

let json: {
    id: number,
    name: string,
    address: {
        street: string,
        pincode: number,
        geo: {
            lat: number[]
        }

    }
}[];


json = [
    {
        id: 1,
        name: "maD",
        address: {
            street: "tata",
            pincode: 6220,
            geo: {
                lat: [6565, 57575]
            }
        }
    },
    {
        id: 1,
        name: "maD",
        address: {
            street: "tata",
            pincode: 6220,
            geo: {
                lat: [4324, 3434]
            }
        }
    },
    {
        id: 1,
        name: "maD",
        address: {
            street: "tata",
            pincode: 6220,
            geo: {
                lat: [23423, 234242]
            }
        }
    }
]

//aliases

type India = {
    team1: string;
    team2: string;
    count1: number;
    count2: number;
}

let cricketTeam: India;

cricketTeam = {
    team1: "india A",
    team2: "India B",
    count1: 12,
    count2: 14
}

let footBallTeam :India;

footBallTeam={
    team1:"indiaAb",
    team2:"indiaBa",
    count1:22,
    count2:22
}

//functions & types

function sum(a:number,b:number){
    return a + b;
}