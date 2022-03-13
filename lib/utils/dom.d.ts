/**
 * 接收类名或节点，返回节点
 * @param target 目标参数
 */
export declare const findElement: (target: any) => null | HTMLElement;
/**
 * 判断根元素是不是包含目标元素
 * @param {*} root 根元素
 * @param {*} child 目标元素
 */
export declare function isContains(root: HTMLElement, child: HTMLElement): boolean;
/**
 * 返回事件对象相对于父元素的真实位置
 * @param el 事件对象
 * @param parent 父元素
 */
export declare function getEventPosition(el: MouseEvent | TouchEvent, parent?: HTMLElement): null | {
    x: number;
    y: number;
};
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
export declare const addUserSelectStyles: (doc: any) => any;
export declare function removeUserSelectStyles(doc: any): void;
export declare function addClassName(el: HTMLElement, className: string): void;
export declare function removeClassName(el: HTMLElement, className: string): void;
export declare function snapToGrid(grid: [number, number], pendingX: number, pendingY: number): [number, number];
export interface PositionInterface {
    x: number;
    y: number;
}
export declare function getTranslation(current: {
    x?: number;
    y?: number;
}, positionOffset: {
    x: number;
    y: number;
} | undefined, unit: string): string | undefined;
export declare function getBoundsInParent(node: HTMLElement, bounds: any): {
    left: number;
    right: number;
    top: number;
    bottom: number;
} | undefined;
export declare function getPositionByBounds(node: HTMLElement, position: PositionInterface, bounds: any): PositionInterface;
/**
 * 返回元素的视窗内的位置
 * @param el
 * @returns
 */
export declare function getRect(el: HTMLElement): DOMRect;
/**
 * 查询元素是否在某个元素内
 * @param el 元素
 * @param parent 父元素
 */
export declare function matchParent(el: any, parent: HTMLElement): boolean;
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
