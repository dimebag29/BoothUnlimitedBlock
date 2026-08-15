# 発端
BOOTHのショップブロックChromeアドオンBetterBoothが252件以上登録できなかった。

「Filterの保存方法を変更」の「変更する」ボタンを押しても無限にダイアログが出るだけで保存方法を変更できない。

BOOTH公式から「ショップ非表示機能」がリリースされ、アドオンの更新もなさそうなので、BOOTHのショップを無制限にブロックできるようにアドオンを改造メモ。


# インストール
① https://github.com/TM0428/BetterBooth/releases/tag/0.6.7 からxpiファイルをDL

②拡張子をzipに変更し、解凍

③chrome_storage.jsを上書き

④Chromeの拡張機能画面でデベロッパーモードをONにし、「パッケージ化されていない拡張機能を読み込む」ボタンでフォルダからインストール

⑤基本的な使い方はBetterBoothと同じ




# ブロックリストをまとめて追加する

1. Chromeの拡張機能画面からBetterBoothの詳細ページを開き、拡張機能のオプションを開く(白とピンクが基調のページが開く)

2. F12を押し、Consoleタブを開く

3. allow pastingと一文字ずつ手入力しEnterを押す (コピペではダメ。一回入力したら再入力は不要)

4. 以下のようなブロックリストのコードを作成し貼り付けEnterを押す

```python
const newFilters = [
    "https://sample1.booth.pm/",
    "https://sample2.booth.pm/",
    "https://sample3.booth.pm/"
];

chrome.storage.local.get("filters", ({ filters = [] }) => {
    const merged = [...new Set([...filters, ...newFilters])];
    chrome.storage.local.set({ filters: merged }, () => {
        console.log(`追加完了: ${merged.length}件`);
    });
});
```


# ブロックリストを出力する

1. Chromeの拡張機能画面からBetterBoothの詳細ページを開き、拡張機能のオプションを開く(白とピンクが基調のページが開く)

2. F12を押し、Consoleタブを開く

3. allow pastingと一文字ずつ手入力しEnterを押す (コピペではダメ。一回入力したら再入力は不要)

4. 以下のコードを貼り付けEnterを押す

```python
chrome.storage.local.get("filters", ({ filters = [] }) => {
    console.log(`フィルター数: ${filters.length}`);

    if (filters.length === 0) {
        console.log("フィルターは登録されていません。");
        return;
    }

    console.log(filters.join("\n"));
});
```





