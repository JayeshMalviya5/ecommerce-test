import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Heading,
} from "@chakra-ui/react";
import "./ProductCard.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toAdd } from "../../store/Action";
function ProductCard({ id, image, title, desc, price }) {
  const dispatch = useDispatch();
  const [addToCart, setAddToCart] = useState(false);
  const navigate = useNavigate();
  const showDetails = () => {
    console.log("inside navigate function");
    navigate(`details/${id}`);
  };
  return (
    <>
      <div className="productItem">
        <Card maxW="sm">
          <CardBody>
            <Image
              src={`${image}`}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width={"250px"}
              height={"250px"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                <p>{`${title}`}</p>
              </Heading>
              <Text>
                <p>{`${desc}`}</p>
              </Text>
              <Text color="blue.600" fontSize="2xl">
                ${`${price}`}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              {/* //onClick={()=>{showDetails(id)} */}

              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => {
                  showDetails(id);
                }}
              >
                Details
              </Button>

              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => {
                  setAddToCart(true);
                  dispatch(toAdd(id));
                }}
              >
                {!addToCart ? (
                  "Add to cart"
                ) : (
                  <p style={{ color: "green" }}>"Added"</p>
                )}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ProductCard;
