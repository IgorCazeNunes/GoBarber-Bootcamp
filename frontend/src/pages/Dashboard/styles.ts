import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  display: flex;

  max-width: 1120px;

  margin: 64px auto;
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  > img {
    height: 80px;
  }

  > button {
    margin-left: auto;

    background: transparent;

    border: 0;

    > svg {
      width: 20px;
      height: 20px;

      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    margin-left: 16px;

    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Schedule = styled.div`
  flex: 1;

  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    display: flex;
    align-items: center;

    margin-top: 8px;

    color: #ff9000;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';

      width: 1px;
      height: 12px;

      margin: 0 8px;

      background: #ff9000;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;

    padding: 16px 24px;
    margin-top: 24px;

    position: relative;
    background: #3e3b47;
    border-radius: 10px;

    &::before {
      content: '';

      height: 80%;
      width: 1px;

      left: 0;
      top: 10%;

      position: absolute;
      background: #ff9000;
    }

    img {
      width: 80px;
      height: 80px;

      background: #ff9000;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;

      color: #fff;
    }

    span {
      display: flex;
      align-items: center;

      margin-left: auto;

      color: #999591;

      svg {
        margin-right: 8px;

        color: #ff9000;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    display: block;

    padding-bottom: 16px;
    margin-bottom: 16px;

    color: #999591;
    font-size: 20px;
    line-height: 26px;

    border-bottom: 1px solid #3e3b47;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;

    width: 70px;

    margin-left: auto;

    color: #f4ede8;

    svg {
      margin-right: 8px;

      color: #ff9000;
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;

    padding: 16px;
    margin-left: 24px;

    background: #3e3b47;
    border-radius: 10px;

    img {
      width: 56px;
      height: 56px;

      background: #ff9000;
      border-radius: 50%;
    }

    strong {
      margin-left: 16px;

      color: #f4ede8;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;
