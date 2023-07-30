import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

function Product() {
  const {data:products,status} = useSelector(state=>state.products);
const result = useDispatch()
  useEffect(() => {
  result(getProducts())
  }, []);

  if(status ==='loading'){
    return <p>Loading...</p>
  }

  const addToCart =(product)=>{
    result(add(product))
// console.log(product)
  }

  return (
    <>
     <Container>
            <Row>
      Product Dashboard
      {products?.map((product) => {
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
              <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
          </Col>
        
        );
      })}
        </Row>
          </Container>
    </>
  );
}

export default Product;
