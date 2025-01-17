import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    padding: 8px;

    position: absolute;
    visibility: hidden;
    left: 50%;
    bottom: calc(100% + 12px);
    transform: translateX(-50%);

    color: #312e38;
    font-size: 14px;
    font-weight: 500;

    background: #ff9000;
    border-radius: 4px;

    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
