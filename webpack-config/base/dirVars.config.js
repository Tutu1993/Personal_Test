const path = require('path')
const moduleExports = {}

moduleExports.staticRootDir = path.resolve(__dirname, '../../') // 根目录

moduleExports.srcDir = path.resolve(moduleExports.staticRootDir, './src') // src 目录

moduleExports.appDir = path.resolve(moduleExports.srcDir, './app') // app 目录

moduleExports.resourceDir = path.resolve(moduleExports.srcDir, './resource') // resource 目录

moduleExports.actionDir = path.resolve(moduleExports.resourceDir, './action') // action 目录

moduleExports.componentDir = path.resolve(moduleExports.resourceDir, './component') // component 目录

moduleExports.cssDir = path.resolve(moduleExports.resourceDir, './css') // css 目录

moduleExports.imgsDir = path.resolve(moduleExports.resourceDir, './imgs') // imgs 目录

moduleExports.jsDir = path.resolve(moduleExports.resourceDir, './js') // js 目录

moduleExports.reducerDir = path.resolve(moduleExports.resourceDir, './reducer') // reducer 目录

moduleExports.vendorDir = path.resolve(moduleExports.resourceDir, './vendor') // vendor 目录

moduleExports.distDir = path.resolve(moduleExports.staticRootDir, './dist') // dist 目录

module.exports = moduleExports
