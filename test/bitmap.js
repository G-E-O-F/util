var assert = require('assert'),
    chai   = require('chai');

chai.should();

var Bitmap = require('../lib/bitmap');

describe('Bitmap', function () {

  var bmp6 = new Bitmap(2, 3);

  it('should exist', function () {
    return bmp6.should.exist();
  });

  describe('set & get', function () {

    bmp6
      .write(0, 0, true)
      .write(0, 1, false)
      .write(0, 2, true)
      .write(1, 0, false)
      .write(1, 1, true)
      .write(1, 2, false);

    it('should set and get values at the same coordinates', function () {

      return bmp6.get(0, 0).should.be.true &&
        bmp6.get(0, 1).should.be.false &&
        bmp6.get(0, 2).should.be.true &&
        bmp6.get(1, 0).should.be.false &&
        bmp6.get(1, 1).should.be.true &&
        bmp6.get(1, 2).should.be.false

    });

  });

});