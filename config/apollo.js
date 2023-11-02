import { ApolloClient,createHttpLink, InMemoryCache} from "@apollo/client"
import {setContext} from "apollo-link-context"



const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co"
    
})


export default client