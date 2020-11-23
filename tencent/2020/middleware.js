import compose from "./compose";
export default function applyMiddleware(...middlewares) {
  return (next) => (reducer, initialState) => {
    let store = next(reducer, initialState);
    let dispatch = store.dispatch;
    let chain = [];
    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };
    chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}

export default (store) => (next) => (action) => {
  console.log("dispatch:", action);
  next(action);
  console.log("finish:", action);
};

import { createStore, applyMiddleware, compose } from "Redux";
import rootReducer from "../reducers";
import DevTools from "../containers/DevTools";
const finalCreateStore = compose()(createStore); // 在开发环境中使用的 middleware applyMiddleware(d1, d2, d3),
// 它会启动 Redux DevTools DevTools.instrument()

// let newStore = applyMiddleware(mid1, mid2, mid3, ...)(createStore)(reducer, null);

const store = createStore(reducer, applyMiddleware(...middleware));

// 串行执行函数
function compose(...funcs) {
  return (arg) => funcs.reduceRight((composed, f) => f(composed), arg);
}
