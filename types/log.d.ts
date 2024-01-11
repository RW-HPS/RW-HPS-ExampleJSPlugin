export interface LogObject {
    set(log: string): void;
    fatal(e: unknown): void;
    fatal(tag: unknown, e: unknown): void;
    error(e: unknown): void;
    error(tag: unknown, e: unknown): void;
    warn(e: unknown): void;
    warn(tag: unknown, e: unknown): void;
    info(e: unknown): void;
    info(tag: unknown, e: unknown): void;
    debug(e: unknown): void;
    debug(tag: unknown, e: unknown): void;
    track(e: unknown): void;
    track(tag: unknown, e: unknown): void;
    all(e: unknown): void;
    all(tag: unknown, e: unknown): void;
    clog(e: unknown): void;
    clog(tag: unknown, e: unknown): void;
}
declare global {
    interface AllJavaClasses {
        'net.rwhps.server.util.log.Log': {
            staticObject: {
                set(log: string): void;
                fatal(e: unknown): void;
                fatal(tag: unknown, e: unknown): void;
                error(e: unknown): void;
                error(tag: unknown, e: unknown): void;
                warn(e: unknown): void;
                warn(tag: unknown, e: unknown): void;
                info(e: unknown): void;
                info(tag: unknown, e: unknown): void;
                debug(e: unknown): void;
                debug(tag: unknown, e: unknown): void;
                track(e: unknown): void;
                track(tag: unknown, e: unknown): void;
                all(e: unknown): void;
                all(tag: unknown, e: unknown): void;
                clog(e: unknown): void;
                clog(tag: unknown, e: unknown): void;
            };
        };
    }
}
export declare const Log: LogObject;
