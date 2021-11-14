import React, { useState } from "react";
import styled from "styled-components";

const Trap = ({ dataValue }) => {
  const { triggers, createdAt, messages } = dataValue;
  const [messageIndex, setMessageIndex] = useState(0);

  const handleMessageIndex = (index) => {
    if (messages === undefined) return;
    if (index > messages.length - 1) {
      return setMessageIndex(0);
    }
    if (index < 0) {
      return setMessageIndex(messages.length - 1);
    } else {
      return setMessageIndex(index);
    }
  };
  return (
    <Wrapper>
      <div className='trap-header'>
        <h4>{triggers[0].text}</h4>
        <p>{createdAt}</p>
      </div>

      <div className='trap-message'>
        {!messages ? (
          <h5>No messages</h5>
        ) : (
          <div className='trap-message'>
            <p>{messages[messageIndex].message}</p>
            <div>
              <button className='btn'>Action</button>
              <button className='btn'>Dismiss</button>
            </div>
          </div>
        )}
      </div>

      {!messages || messages.length <= 1 ? (
        <></>
      ) : (
        <div className='trap-menu'>
          <button
            className='btn'
            onClick={() => handleMessageIndex(messageIndex - 1)}>
            Previous
          </button>
          <button
            className='btn'
            onClick={() => handleMessageIndex(messageIndex + 1)}>
            Next
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid var(--clr-grey-2);
  border-radius: 10px;
  margin: 2rem 0;
  display: grid;
  justify-content: center;
  grid-template-rows: 3rem 1fr 3rem;
  box-shadow: var(--dark-shadow);

  h5 {
    color: var(--clr-secondary-5);
  }
  .trap-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    h4 {
      color: var(--clr-secondary-5);
      margin-bottom: 5px;
    }
  }

  .trap-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;

    p {
      margin: 1rem;
    }
  }
  .trap-menu {
    display: flex;
    justify-content: center;
  }

  .btn {
    border: none;
    font: inherit;
    background-color: var(--clr-secondary-5);
    margin: 5px;
    padding: 5px 15px;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    box-shadow: var(--dark-shadow);
  }
`;
export default Trap;
