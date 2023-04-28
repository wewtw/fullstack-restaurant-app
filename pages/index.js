import React, { useState } from "react";
import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";


function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
    
    const filteredQuery = query.trim().toLocaleLowerCase();
  //last good no errors, test2.
    return (
        <ApolloProvider client={client}>
            <div style={{ backgroundColor: "red", color: "white", padding: "0.1rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <h2>Welcome friend.</h2>
              
            </div>
          <div className="search" style={{ fontSize: "2rem", marginBottom: "2rem", marginTop: "1rem" }}>
              <h2>Restaurants</h2>
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value)
                    }
                    value={query}
                />
                </InputGroup><br></br>
                <RestaurantList search={filteredQuery} />
                <Cart></Cart>
            </div>
            <div style={{ backgroundColor: "red", color: "white", padding: "0.25rem", fontSize: "0.7rem" }}>
                <p>
                  Some features of this app like images and receipts are blocked by CORS.
                 I have a backup fullstack restaurant app running inside a vm on the cloud with all the features working as intended at http://159.89.92.252:3000   
                 please visit it to verify.
              </p>
               <p>
                One way I found I can fix the issue with CORS is I can use react hook useffect. 
                However this is something I will have to address at a later time. 
                It was not a part of this projects learning curriculum or the submission rubric. 
                Thank you for understanding.
              </p>
          </div>
            
            
        </ApolloProvider>
    );
  }
  export default Home;
