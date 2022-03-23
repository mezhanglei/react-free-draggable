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
export interface BaseDragProps {
    children?: any;
    className?: string;
    style?: CSSProperties;
    transform?: string;
    axis?: string[];
    scale: number;
    allowAnyClick?: boolean;
    disabled?: boolean;
    handle?: string | HTMLElement;
    disabledNode?: string | HTMLElement;
    enableUserSelectHack?: boolean;
    grid?: [number, number];
    locationParent?: string | HTMLElement;
    forwardedRef?: any;
}
export interface DraggableEventProps extends BaseDragProps {
    onDragStart?: EventHandler;
    onDrag?: EventHandler;
    onDragStop?: EventHandler;
}
export interface DraggableProps extends BaseDragProps {
    children?: any;
    x?: number;
    y?: number;
    positionOffset?: PositionType;
    bounds?: string | HTMLElement | BoundsInterface;
    fixed?: boolean;
    onDragStart?: DragHandler;
    onDrag?: DragHandler;
    onDragStop?: DragHandler;
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
export declare type DragHandler<E = EventType, T = DragEventData> = (e: E, data?: T) => void | boolean;
