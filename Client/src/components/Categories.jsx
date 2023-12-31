import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../pages/responser";
import Item from "./Item";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
