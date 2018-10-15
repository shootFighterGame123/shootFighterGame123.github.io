"use strict";

// флаг разрешения вывода в консоль
const ALLOW_WRITE = true;

/**
 * класс для вывода сообщения в консоль
 */
export default class Write {
    /**
     * метод для вывода сообщения в консоль
     * @param messageContent
     */
    static write(messageContent) {
        // если разрешено печатать в консоль
        if(ALLOW_WRITE === true) {
            // выводим сообщение на экран
            console.log(messageContent);
        }
    }
}
