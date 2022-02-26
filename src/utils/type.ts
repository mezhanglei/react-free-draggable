
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

export function isObject(data: any) {
    return getType(data) == '[object Object]';
}

// 判断值是否为空
export function isEmpty(value: unknown) {
    if (Array.isArray(value)
        || typeof value === 'string'
        || value instanceof String
    ) {
        return value.length === 0;
    }

    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }

    if (({}).toString.call(value) === '[object Object]') {
        return Object.keys(<object>value).length === 0;
    }

    return value === undefined || value === null;
}