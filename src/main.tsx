import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Шаг первый: требуется установить элемент веб-страницы, 
// в который будет производиться рендеринг приложения React
const root = ReactDOM.createRoot(document.getElementById("app")!);
// Шаг второй: рендеринг в корневой элемент
// передаваемый параметр - элемент, который надо добавить на веб-страницу

// Элементы React являются неизменяемыми (immutable).
// Единственный способ изменить интерфейс, определенный в элементе, 
// это создать новый элемент и передать его в функцию ReactDOM.render()

function tick() {         
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
setInterval(tick, 1000);