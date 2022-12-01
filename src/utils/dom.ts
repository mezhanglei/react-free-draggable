import { CSSProperties } from "react";
import { getPrefixStyle } from "./cssPrefix";
import { isDom } from "./type";

/**
 * 接收类名或节点，返回节点
 * @param target 目标参数
 */
export const findElement = (target: any, parent: any = document): null | HTMLElement => {
  let result = null;
  if (typeof target === "string") {
    result = parent.querySelector(target);
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

// 获取当前的window
export const getWindow = (el?: any) => {
  const ownerDocument = el?.ownerDocument || document?.ownerDocument;
  return ownerDocument ? (ownerDocument.defaultView || window) : window;
};

// 获取或设置目标元素的style值
export function css(el: any, prop?: string | CSSProperties) {
  let style = el && el.style;
  const win = getWindow(el);
  if (style) {
    const ownerStyle = win.getComputedStyle(el, '') || el.currentStyle;
    if (prop === void 0) {
      return ownerStyle;
    } else if (typeof prop === 'string') {
      return ownerStyle[prop];
    } else if (typeof prop === 'object') {
      for (const key in prop) {
        style[getPrefixStyle(key)] = prop[key]
      }
    }
  }
}

/**
 * 查询元素是否在某个元素内
 * @param el 元素
 * @param parent 父元素
 */
export function matchParent(el: any, parent: HTMLElement): boolean {
  let node = el;
  do {
    if (node === parent) return true;
    if ([document.documentElement, document.body].includes(node)) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

// 返回元素或事件对象的视口位置
export function getClientXY(el: MouseEvent | TouchEvent | HTMLElement): null | {
  x: number;
  y: number;
} {
  let pos = null;
  if ("clientX" in el) {
    pos = {
      x: el.clientX,
      y: el.clientY
    };
  } else if ("touches" in el) {
    if (el?.touches[0]) {
      pos = {
        x: el.touches[0]?.clientX,
        y: el.touches[0]?.clientY
      };
    }
  } else if (isDom(el)) {
    if ([document.documentElement, document.body].includes(el)) {
      pos = {
        x: 0,
        y: 0
      }
    } else {
      pos = {
        x: getRect(el)?.left,
        y: getRect(el).top
      };
    }
  }
  return pos;
}

/**
 * 返回事件对象相对于父元素的真实位置
 * @param el 事件对象
 * @param parent 父元素
 */
export function getEventPosition(el: MouseEvent | TouchEvent, parent: HTMLElement = document.body || document.documentElement): null | {
  x: number;
  y: number;
} {
  let pos = null;
  if ("clientX" in el) {
    pos = {
      x: el?.clientX - getRect(parent).left,
      y: el?.clientY - getRect(parent).top,
    };
  } else if ("touches" in el) {
    if (el?.touches[0]) {
      pos = {
        x: el?.touches[0]?.clientX - getRect(parent).left,
        y: el?.touches[0]?.clientY - getRect(parent).top
      };
    }
  }

  return pos;
}

/**
 * 返回元素的视窗内的位置
 * @param el 
 * @returns 
 */
export function getRect(el: HTMLElement) {
  return el.getBoundingClientRect()
}

// 获取页面或元素的宽高 = 可视宽高 + 滚动条 + 边框
export function getOffsetWH(el: HTMLElement): undefined | {
  width: number;
  height: number;
} {
  if (!isDom(el)) {
    return;
  }
  if ([document.documentElement, document.body].includes(el)) {
    const win = getWindow(el);
    const width = win.innerWidth;
    const height = win.innerHeight;
    return { width, height };
  } else {
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    return { width, height };
  }
};

// 目标在父元素内的四条边位置信息
export function getInsidePosition(el: HTMLElement, parent: HTMLElement = document.body || document.documentElement): null | {
  left: number;
  top: number;
  right: number;
  bottom: number;
} {
  let pos = null;
  if (isDom(el)) {
    const nodeOffset = getOffsetWH(el);
    if (!nodeOffset) return null;
    const borderLeftWidth = parseFloat(getComputedStyle(parent)?.borderLeftWidth) || 0;
    const borderTopWidth = parseFloat(getComputedStyle(parent)?.borderTopWidth) || 0;

    const top = getRect(el).top - getRect(parent).top - borderTopWidth;
    const left = getRect(el).left - getRect(parent).left - borderLeftWidth;

    return {
      left,
      top,
      right: left + nodeOffset?.width,
      bottom: top + nodeOffset?.height
    }
  }
  return pos;
}

/**
 * 添加事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
export function addEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: {
  captrue?: boolean,
  once?: boolean,
  passive?: boolean
}): void {
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
export function removeEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: {
  captrue?: boolean,
  once?: boolean,
  passive?: boolean
}): void {
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
