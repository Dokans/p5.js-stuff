class Border {

    constructor(nSegments = 100) {

        this.segments = nSegments;
        this.walls = this.createWalls();
        this.point;

        this.incActiveWalls();
        this.activeWall;
        this.nextWall;
    }

    createWalls() {

        let walls = new Array(this.segments);
        walls[0] = new Wall(null);
        for (let j = 1; j < walls.length; j++) {
            walls[j] = new Wall(walls[j - 1]);
        }

        return walls;
    }

    showWalls() {
        this.checkActiveWalls();
        let afterActive = 0;

        for (let wall of this.walls) {
            if (afterActive > 0) {
                wall.show(afterActive);
                afterActive++;
            }

            if (wall.active) {
                wall.show();
                afterActive++;
            }

            if (wall.passed) {
                wall.show();
            }
        }
    }



    spawnPoint() {
        this.point = new Point(this.walls[0].beginPoint.x, this.walls[0].beginPoint.y);
        return this.point;
    }

    incActiveWalls() {
        this.walls[0].active = true;
        this.activeWall = 0;
        this.nextWall = 1;
    }

    checkActiveWalls() {
        if (this.point.pos.dist(this.walls[this.activeWall].finalPoint) < 200 / 2) {
            this.walls[this.activeWall].active = false;
            this.walls[this.activeWall].passed = true;

            if (this.nextWall < this.segments) {
                this.walls[this.nextWall].active = true;
            } else {
                noLoop();
                let finish = createP("Konec");
                console.log("Konec");

            }
            this.nextWall++
            this.activeWall++

        }
    }



}