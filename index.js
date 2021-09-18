const { ApolloServer, gql } = require('apollo-server');


const employee = [
    {
        "name": "Hamza",
        "email": "hamza@gmail.com",
        "department": "IT",
        "salary": 1000
    },
    {
        "name": "Hassan",
        "email": "hassan@gmail.com",
        "department": "CIVIL",
        "salary": 1000
    }

]



const students =[
    {
        "name":"samad",
        "age":25
    },
    {
        "name":"shehreyar",
        "age":27
    }
]
 

const resolvers = {

    Query: {
        employee: () => employee,
        students: () =>students,
    }
}



const typeDefs = gql`
      type Employe {
          name: String
          email: String
          department: String
          salary: Int
      }

      type Query {
          employee: [Employe]
      }

      type Student {
          name: String
          age: Int
      }

      type Query {
          students:[Student]
      }


`;



const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});