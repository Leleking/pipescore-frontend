import authStore from './authStore'
import routerStore from './routerStore'
import appStore from './appStore'
export default {
    authStore,
    routerStore,
    appStore
}
/* import _ from 'lodash'
const requireModule = require.context('.',false,/\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
if (fileName === './index.js') return 

const moduleName = _.camelCase(
    fileName.replace(/(\.\/|\.js)/g, '')
)
modules[moduleName] = requireModule(fileName)
})

export default modules  */