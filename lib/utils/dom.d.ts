import { CSSProperties } from "react";
/**
 * 接收类名或节点，返回节点
 * @param target 目标参数
 */
export declare const findElement: (target: any, parent?: any) => null | HTMLElement;
/**
 * 判断根元素是不是包含目标元素
 * @param {*} root 根元素
 * @param {*} child 目标元素
 */
export declare function isContains(root: HTMLElement, child: HTMLElement): boolean;
export declare const getWindow: (el?: any) => any;
export declare function css(el: any, prop?: string | CSSProperties): any;
/**
 * 查询元素是否在某个元素内
 * @param el 元素
 * @param parent 父元素
 */
export declare function matchParent(el: any, parent: HTMLElement): boolean;
export declare function getClientXY(el: MouseEvent | TouchEvent | HTMLElement): null | {
    x: number;
    y: number;
};
/**
 * 返回事件对象相对于父元素的真实位置
 * @param el 事件对象
 * @param parent 父元素
 */
export declare function getEventPosition(el: MouseEvent | TouchEvent, parent?: HTMLElement): null | {
    x: number;
    y: number;
};
/**
 * 返回元素的视窗内的位置
 * @param el
 * @returns
 */
export declare function getRect(el: HTMLElement): DOMRect;
export declare function getOffsetWH(el: HTMLElement): undefined | {
    width: number;
    height: number;
};
export declare function getInsidePosition(el: HTMLElement, parent?: HTMLElement): null | {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
/**
 * 添加事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
export declare function addEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: {
    captrue?: boolean;
    once?: boolean;
    passive?: boolean;
}): void;
/**
 * 移除事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
export declare function removeEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: {
    captrue?: boolean;
    once?: boolean;
    passive?: boolean;
}): void;
