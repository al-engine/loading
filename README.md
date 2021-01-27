# Al engine
## Scale

This is module with generic Loading screen for Al engine.

```nashorn js
  // position is a position of simple animation
  // {x: 1, y: 1} - will be top left corner
  // {x: options.width - 7, y: 1} - bottom right corner
  // asset is a instance of Asset class, while it loading animation is shown
  const loading = new Loading(position, asset,
    // callback to hide loading animation
    () => {
      this.removeChild(loading);
      this.addChild(this.menu);
    }
  );
``` 