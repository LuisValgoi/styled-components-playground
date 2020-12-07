# Objective

This project was created to better understand the usage of `styled-components` lib and its advantages.

# Overview

When using the `styled-components` there are some things you should know:

## Style Folder

Since the lib only provides a way to style the stateless components, it is strongly advised to create a `src/styles/` folder and to add all the styled components inside of it.

## Passing Parameters

If you want to pass args to the UI components, you can use the following:

```js
// App.js
<HeaderRegular fontSize={60}>Regular Text</HeaderRegular>;

// styles/Header.js
export const HeaderRegular = styled.h1`
  font-size: ${(props) => `${props.fontSize}px`};
`;
```

## Inheritance with Inner Elements & Styling

If you want to style a component which is rendered in the DOM inside of the one you currently are, using inheritance, check this:

```js
// App.js
<HeaderRegular>
  <span>Regular Text</span>
</HeaderRegular>;

// styles/Header.js
export const HeaderRegular = styled.h1`
  span {
    font-size: 15px;
  }
`;
```

## Inheritance with Other Elements & Styling

If you want to style a component using the styles of another one, check this:

```js
// App.js
<HeaderSmall>Regular Text</HeaderSmall>;

// styles/Header.js
export const Header = styled.h1`
  background-color: black;
`;

export const HeaderSmall = styled(Header)`
  font-size: 10px;
`;
```
