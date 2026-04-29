self.addEventListener("install", e => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", e => {});

SAVE IT AS    sw.js
self.addEventListener("install", event => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", event => {
  // basic offline support (optional)
});

