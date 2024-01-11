export interface StrCons {
    (str: string): void;
    (str: string, ...objs: unknown[]): void;
}
