# Async Redux (Thunk)

## What is a Thunk?
- a humorous past-tense version of "think".
- a function that wraps an expression to delay its evaluation

```
const foo = 5 * 8 + 3 + 7

// bar is a thunk
const bar = () => 5 * 8 + 3 + 7
```


```  
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

