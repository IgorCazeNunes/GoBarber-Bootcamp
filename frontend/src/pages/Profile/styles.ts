import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;

    height: 144px;

    background: #28262e;

    div {
      width: 100%;
      max-width: 1120px;

      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;

        color: #999591;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: -176px auto 0;

  form {
    display: flex;
    text-align: center;
    flex-direction: column;

    width: 340px;

    margin: 80px 0;

    h1 {
      margin-bottom: 24px;

      font-size: 20px;
      text-align: left;
    }
  }

  a {
    display: block;

    margin-top: 24px;

    color: #f4ede8;
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;

  margin-bottom: 32px;

  img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0;
    bottom: 0;
    border: 0;

    width: 48px;
    height: 48px;

    color: #ff9000;
    border-radius: 50%;

    transition: background-color 0.2s;

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
