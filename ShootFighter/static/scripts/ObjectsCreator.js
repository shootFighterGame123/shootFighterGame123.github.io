"use strict";

import Global from "./Global";
import Write from "./Write";

// флаг разрешения создания сетки
const ALLOW_GRID = true;

/**
 * класс для создания игровых объектов на сцене
 */
export default class ObjectsCreator {
    /**
     * метод для получения сцены
     */
    initScene() {
        this.scene = Global.get().sceneCreator.getElements().scene;
    }

    /**
     * метод для создания конуса
     * @returns {$e.params.Mesh|fa}
     */
    static createCone() {
        const radius = 1;
        const height = 4.2;
        const sideNumber = 10;
        const geometry = new THREE.ConeBufferGeometry(radius, height, sideNumber);
        const material = new THREE.MeshLambertMaterial({color: "#6bff22"});
        let cone = new THREE.Mesh(geometry, material);
        cone.position.x = 0;
        cone.position.y = 3;
        cone.position.z = 0;
        cone.rotation.x = Math.PI / 2 * (-1);
        return cone;
    }

    /**
     * метод для создания главного героя
     */
    createHero() {
        this.hero = ObjectsCreator.createCone();
        this.scene.add(this.hero);
    }

    /**
     * метод для получения главного героя
     * @returns {*}
     */
    getHero() {
        return this.hero;
    }

    /**
     * метод для создания платформы, выполняющей функцию пола
     */
    createGround() {
        const groundGeometry = new THREE.CubeGeometry(100, 0.8, 100);
        const groundMaterial = new THREE.MeshLambertMaterial({color: "#adccaa"});
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.position.x = 0;
        ground.position.y = -0.5;
        ground.position.z = 0;
        this.scene.add(ground);
    }

    /**
     * метод для создания куба
     * @param xx
     * @param yy
     * @param zz
     * @param color
     * @param size
     * @returns {THREE.Mesh}
     */
    static createCube(xx, yy, zz, color, size) {
        const cubeGeometry = new THREE.CubeGeometry(size, size, size);
        const cubeMaterial = new THREE.MeshLambertMaterial({color: color});
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = parseFloat(xx);
        cube.position.y = parseFloat(yy);
        cube.position.z = parseFloat(zz);
        return cube;
    }

    /**
     * метод для создании пули (сферы)
     * @param xx
     * @param zz
     * @returns {THREE.Mesh}
     */
    createBullet(xx, zz) {
        const sphereGeometry = new THREE.SphereGeometry(1, 25, 25);
        const sphereMaterial = new THREE.MeshLambertMaterial({color: "#22ddff"});
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = parseFloat(xx);
        sphere.position.y = 2.0;
        sphere.position.z = parseFloat(zz);
        this.scene.add(sphere);
        return sphere;
    }

    /**
     * метод для создания препятствия (стены) на сцене
     * @param kvX
     * @param kvZ
     * @returns {THREE.Group}
     */
    createWall(kvX, kvZ) {
        const cubeDown = ObjectsCreator.createCube(0, 2.5, 0, "#ff9459", 5);
        const cubeUp = ObjectsCreator.createCube(0, 6.5, 0, "#ffb73a", 3);
        const group = new THREE.Group();
        group.add(cubeDown);
        group.add(cubeUp);
        group.position.x = kvX * 5 - 50 + 2.5;
        group.position.y = 0;
        group.position.z = kvZ * 5 - 50 + 2.5;
        this.scene.add(group);
        return group;
    }

    /**
     * метод для создания сетки
     */
    createGrid() {
        if(ALLOW_GRID === true) {
            const gridSize = 100;
            const divisions = 20;
            const color_1 = "#2069ff";
            const color_2 = "#c608ff";
            let grid = new THREE.GridHelper(gridSize, divisions, color_1, color_2);
            this.scene.add(grid);
        }
    }

    /**
     * метод для создания источника света над героем
     */
    createLight() {
        const pointLight = new THREE.PointLight( "#ffffff", 1);
        this.scene.add(pointLight);
        this.light = pointLight;
    }

    /**
     * метод для создания главного источника света над уровнем
     */
    createSun() {
        const sun = new THREE.PointLight( "#ffffff", 0.7);
        sun.position.x = 0;
        sun.position.y = 150;
        sun.position.z = 0;
        this.scene.add(sun);
    }

    /**
     * метод для получения источника света
     * @returns {THREE.PointLight}
     */
    getLight() {
        return this.light;
    }

    /**
     * метод для создания врага (сферы)
     * @param xx
     * @param zz
     * @returns {$e.params.Mesh|fa}
     */
    createEnemy(xx, zz) {
        let sphereGeometry = new THREE.SphereGeometry(2.5, 20, 20);
        let sphereMaterial = new THREE.MeshBasicMaterial({color: "#1e1e52", wireframe: true});
        let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = parseFloat(xx);
        sphere.position.y = 2.5;
        sphere.position.z = parseFloat(zz);
        this.scene.add(sphere);
        return sphere;
    }

    /**
     * конструктор
     */
    constructor() {
        // выводим сообщение об успешном создании класса
        Write.write("ObjectsCreator created");
        // вызываем методы класса
        this.initScene();
        this.createGrid();
        this.createLight();
        this.createGround();
        this.createHero();
        this.createSun();
    }
}
