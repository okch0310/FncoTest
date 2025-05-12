const { app, BrowserWindow } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
      devTools: true, // 개발자 도구 활성화
    },
  });

  if (isDev) {
    // 개발 서버에 연결
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools(); // 개발 모드에서 개발자 도구 자동 실행
  } else {
    // 배포용: vite build 결과물 로드
    const indexPath = path.join(__dirname, "dist", "index.html");
    console.log("Loading index.html from:", indexPath);

    // 파일 존재 여부 확인
    const fs = require("fs");
    if (fs.existsSync(indexPath)) {
      console.log("index.html exists");
      win.loadFile(indexPath).catch((err) => {
        console.error("Failed to load index.html:", err);
        // 대체 로딩 방식 시도
        win.loadURL(`file://${indexPath}`);
      });
    } else {
      console.error("index.html not found at:", indexPath);
    }
  }

  // 개발자 도구 단축키 설정
  win.webContents.on("before-input-event", (event, input) => {
    if (input.key === "F12") {
      win.webContents.toggleDevTools();
      event.preventDefault();
    }
  });

  win.webContents.on("did-fail-load", (event, errorCode, errorDescription) => {
    console.error("Failed to load:", errorCode, errorDescription);
  });

  // 콘솔 로그 출력
  win.webContents.on(
    "console-message",
    (event, level, message, line, sourceId) => {
      console.log("Renderer Console:", message);
    }
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
