import { CSSProperties } from "react";
export type EventType = MouseEvent | TouchEvent;
export interface EventData {
    node?: any;
    deltaX: number;
    deltaY: number;
    eventX: number;
    eventY: number;
    lastEventX: number;
    lastEventY: number;
}
export interface DragData {
    node?: any;
    x?: number;
    y?: number;
    deltaX?: number;
    deltaY?: number;
    translateX?: number;
    translateY?: number;
}
export interface DragEventData {
    node: any;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    translateX?: number;
    translateY?: number;
}
export interface PositionType {
    x: number;
    y: number;
}
export declare enum DragDirection {
    Vertical = "vertical",
    Horizontal = "horizontal"
}
export declare const DragDirectionCode: DragDirection[];
export interface BoundsInterface {
    left: number;
    right: number;
    top: number;
    bottom: number;
    element: string | HTMLElement;
}
export interface BaseDragProps {
    children?: any;
    className?: string;
    style?: CSSProperties;
    transform?: string;
    direction?: string[];
    scale?: number;
    allowAnyClick?: boolean;
    disabled?: boolean;
    handle?: string | HTMLElement;
    filter?: string | HTMLElement;
    enableUserSelectHack?: boolean;
    grid?: [number, number];
    eventBounds?: string | HTMLElement;
    forwardedRef?: any;
}
export interface DraggableEventProps extends BaseDragProps {
    onStart?: EventHandler;
    onMoveStart?: EventHandler;
    onMove?: EventHandler;
    onEnd?: EventHandler;
    showLayer?: boolean;
    customLayer?: any;
    layerStyle?: CSSProperties;
}
export interface DraggableProps extends BaseDragProps {
    children?: any;
    x?: number;
    y?: number;
    positionOffset?: PositionType;
    bounds?: string | HTMLElement | BoundsInterface;
    restoreOnEnd?: boolean;
    onStart?: DragHandler;
    onMove?: DragHandler;
    onEnd?: DragHandler;
}
export declare enum DragTypes {
    Start = "start",
    Move = "move",
    End = "end"
}
export interface DraggableState {
    dragData: DragData;
    dragType?: DragTypes;
    isSVG: boolean;
    prevX?: number;
    prevY?: number;
}
export type EventHandler<E = EventType, T = EventData> = (e: E, data?: T) => void | boolean;
export type DragHandler<E = EventType, T = DragEventData> = (e: E, data?: T) => void | boolean;
