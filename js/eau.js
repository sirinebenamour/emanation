(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Symbole5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#044D8B")
      .s()
      .p(
        "ED6HEAeQgwgYhKgsIh4hHQlbjEn0g2QkzgipVAPQzJAdyWAEI4dADQuaADqEAPQs3AUwHA3QpgAhzcBOQzKBOpzAhQwEA2s6ATQutAWyUgNQrMgH13ggMguDgBBQmqgJjVgIQljgMkbgVQjNgQnSguQmwgsjvgPQkwgUl8gGQjrgEnBAAMhZDgABIhngBIgUAVQiICPjbgEQjagEiDiVQhyiBgajYQgRiQAWj5QBlyRAyscQBEwvAOuCQAJoSgIsIQgKtngDm0QgK4pBZwIQAnnABLpEQAbjMBys1QBYp2AtmLQBBozAanTQAbnWgBpOQAAlXgNrOQgOq5ABlrQAAl9ANlMQgUgngQgsQgehRgkigQhTlugli8Qg7k1gXj7QglmWAomYQApmZB0mGQAsiUAIghQAZhoAAhRQABhRgZhsIgvi6Qg5jpgOksQgJi2AGlmMACSiFaQADjbAVh3QAhi6Bah4QBsiPC2gpQAsgqA1giQB4hOCuguQBsgdDRghQLChvFogrQJRhGHegEQIIgDKHBKQGIAtMAB4QIdBUEQAyQHCBUFhBgQGUBvH6C/QNOFAQuIHQGGC8IkEWIOmHaQWBLHSCIMQVmJ0TbHRQInDPGtCFQULGPXdCRQUnB/YAhBQGEgQEFgbQFgglEfhFQDdg2EphoQCqg7FTh8QP4lnQri3QQqi2Q1ABQDCAAByAUQCoAcBwBPIATAPQBlAMBXAuQBpA3A9BdQBPB4ATC5QAKBjgHDpQgMGyAtIYQAcFUBOJyQC0W1DIXaQCaR9BvKKQCpPdDTMTQBBDwANB8QASCygwCHQAjBnAWCTQAmDzAQEhQAMDiABE1QADMmhGTDQgUFRgpKjQgkJcgSGZQgeKugLMSQgSU3AoaGQAXPqBIfRIAtTpQARHJAJDMQAQFxAUEkQAUExAyJhQAoIcADF2QABCugMBsQgRCagyB0Qg7CHhtBaQh1BgiHAGIgPAAQhvAAiGhBg"
      );
    this.shape.setTransform(1676.5128, 1647.8838);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole5,
    new cjs.Rectangle(0, 0, 3353, 3295.8),
    null
  );

  (lib.Symbole4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#01B1B7")
      .s()
      .p(
        "EjzhCX/QjUgzhniLQg/hUgWh0QgThnANh3IATiLQAKhSgFg5QgHhJgjhWQgTgvg0hoQnGuHiev2Qiev2CevnQAljXAQhsIAKhFQh511g3rwQhp2hgnyDQgTo4AAnFQgCogAYncQAepJBNqfQA/olBqq8QBrrDBkm3QCOpvDMnkQBIiqBIhqIhSgOMgltgGVQkWgvibhCQjjhihaiuQhYisBHjKQBHjJCwhUQCIhAC9AKQBzAGDfAvQFBBEGUBJQD0AsHkBSIQ4C3QMDCEGOAmQKNA/IJhAQGJgwKZi3QGsh1BfgZQEqhNDngqQI2hmJEAZQJDAZIrCXQC5AyDzBSQCNAwEaBjQIQC3FKBBQH8BkJWgjQHtgcJjh9QD+gzDCg0QDuhADGhMQCfg9EKh+QEwiOB3gyQJ0kHK6hEQKvhEKpB/QBWAQGSBaQEqBCDAAYQHbA6J2hUQDggeFIg8IIlhkQPtivNEgFQPdgGNBDmQBjAcHDCOQFRBqDaAtQLPCXOPiIQFtg3HChsQEjhGIAiNQIBiMEjhHQHBhsFug2QOOiJLQCWQCLAeBlAjQB/AsBfA+QAaARAXASQBoAhCKBBID/B6QI/EEL1AeQJCAXMohyQEYgoCpAVQD3AfB0CdQBEBcAQCCQAOBzgcCBQgTBbgyCNQhAC1gPAxQhkFTAjG7QAWEQBpIHQCxNqBfIdQCIMLBGKFQAlFbAhGyQATEFAgIJQAeHZAJDtQAPGLgLE8QgHDKgWEVQgMCfgcE/QiNapBAa4QAHDAgKB1QAyAkAnAxQAxAxAmA+QBTCHAjC+QAaCIAHDWQAIDcgFEmIgLICQgFDVAGB1QAIC2AhCQQAPBBAnB8QAnB/APA+QA1DcgFFPIgIEaQgFCsACBtQAHEigHBRQgUDPhiB8Qh3CVjmAqQi2Agj0gjQi4gbl9hUQlyhSjDgbQlHgsmTAKQkUAHnHApQpZA1t1BjQvdBxnvA1UhAbAG+hAoABSQr+APu9AGQo+AEx9ACMj+hAAaIgHAAQjzAAiPgig"
      );
    this.shape.setTransform(1926.774, 976.1237);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole4,
    new cjs.Rectangle(0, 0, 3853.6, 1952.3),
    null
  );

  (lib.Symbole3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#0066CC")
      .s()
      .p(
        "Ej50BwpQiIgfhbhTQh2htgnjGQgaiFAFjpIATtiIggAGQilAcjPggQi0gciEg4QighEhhhxQiFiagbj7QgUixAikZQBSqzCnsoQB/pmDbtkQD8vYB7nrQCuq4BzohQgJhogKhiQgTizgDg6QgIiGANhnQAQh+AxhnQA3hzBahFIAWgQQAtl3ABlGQABjLganRQgYmuAGjtQAGi5Ahh7QAsikBlhfQBWhSB+gfQAtgLAtgEQA4hYBUg1QB6hNCzgRQB2gLDPAPQVhBkYnEEQJvBnJiB4QIXBqQtDhQO6DDKQBhQXpDfWFgxQX0g1VXlvQDhg9EThUQCzg3E/hlMAmsgMTQH9iiEPhYQGviOFYh7QEUhjIijRQIhjQEUhjQPClaLOiHQJShvLKgeQIogXL+AYQYMAvR8DAQCjAbCfAfQIeAFIfAOQH0ANErAWQG3AhFgBHQGOBRHYCmQE3BtIVDcQCrBGBXAtQCMBJBdBUQBuBkA3CBQA8CMgaCEQgnDFjKBwQAWBLARBgQBgIZgLL6QgDDfgRGwQgRG7gDDUQgEDogUB0QgbCXhDBpMAANAtqQAACbgJBPQgPCBguBdQg+B5h6BLIgaAPMgAHA+dQgBEGghCVQgyDfiKB1Qh/BtjSAYQiEAQj6gSQzXhX8LBQQlYAQybBAQuvA0pDASQoPARqWAHQl7ADsqACMlP1AAwQmvABjaAPQloAZkVBMQhUAXilA0QiUArhpANQg1AGgyAAQhSAAhLgRgEkBfBGgQBCAFA+ASIAQroQADhsAHhUIAAgIQhdHmg9Gzg"
      );
    this.shape.setTransform(1751.5343, 722.6309);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole3,
    new cjs.Rectangle(0, 0, 3503.1, 1445.3),
    null
  );

  (lib.Symbole2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#006699")
      .s()
      .p(
        "EAB3B3KQlOgHkigUQmrgdqzhcQtghyj9gaQpRg/rhgdQnXgTtfgPQpZgKkMgJQnlgRl+gkQnogurlh5Qxbi3hugQQkwgtl9gtQjlgcnKgzQrjhSl1geQpsgynxAGQkqAEiVgbQj1guiAiRQh/iQAPjPQgSgWgPgZQhAhlgaiAQgWhqAAiJQAAhFAKixQAyufhjuXQgXjdgEhTQgHirAdiDQAQhJAchBQgQmZglpCQg+u2gOlxQgUogADsZQAHt9AAm/QAAsDgco1QglrPhZphQglj/ADh/QAFjWBdiLQA0hOBUgzQAMgjATggQBNiGCohhQBxhCDQhJQLUj/KCiWQLcisKggwQERgUFVgEQDTgDGUADQIAADEWAKQBzgoB2AUQA+AKA6AbQEhASD2AgQIjBHL4DIQC9AyHJB/QGcByDqA8QZ7GpXcAhQaeAmWenQQDEhAEKhiQCag4EyhzQRZmcOYjhQRTkPPfgsQJ4gdK5A6QVQBwQgGPQDaBSENB4QCWBCFKCaIdgNyQDgBpBxBTQBWA/A6BIQBfAwA7BSQBhCFAPDSQAJBygVEJQglHkAfKpQAJDAAXGHQAXGBAJDGQAWHoABJ9QAADcgHOKQgFK0AHGxQAKJpAnH7QAXEvgdCsQgFAhgIAfQADA8AGAtQAOB1AvCOQAZBKBGCxQA/CgAcBcQArCNAHB3QCogHBXACQCNADBuAYQCEAdBpBAQB0BGBBBmQCBDJhYEEQgnB2hPBkQhQBmhoBAQliDZpahrQgmgHj3gyQitgkhygMQi0gTjjAMQiKAIkNAeQywCFq0BUQAzCeg7C6Qg1CliACcQjGDwkxCqQkPCXlVBZQkMBHl4AwQmzAvjZAaQjVAYkIAnQihAYk6AxMgsXAG6QoFBRj4AiQmrA8lWAeQk9AclpAOQkyALl2AEIjuABQjSAAiygEgECCKBXNQgMAEgNAUQgOAWgKAFQAoAHA2gPQAagGA0gRQAvgNAhgBQgRgIgnAAIiCAAQgMAAgFACgECoqABjIAXBjQANA5ADAdQAKgMAHgZIAsiEQgvgQgyAAIgDAAgECzHhPMIAFgQIgPgHIAKAXgEh8jhPtIAXACIgZgMg"
      );
    this.shape.setTransform(1460.0194, 762.9807);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole2,
    new cjs.Rectangle(0, 0, 2920, 1526),
    null
  );

  // stage content:
  (lib.eau = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [58];
    // timeline functions:
    this.frame_58 = function () {
      var _this = this;
      /*
      Arrête l’animation complète.
      */
      createjs.Ticker.removeEventListener("tick", stage);
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1)
    );

    // Calque_8
    this.instance = new lib.Symbole4();
    this.instance.setTransform(850.8, 2276.4, 1, 1, 0, 0, 0, 1926.8, 976.1);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(24)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 820.15, y: 2224.55 }, 0)
        .wait(1)
        .to({ x: 791.35, y: 2173.15 }, 0)
        .wait(1)
        .to({ x: 764.4, y: 2122.2 }, 0)
        .wait(1)
        .to({ x: 739.3, y: 2071.75 }, 0)
        .wait(1)
        .to({ x: 716.1, y: 2021.7 }, 0)
        .wait(1)
        .to({ x: 694.75, y: 1972.15 }, 0)
        .wait(1)
        .to({ x: 675.25, y: 1923.05 }, 0)
        .wait(1)
        .to({ x: 657.6, y: 1874.35 }, 0)
        .wait(1)
        .to({ x: 641.8, y: 1826.15 }, 0)
        .wait(1)
        .to({ x: 627.9, y: 1778.4 }, 0)
        .wait(1)
        .to({ x: 615.85, y: 1731.1 }, 0)
        .wait(1)
        .to({ x: 605.65, y: 1684.25 }, 0)
        .wait(1)
        .to({ x: 597.3, y: 1637.85 }, 0)
        .wait(1)
        .to({ x: 590.8, y: 1591.9 }, 0)
        .wait(1)
        .to({ x: 586.15, y: 1546.4 }, 0)
        .wait(1)
        .to({ x: 583.35, y: 1501.3 }, 0)
        .wait(1)
        .to({ x: 582.45, y: 1456.7 }, 0)
        .wait(1)
        .to({ x: 583.35, y: 1412.55 }, 0)
        .wait(1)
        .to({ x: 586.15, y: 1368.85 }, 0)
        .wait(1)
        .to({ x: 590.8, y: 1325.55 }, 0)
        .wait(1)
        .to({ x: 597.3, y: 1282.75 }, 0)
        .wait(1)
        .to({ x: 605.65, y: 1240.35 }, 0)
        .wait(1)
        .to({ x: 615.85, y: 1198.4 }, 0)
        .wait(1)
        .to({ x: 627.9, y: 1156.9 }, 0)
        .wait(1)
        .to({ x: 641.8, y: 1115.85 }, 0)
        .wait(1)
        .to({ x: 657.6, y: 1075.25 }, 0)
        .wait(1)
        .to({ x: 675.25, y: 1035.1 }, 0)
        .wait(1)
        .to({ x: 694.75, y: 995.4 }, 0)
        .wait(1)
        .to({ x: 716.1, y: 956.15 }, 0)
        .wait(1)
        .to({ x: 739.3, y: 917.35 }, 0)
        .wait(1)
        .to({ x: 764.4, y: 878.95 }, 0)
        .wait(1)
        .to({ x: 791.35, y: 841 }, 0)
        .wait(1)
        .to({ x: 820.15, y: 803.5 }, 0)
        .wait(1)
        .to({ x: 850.8, y: 766.4 }, 0)
        .wait(1)
    );

    // Calque_9
    this.instance_1 = new lib.Symbole5();
    this.instance_1.setTransform(763.45, 2637.4, 1, 1, 0, 0, 0, 1676.5, 1647.9);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(16)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 809.2, y: 2596.3 }, 0)
        .wait(1)
        .to({ x: 852.65, y: 2555.35 }, 0)
        .wait(1)
        .to({ x: 893.9, y: 2514.45 }, 0)
        .wait(1)
        .to({ x: 932.95, y: 2473.65 }, 0)
        .wait(1)
        .to({ x: 969.7, y: 2432.9 }, 0)
        .wait(1)
        .to({ x: 1004.25, y: 2392.25 }, 0)
        .wait(1)
        .to({ x: 1036.55, y: 2351.7 }, 0)
        .wait(1)
        .to({ x: 1066.6, y: 2311.2 }, 0)
        .wait(1)
        .to({ x: 1094.45, y: 2270.8 }, 0)
        .wait(1)
        .to({ x: 1120.1, y: 2230.5 }, 0)
        .wait(1)
        .to({ x: 1143.45, y: 2190.25 }, 0)
        .wait(1)
        .to({ x: 1164.6, y: 2150.05 }, 0)
        .wait(1)
        .to({ x: 1183.55, y: 2110 }, 0)
        .wait(1)
        .to({ x: 1200.25, y: 2069.95 }, 0)
        .wait(1)
        .to({ x: 1214.7, y: 2030.05 }, 0)
        .wait(1)
        .to({ x: 1226.95, y: 1990.2 }, 0)
        .wait(1)
        .to({ x: 1237, y: 1950.4 }, 0)
        .wait(1)
        .to({ x: 1244.8, y: 1910.7 }, 0)
        .wait(1)
        .to({ x: 1250.35, y: 1871.1 }, 0)
        .wait(1)
        .to({ x: 1253.7, y: 1831.55 }, 0)
        .wait(1)
        .to({ x: 1254.8, y: 1792.1 }, 0)
        .wait(1)
        .to({ x: 1253.7, y: 1752.7 }, 0)
        .wait(1)
        .to({ x: 1250.35, y: 1713.4 }, 0)
        .wait(1)
        .to({ x: 1244.8, y: 1674.15 }, 0)
        .wait(1)
        .to({ x: 1237, y: 1635.05 }, 0)
        .wait(1)
        .to({ x: 1227, y: 1595.95 }, 0)
        .wait(1)
        .to({ x: 1214.75, y: 1556.95 }, 0)
        .wait(1)
        .to({ x: 1200.25, y: 1518 }, 0)
        .wait(1)
        .to({ x: 1183.55, y: 1479.15 }, 0)
        .wait(1)
        .to({ x: 1164.65, y: 1440.35 }, 0)
        .wait(1)
        .to({ x: 1143.5, y: 1401.65 }, 0)
        .wait(1)
        .to({ x: 1120.1, y: 1363 }, 0)
        .wait(1)
        .to({ x: 1094.5, y: 1324.45 }, 0)
        .wait(1)
        .to({ x: 1066.65, y: 1285.95 }, 0)
        .wait(1)
        .to({ x: 1036.55, y: 1247.55 }, 0)
        .wait(1)
        .to({ x: 1004.25, y: 1209.2 }, 0)
        .wait(1)
        .to({ x: 969.7, y: 1170.95 }, 0)
        .wait(1)
        .to({ x: 932.95, y: 1132.75 }, 0)
        .wait(1)
        .to({ x: 893.95, y: 1094.6 }, 0)
        .wait(1)
        .to({ x: 852.7, y: 1056.55 }, 0)
        .wait(1)
        .to({ x: 809.2, y: 1018.6 }, 0)
        .wait(1)
        .to({ x: 763.45, y: 980.65 }, 0)
        .wait(1)
    );

    // Calque_7
    this.instance_2 = new lib.Symbole3();
    this.instance_2.setTransform(771.65, 1923.95, 1, 1, 0, 0, 0, 1751.5, 722.6);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 788.4, y: 1888.2 }, 0)
        .wait(1)
        .to({ x: 804.5, y: 1852.65 }, 0)
        .wait(1)
        .to({ x: 820, y: 1817.25 }, 0)
        .wait(1)
        .to({ x: 834.9, y: 1782.05 }, 0)
        .wait(1)
        .to({ x: 849.25, y: 1746.95 }, 0)
        .wait(1)
        .to({ x: 862.95, y: 1712.05 }, 0)
        .wait(1)
        .to({ x: 876.05, y: 1677.35 }, 0)
        .wait(1)
        .to({ x: 888.6, y: 1642.75 }, 0)
        .wait(1)
        .to({ x: 900.5, y: 1608.35 }, 0)
        .wait(1)
        .to({ x: 911.85, y: 1574.15 }, 0)
        .wait(1)
        .to({ x: 922.55, y: 1540.05 }, 0)
        .wait(1)
        .to({ x: 932.7, y: 1506.15 }, 0)
        .wait(1)
        .to({ x: 942.2, y: 1472.4 }, 0)
        .wait(1)
        .to({ x: 951.15, y: 1438.8 }, 0)
        .wait(1)
        .to({ x: 959.5, y: 1405.4 }, 0)
        .wait(1)
        .to({ x: 967.25, y: 1372.1 }, 0)
        .wait(1)
        .to({ x: 974.4, y: 1339 }, 0)
        .wait(1)
        .to({ x: 980.95, y: 1306.1 }, 0)
        .wait(1)
        .to({ x: 986.9, y: 1273.3 }, 0)
        .wait(1)
        .to({ x: 992.25, y: 1240.7 }, 0)
        .wait(1)
        .to({ x: 997, y: 1208.25 }, 0)
        .wait(1)
        .to({ x: 1001.15, y: 1175.95 }, 0)
        .wait(1)
        .to({ x: 1004.75, y: 1143.8 }, 0)
        .wait(1)
        .to({ x: 1007.7, y: 1111.85 }, 0)
        .wait(1)
        .to({ x: 1010.05, y: 1080.05 }, 0)
        .wait(1)
        .to({ x: 1011.85, y: 1048.4 }, 0)
        .wait(1)
        .to({ x: 1013.05, y: 1016.9 }, 0)
        .wait(1)
        .to({ x: 1013.65, y: 985.6 }, 0)
        .wait(1)
        .to({ x: 1013.6, y: 954.4 }, 0)
        .wait(1)
        .to({ x: 1013, y: 923.4 }, 0)
        .wait(1)
        .to({ x: 1011.8, y: 892.55 }, 0)
        .wait(1)
        .to({ x: 1010, y: 861.85 }, 0)
        .wait(1)
        .to({ x: 1007.6, y: 831.35 }, 0)
        .wait(1)
        .to({ x: 1004.65, y: 801 }, 0)
        .wait(1)
        .to({ x: 1001.05, y: 770.75 }, 0)
        .wait(1)
        .to({ x: 996.85, y: 740.7 }, 0)
        .wait(1)
        .to({ x: 992.1, y: 710.9 }, 0)
        .wait(1)
        .to({ x: 986.7, y: 681.15 }, 0)
        .wait(1)
        .to({ x: 980.75, y: 651.55 }, 0)
        .wait(1)
        .to({ x: 974.15, y: 622.15 }, 0)
        .wait(1)
        .to({ x: 967, y: 592.9 }, 0)
        .wait(1)
        .to({ x: 959.25, y: 563.8 }, 0)
        .wait(1)
        .to({ x: 950.85, y: 534.85 }, 0)
        .wait(1)
        .to({ x: 941.9, y: 506.1 }, 0)
        .wait(1)
        .to({ x: 932.35, y: 477.45 }, 0)
        .wait(1)
        .to({ x: 922.2, y: 449 }, 0)
        .wait(1)
        .to({ x: 911.45, y: 420.7 }, 0)
        .wait(1)
        .to({ x: 900.05, y: 392.5 }, 0)
        .wait(1)
    );

    // Calque_6
    this.instance_3 = new lib.Symbole2();
    this.instance_3.setTransform(1172.55, 1883.65, 1, 1, 0, 0, 0, 1460, 763);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({ x: 1165.8, y: 1858.6 }, 0)
        .wait(1)
        .to({ x: 1159.2, y: 1833.65 }, 0)
        .wait(1)
        .to({ x: 1152.85, y: 1808.8 }, 0)
        .wait(1)
        .to({ x: 1146.7, y: 1784.05 }, 0)
        .wait(1)
        .to({ x: 1140.8, y: 1759.4 }, 0)
        .wait(1)
        .to({ x: 1135.1, y: 1734.8 }, 0)
        .wait(1)
        .to({ x: 1129.6, y: 1710.3 }, 0)
        .wait(1)
        .to({ x: 1124.3, y: 1685.9 }, 0)
        .wait(1)
        .to({ x: 1119.25, y: 1661.6 }, 0)
        .wait(1)
        .to({ x: 1114.4, y: 1637.4 }, 0)
        .wait(1)
        .to({ x: 1109.8, y: 1613.25 }, 0)
        .wait(1)
        .to({ x: 1105.4, y: 1589.25 }, 0)
        .wait(1)
        .to({ x: 1101.2, y: 1565.3 }, 0)
        .wait(1)
        .to({ x: 1097.2, y: 1541.4 }, 0)
        .wait(1)
        .to({ x: 1093.45, y: 1517.65 }, 0)
        .wait(1)
        .to({ x: 1089.9, y: 1493.95 }, 0)
        .wait(1)
        .to({ x: 1086.6, y: 1470.35 }, 0)
        .wait(1)
        .to({ x: 1083.45, y: 1446.85 }, 0)
        .wait(1)
        .to({ x: 1080.55, y: 1423.45 }, 0)
        .wait(1)
        .to({ x: 1077.9, y: 1400.1 }, 0)
        .wait(1)
        .to({ x: 1075.4, y: 1376.9 }, 0)
        .wait(1)
        .to({ x: 1073.15, y: 1353.75 }, 0)
        .wait(1)
        .to({ x: 1071.15, y: 1330.65 }, 0)
        .wait(1)
        .to({ x: 1069.3, y: 1307.7 }, 0)
        .wait(1)
        .to({ x: 1067.7, y: 1284.8 }, 0)
        .wait(1)
        .to({ x: 1066.35, y: 1262 }, 0)
        .wait(1)
        .to({ x: 1065.15, y: 1239.3 }, 0)
        .wait(1)
        .to({ x: 1064.2, y: 1216.65 }, 0)
        .wait(1)
        .to({ x: 1063.45, y: 1194.15 }, 0)
        .wait(1)
        .to({ x: 1062.95, y: 1171.7 }, 0)
        .wait(1)
        .to({ x: 1062.6, y: 1149.35 }, 0)
        .wait(1)
        .to({ x: 1062.55, y: 1127.05 }, 0)
        .wait(1)
        .to({ x: 1062.65, y: 1104.85 }, 0)
        .wait(1)
        .to({ x: 1063, y: 1082.75 }, 0)
        .wait(1)
        .to({ x: 1063.55, y: 1060.75 }, 0)
        .wait(1)
        .to({ x: 1064.3, y: 1038.85 }, 0)
        .wait(1)
        .to({ x: 1065.3, y: 1017 }, 0)
        .wait(1)
        .to({ x: 1066.5, y: 995.25 }, 0)
        .wait(1)
        .to({ x: 1067.9, y: 973.6 }, 0)
        .wait(1)
        .to({ x: 1069.55, y: 952 }, 0)
        .wait(1)
        .to({ x: 1071.4, y: 930.5 }, 0)
        .wait(1)
        .to({ x: 1073.45, y: 909.1 }, 0)
        .wait(1)
        .to({ x: 1075.75, y: 887.8 }, 0)
        .wait(1)
        .to({ x: 1078.25, y: 866.55 }, 0)
        .wait(1)
        .to({ x: 1080.95, y: 845.4 }, 0)
        .wait(1)
        .to({ x: 1083.85, y: 824.35 }, 0)
        .wait(1)
        .to({ x: 1087, y: 803.4 }, 0)
        .wait(1)
        .to({ x: 1090.35, y: 782.5 }, 0)
        .wait(1)
        .to({ x: 1093.95, y: 761.75 }, 0)
        .wait(1)
        .to({ x: 1097.75, y: 741.05 }, 0)
        .wait(1)
        .to({ x: 1101.75, y: 720.4 }, 0)
        .wait(1)
        .to({ x: 1105.95, y: 699.9 }, 0)
        .wait(1)
        .to({ x: 1110.4, y: 679.4 }, 0)
        .wait(1)
        .to({ x: 1115.05, y: 659.05 }, 0)
        .wait(1)
        .to({ x: 1119.95, y: 638.75 }, 0)
        .wait(1)
        .to({ x: 1125.05, y: 618.55 }, 0)
        .wait(1)
        .to({ x: 1130.35, y: 598.45 }, 0)
        .wait(1)
        .to({ x: 1135.85, y: 578.4 }, 0)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -384.3,
    -127.2,
    3315.6000000000004,
    4412.5
  );
  // library properties:
  lib.properties = {
    id: "AA242A978297E74683F23A98290DF676",
    width: 1920,
    height: 1080,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["AA242A978297E74683F23A98290DF676"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;

// HTML/////////////////////
var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation;

function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.eau();
  stage = new lib.Stage(canvas);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  };
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, "both", false, 1, [
    canvas,
    anim_container,
    dom_overlay_container,
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}
