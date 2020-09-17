import React, { useState } from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  HeartFull,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Container>
      <Condition>New</Condition>

      <Row>
        <h1>Unknown Brand White T-Shirt</h1>
        <button onClick={() => setIsFavorited(!isFavorited)}>
          {isFavorited ? <HeartFull /> : <HeartIcon />}
        </button>
      </Row>

      <DispatchTag>Sending normally</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>in 3x of $ 11,67</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Available stock</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Free shipping</span>
          <span className="details">With your MASTERCARD ended in 5701</span>
          <a href="#" className="more">
            See more options
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Buy now</Button>
        <Button>Add to cart</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Guaranteed Purchase, receive the product you are waiting for or
            refund your money.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
