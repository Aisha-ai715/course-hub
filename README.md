# Eduunity – Kids Learning Platform (Homepage UI)

## Overview
This project is a Month 4 Women Techsters React Project focused on building a scalable frontend application using JavaScript and the React.js library.

The goal is to translate a real-world UI design into a reusable and scalable React application.

## Technologies Used
- React.js  
- JavaScript (ES6+)  
- HTML5  
- CSS3  

## Learning Focus
- Component-based architecture  
- Reusable UI components  
- Clean folder structure for scalability  

 

## Assignment: Summary of React

### What is React?
React is a JavaScript library for building user interfaces. It is not a full framework, but it allows you to use many libraries that make it behave like one. This makes React more flexible than most frameworks.

A framework is like a blueprint that tells you how to code, but with React, you are free to structure things your own way.

In React, you describe user interfaces and manage changes in state instead of directly manipulating DOM elements.



### Components
React is built on components. Every part of the UI can be created as a reusable component, and multiple components are combined to build pages.

Components can be created in two ways:
- Function-based components  
- Class-based components  


### JSX
React uses JSX, which allows you to write HTML inside JavaScript files.

Component names must start with a capital letter. Lowercase names are treated as regular HTML elements.



### Why is React Useful?
- **Virtual DOM:** Working with the real DOM is slow and complex. React uses a virtual DOM and updates the real DOM only when needed.  
- **Mobile apps:** React skills can be reused for mobile app development using React Native.  
- **Trusted updates:** React is maintained and tested by Facebook before new features are released.  
- **Efficient updates:** React re-renders only the parts of the UI that change, making applications faster.  



### Key React Methods
- **ReactDOM.render():** Renders React elements into the browser. It takes two arguments: what to render and where to render it.  
- **React.createElement():** Creates React elements as JavaScript objects, which are rendered to the DOM using ReactDOM.render().  


### React Hooks
Hooks allow you to manage state and lifecycle features in function components.

- **useState:** Stores and updates state. Updating state causes the component to re-render.  
- **useRef:** Accesses DOM elements or values without triggering a re-render.  
- **useEffect:** Handles side effects such as styling, data fetching, or cleaning up event listeners.  
- **useCallback:** Improves performance by memoizing functions.  
- **useMemo:** Stores the result of expensive calculations to prevent unnecessary re-computation.  
- **useContext:** Avoids prop drilling by allowing any component to access shared values.  
- **useReducer:** Manages complex state logic using actions, often in small to medium applications.  



### Props
Props are properties passed between components. They can include strings, numbers, arrays, objects, and functions.


#### Normal Props
```js
function Card(props) {
  return <h1>{props.title}</h1>;
}
```

#### Destructured Props
```js
function Card({ title }) {
  return <h1>{title}</h1>;
}
