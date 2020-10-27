// ライブラリをインポートする宣言。JSXを使う際にインポート必要
import * as React from 'react'       
import { render } from 'react-dom'   

// メインという変数にReactのビューを書いている。これがJSX。
const Main = (<h1>Markdown Editor</h1>)

// ReactとHTMLファイルを繋ぐ処理
// appというIDを持つHTML内の要素に対してMainという変数の内容を紐づけてますよー
render(Main, document.getElementById('app'))