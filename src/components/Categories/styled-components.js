import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0;
  position: relative;
`;

export const CategoryTitle = styled.h1``;

export const CategoryHeader = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 20px;

  @media (max-width: 878px) {
    display: block;
    position: relative;
    padding-right: 0;
    margin-top: -10px;
    margin-bottom: 30px;
  }
`;

export const CategorySearch = styled.input`
  background: transparent;
  border: 1px solid black;
  border-radius: 50px;
  font-size: 1.2em;
  width: 300px;
  height: 50px;
  padding-left: 15px;

  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  right: 40px;
  top: calc(50% - 10px);
  cursor: pointer;

  @media (max-width: 878px) {
    right: 20px;
  }
`;

export const ListOfCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: auto; */
  margin: 30px;
`;

export const CategoryBtn = styled.button`
  background: #c4e6f1;
  border: 3px solid #c4e6f1;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 9px 27px;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background: transparent;
  }
`;

export const ViewAllBtn = styled(CategoryBtn)``;
