"use strict";

import Write from "./Write";

/**
 * класс для инициализации игрового мира (сцены)
 */
export default class SceneCreator {
    /**
     * метод для задания размера сцены
     */
    setSize() {
        this.ww = 800;
        this.hh = 600;
    }

    /**
     * метод для создания новой сцены
     */
    createScene() {
        this.scene = new THREE.Scene();
    }

    /**
     * метод для создания камеры
     */
    createCamera() {
        const ww = this.ww;
        const hh = this.hh;
        this.camera = new THREE.PerspectiveCamera(45, ww / hh, 0.1, 1000);
    }

    /**
     * метод для создания объекта, отвечающего за отрисовку игрового мира на экран
     */
    createRender() {
        this.renderer = new THREE.WebGLRenderer();
        const color = "#2b30ff";
        this.renderer.setClearColor(color);
        const ww = this.ww;
        const hh = this.hh;
        this.renderer.setSize(ww, hh);
    }

    /**
     * метод для соединения страницы и объекта, отвечающего за отображение
     */
    connectRenderPage() {
        const element = this.renderer.domElement;
        document.getElementById("gameBox").append(element);
    }

    /**
     * метод для получения фундаментальных объектов игрового уровня
     * @returns {{renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera}}
     */
    getElements() {
        const namespace = this;
        return {
            renderer: namespace.renderer,
            scene: namespace.scene,
            camera: namespace.camera,
        };
    }

    /**
     * конструктор
     */
    constructor() {
        // выводим сообщение об успешном создании класса
        Write.write("SceneCreator created");
        // запускаем методы класса
        this.setSize();
        this.createScene();
        this.createCamera();
        this.createRender();
        this.connectRenderPage();
    }
}