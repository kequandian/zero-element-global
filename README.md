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

## baseComponents

```javascript
import { set, Render } from 'zero-element-global/lib/baseComponents';
// or
// import { baseComponents } from 'zero-element-global';
// const { set, Render } = baseComponents;

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