var assert = require('assert'),
    chai   = require('chai');

chai.should();

var Bitmap = require('../lib/bitmap');

describe('Bitmap', function () {

  it('should exist', function(){
    return Bitmap.should.exist();
  });

});