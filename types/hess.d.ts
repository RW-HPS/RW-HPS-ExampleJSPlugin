import { AbstractNetConnectServer } from './server';
export declare const javaObj: unique symbol;
export interface PlayerHess {
    [javaObj]: {
        getClass: unknown;
    };
    get con(): AbstractNetConnectServer;
    get isAdmin(): boolean;
    sendSystemMessage(text: string): void;
    sendMessage(player: {
        getClass: unknown;
    }, text: string): void;
    sendPopUps(msg: string, run: (v: string) => void): void;
    kickPlayer(text: string, time?: number): void;
    getinput(input: string, ...params: unknown[]): string;
}
