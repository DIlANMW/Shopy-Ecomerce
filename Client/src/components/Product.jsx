import { BsSearch, BsBag } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Tag = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fdf5fd;
  position: relative;

  &:hover ${Tag} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f7cee6;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Tag>
        <Icon>
          <Link to={`product/${item._id}`}>
            <BsSearch />
          </Link>
        </Icon>
        <Icon>
          <GrFavorite />
        </Icon>
        <Icon>
          <BsBag />
        </Icon>
      </Tag>
    </Container>
  );
};

export default Product;
