import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./component/SearchResult";
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading;
        setLoading(false);
      } catch (error) {
        setError("error");
      }
    };

    fetchFoodData();
  }, []);
  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filteredFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filteredBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading......</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/image/Foody Zone.png" alt="logo" />
          </div>
          <div className="search">
            <input
              type="text"
              onChange={searchFood}
              placeholder="Search Food... "
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filteredBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filteredFood(value.type)}>
              {value.name}
            </Button>
          ))}
          {/* <Button key={value.name} onClick={() => filteredFood(value.type)}>All</Button> */}
          {/* <Button onClick={() => filteredFood("Breakfast")}>Breakfast</Button>
          <Button onClick={() => filteredFood("Lunch")}>Lunch</Button>
          <Button onClick={() => filteredFood("Dinner")}>Dinner</Button> */}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1440px;
  max-height: 1024px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 11px 157px 10px 15px;
      &::placeholder{
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
    background-color: red;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 14px;
  padding-bottom: 40px;
`;
export const Button = styled.button`
background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
display: flex;
padding: 6px 12px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
border-radius: 5px;
color: #fff;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
&:hover {
  background-color: #f22f2f;
}
`;
