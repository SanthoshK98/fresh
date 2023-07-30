import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { remove } from '../store/cartSlice';

function Cart() {
const cartdata = useSelector(state=>state.cart)
const dispatch = useDispatch()
const deleteCart=(id)=>{
dispatch(remove(id))
}
  return (
    <div>
      <h3>Cart Items</h3>

      <Container>
            <Row>
      Product Dashboard
      {cartdata.map((product) => {
        return (
         
              <Col lg={3} md={4} sm={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} style={{width:'150px',height:'150px'}} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              INR. {product.price}
              </Card.Text>
              <Card.Text>
               {product.description}
              </Card.Text>
              <Button variant="danger" onClick={()=>deleteCart(product.id)} >Remove Cart</Button>
            </Card.Body>
          </Card>
          </Col>
        
        );
      })}
        </Row>
          </Container>
    </div>
  )
}

export default Cart;