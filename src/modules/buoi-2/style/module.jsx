import React, { Component } from "react";
import S from "./index.module.css";
console.log(S)
console.log(S["heading-2"])

export function mergeClassName(...rest){
    return rest.join(' ');
}
/* 
* mergeClassName('a','b,'c') => 'a b c'
*/

export default class ModuleStyle extends Component {
  render() {
    return (
      <div>
        <h2 className={mergeClassName(S['heading-2'],S['container'])}>Cyber</h2>
      </div>
    );
  }
}
