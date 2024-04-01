import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useDictStore from './modules/dict';
import useTabBarStore from './modules/tab-bar';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export { useAppStore, useUserStore, useDictStore, useTabBarStore };
export default pinia;
