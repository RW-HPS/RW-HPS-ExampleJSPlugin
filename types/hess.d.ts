import { AbstractNetConnectServer } from './server';
export declare const javaObj: unique symbol;
export interface PlayerHess {
    [javaObj]: {
        getClass: unknown;
    };
    get con(): AbstractNetConnectServer;
    get isAdmin(): boolean;
    get team(): number;
    set team(v: number);
    sendSystemMessage(text: string): void;
    sendMessage(player: PlayerHess, text: string): void;
    sendPopUps(msg: string, run: (v: string) => void): void;
    kickPlayer(text: string, time?: number): void;
    getinput(input: string, ...params: unknown[]): string;
}
export interface HessModuleManage {
    get hps(): AbstractGameModule;
}
export interface AbstractGameModule {
    get room(): ServerRoom;
}
export interface ServerRoom {
    get roomID(): string;
    set roomID(v: string);
    get isStartGame(): boolean;
    set isStartGame(v: boolean);
    get isAfk(): boolean;
    set isAfk(v: boolean);
    get mapName(): string;
    set mapName(v: string);
    get replayFileName(): string;
    set replayFileName(v: string);
    get closeServer(): () => void;
    get startServer(): () => void;
}
export interface PlayerHessManage {
    forEachPlayerInAll(callback: (player: PlayerHess) => void): void;
    forEachPlayerInGroup(callback: (player: PlayerHess) => void): void;
    findPlayer(findIn: string): PlayerHess | undefined;
}
export declare const HessModuleManage: HessModuleManage;
