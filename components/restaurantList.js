import React, { useState, useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import Dishes from "./dishes";
import Drinks from "./drinks";
import AppContext from "./context";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
function RestaurantList(props) {
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  ////gql get added dishes and drinks.
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
        dishes {
          id
          name
          description
          price
        }
        drinks {
          id
          price
          name
          description
          
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) {console.log(error); return <p>ERROR</p>;}
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`);
////menu click
  const handleRestaurantClick = (restaurant) => {
    if (selectedRestaurant && selectedRestaurant.id === restaurant.id) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurant);
    }
  };
  /////rendering items.
  const renderDishes = () => {
    if (!selectedRestaurant) return null;
    return <Dishes restId={selectedRestaurant.id} searchQuery={props.search} />;
  };

  const renderDrinks = () => {
    if (!selectedRestaurant) return null;
    return <Drinks restId={selectedRestaurant.id} searchQuery={props.search}/>;
  };
  ////searching and filtering.  
  const searchQuery = data.restaurants.filter((restaurant) => {
    const matchedDishes = restaurant.dishes.filter((dish) =>
      dish.name.toLowerCase().includes(props.search)
    );
    const matchedDrinks = restaurant.drinks.filter((drink) =>
      drink.name.toLowerCase().includes(props.search)
    );
    const matchedRestaurant = restaurant.name.toLowerCase().includes(props.search);
    return matchedDishes.length > 0 || matchedDrinks.length > 0 || matchedRestaurant;
  }).map((restaurant) => ({
    ...restaurant,
    dishes: restaurant.dishes.filter((dish) =>
      dish.name.toLowerCase().includes(props.search)
    ),
    drinks: restaurant.drinks.filter((drink) =>
      drink.name.toLowerCase().includes(props.search)
    ),
  }));
  ///list rendering. 
  const restList = searchQuery.map((restaurant) => (
    <Col xs="6" sm="4" key={restaurant.id}>
      <Card style={{ margin: "10px 10px", color:'Black', background: "white", marginBottom: "2rem"  }}>
        <CardImg
          top={true}
    
          src={`https://seal-app-99zpf.ondigitalocean.app` + restaurant.image.url} 
          alt={"Image of a restaurant"}
        />
        <CardBody>
          <CardTitle>{restaurant.name}</CardTitle>
          <br/>
          <CardText>Description:{restaurant.description}</CardText>
        </CardBody>
        <div className="card-footer">
          <Button
            color={selectedRestaurant && selectedRestaurant.id === restaurant.id ? "secondary" : "info"}
            onClick={() => handleRestaurantClick(restaurant)}
          >
            {selectedRestaurant && selectedRestaurant.id === restaurant.id ? "Close" : "View Menu"}
          </Button>
        </div>
      </Card>
    
    </Col>
  ));

  return (
    <Container>
      <Row xs="3">{restList}</Row>
      <Row xs="3">{renderDishes()}</Row>
      <Row xs="3">{renderDrinks()}</Row>
    </Container>
  );
}

export default RestaurantList;
