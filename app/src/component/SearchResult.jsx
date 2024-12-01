import styled from "styled-components";
import { Button, Container, BASE_URL } from "../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_img">
                <img src={BASE_URL + image} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button className="btn_food">${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;
const FoodCardContainer = styled.div`
  background-image: url("/image/jimmy-dean-Yn0l7uwBrpw-unsplash 1.png");
  min-height: calc(100vh - 214px);
  background-size: cover;
`;

const FoodCards = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  row-gap: 32px;
  margin-top: 8px;
`;

const FoodCard = styled.div`
    display: flex;
    width: 340px;
    height: 167px;
    border: 0.659px solid;
    flex-shrink: 0;
    
   
  border-image-source: radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )
    radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      )

    background:url(.png),
      radial-gradient(
          151.92% 127.02% at 15.32% 21.04%,
          rgba(165, 239, 255, 0.2) 0%,
          rgba(110, 191, 244, 0.04) 77.08%,
          rgba(70, 144, 212, 0) 100%
          );
        
    border-radius: 20px;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.184196472167969px);
    backdrop-filter: blur(26.368392944335938px);




    .food_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 168px;
        align-items: end;
        gap: 8px;

        h3{
            color: #FFF;
            font-size: 16px;
            font-family: Inter;
            font-weight: 600;
            font-style: normal;
            line-height: normal;
            
            
        }
        p{
            width: 168px;
            color: #FFF;
            height: 59px;
            font-size: 12px;
            font-family: Inter;
            font-weight: 500;
            font-style: normal;
            margin-top:8px ;
            line-height: normal;
        }
        button{
            color: #FFF;
            font-size: 14px;
            font-family: Inter;
            font-weight: 400;
            font-style: normal;
            line-height: normal;
            margin-top:4px ;
        }
    }
    .btn_food{
        font-size: 12px;
        
    }
`;
