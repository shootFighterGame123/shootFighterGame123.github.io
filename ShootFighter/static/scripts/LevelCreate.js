"use strict";

import Write from "./Write";
import Global from "./Global";

/**
 * класс для создания игрового уровня
 */
export default class LevelCreate {
    /**
     * конструктор
     */
    constructor() {
        // вывод сообщения об успешном создании класса
        Write.write("LevelCreate created");
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
        const wall = Global.get().objectsCreator.createWall(kvX, kvZ);
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
                enemyObj: Global.get().objectsCreator.createEnemy(xx, zz),
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
