import styled from "styled-components";
import { mobile } from "../pages/responser";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Tagline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Item = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Tagline>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Tagline>
      </Link>
    </Container>
  );
};

export default Item;
