# react-free-draggable

[English](./README.md) | 中文说明

[![Version](https://img.shields.io/badge/version-1.0.4-green)](https://www.npmjs.com/package/react-free-draggable)

# 适用场景

利用transform实现的自由拖拽组件, 拖拽过程不影响页面布局

# features

- [x] 利用tranform实现元素拖拽移动,性能极高,流畅
- [x] 可设置拖拽边界`bounds`或通过设置父元素`boundsParent`来限制拖拽的范围,默认全屏拖拽
- [x] 默认子元素children为拖拽元素,也可以通过设置`dragNode`来指定被拖拽的元素
- [x] 提供完全足够的自由配置api,实现拖拽过程中的各种设定

# 注意事项

1. 子元素不能为行内(inline)类型元素,因为transform对行内元素无效!
2. `props.children`限制为单个闭合标签!
2. `DraggableEvent`组件为事件处理组件,提供给开发者在移动目标时事件对象处理,不进行移动操作

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
        axis="both"
        boundsParent=".boxs"
        // dragNode=".handle"
        position={{ x: 10, y: 0 }}
        // grid={[100, 25]}
        scale={1}
        >
            <div style={{ display: "inline-block" }}>
                <div className="handle" style={{ display: "inline-block", width: "80px",background: "blue", cursor: "pointer", height: "100%" }} type="default" onClick={this.clickToast}>
                    拖拽元素
                </div>
            </div>
    </Draggable>
</div>
```

## 组件属性说明

| 名称                          | 类型                  | 默认值                                                         | 描述                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| dragNode                      | `string / HTMLElement`            | -                                                  | 拖拽元素的类选择器或元素                                                                                  |
| disabledNode                  | `string / HTMLElement`            | -                                                  | 不允许拖拽的选择器或元素                                                                              |
| enableUserSelectHack          | `boolean`                         | -                                                  | 允许添加选中样式                                                  |
| grid                          | `[number, number]`                | -                                                  | 设置x,y方向幅度，多少幅度移动一次目标                                                                              |
| boundsParent                  | `string / HTMLElement`            | `body`                                             | 限制拖拽的父元素，默认body              |
| disabled                      | `boolean`                         | -                                                  | 禁止拖拽                                                                                          |
| allowAnyClick                 | `boolean`                         | -                                                  | 表示允许非鼠标左键单击拖动                                                                                          |
| onStart                       | `function`                        | -                                                  | 拖拽开始事件                                                                                          |
| onDrag                        | `function`                        | -                                                  | 拖拽进行事件                      |
| onStop                        | `function`                        | -                                                  | 拖拽结束事件                                                                                  |
| scale                         | `number`                          | 1                                                  | 拖拽灵敏度                                                                                  |
| position                      | `{x: number, y: number}`          | -                                                  | 拖拽元素在父元素内的位置                                                                                  |
| axis                          | `both / x / y / none`             | -                                                  | 限制拖拽运动方向                                                                                  |
| positionOffset                | `{x: number, y: number}`          | -                                                  | transform的位置增量                                                                                  |
| bounds                        | `{xStart: number, xEnd: number, yStart: number, yEnd: number }` | -                    | 在boundsParent元素内部范围的限制拖拽范围                                                                                          |




