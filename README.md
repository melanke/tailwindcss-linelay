![LineLay](http://i.imgur.com/VddYz5e.png)

Linelay is a utility library on flex layout with multidiretional capabilities that saves more space than usual grid systems.

# Installation
```
npm i tailwindcss-linelay
```

# Configuration
```javascript
module.exports = {
  // ...
  plugins: [
    // ...
    require('tailwindcss-linelay')(),
  ],
  theme: {
    // ...
    extend: {
      // ...
      weight: theme => ({
        '1': [1],
        '2': [2],
        '3': [3],
      }),
    },
  },
}
```

# Samples
- **[Complete example](https://codepen.io/melanke/embed/rwZpPM?height=475&theme-id=dark&default-tab=result&embed-version=2)**
- **[Golden Ratio!](https://codepen.io/melanke/embed/YQgKRx?theme-id=dark&default-tab=result,html&embed-version=2)**

## .horiz

Elements inside it will be organized horizontally, like columns.

[![Imgur](http://i.imgur.com/4Ru7keX.png)](https://codepen.io/melanke/embed/ZyVKGg?theme-id=dark&default-tab=result,html&embed-version=2)
<br/>Click to explore

### .verti
Elements inside it will be organized vertically, like rows.

[![Imgur](http://i.imgur.com/fGGmihw.png)](https://codepen.io/melanke/embed/WOPbqJ?theme-id=dark&default-tab=result,html&embed-version=2)
<br/>Click to explore

## .weight-{number}
Controls the weight of the element compared to it's siblings. Siblings with same weight will occupy the remaining space of it's parent equaly, a weight-2 will occupy twice the space of a weight-1.

[![Imgur](http://i.imgur.com/QXQ2fN6.png)](https://codepen.io/melanke/embed/GEzJKE?theme-id=dark&default-tab=result,html&embed-version=2)
<br/>Click to explore