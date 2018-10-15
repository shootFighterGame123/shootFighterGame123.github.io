"use strict";

import Global from "./Global";
import Write from "./Write";

/**
 * класс для отображения содержимого игры
 */
export default class Render {
    /**
     * метод для получения фундаментальных объектов игрового уровня
     */
    initFields() {
        const sceneObjectsContainer = Global.get().sceneCreator.getElements();
        this.renderer = sceneObjectsContainer.renderer;
        this.scene = sceneObjectsContainer.scene;
        this.camera = sceneObjectsContainer.camera;
    }

    /**
     * метод для вывода содержимого уровня на экран
     */
    render() {
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * метож для получения камеры
     * @returns {*}
     */
    getCamera() {
        return this.camera;
    }

    /**
     * конструктор
     */
    constructor() {
        // выводим сообщение об успешном создании класса
        Write.write("Render created");
        // вызываем методы класса
        this.initFields();
        this.render();
    }
}
