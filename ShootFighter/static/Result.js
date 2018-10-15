/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


// флаг разрешения вывода в консоль
const ALLOW_WRITE = true;

/**
 * класс для вывода сообщения в консоль
 */
class Write {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Write;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Write__ = __webpack_require__(0);




// глобальный объект
const GLOBAL = {};

__WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("Global created");

/**
 * класс - шина для взаимодействия объектов друг с другом
 */
class Global {
    /**
     * метод для получения глобального объекта
     */
    static get() {
        return GLOBAL;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Global;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Write__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneCreator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Global__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Render__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ObjectsCreator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LevelCreate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GameControl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__KeysControl__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ButtonsControl__ = __webpack_require__(9);












/**
 * класс для запуска приложения
 */
class Start {
    /**
     * конструктор
     */
    constructor() {
        // вывод сообщения об успешном создании класса
        __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("Start created");
        // запускаем метод для создания основных объектов приложения
        Start.initObjects();
    }

    /**
     * метод для запуска основных объектов приложения
     */
    static initObjects() {
        // сохраняем в шину основные объекты приложения
        // шина позволяет взаимодействовать объектам друг с другом
        __WEBPACK_IMPORTED_MODULE_2__Global__["a" /* default */].get().sceneCreator = new __WEBPACK_IMPORTED_MODULE_1__SceneCreator__["a" /* default */]();
        __WEBPACK_IMPORTED_MODULE_2__Global__["a" /* default */].get().render = new __WEBPACK_IMPORTED_MODULE_3__Render__["a" /* default */]();
        __WEBPACK_IMPORTED_MODULE_2__Global__["a" /* default */].get().objectsCreator = new __WEBPACK_IMPORTED_MODULE_4__ObjectsCreator__["a" /* default */]();
        __WEBPACK_IMPORTED_MODULE_2__Global__["a" /* default */].get().levelCreate = new __WEBPACK_IMPORTED_MODULE_5__LevelCreate__["a" /* default */]();
        __WEBPACK_IMPORTED_MODULE_2__Global__["a" /* default */].get().keysControl = new __WEBPACK_IMPORTED_MODULE_7__KeysControl__["a" /* default */]();
        __WEBPACK_IMPORTED_MODULE_2__Global__["a" /* default */].get().gameControl = new __WEBPACK_IMPORTED_MODULE_6__GameControl__["a" /* default */]();
        __WEBPACK_IMPORTED_MODULE_2__Global__["a" /* default */].get().buttonsControl = new __WEBPACK_IMPORTED_MODULE_8__ButtonsControl__["a" /* default */]();
    }
}

/**
 * при загрузке окна
 */
window.onload = function() {
    // запускаем приложение
    const start = new Start();
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Write__ = __webpack_require__(0);




/**
 * класс для инициализации игрового мира (сцены)
 */
class SceneCreator {
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
        __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("SceneCreator created");
        // запускаем методы класса
        this.setSize();
        this.createScene();
        this.createCamera();
        this.createRender();
        this.connectRenderPage();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SceneCreator;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Global__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Write__ = __webpack_require__(0);





/**
 * класс для отображения содержимого игры
 */
class Render {
    /**
     * метод для получения фундаментальных объектов игрового уровня
     */
    initFields() {
        const sceneObjectsContainer = __WEBPACK_IMPORTED_MODULE_0__Global__["a" /* default */].get().sceneCreator.getElements();
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
        __WEBPACK_IMPORTED_MODULE_1__Write__["a" /* default */].write("Render created");
        // вызываем методы класса
        this.initFields();
        this.render();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Render;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Global__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Write__ = __webpack_require__(0);





// флаг разрешения создания сетки
const ALLOW_GRID = true;

/**
 * класс для создания игровых объектов на сцене
 */
class ObjectsCreator {
    /**
     * метод для получения сцены
     */
    initScene() {
        this.scene = __WEBPACK_IMPORTED_MODULE_0__Global__["a" /* default */].get().sceneCreator.getElements().scene;
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
        __WEBPACK_IMPORTED_MODULE_1__Write__["a" /* default */].write("ObjectsCreator created");
        // вызываем методы класса
        this.initScene();
        this.createGrid();
        this.createLight();
        this.createGround();
        this.createHero();
        this.createSun();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjectsCreator;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Write__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Global__ = __webpack_require__(1);





/**
 * класс для создания игрового уровня
 */
class LevelCreate {
    /**
     * конструктор
     */
    constructor() {
        // вывод сообщения об успешном создании класса
        __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("LevelCreate created");
        // вызываем методы класса
        this.createEnemiesArray();
        this.createWallsArray();
        this.createWalls();
        this.createLevelContent();
    }

    /**
     * метод для создания массива стенок
     */
    createWallsArray() {
        this.wallsArr = [];
    }

    /**
     * метод для создания массива врагов
     */
    createEnemiesArray() {
        this.enemiesArr = [];
    }

    /**
     * метод для получения массива врагов
     * @returns {Array}
     */
    getEnemiesArray() {
        return this.enemiesArr;
    }

    /**
     * метод для получения массива стенок
     * @returns {Array}
     */
    getWallsArr() {
        return this.wallsArr;
    }

    /**
     * метод для добавления стены на сцену
     * @param kvX
     * @param kvZ
     */
    addWall(kvX, kvZ) {
        const wall = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().objectsCreator.createWall(kvX, kvZ);
        this.wallsArr.push({
           x: parseInt(wall.position.x / 5) + 9,
           z: parseInt(wall.position.z / 5) + 9,
        });
    }

    /**
     * метод для создания всех объектов уровня
     */
    createLevelContent() {
        const namespace = this;

        /**
         * функция для добавления группы из 4-х стенок
         * @param xx
         * @param zz
         */
        function createWallGroup(xx, zz) {
            namespace.addWall(xx, zz);
            namespace.addWall(xx + 1, zz);
            namespace.addWall(xx, zz + 1);
            namespace.addWall(xx + 1, zz + 1);
        }

        for(let i = 4; i <= 14; i += 5) {
            createWallGroup(i, 4);
            createWallGroup(i, 14);
            if(i !== 9) {
                createWallGroup(i, 9);
            }
        }

        /**
         * функция для создания врага
         * @param xx
         * @param zz
         * @param speed
         */
        function createEnemy(xx, zz, speed) {
            namespace.enemiesArr.push({
                enemyObj: __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().objectsCreator.createEnemy(xx, zz),
                live: 3,
                speed: speed,
            });
        }

        let speedValue = 0.05;
        let deltaSpeed = 0.01;

        for(let i = -35; i <= 35; i += 13) {
            createEnemy(i, -35, speedValue);
            speedValue += deltaSpeed;
            createEnemy(i, 35, speedValue);
            speedValue += deltaSpeed;
        }

        createEnemy(-35, 12, speedValue);
        speedValue += deltaSpeed;
        createEnemy(35, 12, speedValue);
        speedValue += deltaSpeed;
        createEnemy(-35, -12, speedValue);
        speedValue += deltaSpeed;
        createEnemy(35, -12, speedValue);
        speedValue += deltaSpeed;
    }

    /**
     * метод для создания стенок по периметру уровня
     */
    createWalls() {
        const n = 20;
        for(let i = 0; i < 20; i++) {
            this.addWall(0, i);
            this.addWall(19, i);
        }
        for(let i = 1; i < 19; i++) {
            this.addWall(i, 0);
            this.addWall(i, 19);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LevelCreate;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Write__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Global__ = __webpack_require__(1);





/**
 * класс для управления игрой
 */
class GameControl {
    constructor() {
        // выводим сообщение об успешном создании класса
        __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("GameControl created");
        // вызываем методы класса
        this.initZeroPosition();
        this.initLabel();
        this.initContentInfoBox();
        this.initScene();
        this.createBulletsArray();
        this.setFireFlag();
        this.initHero();
        this.initCamera();
        this.initGameParams();
        // выполнение блока кода каждые 50 мс
        this.intervalObj = setInterval(() => {
            this.gameProcess();
        }, 50);
    }

    /**
     * задаём точку отсчёта
     */
    initZeroPosition() {
        this.zeroPos = new THREE.Vector3(0, 0, 0);
    }

    /**
     * задаём элемент для вывода информации о состоянии игры
     */
    initContentInfoBox() {
        this.infoBox = document.getElementById("contentInfoBox");
    }

    /**
     * задаём элемент для вывода кол-ва врагов
     */
    initLabel() {
        this.label = document.getElementById("enemiesNumberLabel");
    }

    /**
     * задаём содержимое сообщения для вывода и выводим сообщение
     * @param enemiesNumber
     */
    setLabelContent(enemiesNumber) {
        const labelText = "Осталось врагов: ";
        this.label.innerHTML = labelText + "<b>" + enemiesNumber.toString() + "</b>";
    }

    /**
     * задаём сцены
     */
    initScene() {
        this.scene = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().sceneCreator.scene;
    }

    /**
     * метод для проверки координат на вхождение внутрь стены
     * @param xx
     * @param zz
     * @returns {boolean}
     */
    static isWall(xx, zz) {
        const walls = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.getWallsArr();
        for(let i = 0; i < walls.length; i++) {
            const wall = walls[i];
            if(wall.x === xx && wall.z === zz) {
                return true;
            }
        }
        return false;
    }

    /**
     * создание массива пулек
     */
    createBulletsArray() {
        this.bullets = [];
    }

    /**
     * задание режима стрельбы (ДА / НЕТ)
     */
    setFireFlag() {
        this.fire = false;
    }

    /**
     * метод для движения всех пуль
     */
    moveBullets() {
        const speed = 3.0;
        this.bullets.forEach((bullet) => {
            bullet.bulletObj.position.x -= speed * Math.sin(bullet.angle);
            bullet.bulletObj.position.z -= speed * Math.cos(bullet.angle);
        });
    }

    /**
     * метод для вывода отладочной информации в консоль
     */
    printSceneSize() {
        const messagePartFirst = "Scene: " + this.scene.children.length;
        const messagePartSecond = "Bullets: " + this.bullets.length;
        const messagePartThird = "Enemies: " + __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.getEnemiesArray().length;
        const messageFinal = messagePartFirst + "  " + messagePartSecond + "  " + messagePartThird;
        __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write(messageFinal.toString());
    }

    /**
     * метод для проверки столкновения врагов и героя
     */
    hitEnemiesAndHero() {
        const enemies = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.getEnemiesArray();
        const hero = this.hero;

        let heroKilled = false;

        enemies.forEach((enemy) => {
            const dx = hero.position.x - enemy.enemyObj.position.x;
            const dz = hero.position.z - enemy.enemyObj.position.z;
            const distance = Math.sqrt(dx * dx + dz * dz);
            if(distance < 3.0) {
                heroKilled = true;
            }
        });

        if(heroKilled === true) {
            clearInterval(this.intervalObj);
            this.cameraFlag = false;
            this.setCameraPosition();
            GameControl.renderScene();
            this.infoBox.innerHTML = "<h2>Игра окончена</h2>";
            __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("Finish Game");
        }
    }

    /**
     * метод для проверки, победил ли игрок (все монстры убиты)
     */
    controlWinGame() {
        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.getEnemiesArray().length === 0) {
            clearInterval(this.intervalObj);
            this.cameraFlag = false;
            this.setCameraPosition();
            GameControl.renderScene();
            this.infoBox.innerHTML = "<h2>Победа</h2>";
            __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("Finish Game");
        }
    }

    /**
     * метод для получения расстояния между пулей и врагом
     * @param bulletObj
     * @param enemyObj
     * @returns {number}
     */
    static distance(bulletObj, enemyObj) {
        const dx = bulletObj.position.x - enemyObj.position.x;
        const dz = bulletObj.position.z - enemyObj.position.z;
        return Math.sqrt(dx * dx + dz * dz);
    }

    /**
     * метод для движения всех врагов к герою
     */
    moveEnemies() {
        const hero = this.hero;
        const enemies = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.getEnemiesArray();

        enemies.forEach((enemy) => {
            const enemyObj = enemy.enemyObj;
            const speed = parseFloat(enemy.speed);

            function equalPositionX(obj1, obj2) {
                const delta = speed + 0.2;
                const p1 = obj1.position.x;
                const p2 = obj2.position.x;
                return (p2 - delta <= p1 && p1 <= p2 + delta);
            }

            function equalPositionZ(obj1, obj2) {
                const delta = speed + 0.2;
                const p1 = obj1.position.z;
                const p2 = obj2.position.z;
                return (p2 - delta <= p1 && p1 <= p2 + delta);
            }

            let enemyX = undefined;
            let enemyZ = undefined;
            let newKvX = undefined;
            let newKvZ = undefined;

            enemyX = enemyObj.position.x;
            enemyZ = enemyObj.position.z;

            if(equalPositionX(enemyObj, hero) === false) {
                if(enemyX < hero.position.x) {
                    enemyX += speed;
                } else {
                    enemyX -= speed;
                }
            }

            newKvX = parseInt(enemyX / 5) + 9;
            newKvZ = parseInt(enemyZ / 5) + 9;
            if(GameControl.isWall(newKvX, newKvZ) === false) {
                enemyObj.position.x = enemyX;
                enemyObj.position.z = enemyZ;
            }

            enemyX = enemyObj.position.x;
            enemyZ = enemyObj.position.z;

            if(equalPositionZ(enemyObj, hero) === false) {
                if(enemyZ < hero.position.z) {
                    enemyZ += speed;
                } else {
                    enemyZ -= speed;
                }
            }

            newKvX = parseInt(enemyX / 5) + 9;
            newKvZ = parseInt(enemyZ / 5) + 9;
            if(GameControl.isWall(newKvX, newKvZ) === false) {
                enemyObj.position.x = enemyX;
                enemyObj.position.z = enemyZ;
            }
        });
    }

    /**
     * метод для проверки столкновений пуль и врагов
     */
    controlHitBulletsAndEnemies() {
        const enemies = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.getEnemiesArray();
        const bullets = this.bullets;

        bullets.forEach((bullet) => {
           enemies.forEach((enemy) => {
               if(bullet.killed === false) {
                   const distanceValue = GameControl.distance(bullet.bulletObj, enemy.enemyObj);
                   if (distanceValue < 2.8) {
                       bullet.killed = true;
                       this.scene.remove(bullet.bulletObj);
                       enemy.live -= 1;
                   }
               }
           });
        });

        const enemiesNew = [];

        enemies.forEach((enemy) => {
            if(enemy.live > 0) {
                enemiesNew.push(enemy);
            } else {
                this.scene.remove(enemy.enemyObj);
            }
        });

        __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.enemiesArr = enemiesNew;
    }

    /**
     * метод для удаления использованных пуль
     */
    killBullets() {
        this.bullets.forEach((bullet) => {
            const kvZ = parseInt(bullet.bulletObj.position.z / 5) + 9;
            const kvX = parseInt(bullet.bulletObj.position.x / 5) + 9;
            if(GameControl.isWall(kvX, kvZ) === true) {
                bullet.killed = true;
                this.scene.remove(bullet.bulletObj);
            }
        });

        const bullets = [];

        this.bullets.forEach((bullet) => {
            if(bullet.killed === false) {
                bullets.push(bullet);
            }
        });

        this.bullets = bullets;
    }

    /**
     * метод для реализации стрельбы
     */
    fireControl() {
        const xx = this.hero.position.x;
        const zz = this.hero.position.z;
        const angle = this.angle;

        if(this.fire === false) {
            if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().r === true) {
                this.fire = true;
                const bulletObj = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().objectsCreator.createBullet(xx, zz);
                this.bullets.push({
                    bulletObj: bulletObj,
                    angle: angle,
                    killed: false,
                });
            }
        }

        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().r === false) {
            this.fire = false;
        }
    }

    /**
     * метод для задания стартовых параметров игры
     */
    initGameParams() {
        this.heroSpeedMoving = 0.5;
        this.heroSpeedRotating = 0.2;
        this.angle = 45;
        this.cameraFlag = true;
    }

    /**
     * метод для вывода содержимого игры на экран
     */
    static renderScene() {
        __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().render.render();
    }

    /**
     * метод для задания положения источника света
     */
    setLightPosition() {
        const light = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().objectsCreator.getLight();
        light.position.x = this.hero.position.x;
        light.position.y = 7;
        light.position.z = this.hero.position.z;
    }

    /**
     * метод для задания положения камеры
     */
    setCameraPosition() {
        if(this.cameraFlag === true) {
            const d = 5;
            this.camera.position.y = 4;
            this.camera.position.x = this.hero.position.x + d * Math.sin(this.angle);
            this.camera.position.z = this.hero.position.z + d * Math.cos(this.angle);
            this.camera.lookAt(this.hero.position);
            this.camera.position.y = 6;
        } else {
            this.camera.position.x = 0;
            this.camera.position.y = 140;
            this.camera.position.z = 0;
            this.camera.lookAt(this.zeroPos);
        }
    }

    /**
     * метод для движения героя
     */
    moveHero() {
        let newZ = this.hero.position.z;
        let newX = this.hero.position.x;

        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().s === true) {
            newZ += this.heroSpeedMoving * Math.cos(this.angle);
            newX += this.heroSpeedMoving * Math.sin(this.angle);
        }

        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().w === true) {
            newZ -= this.heroSpeedMoving * Math.cos(this.angle);
            newX -= this.heroSpeedMoving * Math.sin(this.angle);
        }

        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().a === true) {
            newZ -= this.heroSpeedMoving * Math.cos(this.angle + Math.PI / 2);
            newX -= this.heroSpeedMoving * Math.sin(this.angle + Math.PI / 2);
        }

        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().d === true) {
            newZ += this.heroSpeedMoving * Math.cos(this.angle + Math.PI / 2);
            newX += this.heroSpeedMoving * Math.sin(this.angle + Math.PI / 2);
        }

        const newKvZ = parseInt(newZ / 5) + 9;
        const newKvX = parseInt(newX / 5) + 9;

        if(GameControl.isWall(newKvX, newKvZ) === false) {
            this.hero.position.z = newZ;
            this.hero.position.x = newX;
        }
    }

    /**
     * метод для поворота героя
     */
    rotateHero() {
        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().q === true) {
            this.angle += this.heroSpeedRotating;
        }
        if(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().keysControl.getKeys().e === true) {
            this.angle -= this.heroSpeedRotating;
        }
        this.hero.rotation.z = this.angle;
    }

    /**
     * циклически повторяющийся блок операций
     */
    gameProcess() {
        this.moveEnemies();
        this.rotateHero();
        this.moveHero();
        this.fireControl();
        this.moveBullets();
        this.killBullets();
        this.printSceneSize();
        this.setCameraPosition();
        this.setLightPosition();
        this.controlHitBulletsAndEnemies();
        this.hitEnemiesAndHero();
        this.controlWinGame();
        try {
            this.setLabelContent(__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().levelCreate.getEnemiesArray().length);
        } catch (err) {
            __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("Label not exists");
        }
        GameControl.renderScene();
    }

    /**
     * метод для получения героя
     */
    initHero() {
        this.hero = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().objectsCreator.getHero();
    }

    /**
     * метод для получения камеры
     */
    initCamera() {
        this.camera = __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().render.getCamera();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameControl;




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Write__ = __webpack_require__(0);




/**
 * класс для контроля взаимодействия с клавиатурой
 */
class KeysControl {
    // конструктор
    constructor() {
        // выводим сообщение об успешном создании класса
        __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("KeysControl created");
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
/* harmony export (immutable) */ __webpack_exports__["a"] = KeysControl;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Write__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Global__ = __webpack_require__(1);





/**
 * класс для управления нажатий на кнопки
 */
class ButtonsControl {
    /**
     * конструктор
     */
    constructor() {
        // выводим сообщение об успешном создании класса
        __WEBPACK_IMPORTED_MODULE_0__Write__["a" /* default */].write("ButtonsControl created");
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
            __WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().gameControl.cameraFlag = !__WEBPACK_IMPORTED_MODULE_1__Global__["a" /* default */].get().gameControl.cameraFlag;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ButtonsControl;



/***/ })
/******/ ]);