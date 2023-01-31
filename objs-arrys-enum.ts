// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilan',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Maximilan',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN){
    console.log(person.name)
}