# Features

Features implementation in SaltMusic App.

## Advanced Search

Advanced search is implemented by using:

- UI components, such as input, select, checkboxes, accordion provided by Chakra UI
- React Hooks, Redux Toolkit, React Query
- Conditional rendering

Search can be done by:

- by year
- by category
- by name and artist
- alphabetic sorting

## Favorite Page

'Favorite' functionality is implemented by using:

- Styling with Chakra UI
- React Hooks, Redux Toolkit

Functionality includes:

- add/remove to favorite(stored in redux)
- display all favorite songs on Favorite page
- Favorite songs showcased in Discover page as well

## integration with other API: Album songs

Implemented by using:

- React Query (https://itunes.apple.com/lookup?id=${id}&entity=song&media=music)

Functionality includes:

- Allows to get songs for each Album
- Single album detailed page
- Audio player

## Light/dark mode toggle

Light/dark mode functionality is implemented by using:

- Theming with Chakra UI
- Chakra UI hooks

Functionality includes:

- light dark mode switcher(button on the top right corner)

## Responsive Web App

Responsive Web App functionality is implemented by using:

- Theming with Chakra UI
- Chakra UI breakpoints

Functionality includes:

- Fully responsive web application
