## APIConfig

```javascript
import { get, set } from 'zero-element-global/lib/APIConfig';
// or
// import { APIConfig } from 'zero-element-global';
// const { get, set } = APIConfig;

set({
  'FIELD_test': 'test',
});
get('FIELD_test'); // return 'test'
```

## container

```javascript
import { set, Render } from 'zero-element-global/lib/container';
// or
// import { container } from 'zero-element-global';
// const { set, Render } = container;

set({
  'MyComponent': () => <div>demo</div>,
});

export default () => <Render n="MyComponent" />
```

## elements

```javascript
import { set, Render } from 'zero-element-global/lib/elements';
// or
// import { elements } from 'zero-element-global';
// const { set, Render } = elements;

set({
  'Loading': () => <div>Loading...</div>,
});

export default () => <Render n="Loading" />
```

## layout

```javascript
import { set, Render } from 'zero-element-global/lib/layout';
// or
// import { layout } from 'zero-element-global';
// const { set, Render } = layout;

set({
  'Grid': () => <div>Grid</div>,
});

export default () => <Render n="Grid" />
```

## listAction

```javascript
import { set, Render } from 'zero-element-global/lib/listAction';
// or
// import { listAction } from 'zero-element-global';
// const { set, get } = listAction;

set({
  test(){
    console.log('test');
  },
});

get('test')();
```