import { createPlugin, Log } from 'jslib'

export default createPlugin({
    init() {
        Log.clog('Hello World!')
    }
})