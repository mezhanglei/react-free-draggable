import { getPrefixStyle } from "./cssPrefix";
import { isDom, isNumber } from "./type";
import { CSSProperties } from "react";
import { BoundsInterface } from "./types";

// 添加选中类和样式
export const addUserSelectStyles = (doc: any): any => {
    if (!doc) return;
    let styleEl = doc.getElementById('react-draggable-style-el');
    if (!styleEl) {
        styleEl = doc.createElement('style');
        styleEl.type = 'text/css';
        styleEl.id = 'react-draggable-style-el';
        styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {background: red;}\n';
        styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {background: red;}\n';
        doc.getElementsByTagName('head')[0].appendChild(styleEl);
    }
    if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
};

// 移除选中样式和选中区域
export function removeUserSelectStyles(doc: any): void {
    if (!doc) return;
    try {
        if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
        // $FlowIgnore: IE
        if (doc.selection) {
            // $FlowIgnore: IE
            doc.selection.empty();
        } else {
            // Remove selection caused by scroll, unless it's a focused input
            // (we use doc.defaultView in case we're in an iframe)
            const selection = (doc.defaultView || window).getSelection();
            if (selection && selection.type !== 'Caret') {
                selection.removeAllRanges();
            }
        }
    } catch (e) {
        // probably IE
    }
}

// 添加类名
export function addClassName(el: HTMLElement, className: string): void {
    if (el.classList) {
        el.classList.add(className);
    } else {
        if (!el.className.match(new RegExp(`(?:^|\\s)${className}(?!\\S)`))) {
            el.className += ` ${className}`;
        }
    }
}

// 移除类名
export function removeClassName(el: HTMLElement, className: string): void {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp(`(?:^|\\s)${className}(?!\\S)`, 'g'), '');
    }
}

// 输入值，返回0或该值
export function snapToGrid(grid: [number, number], pendingX: number, pendingY: number): [number, number] {
    const x = Math.round(pendingX / grid[0]) * grid[0];
    const y = Math.round(pendingY / grid[1]) * grid[1];
    return [x, y];
}

// 位置
export interface PositionInterface {
    x: number,
    y: number
}
// 接收增量位置，返回新的transform值
export function getTranslation(current: PositionInterface, positionOffset: PositionInterface | undefined, unit: string): string {
    let translation = `translate(${current.x}${unit},${current.y}${unit})`;
    if (positionOffset) {
        const defaultX = `${(typeof positionOffset.x === 'string') ? positionOffset.x : positionOffset.x + unit}`;
        const defaultY = `${(typeof positionOffset.y === 'string') ? positionOffset.y : positionOffset.y + unit}`;
        translation = `translate(${defaultX}, ${defaultY})` + translation;
    }
    return translation;
}

// 设置css的transform
export function createCSSTransform(current: PositionInterface, positionOffset?: PositionInterface | undefined): CSSProperties {
    const translation = getTranslation(current, positionOffset, 'px');
    return { [getPrefixStyle('transform')]: translation };
}

// 设置svg的transform
export function createSVGTransform(current: PositionInterface, positionOffset?: PositionInterface | undefined): string {
    const translation = getTranslation(current, positionOffset, '');
    return translation;
}

// 返回目标元素相对于父元素内的视口范围
export function getBoundsInParent(node: HTMLElement, parent: any): BoundsInterface | undefined {
    // 限制父元素
    const boundsParent: HTMLElement = findElement(parent);

    if (!isDom(node) || !isDom(boundsParent)) {
        return;
    }
    if (!isContains(boundsParent, node)) {
        throw new Error("`parent` is not parentNode of the child");
    }
    const nodeStyle: any = node?.ownerDocument?.defaultView?.getComputedStyle(node);

    // 元素外部大小
    const nodeOutWidth = node.clientWidth + parseInt(nodeStyle?.borderLeftWidth) + parseInt(nodeStyle?.borderRightWidth);
    const nodeOutHeight = node.clientHeight + parseInt(nodeStyle?.borderTopWidth) + parseInt(nodeStyle?.borderBottomWidth);
    // 容器大小
    const parentInnerWidth = boundsParent.clientWidth;
    const parentInnerHeight = boundsParent.clientHeight;

    // 大小差距
    const xDiff = parentInnerWidth - nodeOutWidth;
    const yDiff = parentInnerHeight - nodeOutHeight;

    return {
        xStart: 0,
        xEnd: xDiff > 0 ? xDiff : 0,
        yStart: 0,
        yEnd: yDiff > 0 ? yDiff : 0
    };
}

