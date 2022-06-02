import React, { Component, useState, useEffect } from 'react';
import "./index.less";
import Draggable from '../../src/index';


const Home: React.FC<any> = (props) => {

  return (
    <>
      <div className="boxs" style={{ display: 'inline-block', width: '500px', background: "red" }}>
        <Draggable
          bounds={{ left: 10, right: 10, bottom: 0, top: 0, element: '.boxs' }}
          scale={1}
        >
          <div style={{ display: "inline-block" }}>
            <div className="handle" style={{ display: "inline-block", width: "80px", background: "blue", cursor: "pointer", height: "100%" }}>
              拖拽元素
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
}

export default Home;