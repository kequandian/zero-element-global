import React from 'react';


const actionItenTypeSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    actionItenTypeSet[key] = NodeObj[key];
  })
}

function get(name) {
  return actionItenTypeSet[name];
}

const Render = ({ n, ...restProps }) => {
  const Component = actionItenTypeSet[n] || (() => <div>未定义的 actionItenType: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}