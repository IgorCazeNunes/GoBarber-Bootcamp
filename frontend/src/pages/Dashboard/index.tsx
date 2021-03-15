import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  Header,
  HeaderContent,
  Profile,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://github.com/IgorCazeNunes.png"
                alt="Igor Cazé Nunes"
              />

              <strong>Igor Cazé Nunes</strong>

              <span>
                <FiClock />
                08:00
              </span>
            </div>

            <div>
              <img
                src="https://github.com/IgorCazeNunes.png"
                alt="Igor Cazé Nunes"
              />

              <strong>Igor Cazé Nunes</strong>

              <span>
                <FiClock />
                08:00
              </span>
            </div>

            <div>
              <img
                src="https://github.com/IgorCazeNunes.png"
                alt="Igor Cazé Nunes"
              />

              <strong>Igor Cazé Nunes</strong>

              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
