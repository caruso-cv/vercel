// ----- Workbox Setup and Precache -----
// (This is your existing Workbox code.)
if (!self.define) {
  let e, i = {};
  const s = (s, r) => (s = new URL(s + ".js", r).href, i[s] || new Promise((i) => {
    if ("document" in self) {
      const e = document.createElement("script");
      e.src = s;
      e.onload = i;
      document.head.appendChild(e);
    } else {
      importScripts(s);
      i();
    }
  }).then(() => {
    let e = i[s];
    if (!e)
      throw new Error(`Module ${s} didn’t register its module`);
    return e;
  }));
  self.define = (r, o) => {
    const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (i[t])
      return;
    let d = {};
    const n = e => s(e, t), c = { module: { uri: t }, exports: d, require: n };
    i[t] = Promise.all(r.map(e => c[e] || n(e))).then(e => (o(...e), d));
  };
}
define(["./workbox-71d0c0b2"], function (e) {
  "use strict";
  self.addEventListener("message", e => {
    if (e.data && e.data.type === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });
  e.precacheAndRoute([
    { url: "vids/battery.mp4", revision: "REPLACE_WITH_REVISION_BATTERY" },
    { url: "vids/storage.mp4", revision: "46ca05eb3381a555da8d1b49cca09c98" },
    { url: "vids/hero-vid.mp4", revision: "REPLACE_WITH_REVISION_HEROVID" }
  ], { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] });
});