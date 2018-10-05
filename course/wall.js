

class Wall {

    constructor(ancestor) {

        if (ancestor !== null) {
            this.ancestor = ancestor;
            this.beginPoint = ancestor.finalPoint
            this.angle = ancestor.angle + this.getAngle();
            if (this.angle > TWO_PI) {
                this.angle -= TWO_PI;
            }

            this.sideLines = new Array(2);
            this.lenght = random(100, 200);
        } else {
            this.beginPoint = createVector(width / 2, height / 2);
            this.angle = -PI / 2;
            this.lenght = 150;
        }

        this.finalPoint = this.getEndPoint();
        this.leftPoints = new Array(2);
        this.rightPoints = new Array(2);

        this.getLeftSide();
        this.getRightSide();

        this.active = false;
        this.passed = false;

    }

    getAngle() {

        let angle = randomGaussian(0, PI / 6)
        if (abs(angle) < PI / 5) {
            return 0;
        } else {
            return map(angle, -2 * PI / 3, 2 * PI / 3, -PI / 2, PI / 2);
        }
    }

    getEndPoint() {

        let fx = cos(this.angle) * this.lenght;
        let fy = sin(this.angle) * this.lenght
        let end = createVector(fx, fy);
        return end.add(this.beginPoint);
    }

    show(lngFromActive) {
        push();
        translate(this.beginPoint.x - point.pos.x + 300, this.beginPoint.y - point.pos.y + 300);

        this.setStroke(lngFromActive);

        strokeWeight(200);
        line(0, 0, this.finalPoint.x - this.beginPoint.x, this.finalPoint.y - this.beginPoint.y);
        pop()

    }

    setStroke(lngFromActive) {
        let vis = 0;

        if (!this.active && !this.passed) {
            vis = 255 * (1 / lngFromActive);
            stroke(255, vis);
        } else if (this.active) {
            vis = 255;
            stroke(255, vis);
        } else if (this.passed) {
            stroke(0, 255, 0, 255);
        }

    }

    getVerticalVector() {

        let wayVector = this.finalPoint.copy();
        wayVector.sub(this.beginPoint);
        let normalVector = createVector(-wayVector.y, wayVector.x);
        return normalVector.setMag(5);
    }

    getLeftSide() {

        this.leftPoints[0] = this.beginPoint.copy().sub(this.getVerticalVector());
        this.leftPoints[1] = this.finalPoint.copy().sub(this.getVerticalVector());

    }


    getRightSide() {

        this.rightPoints[0] = this.beginPoint.copy().add(this.getVerticalVector());
        this.rightPoints[1] = this.finalPoint.copy().add(this.getVerticalVector());

    }
}