import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 15px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  li p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }

  button {
    padding: 5px 10px;
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  }

  button:hover {
    background-color: #990000;
  }
`;
