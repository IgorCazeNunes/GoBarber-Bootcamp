import React from 'react';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://github.com/IgorCazeNunes.png"
              alt="Igor Cazé Nunes"
            />

            <div>
              <span>Bem-vindo</span>
              <strong>Igor Cazé Nunes</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
