import Brush from "./Brush";

export default class InkBrush extends Brush {

  init() {
    this.surface.strokeWeight(this.brushSize);
    this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b);
    this.surface.strokeJoin('round');
    console.log('Ink Brush Initialized');
  }

  draw(prevX, prevY, currX, currY) {
		this.surface.line(prevX, prevY, currX, currY);
		this.surface.line(prevX + Math.random() * 10, prevY + Math.random() * 10, currX, currY);
  }

	updateDrawingColor() {
		this.surface.stroke(this.rgba.r, this.rgba.g, this.rgba.b);
	}

}