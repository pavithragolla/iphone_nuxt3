import { u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/vue/server-renderer/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "iphones"
    });
    const iphones = ["iphone12", "iphone12-pro", "iphone13", "iphone13-pro"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-4 gap-4 mt-10" }, _attrs))}><!--[-->`);
      ssrRenderList(iphones, (iphone) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: iphone,
          to: `iphone/${iphone}`,
          class: "shadow-lg border rounded-lg text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1${_scopeId}>${ssrInterpolate(iphone)}</h1><img width="200"${ssrRenderAttr("src", `/images/${iphone}.jpg`)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("h1", null, toDisplayString(iphone), 1),
                createVNode("img", {
                  width: "200",
                  src: `/images/${iphone}.jpg`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/iphone/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.f4d2acb7.mjs.map
