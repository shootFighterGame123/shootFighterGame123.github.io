"use strict";

import Write from "./Write";
import Global from "./Global";

/**
 * класс для управления игрой
 */
export default class GameControl {
    constructor() {
        // выводим сообщение об успешном создании класса
        Write.write("GameControl created");
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
        this.scene = Global.get().sceneCreator.scene;
    }

    /**
     * метод для проверки координат на вхождение внутрь стены
     * @param xx
     * @param zz
     * @returns {boolean}
     */
    static isWall(xx, zz) {
        const walls = Global.get().levelCreate.getWallsArr();
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
        const messagePartThird = "Enemies: " + Global.get().levelCreate.getEnemiesArray().length;
        const messageFinal = messagePartFirst + "  " + messagePartSecond + "  " + messagePartThird;
        Write.write(messageFinal.toString());
    }

    /**
     * метод для проверки столкновения врагов и героя
     */
    hitEnemiesAndHero() {
        const enemies = Global.get().levelCreate.getEnemiesArray();
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
            Write.write("Finish Game");
        }
    }

    /**
     * метод для проверки, победил ли игрок (все монстры убиты)
     */
    controlWinGame() {
        if(Global.get().levelCreate.getEnemiesArray().length === 0) {
            clearInterval(this.intervalObj);
            this.cameraFlag = false;
            this.setCameraPosition();
            GameControl.renderScene();
            this.infoBox.innerHTML = "<h2>Победа</h2>";
            Write.write("Finish Game");
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
        const enemies = Global.get().levelCreate.getEnemiesArray();

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
        const enemies = Global.get().levelCreate.getEnemiesArray();
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

        Global.get().levelCreate.enemiesArr = enemiesNew;
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
            if(Global.get().keysControl.getKeys().r === true) {
                this.fire = true;
                const bulletObj = Global.get().objectsCreator.createBullet(xx, zz);
                this.bullets.push({
                    bulletObj: bulletObj,
                    angle: angle,
                    killed: false,
                });
            }
        }

        if(Global.get().keysControl.getKeys().r === false) {
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
        Global.get().render.render();
    }

    /**
     * метод для задания положения источника света
     */
    setLightPosition() {
        const light = Global.get().objectsCreator.getLight();
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

        if(Global.get().keysControl.getKeys().s === true) {
            newZ += this.heroSpeedMoving * Math.cos(this.angle);
            newX += this.heroSpeedMoving * Math.sin(this.angle);
        }

        if(Global.get().keysControl.getKeys().w === true) {
            newZ -= this.heroSpeedMoving * Math.cos(this.angle);
            newX -= this.heroSpeedMoving * Math.sin(this.angle);
        }

        if(Global.get().keysControl.getKeys().a === true) {
            newZ -= this.heroSpeedMoving * Math.cos(this.angle + Math.PI / 2);
            newX -= this.heroSpeedMoving * Math.sin(this.angle + Math.PI / 2);
        }

        if(Global.get().keysControl.getKeys().d === true) {
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
        if(Global.get().keysControl.getKeys().q === true) {
            this.angle += this.heroSpeedRotating;
        }
        if(Global.get().keysControl.getKeys().e === true) {
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
            this.setLabelContent(Global.get().levelCreate.getEnemiesArray().length);
        } catch (err) {
            Write.write("Label not exists");
        }
        GameControl.renderScene();
    }

    /**
     * метод для получения героя
     */
    initHero() {
        this.hero = Global.get().objectsCreator.getHero();
    }

    /**
     * метод для получения камеры
     */
    initCamera() {
        this.camera = Global.get().render.getCamera();
    }
}

