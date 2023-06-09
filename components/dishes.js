import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";
  const Dishes = ({ restId, searchQuery }) => {
    const { addItem } = useContext(AppContext);
  
    const GET_RESTAURANT_DISHES = gql`
      query($id: ID!) {
        restaurant(id: $id) {
          id
          name
          dishes {
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
  
    const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
      variables: { id: restId },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR here</p>;
    if (!data) return <p>No dishes found</p>;
    ///added filtering dishes. 
    const dishes = data.restaurant.dishes.filter(
      (dish) => dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <>
        {dishes.map((dish) => (
          <Col xs="13" sm="4" key={dish.id}>
            <Card style={{ margin: "0 0.5rem 20px 0.5rem", background: "lightpink" }}>
              <CardImg
                top={true}
                style={{ height: 200 }}
                src={`https://seal-app-99zpf.ondigitalocean.app` + dish.image.url}
                alt={"Image of dishes"}
              />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText style={{padding: "0.25rem", fontSize: "1rem" }}>Description: {dish.description}</CardText>
                <CardText>${dish.price}</CardText>
                <Button onClick={() => addItem(dish)}>Add to cart</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </>
    );
  };
  
        
  
export default Dishes
