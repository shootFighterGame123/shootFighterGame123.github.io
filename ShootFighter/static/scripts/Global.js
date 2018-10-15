"use strict";

import Write from "./Write";

// глобальный объект
const GLOBAL = {};

Write.write("Global created");

/**
 * класс - шина для взаимодействия объектов друг с другом
 */
export default class Global {
    /**
     * метод для получения глобального объекта
     */
    static get() {
        return GLOBAL;
    }
}
