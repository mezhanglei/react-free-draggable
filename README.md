# react-free-draggable

English | [中文说明](./README_CN.md)

[![Version](https://img.shields.io/badge/version-8.0.5-green)](https://www.npmjs.com/package/react-free-draggable)

# Introduction?

Using the free drag and drop component of Transform, the drag process does not affect the page layout

# version8.x
  - Change the parameters of `onStart`, `onMove`, `onEnd` callbacks
  - ~~`fixed`~~ property to `resetOnEnd` property to indicate whether to restore the position after the drag end
  - ~~`childProps`~~ property is deprecated

# Draggbale

- Using `tranform` to realize element drag and drop movement, high performance, smooth
- You can set the drag bounds `bounds` to limit the scope of the drag by setting the parent element, Full-screen drag is the default
- Other properties of the wrapped `props. children` (properties that are not drag related) are not affected by `react-free-draggable`. It's still the same as not being wrapped
- When set to `position: absolute`, you can set the `x` and `y` attributes inside the `bounds` element to control the position of the element

# DraggableEvent

- Provide only drag event callbacks and parameters for dragging
- The `eventBounds` property can limit the extent of the event object's activity

# matters

1. children can not be inline elements, because transform does not work on inline elements!
2. `props.children` is restricted to a single closing tag!
3. `x` and `y` attributes are referenced to the `bounds` element.

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
| x                             | `number`                          | -                                                  | The position of the x-axis when the element is `position: absolute`.                                                                                   |
| y                             | `number`                          | -                                                  | The position of the y-axis when the element is `position: absolute`.                                                                                  |
| direction                          | `['vertical','horizontal']`              | -                                                  | the direction of drag and drop                                                                                  |
| positionOffset                | `{x: number, y: number}`          | -                                                  | Transform position increment                                                                                  |
| bounds                        | `string / HTMLElement / {left: number, right: number, top: number, bottom: number, element: string / HTMLElement }`                   | -              | The range within the element, if it is element, the position is range in element, but if it is object, it is the range of the `element` element                                                                                          |
| resetOnEnd                   | `boolean`                | -                                               | Restore position when drag end                                |
| showLayer                   | `boolean`                | -                                               | `DraggableEvent` component's display of the layer copy                                  |
| layerStyle                   | `CSSProperties`                | -                                               | `DraggableEvent` component custom the style of the layer copy



