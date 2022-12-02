import { DraggableProps } from "./types";
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
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
} | undefined;
export declare function getPositionByBounds(node: HTMLElement, position: PositionInterface, bounds: DraggableProps['bounds']): PositionInterface;
