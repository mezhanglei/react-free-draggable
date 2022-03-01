import { CSSProperties } from "react";
export declare type EventType = MouseEvent | TouchEvent;
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
    translateX: number;
    translateY: number;
}
export interface PositionType {
    x: number;
    y: number;
}
export declare enum DragAxis {
    x = "x",
    y = "y"
}
export declare const DragAxisCode: DragAxis[];
export interface BoundsInterface {
    left: number;
    right: number;
    top: number;
    bottom: number;
    boundsParent: string | HTMLElement;
}
export interface DraggableEventProps {
    children?: any;
    onDragStart?: EventHandler;
    onDrag?: EventHandler;
    onDragStop?: EventHandler;
    allowAnyClick?: boolean;
    disabled?: boolean;
    handle?: string | HTMLElement;
    disabledNode?: string | HTMLElement;
    enableUserSelectHack?: boolean;
    grid?: [number, number];
    locationParent?: string | HTMLElement;
    forwardedRef?: any;
}
export interface DraggableProps {
    children?: any;
    allowAnyClick?: boolean;
    disabled?: boolean;
    handle?: string | HTMLElement;
    disabledNode?: string | HTMLElement;
    enableUserSelectHack?: boolean;
    grid?: [number, number];
    scale: number;
    x?: number;
    y?: number;
    axis?: string[];
    positionOffset?: PositionType;
    bounds?: string | HTMLElement | BoundsInterface;
    className?: string;
    style?: CSSProperties;
    transform?: string;
    onDragStart?: DragHandler;
    onDrag?: DragHandler;
    onDragStop?: DragHandler;
    forwardedRef?: any;
    fixed?: boolean;
}
export declare enum DragTypes {
    dragStart = "dragStart",
    draging = "draging",
    dragEnd = "dragEnd"
}
export interface DraggableState {
    dragData: DragData;
    dragType?: DragTypes;
    isSVG: boolean;
    prevX?: number;
    prevY?: number;
}
export declare type EventHandler<E = EventType, T = EventData> = (e: E, data?: T) => void | boolean;
export declare type DragHandler<E = EventType, T = DragData> = (e: E, data?: T) => void | boolean;
