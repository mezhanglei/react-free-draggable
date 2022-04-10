# react-free-draggable

[English](./README.md) | 中文说明

[![Version](https://img.shields.io/badge/version-7.1.2-green)](https://www.npmjs.com/package/react-free-draggable)

# 适用场景

利用transform实现的自由拖拽组件, 拖拽过程不影响页面布局.

# version7.x

更新了全新的api

# Draggbale组件

- 利用tranform实现element元素或svg元素拖拽移动,性能高,流畅
- 可设置拖拽边界`bounds`来限制拖拽的范围,默认全屏拖拽
- 被包裹的`props.children`的其他属性(非拖拽相关的属性)不会受到`react-free-draggable`影响.仍和没有被包裹一样.
- 当元素为`position: absolute`时, `x, y`支持受控，参考坐标系为`bounds`元素

# DraggableEvent组件

- 仅提供拖拽能力.
- 可设置`eventBounds`表示拖拽过程中涉及的位置的参照对象。

# 注意事项

1. 子元素不能为行内(inline)类型元素,因为transform对行内元素无效!
2. `props.children`限制为单个闭合标签!
3. 组件的拖拽事件涉及的位置均以`bounds`元素为参考坐标系.

### 快速安装
```
npm install --save react-free-draggable
# or
yarn add react-free-draggable
```

### 示例
```javascript
import Draggable from 'react-free-draggable';

<div className="boxs" style={{ display: 'inline-block', width: '500px', background: "red" }}>
    <Draggable
        bounds=".boxs"
        scale={1}
        >
            <div style={{ display: "inline-block" }}>
                <div className="handle" style={{ display: "inline-block", width: "80px",background: "blue", cursor: "pointer", height: "100%" }} onClick={this.clickToast}>
                    拖拽元素
                </div>
            </div>
    </Draggable>
</div>
```

## 组件属性说明

| 名称                          | 类型                  | 默认值                                                         | 描述                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| handle                      | `string / HTMLElement`            | -                                                  | 拖拽元素的类选择器或元素                                                                                  |
| filter                  | `string / HTMLElement`            | -                                                  | 不允许拖拽的选择器或元素                                                                              |
| enableUserSelectHack          | `boolean`                         | -                                                  | 允许添加选中样式                                                  |
| grid                          | `[number, number]`                | -                                                  | 设置x,y方向幅度，多少幅度移动一次目标                                                                              |
| disabled                      | `boolean`                         | -                                                  | 禁止拖拽                                                                                          |
| allowAnyClick                 | `boolean`                         | -                                                  | 表示允许非鼠标左键单击拖动                                                                                          |
| onStart                   | `function`                        | -                                                  | 拖拽开始事件                                                                                           |
| onMove                        | `function`                        | -                                                  | 拖拽进行事件                      |
| onEnd                    | `function`                        | -                                                  | 拖拽结束事件                                                                                  |
| scale                         | `number`                          | 1                                                  | 拖拽灵敏度                                                                                  |
| x                             | `number`                          | -                                                  | 元素为`position: absolute`时, 受控x轴位置，相对于`bounds`的父元素为参考点改变`transform`属性                                                                                  |
| y                             | `number`                          | -                                                  | 元素为`position: absolute`时, 受控y轴位置，相对于`bounds`父元素为参考点改变`transform`属性                                                                                  |
| direction                          | `['vertical','horizontal']`             | -                                                  | 限制拖拽运动方向                                                                                  |
| positionOffset                | `{x: number, y: number}`          | -                                                  | transform的位置增量                                                                                  |
| bounds                        | `string / HTMLElement / {left: number, right: number, top: number, bottom: number, element: string / HTMLElement }`                   | -     | 在bounds内部范围的限制拖拽范围，如果为具体元素则限制该元素范围内，如果为一个范围对象，则限制在该对象内元素的范围内活动                                                                                          |
| fixed                   | `boolean`                | -                                               | 当为非受控组件时，固定拖拽位置                                 |
| childProps                   | `any`                | -                                               | 组件自身的props                                 |
| showLayer                   | `boolean`                | -                                               | `DraggableEvent`组件中是否提供拖拽显示浮层副本                                 |
| layerStyle                   | `CSSProperties`                | -                                               | `DraggableEvent`组件自定义显示浮层副本的样式                                 |
