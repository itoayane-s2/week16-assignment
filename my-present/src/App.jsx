import { useState } from "react";

function App() {
  const [budget, setBudget] = useState("");
  const [gender, setGender] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState("");

  const gifts = [
    { name: "ハンドクリーム", minBudget: 1000 },
    { name: "おしゃれなマグカップ", minBudget: 1500 },
    { name: "紅茶・コーヒーセット", minBudget: 1500 },
    { name: "ルームフレグランス", minBudget: 2000 },
    { name: "お菓子のギフトセット", minBudget: 2000 },
    { name: "ミニポーチ", minBudget: 2500 },
    { name: "ハンカチ・タオルセット", minBudget: 2500 },
    { name: "タンブラー", minBudget: 3000 },
    { name: "アクセサリーケース", minBudget: 3000 },
    { name: "ボディケアセット", minBudget: 3500 },
    { name: "ブランドの小物", minBudget: 5000 },
    { name: "レストラン・カフェのギフト券", minBudget: 5000 },
  ];

  const drawGift = () => {
    if (!budget || !gender || !years) {
      alert("すべての項目を入力してください");
      return;
    }

    const filteredGifts = gifts.filter(
      (gift) => gift.minBudget <= Number(budget)
    );

    if (filteredGifts.length === 0) {
      setResult("予算に合うプレゼントが見つかりませんでした");
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredGifts.length);

    setResult(filteredGifts[randomIndex].name);
  };

  return (
    <div className="min-h-screen bg-[#111315] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1b1e21] border border-gray-700 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
            BIRTHDAY GIFT LOTTERY
          </p>

          <h1 className="text-3xl font-semibold">
            Birthday Gift
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            友達への誕生日プレゼントをくじで決めよう
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              予算
            </label>

            <div className="flex items-center bg-[#24272b] rounded-xl px-4">
              <span className="text-gray-500">¥</span>

              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="3000"
                className="w-full bg-transparent px-3 py-3 outline-none text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              友達の性別
            </label>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-[#24272b] px-4 py-3 rounded-xl outline-none text-white"
            >
              <option value="">選択してください</option>
              <option value="female">女性</option>
              <option value="male">男性</option>
              <option value="other">その他・選択しない</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              出会ってからの年月
            </label>

            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="3"
                  className="w-full bg-[#24272b] px-4 py-3 rounded-xl outline-none"
                />
              </div>

              <div className="flex items-center text-gray-400">
                年
              </div>
            </div>
          </div>

          <button
            onClick={drawGift}
            className="w-full bg-white text-black font-medium py-3 rounded-xl
            hover:bg-gray-200 transition mt-3 cursor-pointer"
          >
            くじを引く
          </button>
        </div>

        {result && (
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-xs tracking-widest text-gray-500 mb-3">
              YOUR GIFT
            </p>

            <div className="bg-[#24272b] rounded-2xl p-6">
              <p className="text-xl font-semibold">
                {result}
              </p>
            </div>

            <button
              onClick={drawGift}
              className="mt-4 text-sm text-gray-400 hover:text-white transition cursor-pointer"
            >
              ↻ もう一度引く
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
