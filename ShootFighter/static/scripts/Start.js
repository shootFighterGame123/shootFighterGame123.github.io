"use strict";

import Write from "./Write";
import SceneCreator from "./SceneCreator";
import Global from "./Global";
import Render from "./Render";
import ObjectsCreator from "./ObjectsCreator";
import LevelCreate from "./LevelCreate";
import GameControl from "./GameControl";
import KeysControl from "./KeysControl";
import ButtonsControl from "./ButtonsControl";

/**
 * класс для запуска приложения
 */
class Start {
    /**
     * конструктор
     */
    constructor() {
        // вывод сообщения об успешном создании класса
        Write.write("Start created");
        // запускаем метод для создания основных объектов приложения
        Start.initObjects();
    }

    /**
     * метод для запуска основных объектов приложения
     */
    static initObjects() {
        // сохраняем в шину основные объекты приложения
        // шина позволяет взаимодействовать объектам друг с другом
        Global.get().sceneCreator = new SceneCreator();
        Global.get().render = new Render();
        Global.get().objectsCreator = new ObjectsCreator();
        Global.get().levelCreate = new LevelCreate();
        Global.get().keysControl = new KeysControl();
        Global.get().gameControl = new GameControl();
        Global.get().buttonsControl = new ButtonsControl();
    }
}

/**
 * при загрузке окна
 */
window.onload = function() {
    // запускаем приложение
    const start = new Start();
};
