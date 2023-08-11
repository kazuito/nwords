import React, { useEffect } from "react";
import { useState } from "react";
import CountText from "./components/CountText";
import { IconClipboardCheck, IconX } from "@tabler/icons-react";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState("");
  const [charactersCount, setCharactersCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);

  const updateCount = (text: string) => {
    setValue(text);
    setCharactersCount(text.replace(/(\s|\n)+/g, "").length);
    setWordsCount(
      text.length > 0
        ? text
            .replace(/^(\s|\n)+|(\s|\n)+$/g, "")
            .replace(/(\s|\n)+/g, " ")
            .split(/\s|\n/).length
        : 0
    );
  };

  const onPaste = async () => {
    let text = await navigator.clipboard.readText();
    updateCount(text);
  };

  const onClear = () => {
    setValue("");
  };

  useEffect(() => {
    updateCount(value);
  }, [value]);

  return (
    <main className="bg-slate-100 min-h-[100svh]">
      <div className="p-3 w-[min(860px,100%)] mx-auto">
        <div className="w-full text-center text-3xl font-semibold text-slate-600 pt-12 pb-4">
          <a href=".">
            {wordsCount > 0 ? (wordsCount === 1 ? "A" : wordsCount) : "N"}{" "}
            {wordsCount === 1 ? "Word" : "Words"}
          </a>
        </div>
        <div className="flex gap-2 justify-end py-3">
          <Button
            text="Paste"
            icon={<IconClipboardCheck size={20} />}
            onClick={onPaste}
          />
          <Button
            outlined
            variant="danger"
            icon={<IconX size={20} />}
            onClick={onClear}
          />
        </div>
        <textarea
          className="w-full h-[42svh] min-h-[240px] p-3 font-mono shadow-xl rounded-xl outline-none"
          value={value}
          onInput={(e) => updateCount((e.target as HTMLInputElement).value)}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        ></textarea>
        <div className="flex gap-2 justify-end">
          <CountText
            text={wordsCount.toString()}
            suffix={wordsCount <= 1 ? "word" : "words"}
          />
          <CountText
            text={charactersCount.toString()}
            suffix={charactersCount <= 1 ? "character" : "characters"}
          />
        </div>
      </div>
      <div className="text-center text-sm text-slate-300 absolute bottom-0 p-3 w-full">
        2023 ©{" "}
        <a href="https://x.com/222bit" target="_blank">
          Zarigani
        </a>
      </div>
    </main>
  );
}

export default App;
