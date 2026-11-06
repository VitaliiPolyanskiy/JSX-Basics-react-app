import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Крок перший: знаходимо елемент на веб-сторінці, куди буде рендеритися застосунок
const root = ReactDOM.createRoot(document.getElementById("app")!);
// Крок другий: рендеринг у кореневий елемент
// Переданий параметр - елемент, який потрібно додати на веб-сторінку

// Елементи React є незмінними (immutable).
// Єдиний спосіб змінити інтерфейс, визначений в елементі,
// це створити новий елемент і передати його у функцію ReactDOM.render()

function tick() {         
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
setInterval(tick, 1000);