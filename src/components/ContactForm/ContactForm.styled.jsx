import styled from '@emotion/styled';

export const ContactFormsWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  input[type='text'],
  input[type='tel'] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button[type='submit'] {
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  button[type='submit']:hover {
    background-color: #3e8e41;
  }

  p {
    margin-bottom: 5px;
    font-size: 16px;
  }
  & .form {
    display: flex;
    flex-direction: column;
  }
`;

export const FeedbackStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
