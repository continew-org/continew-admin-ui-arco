/// <reference types="vite/client" />
import type download from '@/components/crud/index';
import type useDict from '@/utils/dict';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

export {};
declare module 'vue' {
  interface ComponentCustomProperties {
    // 调整成你要使用到的属性，在这里进行注册
    download: typeof download;
    useDict: typeof useDict;
  }
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

declare module '@kangc/v-md-editor';
declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor/lib/theme/github.js';
declare module '@kangc/v-md-editor/lib/plugins/emoji/index';
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index';
declare module '@kangc/v-md-editor/lib/plugins/todo-list/index';
declare module 'highlight.js';
declare module 'highlight.js/lib/languages/json';

// for type re-export
declare global {
  // @ts-ignore
  export type {
    Component,
    ComponentPublicInstance,
    ComponentInternalInstance,
    ComputedRef,
    InjectionKey,
    PropType,
    Ref,
    VNode,
  } from 'vue';
}
