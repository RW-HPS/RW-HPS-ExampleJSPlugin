import { CoreCommandHandler, ServerClientCommandHandler, ServerCommandHandler } from './command';
import { EventManage } from './event';
/** 插件选项 */
export type CreatePluginOptions = {
    /** 最先执行 可以进行Plugin的数据读取 */
    onEnable?: () => void;
    /** 创建所有插件并注册命令后调用 */
    init?: () => void;
    /** (注意 将会强制继承) Server退出时执行 可以进行Plugin的数据保存 */
    onDisable?: () => void;
    /**
     * 注册要在服务器端使用的Core命令，例如从控制台
     * 这里注册的命令无论启动什么协议 都会存在
     */
    registerCoreCommands?: (handler: CoreCommandHandler) => void;
    /**
     * 注册要在服务器端使用的Server命令，例如从控制台-Server
     * 这里注册的命令只有启动Server协议 才会存在
     */
    registerServerCommands?: (handler: ServerCommandHandler) => void;
    /**
     * 注册要在客户端使用的任何命令，例如来自游戏内玩家 -3
     *
     * ## 使用
     * 这里不会多次调用
     *
     * 默认只会调用服务器主 Hess 的 Command
     */
    registerServerClientCommands?: (handler: ServerClientCommandHandler) => void;
    /**
     * 注册无头端事件
     *
     * ## 使用
     * 这里不会多次调用
     *
     * 因为 `RW-HPS` 虽然支持多个 `Hess` 端运行, 但是, 由于多个端将会让Event支持多端, 但我没有精力, 所以只会在 `Main` 端上执行 Event
     *
     * 同样的, 如果需要多个 `Hess` 端注入, 您不应该使用这个方法, 请使用
     * ```
     * object: EventListener {
     *     @EventListenerHandler
     *     fun registerServerHessLoadEvent(serverHessLoadEvent: ServerHessLoadEvent) {
     *         // 需要 Event 支持同时多个Hess运行, 不建议多个 Hess 共用一个Event实例
     *         serverHessLoadEvent.eventManage.registerListener(您的Event())
     *     }
     * }
     * ```
     *
     * 在不同的 `Hess` 端, Event是不共用的, 每一个 `Hess` 端, 就有一个新的 Event 管理器
     *
     * @param eventManage Hess事件管理器
     */
    registerEvents?: (eventManage: EventManage) => void;
};
export declare function createPlugin(options: CreatePluginOptions): unknown;
