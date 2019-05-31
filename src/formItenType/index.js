import React from 'react';


const formItenTypeSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    formItenTypeSet[key] = NodeObj[key];
  })
}

function get(name) {
  return formItenTypeSet[name];
}

const Render = ({ n, ...restProps }) => {
  const Component = formItenTypeSet[n] || (() => <div>未定义的 formItenType: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}