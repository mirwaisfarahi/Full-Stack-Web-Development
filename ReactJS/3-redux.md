# Redux
## Introduction
- React components that use the concept of state. However, it was always a local state that was impacting only a given component. 
- As your application grows you may need to control the state of several components at once or have one global state. For example, you may want to present a different user interface in your components depending on whether the user is signed in or not. Global state management in large applications requires a dedicated system - and that's exactly what Redux offers.

> PREREQUISITES
- Familiarity with HTML & CSS.
- Familiarity with ES6 syntax and features
- Knowledge of React terminology: JSX, State, Function Components, Props, and Hooks
- Knowledge of [asynchronous JavaScript](https://javascript.info/promise-basics) and making [AJAX requests](https://javascript.info/fetch)

> Source: [Fundamentals of Redux Course from Dan Abramov](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

> Other Source: [Redux](https://read.reduxbook.com/markdown/part1/03-updating-state.html#actions-and-reducers-updating-state)

> Excellent Video Source: [playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3)

## Why Redux?
- Redux helps you manage "global" state - state that is needed across many parts of your application.
- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

## Redux Libraries and Tools
### React-Redux
- Redux can integrate with any UI framework, and is most frequently used with React. React-Redux is  official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

### Redux Toolkit
- Redux Toolkit is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app.

## Redux Terms and Concepts

### State Management
- Take a look at below counter code using react with state
```
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```
- This is a small example of "one-way data flow". 
- Imagine you have multiple components that need to share and use the same state, especially if those components are located in different parts of the application. Sometimes this can be solved by "[lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.
- One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. This is the basic idea behind Redux: a single centralized place to contain the global state in a application.

### Immutability
- "Mutable" means "changeable". If something is "immutable", it can never be changed.
- JavaScript objects and arrays are all mutable by default and their values can be changed.

```
const obj = { a: 1, b: 2 }
// still the same object outside, but the contents have changed
obj.b = 3

const arr = ['a', 'b']
// In the same way, we can change the contents of this array
arr.push('c')
arr[1] = 'd'
```

- In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.
- It can be done using array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array.

```
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3
  },
  b: 2
}

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42
  }
}

const arr = ['a', 'b']
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c')

// or, we can make a copy of the original array:
const arr3 = arr.slice()
// and mutate the copy:
arr3.push('c')
```

> Redux expects that all state updates are done immutably.

> A short Video: [The Single Immutable State Tree](https://egghead.io/lessons/react-redux-the-single-immutable-state-tree). The first principle of Redux, which is that, everything that changes in your application, including the data and the UI state, is contained in a single object, we call the state or the state tree.

### Action
- An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

- The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

- An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

```
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

> [Redux: Describing State Changes with Actions](https://egghead.io/lessons/react-redux-describing-state-changes-with-actions). The second principle of Redux -- the state is read only. The only way to change the state tree is by dispatching an action. An action is a plain JavaScript object, describing in the minimal way what changed in the application. Whether it is initiated by a network request or by user interaction, any data that gets into the Redux application gets there by actions.

### Action Creator
- An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time.
```
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

### Reducers
- A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

#### Reducers must always follow some specific rules:

1. They should only calculate the new state value based on the state and action arguments
2. They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
3. They must not do any asynchronous logic, calculate random values, or cause other "side effects"

- The logic inside reducer functions typically follows the same series of steps:
    1. Check to see if the reducer cares about this action
    2. If so, make a copy of the state, update the copy with new values, and return it
    3. Otherwise, return the existing state unchanged

```
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

> Note: Reducers can use any kind of logic inside to decide what the new state should be: if/else, switch, loops, and so on.

> [Redux: The Reducer Function](https://egghead.io/lessons/react-redux-the-reducer-function). The third and the last principle of Redux. To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app. This function has to be pure. This function is called the "Reducer."

### Store
- The current Redux application state lives in an object called the store.
- The store is created by passing in a reducer, and has a method called getState that returns the current state value:

```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

## Disptach
- The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. 
- The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

```
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

- You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

- We typically call action creators to dispatch the right action:
```
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```

### Selectors
- Selectors are functions that know how to extract specific pieces of information from a store state value. 

```
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

## Redux Application Data Flow
### Initial setup:
1. A Redux store is created using a root reducer function
2. The store calls the root reducer once, and saves the return value as its initial state
3. When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. 
4. They also subscribe to any future store updates so they can know if the state has changed.
### Updates:
1. Something happens in the app, such as a user clicking a button
The app code dispatches an action to the Redux store, like dispatch({type: 'counter/increment'})
2. The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state
3. The store notifies all parts of the UI that are subscribed that the store has been updated
4. Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
5. Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

![Redux Data Flow](./images/redux_data_flow.gif)

## Connect React & Redux
Redux is a standalone library. It can be used with vanilla JS applications or with UI frameworks like React, Angular, or Vue. To use Redux with any of these frameworks you need to introduce some "UI binding" to tie Redux and the UI framework together. The most convenient way of binding an application's UI with Redux is to use a dedicated UI binding library. [**React Redux**](https://react-redux.js.org/) is the official Redux UI binding library for React applications. If you are using Redux and React together, you should use **React Redux** to bind these two libraries.

### Why is it important?
The process of subscribing to the store, checking for updates, and triggering a re-render can be handled by the UI binding library and made more accessible and easy to use with its dedicated methods.
Although we said that Redux is a standalone library that can be used with various frameworks it's worth mentioning that it was originally designed and intended for use with React. It's also worth noting that the **React Redux** library is maintained directly by the Redux team.
If you're still not convinced that using **React Redux** library is the best way to connect React and Redux, read [Why use React Redux](https://react-redux.js.org/introduction/why-use-react-redux).

When reading about **React Redux** you might encounter two different APIs:

- `Connect` API
- `Hooks` API

`Connect` API is older and used to be the default for React `class` based applications. Since v7.1.0 **React Redux** supports the `Hooks` API. 

The Redux team now recommends using the **React Redux Hooks API** as the default approach in your React components development.

- Watch [this video guide ](https://www.youtube.com/watch?v=hc3CSmw3L6I) on how to set up your React Redux application.
    - The app in the video is also an example of Counter and it starts with the creation of a reducer, store, and actions.
    - In the video, the ducks pattern is *not used*. Don't get confused.
    - At [9:20](https://youtu.be/hc3CSmw3L6I?t=560) the author starts to talk about the connection of React components with Redux store and this is the most important part of this lesson.

- Read the [official React Redux introduction to Hooks API](https://react-redux.js.org/api/hooks).


## Redux CheatSheet
Here is a handy list of terms you need to understand Redux.

### Store

- It is an object that holds the current application state.
- It is created by using the Redux `configureStore` function that takes a reducer as an argument.
    ```JavaScript
      const store = configureStore({ reducer: counterReducer })
    ```
- It provides the following functions:
    - `getState`: returns current state.
    - `dispatch`: triggers an action on the store in order to update the state.
    - `subscribe`: to register a callback function on action dispatch.


### `dispatch`
- It is one of the functions on Redux store.
- Takes action as an argument.
    ```JavaScript
      store.dispatch({ type: 'INCREMENT' })
    ```
- **It does not update the state directly. It informs the store that a specific action is needed.**


### Action
- It is passed as an argument to the `dispatch` function.
- It is a plain JavaScript object that has a type field. Type field defines the action that should be taken.
     ```JavaScript
      const incrementAction = { type: 'INCREMENT' }
    ```
- It can have other fields with additional information about what happened. By convention, we put that information in a field called payload.
     ```JavaScript
      const incrementAction = {
        type: 'INCREMENT',
        payload: 'Test'
      }
    ```

### Action Creator
- It is a function that creates and returns an action object. It is used to avoid writing the action object by hand every time.
    ```JavaScript
      const increase = test => {
        type: 'INCREMENT',
        payload: test
      }
    ```
    
    
### Reducers

- It is a function that receives the current state and an action object.
- It checks action type and decides how to update the state.
    ```JavaScript
      const initialState = { value: 0 }
      
      function counterReducer(state = initialState, action) {
        // Check to see if the reducer cares about this action
        if (action.type === 'INCREMENT') {
          // If so, make a copy of `state`
          return {
            ...state,
            // and update the copy with the new value
            value: state.value + 1
          }
        }
        // otherwise return the existing state unchanged
        return state
      }
    ```
- It is passed as an argument to the Redux `configureStore` function in order to create a store.
- It is possible to create multiple reducers in one app. However, they need to be combined into one in order to be used in the  `configureStore`.
    ```JavaScript
      const rootReducer = Redux.combineReducers({
        count: counterReducer,
        auth: authReducer
      });

      const store = Redux.createStore(rootReducer);
    ```