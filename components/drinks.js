import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import AppContext from "./context";
////my new drinks items
function Drinks({ restId, searchQuery }) {
  const { addItem } = useContext(AppContext);

  const GET_RESTAURANT_DRINKS = gql`
    query($id: ID!) {
      restaurant(id: $id) {
        id
        name
        drinks {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANT_DRINKS, {
    variables: { id: restId },
  });

  if (loading) return <p>Loading drink...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No drinks found</p>;
  ///added filtering props
  const drinks = data.restaurant.drinks.filter(
    (drink) => drink.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <>
      {drinks.map((drink) => (
        <Col xs="6" sm="4" style={{ padding: 1 }} key={drink.id}>
          <Card style={{ margin: "0 0.5rem 20px 0.5rem" , color:'blue', background: "lightgreen", marginBottom: "2rem"  }}>
            <CardImg
              top={true}
              style={{ height: 190, padding: 5,}}
              src={`http://localhost:1337${drink.image.url}`}
            />
            <CardBody>
              <CardTitle>{drink.name}</CardTitle>
              <CardText>{drink.description}</CardText>
              <CardText>${drink.price}</CardText>
            </CardBody>
            <div className="card-footer" >
              <Button
                outline
                color="primary"
                onClick={() => addItem(drink)}
              >
                + Add To Cart
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Drinks;
