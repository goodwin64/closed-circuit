## Closed Circuit

### Desctiption
Create a function that check closed or nor circuit in provided 'area'.
Provided 'area' - Martix (n*m) that must contain only 0 and 1 (0 - empty, 1 - circuit link).
Links(1) can connect diagonally (45 degrees).

### Hint
Сircuit will be closed if circuit links form a closed area.
One circuit link(1) isn't closed circuit!

### For example:
```js
let area = [[0,0,0,1,1,0,0,0],
            [0,0,0,1,0,1,0,0],
            [0,0,0,1,0,1,0,0],
            [0,0,0,0,0,0,0,0]];

isCircuitClosed(area); // false
area[2][4] = 1
isCircuitClosed(area); // true
```

#### Write your code in `src/index.js`
#### Run test locally `npm test`
