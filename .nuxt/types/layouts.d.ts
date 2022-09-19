import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "sidebar"
declare module "C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}