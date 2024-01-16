import { GameCommandActions, GameInternalUnits, GameOverData } from './game';
import { PlayerHess } from './hess';
export interface PlayerBanEvent {
    get player(): PlayerHess;
}
export interface PlayerChatEvent {
    get player(): PlayerHess;
    get message(): string;
}
export interface PlayerIpBanEvent {
    get player(): PlayerHess;
}
export interface PlayerIpUnBanEvent {
    get player(): PlayerHess;
}
export interface PlayerJoinEvent {
    get player(): PlayerHess;
}
export interface PlayerLeaveEvent {
    get player(): PlayerHess;
}
export interface PlayerUnBanEvent {
    get player(): PlayerHess;
}
export interface PlayerOperationUnitEvent {
    get player(): PlayerHess;
    get gameCommandActions(): GameCommandActions;
    get gameInternalUnits(): GameInternalUnits;
}
export interface ServerGameOverEvent {
    get gameOverData(): GameOverData;
}
export interface ServerGameStartEvent {
}
export interface ServerHessStartPort {
}
export interface Events {
    PlayerBanEvent: PlayerBanEvent;
    PlayerChatEvent: PlayerChatEvent;
    PlayerIpBanEvent: PlayerIpBanEvent;
    PlayerIpUnBanEvent: PlayerIpUnBanEvent;
    PlayerJoinEvent: PlayerJoinEvent;
    PlayerLeaveEvent: PlayerLeaveEvent;
    PlayerUnBanEvent: PlayerUnBanEvent;
    PlayerOperationUnitEvent: PlayerOperationUnitEvent;
    ServerGameOverEvent: ServerGameOverEvent;
    ServerGameStartEvent: ServerGameStartEvent;
    ServerHessStartPort: ServerHessStartPort;
}
export type EventType = keyof Events;
/**
 * 事件管理
 *
 * 用于注册和管理所有事件
 */
export interface EventManage {
    /**
     * 注册事件监听
     * @param type 事件类型
     * @param consumer 事件处理器
     */
    registerListener<T extends EventType>(type: T, consumer: (v: Events[T]) => void): void;
}
