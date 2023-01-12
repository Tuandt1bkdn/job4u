import { useState } from "react";

function Home() {
  const [value, setValue] = useState("");
  return (
    <div class="font-bold text-red-600 bg-white h-screen">
      Home Pages
      <div class="w-52 h-20 bg-yellow-200">
        <input
          type="text"
          placeholder="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          class="text-black text-[20px] font-light font-mono w-20 h-15 border-solid border-red-200 border-spacing-1"
        />
      </div>
    </div>
  );
}

export default Home;
