# react-free-draggable

English | [中文说明](./README_CN.md)

[![Version](https://img.shields.io/badge/version-1.0.4-green)](https://www.npmjs.com/package/react-free-draggable)

# Introduction?

Using the free drag and drop component of Transform, the drag process does not affect the page layout

# featrues

- [x] Using `tranform` to realize element drag and drop movement, high performance, smooth
- [x] You can set the drag bounds `bounds` or limit the scope of the drag by setting the parent element `boundsParent`. Full-screen drag is the default
- [x] The default drag element `props.children`. You can also specify the element to be dragged by setting `dragNode`
- [x] Provides fully sufficient free configuration API to implement various Settings during the drag and drop process

# Matters

1. The child element cannot be an inline element because transform does not work on inline elements!
2. 'props. Children' limited to a single closed tag!
2. The 'DraggableEvent' component is an event handling component that provides developers with the ability to handle event objects when moving objects without moving them

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
        boundsParent=".boxs"
        // dragNode=".handle"
        position={{ x: 10, y: 0 }}
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
| boundsParent                  | `string / HTMLElement`            | `body`                                             | Restrict the drag and drop parent element, default body              |
| disabled                      | `boolean`                         | -                                                  | disabled drag                                                                                          |
| allowAnyClick                 | `boolean`                         | -                                                  | Indicates that drag is allowed without a left mouse click                                                                                          |
| onStart                       | `function`                        | -                                                  | the start event                                                                                          |
| onDrag                        | `function`                        | -                                                  | the dragging event                      |
| onStop                        | `function`                        | -                                                  | the end event                                                                                  |
| scale                         | `number`                          | 1                                                  | Drag sensitivity                                                                                  |
| position                      | `{x: number, y: number}`          | -                                                  | the position of an element within its parent element                                                                                  |
| axis                          | `both / x / y / none`             | -                                                  | the direction of drag and drop                                                                                  |
| positionOffset                | `{x: number, y: number}`          | -                                                  | Transform position increment                                                                                  |
| bounds                        | `{xStart: number, xEnd: number, yStart: number, yEnd: number }` | -                    | The range within the boundsParent element                                                                                          |



