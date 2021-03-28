import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 40px 90px;
  height: 100vh - 80px;

  table {
    text-align: left;
    border-spacing: 3px 10px;

    caption {
      font-weight: 500;
      font-size: 2rem;
      text-align: left;
    }

    tbody tr {
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(${({ theme }) => theme.appColors.shadowRgb}, 0.6);
    }

    th,
    td {
      vertical-align: middle;
    }

    th {
      padding: 10px 0;
      padding-right: 20px;

      color: ${({ theme }) => theme.appColors.text};
      text-transform: uppercase;
      opacity: 0.5;

      &:first-child {
        padding: 0;
      }

      &:nth-child(2) {
        padding-left: 24px;
      }
    }

    td {
      padding: 0 24px;
      height: 96px;

      text-align: center;
      background-color: ${({ theme }) => theme.appColors.secondaryBg};

      &:first-child {
        padding: 0;
        font-size: 24px;
        font-weight: 500;
        border-radius: 8px 0px 0px 8px;
      }

      &:last-child {
        border-radius: 0px 8px 8px 0px;
      }

      &:not(:nth-child(2)) strong {
        color: ${({ theme }) => theme.appColors.primary};
      }
    }
  }
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;

  strong {
    margin-bottom: 0.5rem;

    font-weight: 500;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.appColors.textStrong};
  }

  > img {
    margin-right: 1rem;
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    border: 2px solid var(--blue);
    /* box-shadow: 0 0 4px var(--blue); */
  }

  > div {
    display: flex;
    flex-direction: column;

    > div {
      margin-right: auto;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