// 元素在父元素限制范围下的位置
export function getPositionByBounds(node: HTMLElement, parent: any, position: PositionInterface, bounds?: BoundsInterface): PositionInterface {

    // 限制父元素
    const boundsParent: HTMLElement = findElement(parent);

    if (!getBoundsInParent(node, boundsParent)) {
        return position;
    }

    const resultBounds = { ...getBoundsInParent(node, boundsParent), ...bounds };
    const { xStart = 0, yStart = 0, xEnd = 0, yEnd = 0 } = resultBounds;
    let { x, y } = position;

    if (isNumber(xEnd)) x = Math.min(x, xEnd);
    if (isNumber(yEnd)) y = Math.min(y, yEnd);
    if (isNumber(xStart)) x = Math.max(x, xStart);
    if (isNumber(yStart)) y = Math.max(y, yStart);

    return { x, y };
}

/**
 * 接收类名或节点，返回节点
 * @param target 目标参数
 */
export const findElement = (target: string | HTMLElement): any => {
    let result = null;
    if (typeof target === "string") {
        result = document.querySelector(target);
    } else if (isDom(target)) {
        result = target;
    }
    return result;
};

/**
 * 判断根元素是不是包含目标元素
 * @param {*} root 根元素
 * @param {*} child 目标元素
 */
export function isContains(root: HTMLElement, child: HTMLElement): boolean {
    if (!root || root === child) return false;
    return root.contains(child);
};

/**
 * 添加事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
interface InputOptionsType {
    captrue?: boolean,
    once?: boolean,
    passive?: boolean
}
export function addEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: InputOptionsType): void {
    if (!el) return;
    // captrue: true事件捕获 once: true只调用一次,然后销毁 passive: true不调用preventDefault
    const options = { capture: false, once: false, passive: false, ...inputOptions };
    if (el.addEventListener) {
        el.addEventListener(event, handler, options);
    } else if (el.attachEvent) {
        el.attachEvent('on' + event, handler);
    } else {
        // $FlowIgnore: Doesn't think elements are indexable
        el['on' + event] = handler;
    }
}

/**
 * 移除事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
export function removeEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: InputOptionsType): void {
    if (!el) return;
    const options = { capture: false, once: false, passive: false, ...inputOptions };
    if (el.removeEventListener) {
        el.removeEventListener(event, handler, options);
    } else if (el.detachEvent) {
        el.detachEvent('on' + event, handler);
    } else {
        // $FlowIgnore: Doesn't think elements are indexable
        el['on' + event] = null;
    }
}

/**
 * 获取页面或元素的卷曲滚动(兼容写法)
 * @param el 目标元素
 */
export interface ScrollInterface {
    x: number;
    y: number;
}
export function getScroll(el: HTMLElement = (document.body || document.documentElement)): undefined | ScrollInterface {
    if (!isDom(el)) {
        return;
    }
    if (el === document.body || el === document.documentElement) {
        const doc = el.ownerDocument; // 节点所在document对象
        const win: any = doc.defaultView; // 包含document的window对象
        const x = doc.documentElement.scrollLeft || win.pageXOffset || doc.body.scrollLeft;
        const y = doc.documentElement.scrollTop || win.pageYOffset || doc.body.scrollTop;
        return { x, y };
    } else {
        const x = el.scrollLeft;
        const y = el.scrollTop;
        return { x, y };
    }
};

/**
 * 返回元素或事件对象相对于父元素的窗口位置
 * @param el 元素或事件对象
 * @param parent 父元素
 */
export function getClientXYInParent(el: MouseEvent | TouchEvent | HTMLElement, parent: HTMLElement): null | SizeInterface {
    let pos = null;
    if ("clientX" in el) {
        pos = {
            x: el?.clientX - parent.getBoundingClientRect().left,
            y: el?.clientY - parent.getBoundingClientRect().top
        };
    } else if ("touches" in el) {
        if (el?.touches[0]) {
            pos = {
                x: el?.touches[0]?.clientX - parent.getBoundingClientRect().left,
                y: el?.touches[0]?.clientY - parent.getBoundingClientRect().top
            };
        }
    } else if (isDom(el)) {
        pos = {
            x: el.getBoundingClientRect().left - parent.getBoundingClientRect().left,
            y: el.getBoundingClientRect().top - parent.getBoundingClientRect().top
        };
    }

    return pos;
}

/**
 * 获取元素或事件对象的相对于父元素的真实位置 = 可视位置 - 父元素的可视位置 + 父元素的卷曲滚动距离
 * @param el 元素或事件对象
 * @param parent 父元素
 */
export function getPositionInParent(el: MouseEvent | TouchEvent | HTMLElement, parent: HTMLElement): null | SizeInterface {
    const clientXY = getClientXYInParent(el, parent);
    const scroll = getScroll(parent);
    let pos = null;
    if (clientXY) {
        pos = {
            x: clientXY.x + (scroll?.x || 0),
            y: clientXY.y + (scroll?.y || 0),
        }
    }

    return pos;
};

/**
 * 查询元素是否在某个元素内
 * @param el 元素
 * @param parent 父元素
 */
export function matchParent(el: any, parent: HTMLElement): boolean {
    let node = el;
    do {
        if (node === parent) return true;
        if ((node === document.body) || (node === document.documentElement)) return false;
        node = node.parentNode;
    } while (node);

    return false;
}

