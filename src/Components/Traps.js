import React from "react";
import styled from "styled-components";
import Trap from "./Trap";

const Traps = ({ data }) => {
  return (
    <Wrapper>
      <hr />
      <div className='traps'>
        {data.map((dataValue, i) => {
          return <Trap key={i} dataValue={dataValue} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .traps {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }

  hr {
    margin-left: 5%;
    opacity: 0.5;
  }
`;
export default Traps;
