# react-free-draggable

English | [中文说明](./README_CN.md)

[![Version](https://img.shields.io/badge/version-7.1.1-green)](https://www.npmjs.com/package/react-free-draggable)

# Introduction?

Using the free drag and drop component of Transform, the drag process does not affect the page layout

# version7.x

Api is updated

# Draggbale

- Using `tranform` to realize element drag and drop movement, high performance, smooth
- You can set the drag bounds `bounds` to limit the scope of the drag by setting the parent element, Full-screen drag is the default
- Other properties of the wrapped `props. children` (properties that are not drag related) are not affected by `react-free-draggable`. It's still the same as not being wrapped
- When the element is `position: absolute`, the `x, y` support is controlled and the reference coordinate system is the `bounds` element

# DraggableEvent

- Only drag capability is provided.
- You can set `eventBounds` to represent the reference object of the position involved in the drag process.

# matters

1. The child element cannot be an inline element because transform does not work on inline elements!
2. `props. Children` limited to a single closed tag!
3. The events of the component relative to positions is the `bounds` element;

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
        bounds=".boxs"
        scale={1}
        >
            <div style={{ display: "inline-block" }}>
                <div className="handle" style={{ display: "inline-block", width: "80px",background: "blue", cursor: "pointer", height: "100%" }} onClick={this.clickToast}>
                    The Dragging
                </div>
            </div>
    </Draggable>
</div>
```

## Attributes

| name                          | type                  | defaultValue                                                   | description                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| handle                      | `string / HTMLElement`            | -                                                  | Drag the class selector or element for the element                                                                                  |
| filter                  | `string / HTMLElement`            | -                                                  | A selector or element that does not allow drag and drop                                                                              |
| enableUserSelectHack          | `boolean`                         | -                                                  | Allows you to add selected styles                                                  |
| grid                          | `[number, number]`                | -                                                  | Set X, Y direction amplitude, how much to move the target                                                                              |
| disabled                      | `boolean`                         | -                                                  | disabled drag                                                                                          |
| allowAnyClick                 | `boolean`                         | -                                                  | Indicates that drag is allowed without a left mouse click                                                                                          |
| onStart                   | `function`                        | -                                                  | the start event                                                                                        |
| onMove                        | `function`                        | -                                                  | the dragging event                      |
| onEnd                    | `function`                        | -                                                  | the end event                                                                                  |
| scale                         | `number`                          | 1                                                  | Drag sensitivity                                                                                  |
| x                             | `number`                          | -                                                  | When the element is `position: absolute`, position of `horizontal` relative to `bounds` to change `transform`                                                                                  |
| y                             | `number`                          | -                                                  | When the element is `position: absolute`, position of `vertical` relative to `bounds` to change `transform`                                                                                  |
| direction                          | `['vertical','horizontal']`              | -                                                  | the direction of drag and drop                                                                                  |
| positionOffset                | `{x: number, y: number}`          | -                                                  | Transform position increment                                                                                  |
| bounds                        | `string / HTMLElement / {left: number, right: number, top: number, bottom: number, element: string / HTMLElement }`                   | -              | The range within the element, if it is element, the position is range in element, but if it is object, it is the range of the `element` element                                                                                          |
| fixed                   | `boolean`                | -                                               | Fixed dragging position when it is a non-controlled component                                |
| childProps                   | `any`                | -                                               | children's props                                 |
| showLayer                   | `boolean`                | -                                               | `DraggableEvent` component's display of the layer copy                                  |
| layerStyle                   | `CSSProperties`                | -                                               | `DraggableEvent` component custom the style of the layer copy



