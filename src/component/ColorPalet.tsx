import React from "react";

import color from "./color";

const ColorPalet = () => {
  //   function traverseObj(obj: any) {
  //     const keys = Object.keys(obj);
  //     for (let i = 0; i < keys.length; ++i) {
  //       const key = keys[i];
  //       const value = obj[key];
  //       if (value.constructor === Object && !value.length) {
  //         traverseObj(value);
  //       } else {
  //         console.log(`${key} : ${value}`);
  //       }
  //     }
  //   }

  //   traverseObj(color);

  //   console.log(color);
  for (let a of color) {
    console.log(a);
    for (let b of a) {
      console.log(b);
    }
  }

  return (
    <div>
      <h1>Color Palet</h1>
    </div>
  );
};

export default ColorPalet;
