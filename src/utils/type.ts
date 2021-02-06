
export function getType(obj: any) {
    return Object.prototype.toString.call(obj);
}

export function isDom(ele: any) {
    if (typeof HTMLElement === 'object') {
        return ele instanceof HTMLElement;
    } else {
        return ele && typeof ele === 'object' && ele.nodeType === 1 && typeof ele.nodeName === 'string';
    }
}

export function isNumber(data: any) {
    return getType(data) == '[object Number]';
}

export function isString(data: any) {
    return getType(data) == '[object String]';
}