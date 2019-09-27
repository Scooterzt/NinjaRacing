function Ninja(id, x, y) {
    this.element = document.getElementById(id);
    this.x = x;
    this.y = y;
    this.speed = Math.random() * 10 + 10;
    this.element.style.top = x + 'vh';
    this.element.style.left = y + 'vw';
    this.changeImage = true;
    this.number = parseInt(id.replace(/[\D]/g, ''));
    this.moveRight = function () {

      let ninja = this;

      setTimeout(function () {
        ninja.y++;
        ninja.element.style.left = ninja.y + 'vw';

        if (ninja.changeImage) {
          ninja.changeImage = false;
          ninja.element.className = 'ninja right1';
        }
        else {
          ninja.changeImage = true;
          ninja.element.className = 'ninja right2';
        }
        if (ninja.y < (80 + ninja.number * 1.8)) {
          ninja.moveRight();
        }
        else {
          ninja.speed = Math.random() * 10 + 10;
          ninja.moveUp();
        }

      }, 1000 / this.speed);

    }
    this.moveUp = function () {

      let ninja = this;

      setTimeout(function () {
        ninja.x--;
        ninja.element.style.top = ninja.x + 'vh';

        if (ninja.changeImage) {
          ninja.changeImage = false;
          ninja.element.className = 'ninja top1';
        }
        else {
          ninja.changeImage = true;
          ninja.element.className = 'ninja top2';
        }
        if (ninja.x > (10 - ninja.number * 1.8)) {
          ninja.moveUp();
        }
        else {
          ninja.speed = Math.random() * 10 + 10;
          ninja.moveLeft();
        }

      }, 1000 / this.speed);

    }

    this.moveLeft = function () {

      let ninja = this;

      setTimeout(function () {
        ninja.y--;
        ninja.element.style.left = ninja.y + 'vw';

        if (ninja.changeImage) {
          ninja.changeImage = false;
          ninja.element.className = 'ninja left1';
        }
        else {
          ninja.changeImage = true;
          ninja.element.className = 'ninja left2';
        }
        if (ninja.y > (10 - ninja.number * 1.8)) {
          ninja.moveLeft();
        }
        else {
          ninja.speed = Math.random() * 10 + 10;
          ninja.moveDown();
        }

      }, 1000 / this.speed);

    }
    this.moveDown = function () {

      let ninja = this;

      setTimeout(function () {
        ninja.x++;
        ninja.element.style.top = ninja.x + 'vh';

        if (ninja.changeImage) {
          ninja.changeImage = false;
          ninja.element.className = 'ninja down1';
        }
        else {
          ninja.changeImage = true;
          ninja.element.className = 'ninja down2';
        }
        if (ninja.x < (80 + ninja.number * 1.8)) {
          ninja.moveDown();
        }
        else {
          ninja.speed = Math.random() * 10 + 10;
          ninja.moveRight();
        }

      }, 1000 / this.speed);

    }
    this.run = function () {
      $('#ninjas').append(this.element);
      this.moveRight();
    }

  }