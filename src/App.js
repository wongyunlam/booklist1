import React from 'react';
import './App.css';
import Books from './components/Books.jsx';

export default function App() {
    return (
        <section className="app">
            <h1 className="title">
                僕の心のヤバイやつ（僕ヤバ）｜アニメ声優・キャラクター・登場人物
            </h1>
            <Books />
        </section>
    );
}
