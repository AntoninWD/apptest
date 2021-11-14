import React from "react";
import styled from "styled-components";

const TopTraps = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='channel'>Channel: </label>
          <select name='channel'>
            {data.map(({ channel, _id }) => {
              return (
                <option key={_id} value={channel}>
                  {channel}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='classer'>Classer par: </label>
          <select name='classer'>
            <option>A-Z</option>
            <option>Z-A</option>
            <option>Recent</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
  color: var(--clr-grey-1);

  select {
    padding: 0.3rem 0.8rem;
    border-radius: 10px;
    border: 2px solid var(--clr-secondary-5);
  }
  label {
    font-size: 1.5rem;
    line-height: 0;
    margin-right: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default TopTraps;
