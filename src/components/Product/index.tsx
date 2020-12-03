import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Share</a>
        <a href="#">Sell an equal</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Warranty</h4>

    <div>
      <span>
        <p className="title">Guaranteed Purchase with Mercado Pago</p>
        <p className="description">
          Receive the product you are waiting for or refund your money
        </p>
      </span>
      <span>
        <p className="title">Seller Guarantee</p>
        <p className="description">No warranty</p>
      </span>
    </div>

    <a href="https://google.com" >Learn more about warranty</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Description</h2>

    <p>
      COMPOSITION OF THE AD:
      <br />
      <br />
      1 BOPE T-SHIRT - DRY FIT - WHITE - BLACK SKULL
      <br />
      <br />
      ABOUT PRODUCTS:
      <br />
      <br />
      <br />
      - STANDARD T-SHIRT - DRY FIT - BLACK SKULL: standard dry fit t-shirt -
      black skullmade with dry fit fabric. the piece fits perfectly to the body,
      ensuring comfort and mobility at all times.can change up to 1cm due to the
      stitching.p - 53cm armhole x 52cm width x 65.5cm height - 55.5cm armhole x
      54,5cm width x 68cm height - 57cm sleeve x 56,5cm width x 69,5cm height -
      60,5cm sleeve x 60cm width x 71,5cm heightexg - 64cm sleeve x 63cm width x
      74cm height100% dry fit.
      <br />
      <br />
      <br />
      ANVISA: EXEMPT REGISTRATION according to RDC resolution 27 of August 6,
      2010 annex I.
    </p>
  </Description>
);

export default Product;
