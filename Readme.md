# Pokedex

Pokedex is a Front-End technical test.


## Installation


```bash
cd pokedex
npm install
npm start
```

## Running End to End test

```python
npm run cypress
```

## The exercise
The application was built using React Hooks and Context API for managing the pagination and API data state. It was necessary to build a Pagination component for accomplishing a performance improvement on the page, by providing data as soon as the page loads, so the Context API served as a global state for storing next and previous URLs, and the API data based on pagination status.

I have opted for End to End test because every action is very connected on this application so it's easier to identify problems by testing the application flow.

I have also chosen to use local image files as background images for performance reasons (There is a hover event that changes an image src so it was downloading at each onMouseEnter and onMouseLeave events).
