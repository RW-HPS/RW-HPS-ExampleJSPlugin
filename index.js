import { createPlugin, Log } from "rw-hps-jslib";

export default createPlugin({
  init() {
    // OK
    Log.clog("Hello World!");
  },
});
