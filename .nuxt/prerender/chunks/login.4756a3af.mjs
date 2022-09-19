import { ref, reactive, mergeProps, useSSRContext } from 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/Nspira/documents/nuxt3apps/nuxt3iphone/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const _error = ref(null);
    const form = reactive({
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen w-full" }, _attrs))}><div class="m-auto"><section class="h-screen"><div class="container px-6 py-12 h-full"><div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"><div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="w-full" alt="Phone image"></div><div class="md:w-8/12 lg:w-5/12 lg:ml-20">`);
      if (_error.value) {
        _push(`<div><p class="bg-red-500 text-red-200 text-sm p-3 mb-5">${ssrInterpolate(_error.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div class="mb-6"><input type="text" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address"${ssrRenderAttr("value", form.email)}></div><div class="mb-6"><input type="password" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password"${ssrRenderAttr("value", form.password)}></div><button type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">`);
      if (isLoading.value) {
        _push(`<span>Loading...</span>`);
      } else {
        _push(`<span>Sign in</span>`);
      }
      _push(`</button></form></div></div></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.4756a3af.mjs.map
