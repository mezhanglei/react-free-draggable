# react-free-draggable

English | [中文说明](./README_CN.md)

[![Version](https://img.shields.io/badge/version-6.0.6-green)](https://www.npmjs.com/package/react-free-draggable)

# Introduction?

Using the free drag and drop component of Transform, the drag process does not affect the page layout

# featrues

- [x] Using `tranform` to realize element drag and drop movement, high performance, smooth
- [x] You can set the drag bounds `bounds` to limit the scope of the drag by setting the parent element, Full-screen drag is the default
- [x] Other properties of the wrapped `props. children` (properties that are not drag related) are not affected by `react-free-draggable`. It's still the same as not being wrapped
- [x] Provides fully sufficient free configuration API to implement various Settings during the drag and drop process

# Matters

1. The child element cannot be an inline element because transform does not work on inline elements!
2. `props. Children` limited to a single closed tag!
3. The `DraggableEvent` component is an event handling component that provides developers with the ability to handle event;
4. The events of the component relative to positions is the `bounds` element;

### install
```
npm install --save react-free-draggable
# or
yarn add react-free-draggable
```

### example
```javascript
import Draggable from 'react-free-draggable';

<div className="boxs" style={{ display: 'inline-block', width: '500px', background: "red" }}>
    <Draggable
        axis="both"
        bounds=".boxs"
        // dragNode=".handle"
        // grid={[100, 25]}
        scale={1}
        >
            <div style={{ display: "inline-block" }}>
                <div className="handle" style={{ display: "inline-block", width: "80px",background: "blue", cursor: "pointer", height: "100%" }} type="default" onClick={this.clickToast}>
                    The Dragging
                </div>
            </div>
    </Draggable>
</div>
```

## Attributes

| name                          | type                  | defaultValue                                                   | description                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| dragNode                      | `string / HTMLElement`            | -                                                  | Drag the class selector or element for the element                                                                                  |
| disabledNode                  | `string / HTMLElement`            | -                                                  | A selector or element that does not allow drag and drop                                                                              |
| enableUserSelectHack          | `boolean`                         | -                                                  | Allows you to add selected styles                                                  |
| grid                          | `[number, number]`                | -                                                  | Set X, Y direction amplitude, how much to move the target                                                                              |
| disabled                      | `boolean`                         | -                                                  | disabled drag                                                                                          |
| allowAnyClick                 | `boolean`                         | -                                                  | Indicates that drag is allowed without a left mouse click                                                                                          |
| onDragStart                   | `function`                        | -                                                  | the start event                                                                                        |
| onDrag                        | `function`                        | -                                                  | the dragging event                      |
| onDragStop                    | `function`                        | -                                                  | the end event                                                                                  |
| scale                         | `number`                          | 1                                                  | Drag sensitivity                                                                                  |
| x                             | `number`                          | -                                                  | position of `x` axis relative to `bounds` to change `transform`                                                                                  |
| y                             | `number`                          | -                                                  | position of `y` axis relative to `bounds` to change `transform`                                                                                  |
| axis                          | `both / x / y / none`             | -                                                  | the direction of drag and drop                                                                                  |
| positionOffset                | `{x: number, y: number}`          | -                                                  | Transform position increment                                                                                  |
| bounds                        | `string / HTMLElement / {left: number, right: number, top: number, bottom: number, boundsParent: string / HTMLElement }`                   | -              | The range within the element, if it is element, the position is range in element, but if it is object, it is the range of the `boundsParent` element                                                                                          |
| zIndexRange                   | `[number, number]`                | `[]`                                               | The `zIndex` range that can be set when dragging and dropping                                                                                          |
| reset                   | `boolean`                | -                                               | reset to `transform: translate3d(0,0,0);`                                 |



