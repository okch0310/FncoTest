const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // 여기에 필요한 API를 추가할 수 있습니다
});
