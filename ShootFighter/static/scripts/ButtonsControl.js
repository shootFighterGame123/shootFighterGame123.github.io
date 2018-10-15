"use strict";

import Write from "./Write";
import Global from "./Global";

/**
 * класс для управления нажатий на кнопки
 */
export default class ButtonsControl {
    /**
     * конструктор
     */
    constructor() {
        // выводим сообщение об успешном создании класса
        Write.write("ButtonsControl created");
        // добавляем событие на кнопку смены вида камеры
        ButtonsControl.changeCameraBtn();
    }

    /**
     * метод для добавления события на кнопку
     * @param buttonId
     * @param functionParam
     */
    static addEventToButton(buttonId, functionParam) {
        const btn = document.getElementById(buttonId.toString());
        btn.onclick = function() {
            functionParam();
        }
    }

    /**
     * метод для изменения вида камеры
     */
    static changeCameraBtn() {
        ButtonsControl.addEventToButton("changeCameraBtn", function() {
            Global.get().gameControl.cameraFlag = !Global.get().gameControl.cameraFlag;
        });
    }
}
