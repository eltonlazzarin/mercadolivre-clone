import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Seller Information</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Location</p>
          <strong>Sao Paulo, BR</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>sales in the last 4 months</span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Provides good service</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Deliver products on time</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">See more seller details</More>
    </Container>
  );
};

export default SellerInfo;
