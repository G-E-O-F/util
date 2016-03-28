class Bitmap {

  constructor(width, height){

    this._bits = new Uint8Array( Math.ceil(width * height / 8) );

    this._w = width;
    this._h = height;

  }

  clear(width, height, offset_x, offset_y){

  }

  write(x, y, val){

    if(!!val){
      this._bits[ Math.floor( (x * this._h + y) / 8 ) ] |= (1 << ((x * this._h + y) % 8))
    }else{
      this._bits[ Math.floor( (x * this._h + y) / 8 ) ] &= ~(1 << ((x * this._h + y) % 8))
    }

    return this;

  }

  get(x, y){

    return !!((
        this._bits[ Math.floor( (x * this._h + y) / 8 ) ] >> ((x * this._h + y) % 8)
      ) & 1)

  }

}

module.exports = Bitmap;