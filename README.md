# RW-HPS-Example-JSPlugin

RW-HPS JS插件示例。

## 预先准备

你需要事先安装[Node.js](https://nodejs.org)以及[PNPM](https://pnpm.io)

然后在项目根目录运行：

```sh
pnpm i
```

如果你没有安装pnpm，那么可以直接运行

```sh
npm install
```

## 打包

你只需要将`index.js`、`plugin.json`直接压缩到一个压缩文件中即可。

基于 [JSLib](https://github.com/RW-HPS/RW-HPS-JSLib)，你有可能需要在RW-HPS中预装这个依赖。