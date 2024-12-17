import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Appコンポーネントをインポート

// テストケース
test('renders the App component without crashing', () => {
  // Appコンポーネントをレンダリングする
  render(<App />);

  // テキストが画面に表示されているか確認する
  const linkElement = screen.getByText(/hello world/i); // "Hello World" にマッチするテキストを検索
  expect(linkElement).toBeInTheDocument(); // 要素がDOMに存在することを確認
});
