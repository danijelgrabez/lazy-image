<img src="http://www.danijelgrabez.com/public-links/github/react-native-lazy-image/lazy-image-npm.gif" width="240" alt= "Example usage of LazyImage component">

# Lazy Image
React Native image component with animated lazy loading.
Demo 👉[Expo Snack](https://snack.expo.io/@danijelgrabez/bGF6eS).

### Usage
#### Props:
1. `source` - Image source
2. `placeholderColor` - Placeholder background color, if it is not provided, it will fallback to `#e3e3e3`
3. `customPlaceholder` - Custom placeholder component

```js
  const CUSTOM_PLACEHOLDER = require('./assets/customPlaceholder.png');

  /**
   * Base example
   */
  <LazyImage
    source="https://images.unsplash.com/photo-1551148552-c19ee5b0c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2733&q=80"
  />

  /**
   * With custom placeholder background color
   */
  <LazyImage
    source="https://images.unsplash.com/photo-1551148552-c19ee5b0c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2733&q=80"
    placeholderColor="#f74b59"
  />

  /**
   * With custom placeholder component
   */
  <LazyImage
    source="https://images.unsplash.com/photo-1551148552-c19ee5b0c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2733&q=80"
    customPlaceholder={<CustomComponent />}
  />
```


## TODO
- [ ] Provide tests
- [ ] Improve loading performance *(trigger image load when it arrives in the viewport)*


## Suggestions?
[Shoot me an email](mailto:danijel.grabez@gmail.com), or [submit an issue](https://github.com/danijelgrabez/lazy-image/issues) 🚀
