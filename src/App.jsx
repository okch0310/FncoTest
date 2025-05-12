import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  return (
    <div className="light">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="text-2xl text-green-600 font-bold underline">
        에프앤코 밀키웨이 테스트
      </p>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          버튼 보이니?
        </Button>
        <Toaster /> {/* ✅ 알림 표시기 */}
        <Button onClick={() => toast("토스트 알림입니다!")}>
          토스트 띄우기
        </Button>
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm mt-4">
          <h3 className="text-lg font-medium mb-2">체크박스 예제</h3>

          <div className="flex items-center space-x-2">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={checkbox1}
                onChange={(e) => setCheckbox1(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <label htmlFor="terms" className="text-sm font-medium">
              기본 체크박스
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="checkbox2"
                checked={checkbox2}
                onChange={(e) => setCheckbox2(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <label htmlFor="checkbox2" className="text-sm font-medium">
              두 번째 체크박스
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="checkbox3"
                checked={checkbox3}
                onChange={(e) => setCheckbox3(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <label htmlFor="checkbox3" className="text-sm font-medium">
              세 번째 체크박스
            </label>
          </div>

          <div className="text-sm text-gray-600 mt-2">
            체크박스 상태: {checkbox1 ? "체크됨 ✅" : "체크 안 됨 ⛔️"}
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Drawer>
        <DrawerTrigger className="bg-blue-500 text-white hover:bg-blue-600">
          Open
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button
                variant="outline"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;
