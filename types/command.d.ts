import { StrCons } from './func';
import { Seq } from './struct';
export interface CommandParam {
    readonly name: string;
    readonly optional: boolean;
    readonly variadic: boolean;
}
export interface Command {
    readonly text: string;
    readonly paramText: string;
    readonly description: string;
    readonly params: ArrayLike<CommandParam>;
}
export type CommandHandler<T> = {
    removeCommand(text: string): void;
    register(text: string, description: string, runner: (args: string[], parameter: T) => void): Command;
    registerWithParams(text: string, params: string, description: string, runner: (args: string[], parameter: T) => void): Command;
    getCommandList(): Seq<Command>;
};
export type CoreCommandHandler = CommandHandler<StrCons>;
export type ServerCommandHandler = CommandHandler<StrCons>;
export type ServerClientCommandHandler = CommandHandler<StrCons>;
