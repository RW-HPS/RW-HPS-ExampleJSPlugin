import { PlayerHess } from './hess';
export type ServerStatus = 'InitialConnection' | 'CertifiedEnd';
export interface AbstractNetConnectServer {
    get permissionStatus(): ServerStatus;
    get supportedversionBeta(): boolean;
    get supportedversionGame(): string;
    get supportedVersionInt(): number;
    get player(): PlayerHess;
    sendSystemMessage(msg: string): void;
    sendChatMessage(msg: string, sendBy: string, team: number): void;
    sendServerInfo(utilData: boolean): void;
    sendSurrender(): void;
    sendKick(reason: string): void;
    sendPing(): void;
    sendStartGame(): void;
    sendErrorPasswd(): void;
    gameSummon(unit: string, x: number, y: number): void;
}
