import { b as useRoute, c as useCart } from './server.mjs';
import { computed, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/ohmyfetch/dist/node.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/@vue/shared/index.js';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/unstorage/dist/drivers/fs.mjs';

const _sfc_main = {
  __name: "iphone[name]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const name = computed(() => {
      return route.params.name.replaceAll("-", " ");
    });
    const fullname = computed(() => {
      return `iphone-${route.params.name}`;
    });
    const cart = useCart();
    function isInCart() {
      return !!cart.value.find((ct) => ct.name == fullname.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Title = resolveComponent("Title");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Nuxt 3 - ${ssrInterpolate(unref(name))}`);
                } else {
                  return [
                    createTextVNode("Nuxt 3 - " + toDisplayString(unref(name)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Nuxt 3 - " + toDisplayString(unref(name)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center w-full mt-20"><div class="grid grid-cols-2"><div><img${ssrRenderAttr("src", `/images/iphone${unref(route).params.name}.jpg`)} alt=""></div><div class="text-center"><h1 class="text-3xl">Iphone ${ssrInterpolate(unref(name))}</h1><button class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">`);
      if (isInCart()) {
        _push(`<span>Remove from cart</span>`);
      } else {
        _push(`<span> Buy Now </span>`);
      }
      _push(`</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/iphone/iphone[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=iphone_name_.4521a74b.mjs.map
