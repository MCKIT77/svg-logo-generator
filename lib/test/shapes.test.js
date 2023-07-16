const Triangle = require('../triangle.js');
const Square = require('../square.js');
const Circle = require('../circle.js');


describe('Triangle', () => {
  describe('constructor', () => {
    it('should take in a color and create a triangle', () => {
      const color = 'blue';
      const triangle = new Triangle(color);

      expect(triangle.color).toEqual('blue');
    });
  });
  describe('render', () => {
    it('should return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`', () => {
      const color = 'blue';
      const triangle = new Triangle(color)
      const svg = triangle.render();
      expect(svg).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
    })
  })
});

describe('Square', () => {
  describe('constructor', () => {
    it('should take in a color and create a square', () => {
      const color = 'blue';
      const square = new Square(color);

      expect(square.color).toEqual('blue');
    });
  });
  describe('render', () => {
    it('should return `<rect width="200" height="300" fill="blue"/>`', () => {
      const color = 'blue';
      const square = new Square(color)
      const svg = square.render();
      expect(svg).toEqual(`<rect width='200' height='300' fill='blue'/>`)
    })
  })
});

describe('Cirlce', () => {
  describe('constructor', () => {
    it('should take in a color and create a circle', () => {
      const color = 'blue';
      const circle = new Circle(color);

      expect(circle.color).toEqual('blue');
    });
  });
  describe('render', () => {
    it('should return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`', () => {
      const color = 'blue';
      const circle = new Circle(color)
      const svg = circle.render();
      expect(svg).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
    })
  })
});