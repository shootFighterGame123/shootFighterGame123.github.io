"use strict";

import Write from "./Write";

/**
 * класс для контроля взаимодействия с клавиатурой
 */
export default class KeysControl {
    // конструктор
    constructor() {
        // выводим сообщение об успешном создании класса
        Write.write("KeysControl created");
        // вызываем методы класса
        this.initKeysObj();
        this.addKeyDownEvent();
        this.addKeyUpEvent();
    }

    /**
     * задаём объект с клавишами
     */
    initKeysObj() {
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false,
            q: false,
            e: false,
            r: false,
        }
    }

    /**
     * получаем объект с клавишами
     * @returns {*}
     */
    getKeys() {
        return this.keys;
    }

    /**
     * добавляем событие отпускания клавиши
     */
    addKeyUpEvent() {
        window.onkeyup = (e) => {
            const n = parseInt(e.keyCode.toString());
            switch (n) {
                case 87: this.keys.w = false; break;
                case 65: this.keys.a = false; break;
                case 83: this.keys.s = false; break;
                case 68: this.keys.d = false; break;
                case 81: this.keys.q = false; break;
                case 69: this.keys.e = false; break;
                case 82: this.keys.r = false; break;
            }
        }
    }

    /**
     * добавляем событие нажатия на клавишу
     */
    addKeyDownEvent() {
        window.onkeydown = (e) => {
            const n = parseInt(e.keyCode.toString());
            switch (n) {
                case 87: this.keys.w = true; break;
                case 65: this.keys.a = true; break;
                case 83: this.keys.s = true; break;
                case 68: this.keys.d = true; break;
                case 81: this.keys.q = true; break;
                case 69: this.keys.e = true; break;
                case 82: this.keys.r = true; break;
            }
        }
    }
}
