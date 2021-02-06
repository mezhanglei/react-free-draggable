// 是否为SVG元素
export const isElementSVG = function (el: any): boolean {
    if (typeof window.SVGElement !== 'undefined' && el instanceof window.SVGElement) {
        return true;
    } else {
        return false;
    }
};

//是否是移动设备
export const isMobile = function (): boolean {
    let userAgent = navigator.userAgent, Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    return Agents.some((i) => {
        return userAgent.includes(i);
    });
};

// 判断是否为触摸屏设备
export const isEventTouch = function (e: any): boolean {
    if (e?.touches || e?.targetTouches || e?.changedTouches) {
        return true;
    } else {
        return false;
    }
};