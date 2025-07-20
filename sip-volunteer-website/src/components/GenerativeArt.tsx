"use client";
import Sketch from "react-p5";
import p5Types from "p5";

let particles: Particle[] = [];

class Particle {
  p5: p5Types;
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  maxSpeed: number;

  constructor(p5: p5Types) {
    this.p5 = p5;
    this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.vel = p5.createVector(0, 0);
    this.acc = p5.createVector(0, 0);
    this.maxSpeed = 2;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors: p5Types.Vector[], scl: number, cols: number) {
    const x = this.p5.floor(this.pos.x / scl);
    const y = this.p5.floor(this.pos.y / scl);
    const index = x + y * cols;
    const force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force: p5Types.Vector) {
    this.acc.add(force);
  }

  show() {
    this.p5.stroke(255, 5);
    this.p5.strokeWeight(1);
    this.p5.point(this.pos.x, this.pos.y);
  }

  edges() {
    if (this.pos.x > this.p5.width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = this.p5.width;
    if (this.pos.y > this.p5.height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = this.p5.height;
  }
}


const GenerativeArt = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    particles = []; // Clear particles array on setup
    for (let i = 0; i < 500; i++) {
      particles.push(new Particle(p5));
    }
    p5.background(0);
  };

  const draw = (p5: p5Types) => {
    const scl = 20;
    const cols = p5.floor(p5.width / scl);
    const rows = p5.floor(p5.height / scl);
    const flowfield = new Array(cols * rows);

    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        const index = x + y * cols;
        const angle = p5.noise(xoff, yoff, p5.frameCount / 200) * p5.TWO_PI * 4;
        const v = p5Types.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += 0.1;
      }
      yoff += 0.1;
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield, scl, cols);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  };

  return <Sketch setup={setup} draw={draw} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default GenerativeArt;