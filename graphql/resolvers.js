const Jeayoung = {
    name: "Jeayoung",
    age: 18,
    gender: "female"
};

const resolvers = {
    Query: {
        person: () => Jeayoung
    }
};

export default resolvers;