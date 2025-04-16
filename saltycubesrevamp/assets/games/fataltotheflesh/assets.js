(function(cjs, an) {

    var p;
    var lib = {};

    createjs.MotionGuidePlugin.install();

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));
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

    (lib.drop6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgRAgQgKgIgBgMQgBgMADgNIAFgYIAAAEQAMAAAJACQANAEAHAHQAIAIABAMQABAKgFAOQgGAMgNACIgEAAQgKAAgJgGg");
        this.shape.setTransform(0.0202, 0.0125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.drop6, new cjs.Rectangle(-2.9,-3.8,5.9,7.6), null);

    (lib.drop5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgFAjQgNgDgJgLQgFgFgBgGIgBgMQAAgIACgEQABgEAEgDIAIgGIAJgIQAKAEAHAAIAJABQAFACAEAEQAJAHABAJQABAJgGALQgFAJgIAIQgJAHgIAAIgFgBg");
        this.shape.setTransform(-0.0109, 0.0034);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.drop5, new cjs.Rectangle(-3.5,-3.5,7,7.1), null);

    (lib.drop4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgMArQgHgCgFgDQgFgDgDgEQgEgIgBgMIAAgWQABgLAEgFQAEgHALgIIACgEQAKABAJAEQALAEAJAIQAKAIADAMQABAEAAAFIgCAOIgEAPQgCAIgDADQgGAGgNABQgJAAgLgEg");
        this.shape.setTransform(0.0208, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.drop4, new cjs.Rectangle(-3.8,-4.6,7.6,9.3), null);

    (lib.drop3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgHApQgOgCgIgJQgIgIAAgPQAAgLAGgLIANgUIANgDIANgCQAHgBAHADQAGACAFAKQAEAKABAKQABAMgFALQgFANgLAHQgHAEgLAAIgHAAg");
        this.shape.setTransform(0.0091, 0.0125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.drop3, new cjs.Rectangle(-3.8,-4.1,7.6,8.3), null);

    (lib.drop2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgRAsQgNgCgFgLQgEgMgCgJQgDgNAFgLQAEgKANgKIgBAAQAFgHALgBQALgDAKACQANADAHAIQAIAKABAOQABAMgGAMQgGAOgMAHQgHAFgKABQgGACgGAAIgIgBg");
        this.shape.setTransform(0.0324, 0.0337);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.drop2, new cjs.Rectangle(-4.3,-4.4,8.7,8.9), null);

    (lib.drop1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgUA/QgNgFgGgJQgHgKAAgNQAAgMAEgNQAEgLAFgLQAGgMAHgKQAJgNAIgIIAAAIQALgBAJAFQALAEAHALQAHAKADANQADANgBANQgBANgFALQgGANgKAIQgKAIgPAAQgLgBgJgBg");
        this.shape.setTransform(0.4375, 0.95);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.drop1, new cjs.Rectangle(-4.2,-5.5,9.3,13), null);

    (lib.drip6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.instance = new lib.drop6();
        this.instance.parent = this;
        this.instance.setTransform(0.25, 3.75, 0.9947, 0.9891);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
            _off: false
        }, 0).to({
            scaleY: 0.9837,
            guide: {
                path: [0.4, 3.8, 0.5, 6.4, 0.3, 9.1, 0.2, 11.7, -0.1, 14.4, -0.3, 17, -0.1, 19.7, 0.3, 25.2, 0.9, 30.7, 1.6, 36.3, 2.2, 41.7, 3, 49.2, 3.1, 56.7, 3.2, 64.2, 3, 71.6, 3, 80.3, 4.1, 88.8, 5.2, 97.3, 6.6, 106, 8.8, 119.2, 9.9, 132.2, 11, 145.1, 10.6, 158.4, 10.4, 161.6, 10.4, 164.5, 10.4, 165.9, 10.6, 167.4]
            }
        }, 94).wait(1));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_5 = new cjs.Graphics().p("AnBAkIAAhHIODAAIAABHg");
        var mask_graphics_6 = new cjs.Graphics().p("AnBAtIAAhZIODAAIAABZg");
        var mask_graphics_7 = new cjs.Graphics().p("AnBA2IAAhrIODAAIAABrg");
        var mask_graphics_8 = new cjs.Graphics().p("AnBA/IAAh9IODAAIAAB9g");
        var mask_graphics_9 = new cjs.Graphics().p("AnBBIIAAiPIODAAIAACPg");
        var mask_graphics_10 = new cjs.Graphics().p("AnBBRIAAihIODAAIAAChg");
        var mask_graphics_11 = new cjs.Graphics().p("AnBBbIAAi1IODAAIAAC1g");
        var mask_graphics_12 = new cjs.Graphics().p("AnBBkIAAjHIODAAIAADHg");
        var mask_graphics_13 = new cjs.Graphics().p("AnBBtIAAjZIODAAIAADZg");
        var mask_graphics_14 = new cjs.Graphics().p("AnBB2IAAjrIODAAIAADrg");
        var mask_graphics_15 = new cjs.Graphics().p("AnBB/IAAj9IODAAIAAD9g");
        var mask_graphics_16 = new cjs.Graphics().p("AnBCIIAAkPIODAAIAAEPg");
        var mask_graphics_17 = new cjs.Graphics().p("AnBCRIAAkhIODAAIAAEhg");
        var mask_graphics_18 = new cjs.Graphics().p("AnBCaIAAkzIODAAIAAEzg");
        var mask_graphics_19 = new cjs.Graphics().p("AnBCjIAAlFIODAAIAAFFg");
        var mask_graphics_20 = new cjs.Graphics().p("AnBCsIAAlXIODAAIAAFXg");
        var mask_graphics_21 = new cjs.Graphics().p("AnBC1IAAlpIODAAIAAFpg");
        var mask_graphics_22 = new cjs.Graphics().p("AnBC+IAAl7IODAAIAAF7g");
        var mask_graphics_23 = new cjs.Graphics().p("AnBDHIAAmNIODAAIAAGNg");
        var mask_graphics_24 = new cjs.Graphics().p("AnBDRIAAmhIODAAIAAGhg");
        var mask_graphics_25 = new cjs.Graphics().p("AnBDaIAAmzIODAAIAAGzg");
        var mask_graphics_26 = new cjs.Graphics().p("AnBDjIAAnFIODAAIAAHFg");
        var mask_graphics_27 = new cjs.Graphics().p("AnBDsIAAnXIODAAIAAHXg");
        var mask_graphics_28 = new cjs.Graphics().p("AnBD1IAAnpIODAAIAAHpg");
        var mask_graphics_29 = new cjs.Graphics().p("AnBD+IAAn7IODAAIAAH7g");
        var mask_graphics_30 = new cjs.Graphics().p("AnBEHIAAoNIODAAIAAINg");
        var mask_graphics_31 = new cjs.Graphics().p("AnBEQIAAofIODAAIAAIfg");
        var mask_graphics_32 = new cjs.Graphics().p("AnBEZIAAoxIODAAIAAIxg");
        var mask_graphics_33 = new cjs.Graphics().p("AnBEiIAApDIODAAIAAJDg");
        var mask_graphics_34 = new cjs.Graphics().p("AnBErIAApVIODAAIAAJVg");
        var mask_graphics_35 = new cjs.Graphics().p("AnBE0IAApnIODAAIAAJng");
        var mask_graphics_36 = new cjs.Graphics().p("AnBE9IAAp5IODAAIAAJ5g");
        var mask_graphics_37 = new cjs.Graphics().p("AnBFHIAAqNIODAAIAAKNg");
        var mask_graphics_38 = new cjs.Graphics().p("AnBFQIAAqfIODAAIAAKfg");
        var mask_graphics_39 = new cjs.Graphics().p("AnBFZIAAqxIODAAIAAKxg");
        var mask_graphics_40 = new cjs.Graphics().p("AnBFiIAArDIODAAIAALDg");
        var mask_graphics_41 = new cjs.Graphics().p("AnBFrIAArVIODAAIAALVg");
        var mask_graphics_42 = new cjs.Graphics().p("AnBF0IAArnIODAAIAALng");
        var mask_graphics_43 = new cjs.Graphics().p("AnBF9IAAr5IODAAIAAL5g");
        var mask_graphics_44 = new cjs.Graphics().p("AnBGGIAAsLIODAAIAAMLg");
        var mask_graphics_45 = new cjs.Graphics().p("AnBGPIAAsdIODAAIAAMdg");
        var mask_graphics_46 = new cjs.Graphics().p("AnBGYIAAsvIODAAIAAMvg");
        var mask_graphics_47 = new cjs.Graphics().p("AnBGhIAAtBIODAAIAANBg");
        var mask_graphics_48 = new cjs.Graphics().p("AnBGqIAAtTIODAAIAANTg");
        var mask_graphics_49 = new cjs.Graphics().p("AnBGzIAAtlIODAAIAANlg");
        var mask_graphics_50 = new cjs.Graphics().p("AnBG9IAAt5IODAAIAAN5g");
        var mask_graphics_51 = new cjs.Graphics().p("AnBHGIAAuLIODAAIAAOLg");
        var mask_graphics_52 = new cjs.Graphics().p("AnBHPIAAudIODAAIAAOdg");
        var mask_graphics_53 = new cjs.Graphics().p("AnBHYIAAuvIODAAIAAOvg");
        var mask_graphics_54 = new cjs.Graphics().p("AnBHhIAAvBIODAAIAAPBg");
        var mask_graphics_55 = new cjs.Graphics().p("AnBHqIAAvTIODAAIAAPTg");
        var mask_graphics_56 = new cjs.Graphics().p("AnBHzIAAvlIODAAIAAPlg");
        var mask_graphics_57 = new cjs.Graphics().p("AnBH8IAAv3IODAAIAAP3g");
        var mask_graphics_58 = new cjs.Graphics().p("AnBIFIAAwJIODAAIAAQJg");
        var mask_graphics_59 = new cjs.Graphics().p("AnBIOIAAwbIODAAIAAQbg");
        var mask_graphics_60 = new cjs.Graphics().p("AnBIXIAAwtIODAAIAAQtg");
        var mask_graphics_61 = new cjs.Graphics().p("AnBIgIAAw/IODAAIAAQ/g");
        var mask_graphics_62 = new cjs.Graphics().p("AnBIqIAAxTIODAAIAARTg");
        var mask_graphics_63 = new cjs.Graphics().p("AnBIzIAAxlIODAAIAARlg");
        var mask_graphics_64 = new cjs.Graphics().p("AnBI8IAAx3IODAAIAAR3g");
        var mask_graphics_65 = new cjs.Graphics().p("AnBJFIAAyJIODAAIAASJg");
        var mask_graphics_66 = new cjs.Graphics().p("AnBJOIAAybIODAAIAASbg");
        var mask_graphics_67 = new cjs.Graphics().p("AnBJXIAAytIODAAIAAStg");
        var mask_graphics_68 = new cjs.Graphics().p("AnBJgIAAy/IODAAIAAS/g");
        var mask_graphics_69 = new cjs.Graphics().p("AnBJpIAAzRIODAAIAATRg");
        var mask_graphics_70 = new cjs.Graphics().p("AnBJyIAAzjIODAAIAATjg");
        var mask_graphics_71 = new cjs.Graphics().p("AnBJ7IAAz1IODAAIAAT1g");
        var mask_graphics_72 = new cjs.Graphics().p("AnBKEIAA0HIODAAIAAUHg");
        var mask_graphics_73 = new cjs.Graphics().p("AnBKNIAA0ZIODAAIAAUZg");
        var mask_graphics_74 = new cjs.Graphics().p("AnBKWIAA0rIODAAIAAUrg");
        var mask_graphics_75 = new cjs.Graphics().p("AnBKgIAA0/IODAAIAAU/g");
        var mask_graphics_76 = new cjs.Graphics().p("AnBKpIAA1RIODAAIAAVRg");
        var mask_graphics_77 = new cjs.Graphics().p("AnBKyIAA1jIODAAIAAVjg");
        var mask_graphics_78 = new cjs.Graphics().p("AnBK7IAA11IODAAIAAV1g");
        var mask_graphics_79 = new cjs.Graphics().p("AnBLEIAA2HIODAAIAAWHg");
        var mask_graphics_80 = new cjs.Graphics().p("AnBLNIAA2ZIODAAIAAWZg");
        var mask_graphics_81 = new cjs.Graphics().p("AnBLWIAA2rIODAAIAAWrg");
        var mask_graphics_82 = new cjs.Graphics().p("AnBLfIAA29IODAAIAAW9g");
        var mask_graphics_83 = new cjs.Graphics().p("AnBLoIAA3PIODAAIAAXPg");
        var mask_graphics_84 = new cjs.Graphics().p("AnBLxIAA3hIODAAIAAXhg");
        var mask_graphics_85 = new cjs.Graphics().p("AnBL6IAA3zIODAAIAAXzg");
        var mask_graphics_86 = new cjs.Graphics().p("AnBMDIAA4FIODAAIAAYFg");
        var mask_graphics_87 = new cjs.Graphics().p("AnBMMIAA4XIODAAIAAYXg");
        var mask_graphics_88 = new cjs.Graphics().p("AnBMWIAA4rIODAAIAAYrg");
        var mask_graphics_89 = new cjs.Graphics().p("AnBMfIAA49IODAAIAAY9g");
        var mask_graphics_90 = new cjs.Graphics().p("AnBMoIAA5PIODAAIAAZPg");
        var mask_graphics_91 = new cjs.Graphics().p("AnBMxIAA5hIODAAIAAZhg");
        var mask_graphics_92 = new cjs.Graphics().p("AnBM6IAA5zIODAAIAAZzg");
        var mask_graphics_93 = new cjs.Graphics().p("AnBNDIAA6FIODAAIAAaFg");
        var mask_graphics_94 = new cjs.Graphics().p("AnBNMIAA6XIODAAIAAaXg");
        var mask_graphics_95 = new cjs.Graphics().p("AnBNVIAA6pIODAAIAAapg");
        var mask_graphics_96 = new cjs.Graphics().p("AnBNeIAA67IODAAIAAa7g");
        var mask_graphics_97 = new cjs.Graphics().p("AnBNnIAA7NIODAAIAAbNg");
        var mask_graphics_98 = new cjs.Graphics().p("AnBNwIAA7fIODAAIAAbfg");
        var mask_graphics_99 = new cjs.Graphics().p("AnBN5IAA7xIODAAIAAbxg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(5).to({
            graphics: mask_graphics_5,
            x: 15.5043,
            y: -2.6427
        }).wait(1).to({
            graphics: mask_graphics_6,
            x: 15.5043,
            y: -1.796
        }).wait(1).to({
            graphics: mask_graphics_7,
            x: 15.5043,
            y: -0.9493
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: 15.5043,
            y: -0.1027
        }).wait(1).to({
            graphics: mask_graphics_9,
            x: 15.5043,
            y: 0.744
        }).wait(1).to({
            graphics: mask_graphics_10,
            x: 15.5043,
            y: 1.5907
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: 15.5043,
            y: 2.4374
        }).wait(1).to({
            graphics: mask_graphics_12,
            x: 15.5043,
            y: 3.284
        }).wait(1).to({
            graphics: mask_graphics_13,
            x: 15.5043,
            y: 4.1307
        }).wait(1).to({
            graphics: mask_graphics_14,
            x: 15.5043,
            y: 4.9774
        }).wait(1).to({
            graphics: mask_graphics_15,
            x: 15.5043,
            y: 5.824
        }).wait(1).to({
            graphics: mask_graphics_16,
            x: 15.5043,
            y: 6.6707
        }).wait(1).to({
            graphics: mask_graphics_17,
            x: 15.5043,
            y: 7.5174
        }).wait(1).to({
            graphics: mask_graphics_18,
            x: 15.5043,
            y: 8.3641
        }).wait(1).to({
            graphics: mask_graphics_19,
            x: 15.5043,
            y: 9.2107
        }).wait(1).to({
            graphics: mask_graphics_20,
            x: 15.5043,
            y: 10.0574
        }).wait(1).to({
            graphics: mask_graphics_21,
            x: 15.5043,
            y: 10.9041
        }).wait(1).to({
            graphics: mask_graphics_22,
            x: 15.5043,
            y: 11.7507
        }).wait(1).to({
            graphics: mask_graphics_23,
            x: 15.5043,
            y: 12.5974
        }).wait(1).to({
            graphics: mask_graphics_24,
            x: 15.5043,
            y: 13.4441
        }).wait(1).to({
            graphics: mask_graphics_25,
            x: 15.5043,
            y: 14.2907
        }).wait(1).to({
            graphics: mask_graphics_26,
            x: 15.5043,
            y: 15.1374
        }).wait(1).to({
            graphics: mask_graphics_27,
            x: 15.5043,
            y: 15.9841
        }).wait(1).to({
            graphics: mask_graphics_28,
            x: 15.5043,
            y: 16.8308
        }).wait(1).to({
            graphics: mask_graphics_29,
            x: 15.5043,
            y: 17.6774
        }).wait(1).to({
            graphics: mask_graphics_30,
            x: 15.5043,
            y: 18.5241
        }).wait(1).to({
            graphics: mask_graphics_31,
            x: 15.5043,
            y: 19.3708
        }).wait(1).to({
            graphics: mask_graphics_32,
            x: 15.5043,
            y: 20.2174
        }).wait(1).to({
            graphics: mask_graphics_33,
            x: 15.5043,
            y: 21.0641
        }).wait(1).to({
            graphics: mask_graphics_34,
            x: 15.5043,
            y: 21.9108
        }).wait(1).to({
            graphics: mask_graphics_35,
            x: 15.5043,
            y: 22.7575
        }).wait(1).to({
            graphics: mask_graphics_36,
            x: 15.5043,
            y: 23.6041
        }).wait(1).to({
            graphics: mask_graphics_37,
            x: 15.5043,
            y: 24.4508
        }).wait(1).to({
            graphics: mask_graphics_38,
            x: 15.5043,
            y: 25.2975
        }).wait(1).to({
            graphics: mask_graphics_39,
            x: 15.5043,
            y: 26.1441
        }).wait(1).to({
            graphics: mask_graphics_40,
            x: 15.5043,
            y: 26.9908
        }).wait(1).to({
            graphics: mask_graphics_41,
            x: 15.5043,
            y: 27.8375
        }).wait(1).to({
            graphics: mask_graphics_42,
            x: 15.5043,
            y: 28.6841
        }).wait(1).to({
            graphics: mask_graphics_43,
            x: 15.5043,
            y: 29.5308
        }).wait(1).to({
            graphics: mask_graphics_44,
            x: 15.5043,
            y: 30.3775
        }).wait(1).to({
            graphics: mask_graphics_45,
            x: 15.5043,
            y: 31.2242
        }).wait(1).to({
            graphics: mask_graphics_46,
            x: 15.5043,
            y: 32.0708
        }).wait(1).to({
            graphics: mask_graphics_47,
            x: 15.5043,
            y: 32.9175
        }).wait(1).to({
            graphics: mask_graphics_48,
            x: 15.5043,
            y: 33.7642
        }).wait(1).to({
            graphics: mask_graphics_49,
            x: 15.5043,
            y: 34.6108
        }).wait(1).to({
            graphics: mask_graphics_50,
            x: 15.5043,
            y: 35.4575
        }).wait(1).to({
            graphics: mask_graphics_51,
            x: 15.5043,
            y: 36.3042
        }).wait(1).to({
            graphics: mask_graphics_52,
            x: 15.5043,
            y: 37.1508
        }).wait(1).to({
            graphics: mask_graphics_53,
            x: 15.5043,
            y: 37.9975
        }).wait(1).to({
            graphics: mask_graphics_54,
            x: 15.5043,
            y: 38.8442
        }).wait(1).to({
            graphics: mask_graphics_55,
            x: 15.5043,
            y: 39.6909
        }).wait(1).to({
            graphics: mask_graphics_56,
            x: 15.5043,
            y: 40.5375
        }).wait(1).to({
            graphics: mask_graphics_57,
            x: 15.5043,
            y: 41.3842
        }).wait(1).to({
            graphics: mask_graphics_58,
            x: 15.5043,
            y: 42.2309
        }).wait(1).to({
            graphics: mask_graphics_59,
            x: 15.5043,
            y: 43.0775
        }).wait(1).to({
            graphics: mask_graphics_60,
            x: 15.5043,
            y: 43.9242
        }).wait(1).to({
            graphics: mask_graphics_61,
            x: 15.5043,
            y: 44.7709
        }).wait(1).to({
            graphics: mask_graphics_62,
            x: 15.5043,
            y: 45.6176
        }).wait(1).to({
            graphics: mask_graphics_63,
            x: 15.5043,
            y: 46.4642
        }).wait(1).to({
            graphics: mask_graphics_64,
            x: 15.5043,
            y: 47.3109
        }).wait(1).to({
            graphics: mask_graphics_65,
            x: 15.5043,
            y: 48.1576
        }).wait(1).to({
            graphics: mask_graphics_66,
            x: 15.5043,
            y: 49.0042
        }).wait(1).to({
            graphics: mask_graphics_67,
            x: 15.5043,
            y: 49.8509
        }).wait(1).to({
            graphics: mask_graphics_68,
            x: 15.5043,
            y: 50.6976
        }).wait(1).to({
            graphics: mask_graphics_69,
            x: 15.5043,
            y: 51.5442
        }).wait(1).to({
            graphics: mask_graphics_70,
            x: 15.5043,
            y: 52.3909
        }).wait(1).to({
            graphics: mask_graphics_71,
            x: 15.5043,
            y: 53.2376
        }).wait(1).to({
            graphics: mask_graphics_72,
            x: 15.5043,
            y: 54.0843
        }).wait(1).to({
            graphics: mask_graphics_73,
            x: 15.5043,
            y: 54.9309
        }).wait(1).to({
            graphics: mask_graphics_74,
            x: 15.5043,
            y: 55.7776
        }).wait(1).to({
            graphics: mask_graphics_75,
            x: 15.5043,
            y: 56.6243
        }).wait(1).to({
            graphics: mask_graphics_76,
            x: 15.5043,
            y: 57.4709
        }).wait(1).to({
            graphics: mask_graphics_77,
            x: 15.5043,
            y: 58.3176
        }).wait(1).to({
            graphics: mask_graphics_78,
            x: 15.5043,
            y: 59.1643
        }).wait(1).to({
            graphics: mask_graphics_79,
            x: 15.5043,
            y: 60.0109
        }).wait(1).to({
            graphics: mask_graphics_80,
            x: 15.5043,
            y: 60.8576
        }).wait(1).to({
            graphics: mask_graphics_81,
            x: 15.5043,
            y: 61.7043
        }).wait(1).to({
            graphics: mask_graphics_82,
            x: 15.5043,
            y: 62.551
        }).wait(1).to({
            graphics: mask_graphics_83,
            x: 15.5043,
            y: 63.3976
        }).wait(1).to({
            graphics: mask_graphics_84,
            x: 15.5043,
            y: 64.2443
        }).wait(1).to({
            graphics: mask_graphics_85,
            x: 15.5043,
            y: 65.091
        }).wait(1).to({
            graphics: mask_graphics_86,
            x: 15.5043,
            y: 65.9376
        }).wait(1).to({
            graphics: mask_graphics_87,
            x: 15.5043,
            y: 66.7843
        }).wait(1).to({
            graphics: mask_graphics_88,
            x: 15.5043,
            y: 67.631
        }).wait(1).to({
            graphics: mask_graphics_89,
            x: 15.5043,
            y: 68.4777
        }).wait(1).to({
            graphics: mask_graphics_90,
            x: 15.5043,
            y: 69.3243
        }).wait(1).to({
            graphics: mask_graphics_91,
            x: 15.5043,
            y: 70.171
        }).wait(1).to({
            graphics: mask_graphics_92,
            x: 15.5043,
            y: 71.0177
        }).wait(1).to({
            graphics: mask_graphics_93,
            x: 15.5043,
            y: 71.8643
        }).wait(1).to({
            graphics: mask_graphics_94,
            x: 15.5043,
            y: 72.711
        }).wait(1).to({
            graphics: mask_graphics_95,
            x: 15.5043,
            y: 73.5577
        }).wait(1).to({
            graphics: mask_graphics_96,
            x: 15.5043,
            y: 74.4043
        }).wait(1).to({
            graphics: mask_graphics_97,
            x: 15.5043,
            y: 75.251
        }).wait(1).to({
            graphics: mask_graphics_98,
            x: 15.5043,
            y: 76.0977
        }).wait(1).to({
            graphics: mask_graphics_99,
            x: 15.5043,
            y: 76.9444
        }).wait(1));

        // Layer 6
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AA2NbIgIgFQgJgEgCgJIgEgMQgDgGgBgHIgDgaIgBgdIACgPIABgOIABgJIACgJIgBgXIACgWIgCgXIABgWQAAgGgCgFIgCgMIAAgXIABgNIACgMIgCgYIgCgaIAAgMIABgNIgDgOQgDgGAAgGQgBgIABgGQACgHgBgGIgEgbIgEgbIgDgZIgDgMIgDgMQAAgHABgGQACgHAAgGIgEgZIgCgZIgFgaQgBgHgDgGQgDgGgCgHQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIgFgXIgFgZIgDgLIgEgMIgEgZIgDgZIABgMQABgGAAgHIgFgMQgDgFgBgGIAAgNIAAgLIgEgZIABgMIAAgNIgCgYIgBgNQgCgGAAgGIABgNIAAgNQAAgGgCgGIgCgNIABgMIABgIIABgMIACgVIgBgWIABgLIACgMIgBgWIgCgNIgDgNIgBgZIABgMIABgNIABgNIABgMQgBgGgCgHQgCgFgBgHIABgMIAAgNIgBgZQgCgIgCgEQgCgDgBgIIAAgMIAAgIIgBgMIgDgLIgDgKIgCgXIAAgMQACgFgBgGIgDgZQgBgGgDgGQgDgGgBgHIgBgYIAAgNIAAgMIABgNIABgNIgCgOIgBgNIACgdQAAgHADgFQADgFAAgGIABgbIgCgNIgDgOQAAgEADgFIAGgIIAHgIQAEgDAFgBQAGAAAFABQAFACAEADQADADACAGIABALIABAZIABAOQABAIgBAHIgCAPIgDAOIgBAYIgCAYQAAAHACAHQACAHABAGIgBAMIAAALIACAWIADALIACALIACAWIgBAOQgCAGABAGQABAGADAHQADAFABAHIAAAMIAAANIAAAMIABAMIACAMIABAIIABALQABAFADAFIAEAKQAAAGgCAGQgDAHAAAGQABAHADAFQABAHABAGIABAZIABAZIgBANQgBAGAAAGIgBAMIAAANIAAAYQAAAHABAGQACAHAAAFIACAZIgCAZIgBAMIgCAIIAAAMIAAAWIABALIACALIgBALIgBAMIACALIADALIgCALIgBAMQABAGACAGQACAGAAAGIADANIACALIAAANIABAMIACAZIAEAMQADAGABAGQAAAGgBAHQgBAGABAHIAEAZIAFAZIADAMQACAHABAGQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQABAFADAFQADAFABAFQABAGgBAHIgBAMIAFAZIAFAYIAFAXQABAGgBAHQgBAFAAAHIADAMIADANIgBANQgBAHABAHIADAMIADAMIACAOIADAMQAAAGgBAHQgCAHAAAFIACAaIABAZIACAMIACANIABAYIgBANIgBANIACANIACANIgBAbIgBAbIACAOQACAHAAAHQgBAHgCAGQgDAGAAAIQAAAGACADQADADAAAGQAAAGgDAFQgDAFAAAFIgBAZIACAMIADANQAAAMADANQADALgEAIQgGAIgLACIgDABIgGgBg");
        this.shape.setTransform(4.9393, 86.2);
        this.shape._off = true;

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({
            _off: false
        }, 0).wait(95));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.2,0,17.2,171.1);

    (lib.drip5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.instance = new lib.drop5();
        this.instance.parent = this;
        this.instance.setTransform(-0.05, 3.3, 0.9947, 0.989);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
            _off: false
        }, 0).to({
            scaleY: 0.9837,
            guide: {
                path: [0.1, 3.4, -0.1, 12, 0.1, 20.7, 0.2, 29.3, 0.5, 38, 0.5, 43.7, 0.3, 49.4, 0.2, 55.1, 0.3, 60.8, 0.4, 65.9, 1, 71, 1.6, 76, 2.1, 81.1, 2.7, 86.2, 2.7, 91.2, 2.7, 97.1, 3.1, 103, 3.5, 108.9, 3.7, 114.8, 3.9, 120.6, 3.5, 126.5, 3, 132.8, 1.9, 139.1, 1, 145.4, 0, 151.7, -1, 157.9, -1.1, 164.3, -1.1, 166.7, -0.6, 168.9, -0.2, 171.1, 0.2, 173.3, 0.2, 173.5, 0.3, 173.7]
            }
        }, 94).wait(1));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_5 = new cjs.Graphics().p("AnBAkIAAhHIODAAIAABHg");
        var mask_graphics_6 = new cjs.Graphics().p("AnBAuIAAhbIODAAIAABbg");
        var mask_graphics_7 = new cjs.Graphics().p("AnBA3IAAhtIODAAIAABtg");
        var mask_graphics_8 = new cjs.Graphics().p("AnBBBIAAiBIODAAIAACBg");
        var mask_graphics_9 = new cjs.Graphics().p("AnBBLIAAiVIODAAIAACVg");
        var mask_graphics_10 = new cjs.Graphics().p("AnBBUIAAinIODAAIAACng");
        var mask_graphics_11 = new cjs.Graphics().p("AnBBeIAAi7IODAAIAAC7g");
        var mask_graphics_12 = new cjs.Graphics().p("AnBBnIAAjNIODAAIAADNg");
        var mask_graphics_13 = new cjs.Graphics().p("AnBBxIAAjhIODAAIAADhg");
        var mask_graphics_14 = new cjs.Graphics().p("AnBB7IAAj1IODAAIAAD1g");
        var mask_graphics_15 = new cjs.Graphics().p("AnBCEIAAkHIODAAIAAEHg");
        var mask_graphics_16 = new cjs.Graphics().p("AnBCOIAAkbIODAAIAAEbg");
        var mask_graphics_17 = new cjs.Graphics().p("AnBCYIAAkvIODAAIAAEvg");
        var mask_graphics_18 = new cjs.Graphics().p("AnBChIAAlBIODAAIAAFBg");
        var mask_graphics_19 = new cjs.Graphics().p("AnBCrIAAlVIODAAIAAFVg");
        var mask_graphics_20 = new cjs.Graphics().p("AnBC0IAAlnIODAAIAAFng");
        var mask_graphics_21 = new cjs.Graphics().p("AnBC+IAAl7IODAAIAAF7g");
        var mask_graphics_22 = new cjs.Graphics().p("AnBDIIAAmPIODAAIAAGPg");
        var mask_graphics_23 = new cjs.Graphics().p("AnBDRIAAmhIODAAIAAGhg");
        var mask_graphics_24 = new cjs.Graphics().p("AnBDbIAAm1IODAAIAAG1g");
        var mask_graphics_25 = new cjs.Graphics().p("AnBDkIAAnHIODAAIAAHHg");
        var mask_graphics_26 = new cjs.Graphics().p("AnBDuIAAnbIODAAIAAHbg");
        var mask_graphics_27 = new cjs.Graphics().p("AnBD4IAAnvIODAAIAAHvg");
        var mask_graphics_28 = new cjs.Graphics().p("AnBEBIAAoBIODAAIAAIBg");
        var mask_graphics_29 = new cjs.Graphics().p("AnBELIAAoVIODAAIAAIVg");
        var mask_graphics_30 = new cjs.Graphics().p("AnBEVIAAopIODAAIAAIpg");
        var mask_graphics_31 = new cjs.Graphics().p("AnBEeIAAo7IODAAIAAI7g");
        var mask_graphics_32 = new cjs.Graphics().p("AnBEoIAApPIODAAIAAJPg");
        var mask_graphics_33 = new cjs.Graphics().p("AnBExIAAphIODAAIAAJhg");
        var mask_graphics_34 = new cjs.Graphics().p("AnBE7IAAp1IODAAIAAJ1g");
        var mask_graphics_35 = new cjs.Graphics().p("AnBFFIAAqJIODAAIAAKJg");
        var mask_graphics_36 = new cjs.Graphics().p("AnBFOIAAqbIODAAIAAKbg");
        var mask_graphics_37 = new cjs.Graphics().p("AnBFYIAAqvIODAAIAAKvg");
        var mask_graphics_38 = new cjs.Graphics().p("AnBFiIAArDIODAAIAALDg");
        var mask_graphics_39 = new cjs.Graphics().p("AnBFrIAArVIODAAIAALVg");
        var mask_graphics_40 = new cjs.Graphics().p("AnBF1IAArpIODAAIAALpg");
        var mask_graphics_41 = new cjs.Graphics().p("AnBF+IAAr7IODAAIAAL7g");
        var mask_graphics_42 = new cjs.Graphics().p("AnBGIIAAsPIODAAIAAMPg");
        var mask_graphics_43 = new cjs.Graphics().p("AnBGSIAAsjIODAAIAAMjg");
        var mask_graphics_44 = new cjs.Graphics().p("AnBGbIAAs1IODAAIAAM1g");
        var mask_graphics_45 = new cjs.Graphics().p("AnBGlIAAtJIODAAIAANJg");
        var mask_graphics_46 = new cjs.Graphics().p("AnBGvIAAtdIODAAIAANdg");
        var mask_graphics_47 = new cjs.Graphics().p("AnBG4IAAtvIODAAIAANvg");
        var mask_graphics_48 = new cjs.Graphics().p("AnBHCIAAuDIODAAIAAODg");
        var mask_graphics_49 = new cjs.Graphics().p("AnBHLIAAuVIODAAIAAOVg");
        var mask_graphics_50 = new cjs.Graphics().p("AnBHVIAAupIODAAIAAOpg");
        var mask_graphics_51 = new cjs.Graphics().p("AnBHfIAAu9IODAAIAAO9g");
        var mask_graphics_52 = new cjs.Graphics().p("AnBHoIAAvPIODAAIAAPPg");
        var mask_graphics_53 = new cjs.Graphics().p("AnBHyIAAvjIODAAIAAPjg");
        var mask_graphics_54 = new cjs.Graphics().p("AnBH7IAAv1IODAAIAAP1g");
        var mask_graphics_55 = new cjs.Graphics().p("AnBIFIAAwJIODAAIAAQJg");
        var mask_graphics_56 = new cjs.Graphics().p("AnBIPIAAwdIODAAIAAQdg");
        var mask_graphics_57 = new cjs.Graphics().p("AnBIYIAAwvIODAAIAAQvg");
        var mask_graphics_58 = new cjs.Graphics().p("AnBIiIAAxDIODAAIAARDg");
        var mask_graphics_59 = new cjs.Graphics().p("AnBIsIAAxXIODAAIAARXg");
        var mask_graphics_60 = new cjs.Graphics().p("AnBI1IAAxpIODAAIAARpg");
        var mask_graphics_61 = new cjs.Graphics().p("AnBI/IAAx9IODAAIAAR9g");
        var mask_graphics_62 = new cjs.Graphics().p("AnBJIIAAyPIODAAIAASPg");
        var mask_graphics_63 = new cjs.Graphics().p("AnBJSIAAyjIODAAIAASjg");
        var mask_graphics_64 = new cjs.Graphics().p("AnBJcIAAy3IODAAIAAS3g");
        var mask_graphics_65 = new cjs.Graphics().p("AnBJlIAAzJIODAAIAATJg");
        var mask_graphics_66 = new cjs.Graphics().p("AnBJvIAAzdIODAAIAATdg");
        var mask_graphics_67 = new cjs.Graphics().p("AnBJ5IAAzxIODAAIAATxg");
        var mask_graphics_68 = new cjs.Graphics().p("AnBKCIAA0DIODAAIAAUDg");
        var mask_graphics_69 = new cjs.Graphics().p("AnBKMIAA0XIODAAIAAUXg");
        var mask_graphics_70 = new cjs.Graphics().p("AnBKVIAA0pIODAAIAAUpg");
        var mask_graphics_71 = new cjs.Graphics().p("AnBKfIAA09IODAAIAAU9g");
        var mask_graphics_72 = new cjs.Graphics().p("AnBKpIAA1RIODAAIAAVRg");
        var mask_graphics_73 = new cjs.Graphics().p("AnBKyIAA1jIODAAIAAVjg");
        var mask_graphics_74 = new cjs.Graphics().p("AnBK8IAA13IODAAIAAV3g");
        var mask_graphics_75 = new cjs.Graphics().p("AnBLGIAA2KIODAAIAAWKg");
        var mask_graphics_76 = new cjs.Graphics().p("AnBLPIAA2dIODAAIAAWdg");
        var mask_graphics_77 = new cjs.Graphics().p("AnBLZIAA2xIODAAIAAWxg");
        var mask_graphics_78 = new cjs.Graphics().p("AnBLiIAA3DIODAAIAAXDg");
        var mask_graphics_79 = new cjs.Graphics().p("AnBLsIAA3XIODAAIAAXXg");
        var mask_graphics_80 = new cjs.Graphics().p("AnBL2IAA3rIODAAIAAXrg");
        var mask_graphics_81 = new cjs.Graphics().p("AnBL/IAA39IODAAIAAX9g");
        var mask_graphics_82 = new cjs.Graphics().p("AnBMJIAA4RIODAAIAAYRg");
        var mask_graphics_83 = new cjs.Graphics().p("AnBMSIAA4jIODAAIAAYjg");
        var mask_graphics_84 = new cjs.Graphics().p("AnBMcIAA43IODAAIAAY3g");
        var mask_graphics_85 = new cjs.Graphics().p("AnBMmIAA5LIODAAIAAZLg");
        var mask_graphics_86 = new cjs.Graphics().p("AnBMvIAA5dIODAAIAAZdg");
        var mask_graphics_87 = new cjs.Graphics().p("AnBM5IAA5xIODAAIAAZxg");
        var mask_graphics_88 = new cjs.Graphics().p("AnBNDIAA6FIODAAIAAaFg");
        var mask_graphics_89 = new cjs.Graphics().p("AnBNMIAA6XIODAAIAAaXg");
        var mask_graphics_90 = new cjs.Graphics().p("AnBNWIAA6rIODAAIAAarg");
        var mask_graphics_91 = new cjs.Graphics().p("AnBNfIAA69IODAAIAAa9g");
        var mask_graphics_92 = new cjs.Graphics().p("AnBNpIAA7RIODAAIAAbRg");
        var mask_graphics_93 = new cjs.Graphics().p("AnBNzIAA7lIODAAIAAblg");
        var mask_graphics_94 = new cjs.Graphics().p("AnBN8IAA73IODAAIAAb3g");
        var mask_graphics_95 = new cjs.Graphics().p("AnBOGIAA8LIODAAIAAcLg");
        var mask_graphics_96 = new cjs.Graphics().p("AnBOQIAA8fIODAAIAAcfg");
        var mask_graphics_97 = new cjs.Graphics().p("AnBOZIAA8xIODAAIAAcxg");
        var mask_graphics_98 = new cjs.Graphics().p("AnBOjIAA9FIODAAIAAdFg");
        var mask_graphics_99 = new cjs.Graphics().p("AnBOsIAA9XIODAAIAAdXg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(5).to({
            graphics: mask_graphics_5,
            x: 15.7543,
            y: -1.6427
        }).wait(1).to({
            graphics: mask_graphics_6,
            x: 15.7543,
            y: -0.7524
        }).wait(1).to({
            graphics: mask_graphics_7,
            x: 15.7543,
            y: 0.1379
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: 15.7543,
            y: 1.0282
        }).wait(1).to({
            graphics: mask_graphics_9,
            x: 15.7543,
            y: 1.9185
        }).wait(1).to({
            graphics: mask_graphics_10,
            x: 15.7543,
            y: 2.8088
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: 15.7543,
            y: 3.699
        }).wait(1).to({
            graphics: mask_graphics_12,
            x: 15.7543,
            y: 4.5893
        }).wait(1).to({
            graphics: mask_graphics_13,
            x: 15.7543,
            y: 5.4796
        }).wait(1).to({
            graphics: mask_graphics_14,
            x: 15.7543,
            y: 6.3699
        }).wait(1).to({
            graphics: mask_graphics_15,
            x: 15.7543,
            y: 7.2602
        }).wait(1).to({
            graphics: mask_graphics_16,
            x: 15.7543,
            y: 8.1505
        }).wait(1).to({
            graphics: mask_graphics_17,
            x: 15.7543,
            y: 9.0407
        }).wait(1).to({
            graphics: mask_graphics_18,
            x: 15.7543,
            y: 9.931
        }).wait(1).to({
            graphics: mask_graphics_19,
            x: 15.7543,
            y: 10.8213
        }).wait(1).to({
            graphics: mask_graphics_20,
            x: 15.7543,
            y: 11.7116
        }).wait(1).to({
            graphics: mask_graphics_21,
            x: 15.7543,
            y: 12.6019
        }).wait(1).to({
            graphics: mask_graphics_22,
            x: 15.7543,
            y: 13.4922
        }).wait(1).to({
            graphics: mask_graphics_23,
            x: 15.7543,
            y: 14.3825
        }).wait(1).to({
            graphics: mask_graphics_24,
            x: 15.7543,
            y: 15.2727
        }).wait(1).to({
            graphics: mask_graphics_25,
            x: 15.7543,
            y: 16.163
        }).wait(1).to({
            graphics: mask_graphics_26,
            x: 15.7543,
            y: 17.0533
        }).wait(1).to({
            graphics: mask_graphics_27,
            x: 15.7543,
            y: 17.9436
        }).wait(1).to({
            graphics: mask_graphics_28,
            x: 15.7543,
            y: 18.8339
        }).wait(1).to({
            graphics: mask_graphics_29,
            x: 15.7543,
            y: 19.7242
        }).wait(1).to({
            graphics: mask_graphics_30,
            x: 15.7543,
            y: 20.6144
        }).wait(1).to({
            graphics: mask_graphics_31,
            x: 15.7543,
            y: 21.5047
        }).wait(1).to({
            graphics: mask_graphics_32,
            x: 15.7543,
            y: 22.395
        }).wait(1).to({
            graphics: mask_graphics_33,
            x: 15.7543,
            y: 23.2853
        }).wait(1).to({
            graphics: mask_graphics_34,
            x: 15.7543,
            y: 24.1756
        }).wait(1).to({
            graphics: mask_graphics_35,
            x: 15.7543,
            y: 25.0659
        }).wait(1).to({
            graphics: mask_graphics_36,
            x: 15.7543,
            y: 25.9562
        }).wait(1).to({
            graphics: mask_graphics_37,
            x: 15.7543,
            y: 26.8464
        }).wait(1).to({
            graphics: mask_graphics_38,
            x: 15.7543,
            y: 27.7367
        }).wait(1).to({
            graphics: mask_graphics_39,
            x: 15.7543,
            y: 28.627
        }).wait(1).to({
            graphics: mask_graphics_40,
            x: 15.7543,
            y: 29.5173
        }).wait(1).to({
            graphics: mask_graphics_41,
            x: 15.7543,
            y: 30.4076
        }).wait(1).to({
            graphics: mask_graphics_42,
            x: 15.7543,
            y: 31.2979
        }).wait(1).to({
            graphics: mask_graphics_43,
            x: 15.7543,
            y: 32.1881
        }).wait(1).to({
            graphics: mask_graphics_44,
            x: 15.7543,
            y: 33.0784
        }).wait(1).to({
            graphics: mask_graphics_45,
            x: 15.7543,
            y: 33.9687
        }).wait(1).to({
            graphics: mask_graphics_46,
            x: 15.7543,
            y: 34.859
        }).wait(1).to({
            graphics: mask_graphics_47,
            x: 15.7543,
            y: 35.7493
        }).wait(1).to({
            graphics: mask_graphics_48,
            x: 15.7543,
            y: 36.6396
        }).wait(1).to({
            graphics: mask_graphics_49,
            x: 15.7543,
            y: 37.5299
        }).wait(1).to({
            graphics: mask_graphics_50,
            x: 15.7543,
            y: 38.4201
        }).wait(1).to({
            graphics: mask_graphics_51,
            x: 15.7543,
            y: 39.3104
        }).wait(1).to({
            graphics: mask_graphics_52,
            x: 15.7543,
            y: 40.2007
        }).wait(1).to({
            graphics: mask_graphics_53,
            x: 15.7543,
            y: 41.091
        }).wait(1).to({
            graphics: mask_graphics_54,
            x: 15.7543,
            y: 41.9813
        }).wait(1).to({
            graphics: mask_graphics_55,
            x: 15.7543,
            y: 42.8716
        }).wait(1).to({
            graphics: mask_graphics_56,
            x: 15.7543,
            y: 43.7618
        }).wait(1).to({
            graphics: mask_graphics_57,
            x: 15.7543,
            y: 44.6521
        }).wait(1).to({
            graphics: mask_graphics_58,
            x: 15.7543,
            y: 45.5424
        }).wait(1).to({
            graphics: mask_graphics_59,
            x: 15.7543,
            y: 46.4327
        }).wait(1).to({
            graphics: mask_graphics_60,
            x: 15.7543,
            y: 47.323
        }).wait(1).to({
            graphics: mask_graphics_61,
            x: 15.7543,
            y: 48.2133
        }).wait(1).to({
            graphics: mask_graphics_62,
            x: 15.7543,
            y: 49.1035
        }).wait(1).to({
            graphics: mask_graphics_63,
            x: 15.7543,
            y: 49.9938
        }).wait(1).to({
            graphics: mask_graphics_64,
            x: 15.7543,
            y: 50.8841
        }).wait(1).to({
            graphics: mask_graphics_65,
            x: 15.7543,
            y: 51.7744
        }).wait(1).to({
            graphics: mask_graphics_66,
            x: 15.7543,
            y: 52.6647
        }).wait(1).to({
            graphics: mask_graphics_67,
            x: 15.7543,
            y: 53.555
        }).wait(1).to({
            graphics: mask_graphics_68,
            x: 15.7543,
            y: 54.4453
        }).wait(1).to({
            graphics: mask_graphics_69,
            x: 15.7543,
            y: 55.3355
        }).wait(1).to({
            graphics: mask_graphics_70,
            x: 15.7543,
            y: 56.2258
        }).wait(1).to({
            graphics: mask_graphics_71,
            x: 15.7543,
            y: 57.1161
        }).wait(1).to({
            graphics: mask_graphics_72,
            x: 15.7543,
            y: 58.0064
        }).wait(1).to({
            graphics: mask_graphics_73,
            x: 15.7543,
            y: 58.8967
        }).wait(1).to({
            graphics: mask_graphics_74,
            x: 15.7543,
            y: 59.787
        }).wait(1).to({
            graphics: mask_graphics_75,
            x: 15.7543,
            y: 60.6772
        }).wait(1).to({
            graphics: mask_graphics_76,
            x: 15.7543,
            y: 61.5675
        }).wait(1).to({
            graphics: mask_graphics_77,
            x: 15.7543,
            y: 62.4578
        }).wait(1).to({
            graphics: mask_graphics_78,
            x: 15.7543,
            y: 63.3481
        }).wait(1).to({
            graphics: mask_graphics_79,
            x: 15.7543,
            y: 64.2384
        }).wait(1).to({
            graphics: mask_graphics_80,
            x: 15.7543,
            y: 65.1287
        }).wait(1).to({
            graphics: mask_graphics_81,
            x: 15.7543,
            y: 66.019
        }).wait(1).to({
            graphics: mask_graphics_82,
            x: 15.7543,
            y: 66.9092
        }).wait(1).to({
            graphics: mask_graphics_83,
            x: 15.7543,
            y: 67.7995
        }).wait(1).to({
            graphics: mask_graphics_84,
            x: 15.7543,
            y: 68.6898
        }).wait(1).to({
            graphics: mask_graphics_85,
            x: 15.7543,
            y: 69.5801
        }).wait(1).to({
            graphics: mask_graphics_86,
            x: 15.7543,
            y: 70.4704
        }).wait(1).to({
            graphics: mask_graphics_87,
            x: 15.7543,
            y: 71.3607
        }).wait(1).to({
            graphics: mask_graphics_88,
            x: 15.7543,
            y: 72.2509
        }).wait(1).to({
            graphics: mask_graphics_89,
            x: 15.7543,
            y: 73.1412
        }).wait(1).to({
            graphics: mask_graphics_90,
            x: 15.7543,
            y: 74.0315
        }).wait(1).to({
            graphics: mask_graphics_91,
            x: 15.7543,
            y: 74.9218
        }).wait(1).to({
            graphics: mask_graphics_92,
            x: 15.7543,
            y: 75.8121
        }).wait(1).to({
            graphics: mask_graphics_93,
            x: 15.7543,
            y: 76.7024
        }).wait(1).to({
            graphics: mask_graphics_94,
            x: 15.7543,
            y: 77.5926
        }).wait(1).to({
            graphics: mask_graphics_95,
            x: 15.7543,
            y: 78.4829
        }).wait(1).to({
            graphics: mask_graphics_96,
            x: 15.7543,
            y: 79.3732
        }).wait(1).to({
            graphics: mask_graphics_97,
            x: 15.7543,
            y: 80.2635
        }).wait(1).to({
            graphics: mask_graphics_98,
            x: 15.7543,
            y: 81.1538
        }).wait(1).to({
            graphics: mask_graphics_99,
            x: 15.7543,
            y: 82.0441
        }).wait(1));

        // Layer 6
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgKOEIgLAAQgFAAgEgDQgDgEABgGIACgLIgBgKIgBgKQgBgFgCgGQgDgFgBgGQgBgFACgHQACgGgBgGQgBgFgCgEIgEgKIgDgNQgDgGgBgGIABgMIABgMIAAgVIAAgXQAAgGADgGIADgMIADgZIACgZIABgMIABgNIADgMIAEgMIAAgMQgBgHABgGIADgMQADgFABgGIAAgLQAAgFABgGQABgFAEgFQADgFACgGQAAgFgCgHQgCgGAAgFIAGgZIAEgYIADgNIACgMIAAgNIAAgMIABgYIABgNIACgMIgCgNQgBgGAAgGQAAgGACgHQACgGAAgGIgCgZIgCgNIgBgMIAAgOIABgOIgBgNIgCgOIgDgXIABgMIAAgNIgBgZIABgNIAAgMQAAgHgCgGIgCgMQAAgHACgGIACgNIAAgWIgCgNIgCgOIABgOQABgHgBgHIgBgbIgDgOIgDgNIgBgOIAAgOIgCgUIgDgZIgCgZIgEgZIgBgZIgCgaIgBgVQAAgGgCgGQgCgFAAgGIABgLIABgLIACgXIgBgMIgBgMIADgLQACgFABgGIgBgLIgBgLIAAgXIABgLIABgMIgBgZQAAgJgCgEQgBgEgBgJIAAgMIAAgIIAAgLIABgLIACgLIgCgLIgCgLQAAgGACgGQABgFAAgGIgBgXIgBgZIABgZIgCgZQAAgHACgGIABgMIAAgaIABgZIgBgMIgBgNIABgZQABgKAHgGIAIgHQAEgEAFAAQAEAAAEAEIAHAHQAGAHgBAKQAAAGACAFIACALIgBALIgCAMIABALIABALIgBALIgBAMIgBAMIgBANIACAMQADAGAAAHIgBAMIgBANIgBAMIgBANIAAAZQABAGACAGQADAGABAGIgCANIgBAMIACANIABAMIABANIAAAOIABALIAAAIIAAALIgBAWQAAAGgCAGIgBALIgCAWIgBAZQAAAGACAHQACAGAAAGIABAVIgCAMIgCALIgCAXIABALIABALIgCALIgBAMQAAAFADAGQACAFABAFIgCAMQgCAGABAFIABALIACAMIADAMIACAMIAAANIAAAMIACAZIADAKIADAKIAEAWIgBANIAAAMIADAMQACAFABAGQAAAGgCAGIgBANQAAAHACAGIACAMIABAZIgBAKIgBALIgBANIgBAMIABANIACAMIABAZIgBANQgCAGAAAGIADAMQACAGABAHIgBALIgBAMIACAZIABAZIAAANIgBANIABANIABAOIABAcIgBAOIgCAOIgCAbQAAAGACAGIACALQgBAGgDAGQgDAGgBAGQgBAGABAHQACAGgBAHIgDAYIgEAMIgDAMIgEAZIgCAZIgFALQgDAGgBAGQgBAGAAAGIgBANIgCAZQgBAGgCAGQgDAGgBAGIgFAcQAAAGACAIQACAHAAAHIgCANQgCAHgBAHIAAAbQAAAHABAHIADAOQABAHgBAIQAAAIABAHIAEAMIADALQABAHAAAHQgBAHAAAHIACAOIABAOQgBAFgDAEIgHAHQgFAEgHAAIgEAAg");
        this.shape.setTransform(0.8917, 92.2411);
        this.shape._off = true;

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({
            _off: false
        }, 0).wait(95));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.6,-0.2,11.8,177.39999999999998);

    (lib.drip4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.instance = new lib.drop4();
        this.instance.parent = this;
        this.instance.setTransform(0.2, 4.65, 0.9947, 0.989);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
            _off: false
        }, 0).to({
            guide: {
                path: [0.3, 4.8, 0.3, 6, 0.3, 7.5, 0.3, 9.6, 0.4, 11.8, 0.5, 14.1, 0.6, 16, 1, 19.7, 2.1, 23.4, 3.1, 27, 4.2, 30.7, 5.3, 34.4, 5.7, 38.1, 6, 41, 5.7, 44.9, 5.3, 48.7, 4.9, 52.7, 4.5, 56.8, 4.3, 60.3, 3.8, 73, 3, 86.1, 2.3, 99.2, 2.1, 112.3, 2.1, 118.7, 2.5, 125, 2.9, 131.4, 3.3, 137.7, 3.7, 144, 3.9, 150.3, 3.9, 154.9, 3.2, 159, 2.6, 163.2, 2, 167.6, 1.8, 170.3, 2.3, 173.1, 2.5, 174.1, 2.7, 175.1]
            }
        }, 94).wait(1));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_5 = new cjs.Graphics().p("AnBAkIAAhHIODAAIAABHg");
        var mask_graphics_6 = new cjs.Graphics().p("AnBAuIAAhbIODAAIAABbg");
        var mask_graphics_7 = new cjs.Graphics().p("AnBA3IAAhtIODAAIAABtg");
        var mask_graphics_8 = new cjs.Graphics().p("AnBBBIAAiBIODAAIAACBg");
        var mask_graphics_9 = new cjs.Graphics().p("AnBBLIAAiVIODAAIAACVg");
        var mask_graphics_10 = new cjs.Graphics().p("AnBBUIAAinIODAAIAACng");
        var mask_graphics_11 = new cjs.Graphics().p("AnBBeIAAi7IODAAIAAC7g");
        var mask_graphics_12 = new cjs.Graphics().p("AnBBnIAAjNIODAAIAADNg");
        var mask_graphics_13 = new cjs.Graphics().p("AnBBxIAAjhIODAAIAADhg");
        var mask_graphics_14 = new cjs.Graphics().p("AnBB7IAAj1IODAAIAAD1g");
        var mask_graphics_15 = new cjs.Graphics().p("AnBCEIAAkHIODAAIAAEHg");
        var mask_graphics_16 = new cjs.Graphics().p("AnBCOIAAkbIODAAIAAEbg");
        var mask_graphics_17 = new cjs.Graphics().p("AnBCYIAAkvIODAAIAAEvg");
        var mask_graphics_18 = new cjs.Graphics().p("AnBChIAAlBIODAAIAAFBg");
        var mask_graphics_19 = new cjs.Graphics().p("AnBCrIAAlVIODAAIAAFVg");
        var mask_graphics_20 = new cjs.Graphics().p("AnBC0IAAlnIODAAIAAFng");
        var mask_graphics_21 = new cjs.Graphics().p("AnBC+IAAl7IODAAIAAF7g");
        var mask_graphics_22 = new cjs.Graphics().p("AnBDIIAAmPIODAAIAAGPg");
        var mask_graphics_23 = new cjs.Graphics().p("AnBDRIAAmhIODAAIAAGhg");
        var mask_graphics_24 = new cjs.Graphics().p("AnBDbIAAm1IODAAIAAG1g");
        var mask_graphics_25 = new cjs.Graphics().p("AnBDkIAAnHIODAAIAAHHg");
        var mask_graphics_26 = new cjs.Graphics().p("AnBDuIAAnbIODAAIAAHbg");
        var mask_graphics_27 = new cjs.Graphics().p("AnBD4IAAnvIODAAIAAHvg");
        var mask_graphics_28 = new cjs.Graphics().p("AnBEBIAAoBIODAAIAAIBg");
        var mask_graphics_29 = new cjs.Graphics().p("AnBELIAAoVIODAAIAAIVg");
        var mask_graphics_30 = new cjs.Graphics().p("AnBEVIAAopIODAAIAAIpg");
        var mask_graphics_31 = new cjs.Graphics().p("AnBEeIAAo7IODAAIAAI7g");
        var mask_graphics_32 = new cjs.Graphics().p("AnBEoIAApPIODAAIAAJPg");
        var mask_graphics_33 = new cjs.Graphics().p("AnBExIAAphIODAAIAAJhg");
        var mask_graphics_34 = new cjs.Graphics().p("AnBE7IAAp1IODAAIAAJ1g");
        var mask_graphics_35 = new cjs.Graphics().p("AnBFFIAAqJIODAAIAAKJg");
        var mask_graphics_36 = new cjs.Graphics().p("AnBFOIAAqbIODAAIAAKbg");
        var mask_graphics_37 = new cjs.Graphics().p("AnBFYIAAqvIODAAIAAKvg");
        var mask_graphics_38 = new cjs.Graphics().p("AnBFiIAArDIODAAIAALDg");
        var mask_graphics_39 = new cjs.Graphics().p("AnBFrIAArVIODAAIAALVg");
        var mask_graphics_40 = new cjs.Graphics().p("AnBF1IAArpIODAAIAALpg");
        var mask_graphics_41 = new cjs.Graphics().p("AnBF+IAAr7IODAAIAAL7g");
        var mask_graphics_42 = new cjs.Graphics().p("AnBGIIAAsPIODAAIAAMPg");
        var mask_graphics_43 = new cjs.Graphics().p("AnBGSIAAsjIODAAIAAMjg");
        var mask_graphics_44 = new cjs.Graphics().p("AnBGbIAAs1IODAAIAAM1g");
        var mask_graphics_45 = new cjs.Graphics().p("AnBGlIAAtJIODAAIAANJg");
        var mask_graphics_46 = new cjs.Graphics().p("AnBGvIAAtdIODAAIAANdg");
        var mask_graphics_47 = new cjs.Graphics().p("AnBG4IAAtvIODAAIAANvg");
        var mask_graphics_48 = new cjs.Graphics().p("AnBHCIAAuDIODAAIAAODg");
        var mask_graphics_49 = new cjs.Graphics().p("AnBHLIAAuVIODAAIAAOVg");
        var mask_graphics_50 = new cjs.Graphics().p("AnBHVIAAupIODAAIAAOpg");
        var mask_graphics_51 = new cjs.Graphics().p("AnBHfIAAu9IODAAIAAO9g");
        var mask_graphics_52 = new cjs.Graphics().p("AnBHoIAAvPIODAAIAAPPg");
        var mask_graphics_53 = new cjs.Graphics().p("AnBHyIAAvjIODAAIAAPjg");
        var mask_graphics_54 = new cjs.Graphics().p("AnBH7IAAv1IODAAIAAP1g");
        var mask_graphics_55 = new cjs.Graphics().p("AnBIFIAAwJIODAAIAAQJg");
        var mask_graphics_56 = new cjs.Graphics().p("AnBIPIAAwdIODAAIAAQdg");
        var mask_graphics_57 = new cjs.Graphics().p("AnBIYIAAwvIODAAIAAQvg");
        var mask_graphics_58 = new cjs.Graphics().p("AnBIiIAAxDIODAAIAARDg");
        var mask_graphics_59 = new cjs.Graphics().p("AnBIsIAAxXIODAAIAARXg");
        var mask_graphics_60 = new cjs.Graphics().p("AnBI1IAAxpIODAAIAARpg");
        var mask_graphics_61 = new cjs.Graphics().p("AnBI/IAAx9IODAAIAAR9g");
        var mask_graphics_62 = new cjs.Graphics().p("AnBJIIAAyPIODAAIAASPg");
        var mask_graphics_63 = new cjs.Graphics().p("AnBJSIAAyjIODAAIAASjg");
        var mask_graphics_64 = new cjs.Graphics().p("AnBJcIAAy3IODAAIAAS3g");
        var mask_graphics_65 = new cjs.Graphics().p("AnBJlIAAzJIODAAIAATJg");
        var mask_graphics_66 = new cjs.Graphics().p("AnBJvIAAzdIODAAIAATdg");
        var mask_graphics_67 = new cjs.Graphics().p("AnBJ5IAAzxIODAAIAATxg");
        var mask_graphics_68 = new cjs.Graphics().p("AnBKCIAA0DIODAAIAAUDg");
        var mask_graphics_69 = new cjs.Graphics().p("AnBKMIAA0XIODAAIAAUXg");
        var mask_graphics_70 = new cjs.Graphics().p("AnBKVIAA0pIODAAIAAUpg");
        var mask_graphics_71 = new cjs.Graphics().p("AnBKfIAA09IODAAIAAU9g");
        var mask_graphics_72 = new cjs.Graphics().p("AnBKpIAA1RIODAAIAAVRg");
        var mask_graphics_73 = new cjs.Graphics().p("AnBKyIAA1jIODAAIAAVjg");
        var mask_graphics_74 = new cjs.Graphics().p("AnBK8IAA13IODAAIAAV3g");
        var mask_graphics_75 = new cjs.Graphics().p("AnBLFIAA2KIODAAIAAWKg");
        var mask_graphics_76 = new cjs.Graphics().p("AnBLPIAA2dIODAAIAAWdg");
        var mask_graphics_77 = new cjs.Graphics().p("AnBLZIAA2xIODAAIAAWxg");
        var mask_graphics_78 = new cjs.Graphics().p("AnBLiIAA3DIODAAIAAXDg");
        var mask_graphics_79 = new cjs.Graphics().p("AnBLsIAA3XIODAAIAAXXg");
        var mask_graphics_80 = new cjs.Graphics().p("AnBL2IAA3rIODAAIAAXrg");
        var mask_graphics_81 = new cjs.Graphics().p("AnBL/IAA39IODAAIAAX9g");
        var mask_graphics_82 = new cjs.Graphics().p("AnBMJIAA4RIODAAIAAYRg");
        var mask_graphics_83 = new cjs.Graphics().p("AnBMSIAA4jIODAAIAAYjg");
        var mask_graphics_84 = new cjs.Graphics().p("AnBMcIAA43IODAAIAAY3g");
        var mask_graphics_85 = new cjs.Graphics().p("AnBMmIAA5LIODAAIAAZLg");
        var mask_graphics_86 = new cjs.Graphics().p("AnBMvIAA5dIODAAIAAZdg");
        var mask_graphics_87 = new cjs.Graphics().p("AnBM5IAA5xIODAAIAAZxg");
        var mask_graphics_88 = new cjs.Graphics().p("AnBNDIAA6FIODAAIAAaFg");
        var mask_graphics_89 = new cjs.Graphics().p("AnBNMIAA6XIODAAIAAaXg");
        var mask_graphics_90 = new cjs.Graphics().p("AnBNWIAA6rIODAAIAAarg");
        var mask_graphics_91 = new cjs.Graphics().p("AnBNfIAA69IODAAIAAa9g");
        var mask_graphics_92 = new cjs.Graphics().p("AnBNpIAA7RIODAAIAAbRg");
        var mask_graphics_93 = new cjs.Graphics().p("AnBNzIAA7lIODAAIAAblg");
        var mask_graphics_94 = new cjs.Graphics().p("AnBN8IAA73IODAAIAAb3g");
        var mask_graphics_95 = new cjs.Graphics().p("AnBOGIAA8LIODAAIAAcLg");
        var mask_graphics_96 = new cjs.Graphics().p("AnBOQIAA8fIODAAIAAcfg");
        var mask_graphics_97 = new cjs.Graphics().p("AnBOZIAA8xIODAAIAAcxg");
        var mask_graphics_98 = new cjs.Graphics().p("AnBOjIAA9FIODAAIAAdFg");
        var mask_graphics_99 = new cjs.Graphics().p("AnBOsIAA9XIODAAIAAdXg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(5).to({
            graphics: mask_graphics_5,
            x: 15.5043,
            y: -2.2427
        }).wait(1).to({
            graphics: mask_graphics_6,
            x: 15.5043,
            y: -1.346
        }).wait(1).to({
            graphics: mask_graphics_7,
            x: 15.5043,
            y: -0.4493
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: 15.5043,
            y: 0.4473
        }).wait(1).to({
            graphics: mask_graphics_9,
            x: 15.5043,
            y: 1.344
        }).wait(1).to({
            graphics: mask_graphics_10,
            x: 15.5043,
            y: 2.2407
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: 15.5043,
            y: 3.1373
        }).wait(1).to({
            graphics: mask_graphics_12,
            x: 15.5043,
            y: 4.034
        }).wait(1).to({
            graphics: mask_graphics_13,
            x: 15.5043,
            y: 4.9307
        }).wait(1).to({
            graphics: mask_graphics_14,
            x: 15.5043,
            y: 5.8273
        }).wait(1).to({
            graphics: mask_graphics_15,
            x: 15.5043,
            y: 6.724
        }).wait(1).to({
            graphics: mask_graphics_16,
            x: 15.5043,
            y: 7.6207
        }).wait(1).to({
            graphics: mask_graphics_17,
            x: 15.5043,
            y: 8.5173
        }).wait(1).to({
            graphics: mask_graphics_18,
            x: 15.5043,
            y: 9.414
        }).wait(1).to({
            graphics: mask_graphics_19,
            x: 15.5043,
            y: 10.3107
        }).wait(1).to({
            graphics: mask_graphics_20,
            x: 15.5043,
            y: 11.2073
        }).wait(1).to({
            graphics: mask_graphics_21,
            x: 15.5043,
            y: 12.104
        }).wait(1).to({
            graphics: mask_graphics_22,
            x: 15.5043,
            y: 13.0007
        }).wait(1).to({
            graphics: mask_graphics_23,
            x: 15.5043,
            y: 13.8974
        }).wait(1).to({
            graphics: mask_graphics_24,
            x: 15.5043,
            y: 14.794
        }).wait(1).to({
            graphics: mask_graphics_25,
            x: 15.5043,
            y: 15.6907
        }).wait(1).to({
            graphics: mask_graphics_26,
            x: 15.5043,
            y: 16.5874
        }).wait(1).to({
            graphics: mask_graphics_27,
            x: 15.5043,
            y: 17.484
        }).wait(1).to({
            graphics: mask_graphics_28,
            x: 15.5043,
            y: 18.3807
        }).wait(1).to({
            graphics: mask_graphics_29,
            x: 15.5043,
            y: 19.2774
        }).wait(1).to({
            graphics: mask_graphics_30,
            x: 15.5043,
            y: 20.174
        }).wait(1).to({
            graphics: mask_graphics_31,
            x: 15.5043,
            y: 21.0707
        }).wait(1).to({
            graphics: mask_graphics_32,
            x: 15.5043,
            y: 21.9674
        }).wait(1).to({
            graphics: mask_graphics_33,
            x: 15.5043,
            y: 22.864
        }).wait(1).to({
            graphics: mask_graphics_34,
            x: 15.5043,
            y: 23.7607
        }).wait(1).to({
            graphics: mask_graphics_35,
            x: 15.5043,
            y: 24.6574
        }).wait(1).to({
            graphics: mask_graphics_36,
            x: 15.5043,
            y: 25.554
        }).wait(1).to({
            graphics: mask_graphics_37,
            x: 15.5043,
            y: 26.4507
        }).wait(1).to({
            graphics: mask_graphics_38,
            x: 15.5043,
            y: 27.3474
        }).wait(1).to({
            graphics: mask_graphics_39,
            x: 15.5043,
            y: 28.244
        }).wait(1).to({
            graphics: mask_graphics_40,
            x: 15.5043,
            y: 29.1407
        }).wait(1).to({
            graphics: mask_graphics_41,
            x: 15.5043,
            y: 30.0374
        }).wait(1).to({
            graphics: mask_graphics_42,
            x: 15.5043,
            y: 30.934
        }).wait(1).to({
            graphics: mask_graphics_43,
            x: 15.5043,
            y: 31.8307
        }).wait(1).to({
            graphics: mask_graphics_44,
            x: 15.5043,
            y: 32.7274
        }).wait(1).to({
            graphics: mask_graphics_45,
            x: 15.5043,
            y: 33.624
        }).wait(1).to({
            graphics: mask_graphics_46,
            x: 15.5043,
            y: 34.5207
        }).wait(1).to({
            graphics: mask_graphics_47,
            x: 15.5043,
            y: 35.4174
        }).wait(1).to({
            graphics: mask_graphics_48,
            x: 15.5043,
            y: 36.314
        }).wait(1).to({
            graphics: mask_graphics_49,
            x: 15.5043,
            y: 37.2107
        }).wait(1).to({
            graphics: mask_graphics_50,
            x: 15.5043,
            y: 38.1074
        }).wait(1).to({
            graphics: mask_graphics_51,
            x: 15.5043,
            y: 39.004
        }).wait(1).to({
            graphics: mask_graphics_52,
            x: 15.5043,
            y: 39.9007
        }).wait(1).to({
            graphics: mask_graphics_53,
            x: 15.5043,
            y: 40.7974
        }).wait(1).to({
            graphics: mask_graphics_54,
            x: 15.5043,
            y: 41.694
        }).wait(1).to({
            graphics: mask_graphics_55,
            x: 15.5043,
            y: 42.5907
        }).wait(1).to({
            graphics: mask_graphics_56,
            x: 15.5043,
            y: 43.4874
        }).wait(1).to({
            graphics: mask_graphics_57,
            x: 15.5043,
            y: 44.384
        }).wait(1).to({
            graphics: mask_graphics_58,
            x: 15.5043,
            y: 45.2807
        }).wait(1).to({
            graphics: mask_graphics_59,
            x: 15.5043,
            y: 46.1774
        }).wait(1).to({
            graphics: mask_graphics_60,
            x: 15.5043,
            y: 47.074
        }).wait(1).to({
            graphics: mask_graphics_61,
            x: 15.5043,
            y: 47.9707
        }).wait(1).to({
            graphics: mask_graphics_62,
            x: 15.5043,
            y: 48.8674
        }).wait(1).to({
            graphics: mask_graphics_63,
            x: 15.5043,
            y: 49.764
        }).wait(1).to({
            graphics: mask_graphics_64,
            x: 15.5043,
            y: 50.6607
        }).wait(1).to({
            graphics: mask_graphics_65,
            x: 15.5043,
            y: 51.5574
        }).wait(1).to({
            graphics: mask_graphics_66,
            x: 15.5043,
            y: 52.454
        }).wait(1).to({
            graphics: mask_graphics_67,
            x: 15.5043,
            y: 53.3507
        }).wait(1).to({
            graphics: mask_graphics_68,
            x: 15.5043,
            y: 54.2474
        }).wait(1).to({
            graphics: mask_graphics_69,
            x: 15.5043,
            y: 55.144
        }).wait(1).to({
            graphics: mask_graphics_70,
            x: 15.5043,
            y: 56.0407
        }).wait(1).to({
            graphics: mask_graphics_71,
            x: 15.5043,
            y: 56.9374
        }).wait(1).to({
            graphics: mask_graphics_72,
            x: 15.5043,
            y: 57.8341
        }).wait(1).to({
            graphics: mask_graphics_73,
            x: 15.5043,
            y: 58.7307
        }).wait(1).to({
            graphics: mask_graphics_74,
            x: 15.5043,
            y: 59.6274
        }).wait(1).to({
            graphics: mask_graphics_75,
            x: 15.5043,
            y: 60.5241
        }).wait(1).to({
            graphics: mask_graphics_76,
            x: 15.5043,
            y: 61.4207
        }).wait(1).to({
            graphics: mask_graphics_77,
            x: 15.5043,
            y: 62.3174
        }).wait(1).to({
            graphics: mask_graphics_78,
            x: 15.5043,
            y: 63.2141
        }).wait(1).to({
            graphics: mask_graphics_79,
            x: 15.5043,
            y: 64.1107
        }).wait(1).to({
            graphics: mask_graphics_80,
            x: 15.5043,
            y: 65.0074
        }).wait(1).to({
            graphics: mask_graphics_81,
            x: 15.5043,
            y: 65.9041
        }).wait(1).to({
            graphics: mask_graphics_82,
            x: 15.5043,
            y: 66.8007
        }).wait(1).to({
            graphics: mask_graphics_83,
            x: 15.5043,
            y: 67.6974
        }).wait(1).to({
            graphics: mask_graphics_84,
            x: 15.5043,
            y: 68.5941
        }).wait(1).to({
            graphics: mask_graphics_85,
            x: 15.5043,
            y: 69.4907
        }).wait(1).to({
            graphics: mask_graphics_86,
            x: 15.5043,
            y: 70.3874
        }).wait(1).to({
            graphics: mask_graphics_87,
            x: 15.5043,
            y: 71.2841
        }).wait(1).to({
            graphics: mask_graphics_88,
            x: 15.5043,
            y: 72.1807
        }).wait(1).to({
            graphics: mask_graphics_89,
            x: 15.5043,
            y: 73.0774
        }).wait(1).to({
            graphics: mask_graphics_90,
            x: 15.5043,
            y: 73.9741
        }).wait(1).to({
            graphics: mask_graphics_91,
            x: 15.5043,
            y: 74.8707
        }).wait(1).to({
            graphics: mask_graphics_92,
            x: 15.5043,
            y: 75.7674
        }).wait(1).to({
            graphics: mask_graphics_93,
            x: 15.5043,
            y: 76.6641
        }).wait(1).to({
            graphics: mask_graphics_94,
            x: 15.5043,
            y: 77.5607
        }).wait(1).to({
            graphics: mask_graphics_95,
            x: 15.5043,
            y: 78.4574
        }).wait(1).to({
            graphics: mask_graphics_96,
            x: 15.5043,
            y: 79.3541
        }).wait(1).to({
            graphics: mask_graphics_97,
            x: 15.5043,
            y: 80.2507
        }).wait(1).to({
            graphics: mask_graphics_98,
            x: 15.5043,
            y: 81.1474
        }).wait(1).to({
            graphics: mask_graphics_99,
            x: 15.5043,
            y: 82.0441
        }).wait(1));

        // Layer 6
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgDOGIgKgGQgLgHgCgMIgCgLIgDgHIgDgLIgCgVIgFgWIgDgXQAAgFACgGIADgMQABgGgBgDQgCgDABgHQACgIACgDQADgDACgIIABgLIABgLIACgXIAAgOIAAgOQACgHACgGQAEgHABgHIgBgNIgBgPIAAgUIgCgMIgCgLIABgMIACgNIgEgZIAAgZIgDgMIgDgNIgBgYIgCgWIgBgWIAAgXIABgLIABgMIgDgLQgDgFAAgGQgBgGACgHIABgMIAAgNIABgNIAAgZIgBgNIgBgMIABgLIACgKIgCgLQgBgGAAgGIAAgWIACgNIABgMIAAgZIgBgNIgBgMIABgZIADgZIgBgNIgBgLQABgHACgGQACgGABgGIgBgMIAAgNIACgMQACgGAAgHIACgYQAAgGgCgGQgCgFAAgGIABgMIACgNIACgYIACgbQABgHgBgHIgBgNQABgHADgHQACgGABgHQAAgHgCgHQgCgGAAgHIABgbIADgXIACgLIACgLIADgXQAAgHgCgGQgCgHABgGIACgMIACgLIABgZIADgNIACgNIAAgZQAAgOgCgMIgCgZIgBgMIgCgNIgIgbQgCgHgDgHQgDgGgDgHIgGgVIgEgLQgEgEgCgGIgBgMIgCgNIgFgMIgDgMQgBgHACgGQACgHgBgGQAAgFgDgGQgDgFAAgGIAAgZQAAgGACgGIACgOIAAgbIgBgMIgBgNIAAgMQAAgHAEgEQAEgEAHAAIAOAAIAKAAQAGABAEAEQAIAIABAOQAAAFgBAFQgBAFAAAFIAAAMIACAMIAAAZIgBAOIgBAMIACAZIADAXIAEANIAGAOQABAGAAAIIACAOQACAHAFAGQAEAGADAHIAFAVIAHAVIAGAZIAFAYQABAHgBAGIAAANIACAJQACAFAAAFQAAAFgCAGIgCAMIABALIABAKIAAANIABAMQgBAGgDAGQgDAGgBAGIgDAYIgBATIgCAXIAAAMIAAAMIgCAMQgCAGAAAGQAAAGACAGIABANIABAZIgCANIgDAMIgBAZIAAANIABANIAAAbIgCAOQgCAHAAAHIAAAbIgDALQgDAFgBAFIABAMIABALIgCALIgCAMIABAWIgDAWIABAZQgBAGACAHIABAMIgCANIgCAMIgCANIgCAMIABANIABAMIgBAZIgBAZIABANIABAMIgBAYQAAAGACAHIACAMIAAAZIgBANQgBAGAAAGIACAcIADAbQAAAHgBAHIgBAOIACANQADAHAAAGIgBAMQgBAFAAAGIACALIACALIACAZIgBANIAAANQAAAGADAGQADAGAAAHIAAAMIgBANIAAAZIgBAVIACAMIABAMIgDAZQgBAGgCAFIgFAMIAAAMQABAGgBAGQgBAJgDAEQgDAEgCAJQgBAIABAEIABAJQACAFgCAIQgCALAAALIAAAMIAAAMIAGAZIACAMIAEAHQACAEACAIQAAAFgDAFIgHAKQgDAFgEAFQgFAEgGACIgEAAQgDAAgDgCg");
        this.shape.setTransform(3.45, 91.7018);
        this.shape._off = true;

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({
            _off: false
        }, 0).wait(95));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.6,0,13.2,179.7);

    (lib.drip3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.instance = new lib.drop3();
        this.instance.parent = this;
        this.instance.setTransform(0.2, 3.95, 0.9947, 0.9944);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
            _off: false
        }, 0).to({
            guide: {
                path: [0.2, 4.1, 0.9, 6.5, 0.9, 9.2, 0.9, 11.9, 0.7, 14.6, 0.5, 17.4, 0.5, 19.9, 0.7, 25.4, 0.9, 31.1, 1.2, 36.7, 1.6, 42.2, 2.1, 47.7, 2.7, 53, 3.3, 58.2, 3.6, 64, 3.6, 68.3, 2.9, 72.6, 2.1, 76.9, 1.2, 81.2, 0.3, 85.5, -0.1, 89.8, -0.3, 94.1, -0.6, 98.3, -0.9, 102.6, -0.9, 106.9, -0.8, 113.7, -0.2, 120.7, 0.2, 127.8, 0.2, 134.8, 0.3, 141.9, -0.9, 148.6, -1.7, 152.7, -2.6, 157.1, -3.4, 161.6, -3.7, 165.9, -4.1, 170.3, -3.5, 174.1, -3.4, 174.7, -3.2, 175.4]
            }
        }, 94).wait(1));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_5 = new cjs.Graphics().p("AnBAkIAAhHIODAAIAABHg");
        var mask_graphics_6 = new cjs.Graphics().p("AnBAuIAAhbIODAAIAABbg");
        var mask_graphics_7 = new cjs.Graphics().p("AnBA3IAAhtIODAAIAABtg");
        var mask_graphics_8 = new cjs.Graphics().p("AnBBBIAAiBIODAAIAACBg");
        var mask_graphics_9 = new cjs.Graphics().p("AnBBLIAAiVIODAAIAACVg");
        var mask_graphics_10 = new cjs.Graphics().p("AnBBUIAAinIODAAIAACng");
        var mask_graphics_11 = new cjs.Graphics().p("AnBBeIAAi7IODAAIAAC7g");
        var mask_graphics_12 = new cjs.Graphics().p("AnBBnIAAjNIODAAIAADNg");
        var mask_graphics_13 = new cjs.Graphics().p("AnBBxIAAjhIODAAIAADhg");
        var mask_graphics_14 = new cjs.Graphics().p("AnBB7IAAj1IODAAIAAD1g");
        var mask_graphics_15 = new cjs.Graphics().p("AnBCEIAAkHIODAAIAAEHg");
        var mask_graphics_16 = new cjs.Graphics().p("AnBCOIAAkbIODAAIAAEbg");
        var mask_graphics_17 = new cjs.Graphics().p("AnBCYIAAkvIODAAIAAEvg");
        var mask_graphics_18 = new cjs.Graphics().p("AnBChIAAlBIODAAIAAFBg");
        var mask_graphics_19 = new cjs.Graphics().p("AnBCrIAAlVIODAAIAAFVg");
        var mask_graphics_20 = new cjs.Graphics().p("AnBC0IAAlnIODAAIAAFng");
        var mask_graphics_21 = new cjs.Graphics().p("AnBC+IAAl7IODAAIAAF7g");
        var mask_graphics_22 = new cjs.Graphics().p("AnBDIIAAmPIODAAIAAGPg");
        var mask_graphics_23 = new cjs.Graphics().p("AnBDRIAAmhIODAAIAAGhg");
        var mask_graphics_24 = new cjs.Graphics().p("AnBDbIAAm1IODAAIAAG1g");
        var mask_graphics_25 = new cjs.Graphics().p("AnBDkIAAnHIODAAIAAHHg");
        var mask_graphics_26 = new cjs.Graphics().p("AnBDuIAAnbIODAAIAAHbg");
        var mask_graphics_27 = new cjs.Graphics().p("AnBD4IAAnvIODAAIAAHvg");
        var mask_graphics_28 = new cjs.Graphics().p("AnBEBIAAoBIODAAIAAIBg");
        var mask_graphics_29 = new cjs.Graphics().p("AnBELIAAoVIODAAIAAIVg");
        var mask_graphics_30 = new cjs.Graphics().p("AnBEVIAAopIODAAIAAIpg");
        var mask_graphics_31 = new cjs.Graphics().p("AnBEeIAAo7IODAAIAAI7g");
        var mask_graphics_32 = new cjs.Graphics().p("AnBEoIAApPIODAAIAAJPg");
        var mask_graphics_33 = new cjs.Graphics().p("AnBExIAAphIODAAIAAJhg");
        var mask_graphics_34 = new cjs.Graphics().p("AnBE7IAAp1IODAAIAAJ1g");
        var mask_graphics_35 = new cjs.Graphics().p("AnBFFIAAqJIODAAIAAKJg");
        var mask_graphics_36 = new cjs.Graphics().p("AnBFOIAAqbIODAAIAAKbg");
        var mask_graphics_37 = new cjs.Graphics().p("AnBFYIAAqvIODAAIAAKvg");
        var mask_graphics_38 = new cjs.Graphics().p("AnBFiIAArDIODAAIAALDg");
        var mask_graphics_39 = new cjs.Graphics().p("AnBFrIAArVIODAAIAALVg");
        var mask_graphics_40 = new cjs.Graphics().p("AnBF1IAArpIODAAIAALpg");
        var mask_graphics_41 = new cjs.Graphics().p("AnBF+IAAr7IODAAIAAL7g");
        var mask_graphics_42 = new cjs.Graphics().p("AnBGIIAAsPIODAAIAAMPg");
        var mask_graphics_43 = new cjs.Graphics().p("AnBGSIAAsjIODAAIAAMjg");
        var mask_graphics_44 = new cjs.Graphics().p("AnBGbIAAs1IODAAIAAM1g");
        var mask_graphics_45 = new cjs.Graphics().p("AnBGlIAAtJIODAAIAANJg");
        var mask_graphics_46 = new cjs.Graphics().p("AnBGvIAAtdIODAAIAANdg");
        var mask_graphics_47 = new cjs.Graphics().p("AnBG4IAAtvIODAAIAANvg");
        var mask_graphics_48 = new cjs.Graphics().p("AnBHCIAAuDIODAAIAAODg");
        var mask_graphics_49 = new cjs.Graphics().p("AnBHLIAAuVIODAAIAAOVg");
        var mask_graphics_50 = new cjs.Graphics().p("AnBHVIAAupIODAAIAAOpg");
        var mask_graphics_51 = new cjs.Graphics().p("AnBHfIAAu9IODAAIAAO9g");
        var mask_graphics_52 = new cjs.Graphics().p("AnBHoIAAvPIODAAIAAPPg");
        var mask_graphics_53 = new cjs.Graphics().p("AnBHyIAAvjIODAAIAAPjg");
        var mask_graphics_54 = new cjs.Graphics().p("AnBH7IAAv1IODAAIAAP1g");
        var mask_graphics_55 = new cjs.Graphics().p("AnBIFIAAwJIODAAIAAQJg");
        var mask_graphics_56 = new cjs.Graphics().p("AnBIPIAAwdIODAAIAAQdg");
        var mask_graphics_57 = new cjs.Graphics().p("AnBIYIAAwvIODAAIAAQvg");
        var mask_graphics_58 = new cjs.Graphics().p("AnBIiIAAxDIODAAIAARDg");
        var mask_graphics_59 = new cjs.Graphics().p("AnBIsIAAxXIODAAIAARXg");
        var mask_graphics_60 = new cjs.Graphics().p("AnBI1IAAxpIODAAIAARpg");
        var mask_graphics_61 = new cjs.Graphics().p("AnBI/IAAx9IODAAIAAR9g");
        var mask_graphics_62 = new cjs.Graphics().p("AnBJIIAAyPIODAAIAASPg");
        var mask_graphics_63 = new cjs.Graphics().p("AnBJSIAAyjIODAAIAASjg");
        var mask_graphics_64 = new cjs.Graphics().p("AnBJcIAAy3IODAAIAAS3g");
        var mask_graphics_65 = new cjs.Graphics().p("AnBJlIAAzJIODAAIAATJg");
        var mask_graphics_66 = new cjs.Graphics().p("AnBJvIAAzdIODAAIAATdg");
        var mask_graphics_67 = new cjs.Graphics().p("AnBJ5IAAzxIODAAIAATxg");
        var mask_graphics_68 = new cjs.Graphics().p("AnBKCIAA0DIODAAIAAUDg");
        var mask_graphics_69 = new cjs.Graphics().p("AnBKMIAA0XIODAAIAAUXg");
        var mask_graphics_70 = new cjs.Graphics().p("AnBKVIAA0pIODAAIAAUpg");
        var mask_graphics_71 = new cjs.Graphics().p("AnBKfIAA09IODAAIAAU9g");
        var mask_graphics_72 = new cjs.Graphics().p("AnBKpIAA1RIODAAIAAVRg");
        var mask_graphics_73 = new cjs.Graphics().p("AnBKyIAA1jIODAAIAAVjg");
        var mask_graphics_74 = new cjs.Graphics().p("AnBK8IAA13IODAAIAAV3g");
        var mask_graphics_75 = new cjs.Graphics().p("AnBLGIAA2KIODAAIAAWKg");
        var mask_graphics_76 = new cjs.Graphics().p("AnBLPIAA2dIODAAIAAWdg");
        var mask_graphics_77 = new cjs.Graphics().p("AnBLZIAA2xIODAAIAAWxg");
        var mask_graphics_78 = new cjs.Graphics().p("AnBLiIAA3DIODAAIAAXDg");
        var mask_graphics_79 = new cjs.Graphics().p("AnBLsIAA3XIODAAIAAXXg");
        var mask_graphics_80 = new cjs.Graphics().p("AnBL2IAA3rIODAAIAAXrg");
        var mask_graphics_81 = new cjs.Graphics().p("AnBL/IAA39IODAAIAAX9g");
        var mask_graphics_82 = new cjs.Graphics().p("AnBMJIAA4RIODAAIAAYRg");
        var mask_graphics_83 = new cjs.Graphics().p("AnBMSIAA4jIODAAIAAYjg");
        var mask_graphics_84 = new cjs.Graphics().p("AnBMcIAA43IODAAIAAY3g");
        var mask_graphics_85 = new cjs.Graphics().p("AnBMmIAA5LIODAAIAAZLg");
        var mask_graphics_86 = new cjs.Graphics().p("AnBMvIAA5dIODAAIAAZdg");
        var mask_graphics_87 = new cjs.Graphics().p("AnBM5IAA5xIODAAIAAZxg");
        var mask_graphics_88 = new cjs.Graphics().p("AnBNDIAA6FIODAAIAAaFg");
        var mask_graphics_89 = new cjs.Graphics().p("AnBNMIAA6XIODAAIAAaXg");
        var mask_graphics_90 = new cjs.Graphics().p("AnBNWIAA6rIODAAIAAarg");
        var mask_graphics_91 = new cjs.Graphics().p("AnBNfIAA69IODAAIAAa9g");
        var mask_graphics_92 = new cjs.Graphics().p("AnBNpIAA7RIODAAIAAbRg");
        var mask_graphics_93 = new cjs.Graphics().p("AnBNzIAA7lIODAAIAAblg");
        var mask_graphics_94 = new cjs.Graphics().p("AnBN8IAA73IODAAIAAb3g");
        var mask_graphics_95 = new cjs.Graphics().p("AnBOGIAA8LIODAAIAAcLg");
        var mask_graphics_96 = new cjs.Graphics().p("AnBOQIAA8fIODAAIAAcfg");
        var mask_graphics_97 = new cjs.Graphics().p("AnBOZIAA8xIODAAIAAcxg");
        var mask_graphics_98 = new cjs.Graphics().p("AnBOjIAA9FIODAAIAAdFg");
        var mask_graphics_99 = new cjs.Graphics().p("AnBOsIAA9XIODAAIAAdXg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(5).to({
            graphics: mask_graphics_5,
            x: 15.5043,
            y: -2.1427
        }).wait(1).to({
            graphics: mask_graphics_6,
            x: 15.5043,
            y: -1.2471
        }).wait(1).to({
            graphics: mask_graphics_7,
            x: 15.5043,
            y: -0.3515
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: 15.5043,
            y: 0.5441
        }).wait(1).to({
            graphics: mask_graphics_9,
            x: 15.5043,
            y: 1.4398
        }).wait(1).to({
            graphics: mask_graphics_10,
            x: 15.5043,
            y: 2.3354
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: 15.5043,
            y: 3.231
        }).wait(1).to({
            graphics: mask_graphics_12,
            x: 15.5043,
            y: 4.1266
        }).wait(1).to({
            graphics: mask_graphics_13,
            x: 15.5043,
            y: 5.0222
        }).wait(1).to({
            graphics: mask_graphics_14,
            x: 15.5043,
            y: 5.9178
        }).wait(1).to({
            graphics: mask_graphics_15,
            x: 15.5043,
            y: 6.8134
        }).wait(1).to({
            graphics: mask_graphics_16,
            x: 15.5043,
            y: 7.709
        }).wait(1).to({
            graphics: mask_graphics_17,
            x: 15.5043,
            y: 8.6046
        }).wait(1).to({
            graphics: mask_graphics_18,
            x: 15.5043,
            y: 9.5002
        }).wait(1).to({
            graphics: mask_graphics_19,
            x: 15.5043,
            y: 10.3958
        }).wait(1).to({
            graphics: mask_graphics_20,
            x: 15.5043,
            y: 11.2914
        }).wait(1).to({
            graphics: mask_graphics_21,
            x: 15.5043,
            y: 12.187
        }).wait(1).to({
            graphics: mask_graphics_22,
            x: 15.5043,
            y: 13.0826
        }).wait(1).to({
            graphics: mask_graphics_23,
            x: 15.5043,
            y: 13.9782
        }).wait(1).to({
            graphics: mask_graphics_24,
            x: 15.5043,
            y: 14.8738
        }).wait(1).to({
            graphics: mask_graphics_25,
            x: 15.5043,
            y: 15.7694
        }).wait(1).to({
            graphics: mask_graphics_26,
            x: 15.5043,
            y: 16.665
        }).wait(1).to({
            graphics: mask_graphics_27,
            x: 15.5043,
            y: 17.5606
        }).wait(1).to({
            graphics: mask_graphics_28,
            x: 15.5043,
            y: 18.4562
        }).wait(1).to({
            graphics: mask_graphics_29,
            x: 15.5043,
            y: 19.3518
        }).wait(1).to({
            graphics: mask_graphics_30,
            x: 15.5043,
            y: 20.2474
        }).wait(1).to({
            graphics: mask_graphics_31,
            x: 15.5043,
            y: 21.143
        }).wait(1).to({
            graphics: mask_graphics_32,
            x: 15.5043,
            y: 22.0386
        }).wait(1).to({
            graphics: mask_graphics_33,
            x: 15.5043,
            y: 22.9342
        }).wait(1).to({
            graphics: mask_graphics_34,
            x: 15.5043,
            y: 23.8298
        }).wait(1).to({
            graphics: mask_graphics_35,
            x: 15.5043,
            y: 24.7254
        }).wait(1).to({
            graphics: mask_graphics_36,
            x: 15.5043,
            y: 25.621
        }).wait(1).to({
            graphics: mask_graphics_37,
            x: 15.5043,
            y: 26.5167
        }).wait(1).to({
            graphics: mask_graphics_38,
            x: 15.5043,
            y: 27.4123
        }).wait(1).to({
            graphics: mask_graphics_39,
            x: 15.5043,
            y: 28.3079
        }).wait(1).to({
            graphics: mask_graphics_40,
            x: 15.5043,
            y: 29.2035
        }).wait(1).to({
            graphics: mask_graphics_41,
            x: 15.5043,
            y: 30.0991
        }).wait(1).to({
            graphics: mask_graphics_42,
            x: 15.5043,
            y: 30.9947
        }).wait(1).to({
            graphics: mask_graphics_43,
            x: 15.5043,
            y: 31.8903
        }).wait(1).to({
            graphics: mask_graphics_44,
            x: 15.5043,
            y: 32.7859
        }).wait(1).to({
            graphics: mask_graphics_45,
            x: 15.5043,
            y: 33.6815
        }).wait(1).to({
            graphics: mask_graphics_46,
            x: 15.5043,
            y: 34.5771
        }).wait(1).to({
            graphics: mask_graphics_47,
            x: 15.5043,
            y: 35.4727
        }).wait(1).to({
            graphics: mask_graphics_48,
            x: 15.5043,
            y: 36.3683
        }).wait(1).to({
            graphics: mask_graphics_49,
            x: 15.5043,
            y: 37.2639
        }).wait(1).to({
            graphics: mask_graphics_50,
            x: 15.5043,
            y: 38.1595
        }).wait(1).to({
            graphics: mask_graphics_51,
            x: 15.5043,
            y: 39.0551
        }).wait(1).to({
            graphics: mask_graphics_52,
            x: 15.5043,
            y: 39.9507
        }).wait(1).to({
            graphics: mask_graphics_53,
            x: 15.5043,
            y: 40.8463
        }).wait(1).to({
            graphics: mask_graphics_54,
            x: 15.5043,
            y: 41.7419
        }).wait(1).to({
            graphics: mask_graphics_55,
            x: 15.5043,
            y: 42.6375
        }).wait(1).to({
            graphics: mask_graphics_56,
            x: 15.5043,
            y: 43.5331
        }).wait(1).to({
            graphics: mask_graphics_57,
            x: 15.5043,
            y: 44.4287
        }).wait(1).to({
            graphics: mask_graphics_58,
            x: 15.5043,
            y: 45.3243
        }).wait(1).to({
            graphics: mask_graphics_59,
            x: 15.5043,
            y: 46.2199
        }).wait(1).to({
            graphics: mask_graphics_60,
            x: 15.5043,
            y: 47.1155
        }).wait(1).to({
            graphics: mask_graphics_61,
            x: 15.5043,
            y: 48.0111
        }).wait(1).to({
            graphics: mask_graphics_62,
            x: 15.5043,
            y: 48.9067
        }).wait(1).to({
            graphics: mask_graphics_63,
            x: 15.5043,
            y: 49.8023
        }).wait(1).to({
            graphics: mask_graphics_64,
            x: 15.5043,
            y: 50.6979
        }).wait(1).to({
            graphics: mask_graphics_65,
            x: 15.5043,
            y: 51.5936
        }).wait(1).to({
            graphics: mask_graphics_66,
            x: 15.5043,
            y: 52.4892
        }).wait(1).to({
            graphics: mask_graphics_67,
            x: 15.5043,
            y: 53.3848
        }).wait(1).to({
            graphics: mask_graphics_68,
            x: 15.5043,
            y: 54.2804
        }).wait(1).to({
            graphics: mask_graphics_69,
            x: 15.5043,
            y: 55.176
        }).wait(1).to({
            graphics: mask_graphics_70,
            x: 15.5043,
            y: 56.0716
        }).wait(1).to({
            graphics: mask_graphics_71,
            x: 15.5043,
            y: 56.9672
        }).wait(1).to({
            graphics: mask_graphics_72,
            x: 15.5043,
            y: 57.8628
        }).wait(1).to({
            graphics: mask_graphics_73,
            x: 15.5043,
            y: 58.7584
        }).wait(1).to({
            graphics: mask_graphics_74,
            x: 15.5043,
            y: 59.654
        }).wait(1).to({
            graphics: mask_graphics_75,
            x: 15.5043,
            y: 60.5496
        }).wait(1).to({
            graphics: mask_graphics_76,
            x: 15.5043,
            y: 61.4452
        }).wait(1).to({
            graphics: mask_graphics_77,
            x: 15.5043,
            y: 62.3408
        }).wait(1).to({
            graphics: mask_graphics_78,
            x: 15.5043,
            y: 63.2364
        }).wait(1).to({
            graphics: mask_graphics_79,
            x: 15.5043,
            y: 64.132
        }).wait(1).to({
            graphics: mask_graphics_80,
            x: 15.5043,
            y: 65.0276
        }).wait(1).to({
            graphics: mask_graphics_81,
            x: 15.5043,
            y: 65.9232
        }).wait(1).to({
            graphics: mask_graphics_82,
            x: 15.5043,
            y: 66.8188
        }).wait(1).to({
            graphics: mask_graphics_83,
            x: 15.5043,
            y: 67.7144
        }).wait(1).to({
            graphics: mask_graphics_84,
            x: 15.5043,
            y: 68.61
        }).wait(1).to({
            graphics: mask_graphics_85,
            x: 15.5043,
            y: 69.5056
        }).wait(1).to({
            graphics: mask_graphics_86,
            x: 15.5043,
            y: 70.4012
        }).wait(1).to({
            graphics: mask_graphics_87,
            x: 15.5043,
            y: 71.2968
        }).wait(1).to({
            graphics: mask_graphics_88,
            x: 15.5043,
            y: 72.1924
        }).wait(1).to({
            graphics: mask_graphics_89,
            x: 15.5043,
            y: 73.088
        }).wait(1).to({
            graphics: mask_graphics_90,
            x: 15.5043,
            y: 73.9836
        }).wait(1).to({
            graphics: mask_graphics_91,
            x: 15.5043,
            y: 74.8792
        }).wait(1).to({
            graphics: mask_graphics_92,
            x: 15.5043,
            y: 75.7748
        }).wait(1).to({
            graphics: mask_graphics_93,
            x: 15.5043,
            y: 76.6704
        }).wait(1).to({
            graphics: mask_graphics_94,
            x: 15.5043,
            y: 77.5661
        }).wait(1).to({
            graphics: mask_graphics_95,
            x: 15.5043,
            y: 78.4617
        }).wait(1).to({
            graphics: mask_graphics_96,
            x: 15.5043,
            y: 79.3573
        }).wait(1).to({
            graphics: mask_graphics_97,
            x: 15.5043,
            y: 80.2529
        }).wait(1).to({
            graphics: mask_graphics_98,
            x: 15.5043,
            y: 81.1485
        }).wait(1).to({
            graphics: mask_graphics_99,
            x: 15.5043,
            y: 82.0441
        }).wait(1));

        // Layer 6
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgcOGIgNAAQgGAAgEgEQgDgFgBgHIABgOQACgLgEgNQgBgGgCgCIgDgHIgBgWIgCgWIgCgNIgBgNIACgMIACgNIACgNIADgNIAAgNIABgNQABgGgBgHQAAgHABgGIAEgMIADgNIAHgYIAAgNQgBgHABgGIACgJIACgKIAEgWIAEgNQADgFABgHIACgZIADgZIABgaQAAgGgCgGIgDgNIAAgaIABgMIAAgNIAAgaIgBgZQgBgHgCgGQgDgGgBgGIgBgZIgBgcIABgOQABgHAAgHQgBgHgCgGQgCgHgBgHIACgOIABgNIgBgMIAAgLQAAgGABgGIACgNIACgbIACgbIAAgOIgBgNIABgLIABgLIABgKIACgLIAAgXIABgLQgBgGABgFQABgHAEgFQADgGACgGIABgMIACgNIAEgYIABgKQAAgFABgFIADgLIADgKIADgZIABgMIABgMIABgYIABgZIABgKIAAgLQAAgGgBgFIgCgLIgBgWIgCgYIgDgZIgCgYIgBgKIAAgLIgBgcIgCgLIgCgHIgBgLIAAgLIABgLIgBgXIgDgMQgCgGgBgHIABgMIAAgNIgCgMIgCgNIABgaQgBgGACgHIABgNIgDgaIgCgaIgCgOIgBgNIADgPIACgPIACgWIABgWQAAgGgDgGIgDgMIAAgNQABgHgCgFQgEgLAFgLQAEgMANgFQAKgDALAFQAKAFAEAOQADAKACALQADAKACAMIABAWQAAAGgCAGIgBANQAAAGACAHQABAGAAAGIgCAMIgCAMIgDAbQABAFACAFIADAKIgBANIAAAMIgBANIgBAMIADAMIACAMIAAAMIgBAMIABAYQAAAHADAGQACAHABAGIABAbQAAAGgBAHQgCAHABAGQABAIACADQACADABAHIABAPIABAOIABANIACANIACAUIADAXIACAZQAAAGgBAGIgCALIADANIADANIgCANQgBAHAAAHIACALQACAGAAAFIgCAZIgDANIgDAMIAAANIABAOIgFAbIgEANQgDAGgCAHIgEAYIgDANIgEAOQgBAHABAHIgBAPIgDAPQgCAHAAAHIgBALIAAALIgBALIgBALIgBAXIgBAZIgBAZIAAAYIgBAbIACAZQAAAGgCAHQgDAGAAAGIACAaIAAAcQABAHADAHQACAHABAHIgCAKQgCAFAAAFIADAXIAAAZQABAGACAGQADAGAAAHIAAAZIABAZIAAAZIgCAMIgCANIgDAYQAAAHACAGQACAHAAAGQgBAGgDAGQgDAGgBAGIgFAYQgBAHABADQACAEgCAGQgBAFgEAFQgDAFgCAFQgBAGABAHQABAGgBAHIgEAMIgFAMIgBAZQgBAGABAHQAAAGAAAGIgCAbIgBAaIgCANIgCAMIAAAOIABAOQABADACABIACAEIABALIABAMIAEAMQACAHAAAGQgBAGgEAGQgCAFgEAEQgFADgGAAIgNgCg");
        this.shape.setTransform(0.375, 90.99);
        this.shape._off = true;

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({
            _off: false
        }, 0).wait(95));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.6,-0.2,15,179.6);

    (lib.drip2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.instance = new lib.drop2();
        this.instance.parent = this;
        this.instance.setTransform(-0.2, 4.2, 0.9947, 0.9944);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
            _off: false
        }, 0).to({
            scaleX: 1.0004,
            guide: {
                path: [-0.2, 4.3, 0, 8.9, -0.4, 13.6, -0.7, 19, -1.1, 24.5, -1.4, 30, -1, 35.6, -0.2, 44.7, 0.2, 54, 0.6, 63.2, 0.6, 72.4, 0.6, 89.2, 0.6, 106.2, 0.6, 123.1, -0.2, 139.9, -0.4, 143.9, -0.7, 149.2, -1, 154.5, -1.1, 160.1, -1.2, 165.8, -0.7, 170.9, -0.4, 173.5, 0, 175.7]
            }
        }, 94).wait(1));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_5 = new cjs.Graphics().p("AnBAkIAAhHIODAAIAABHg");
        var mask_graphics_6 = new cjs.Graphics().p("AnBAuIAAhbIODAAIAABbg");
        var mask_graphics_7 = new cjs.Graphics().p("AnBA3IAAhtIODAAIAABtg");
        var mask_graphics_8 = new cjs.Graphics().p("AnBBBIAAiBIODAAIAACBg");
        var mask_graphics_9 = new cjs.Graphics().p("AnBBLIAAiVIODAAIAACVg");
        var mask_graphics_10 = new cjs.Graphics().p("AnBBUIAAinIODAAIAACng");
        var mask_graphics_11 = new cjs.Graphics().p("AnBBeIAAi7IODAAIAAC7g");
        var mask_graphics_12 = new cjs.Graphics().p("AnBBnIAAjNIODAAIAADNg");
        var mask_graphics_13 = new cjs.Graphics().p("AnBBxIAAjhIODAAIAADhg");
        var mask_graphics_14 = new cjs.Graphics().p("AnBB7IAAj1IODAAIAAD1g");
        var mask_graphics_15 = new cjs.Graphics().p("AnBCEIAAkHIODAAIAAEHg");
        var mask_graphics_16 = new cjs.Graphics().p("AnBCOIAAkbIODAAIAAEbg");
        var mask_graphics_17 = new cjs.Graphics().p("AnBCYIAAkvIODAAIAAEvg");
        var mask_graphics_18 = new cjs.Graphics().p("AnBChIAAlBIODAAIAAFBg");
        var mask_graphics_19 = new cjs.Graphics().p("AnBCrIAAlVIODAAIAAFVg");
        var mask_graphics_20 = new cjs.Graphics().p("AnBC0IAAlnIODAAIAAFng");
        var mask_graphics_21 = new cjs.Graphics().p("AnBC+IAAl7IODAAIAAF7g");
        var mask_graphics_22 = new cjs.Graphics().p("AnBDIIAAmPIODAAIAAGPg");
        var mask_graphics_23 = new cjs.Graphics().p("AnBDRIAAmhIODAAIAAGhg");
        var mask_graphics_24 = new cjs.Graphics().p("AnBDbIAAm1IODAAIAAG1g");
        var mask_graphics_25 = new cjs.Graphics().p("AnBDkIAAnHIODAAIAAHHg");
        var mask_graphics_26 = new cjs.Graphics().p("AnBDuIAAnbIODAAIAAHbg");
        var mask_graphics_27 = new cjs.Graphics().p("AnBD4IAAnvIODAAIAAHvg");
        var mask_graphics_28 = new cjs.Graphics().p("AnBEBIAAoBIODAAIAAIBg");
        var mask_graphics_29 = new cjs.Graphics().p("AnBELIAAoVIODAAIAAIVg");
        var mask_graphics_30 = new cjs.Graphics().p("AnBEVIAAopIODAAIAAIpg");
        var mask_graphics_31 = new cjs.Graphics().p("AnBEeIAAo7IODAAIAAI7g");
        var mask_graphics_32 = new cjs.Graphics().p("AnBEoIAApPIODAAIAAJPg");
        var mask_graphics_33 = new cjs.Graphics().p("AnBExIAAphIODAAIAAJhg");
        var mask_graphics_34 = new cjs.Graphics().p("AnBE7IAAp1IODAAIAAJ1g");
        var mask_graphics_35 = new cjs.Graphics().p("AnBFFIAAqJIODAAIAAKJg");
        var mask_graphics_36 = new cjs.Graphics().p("AnBFOIAAqbIODAAIAAKbg");
        var mask_graphics_37 = new cjs.Graphics().p("AnBFYIAAqvIODAAIAAKvg");
        var mask_graphics_38 = new cjs.Graphics().p("AnBFiIAArDIODAAIAALDg");
        var mask_graphics_39 = new cjs.Graphics().p("AnBFrIAArVIODAAIAALVg");
        var mask_graphics_40 = new cjs.Graphics().p("AnBF1IAArpIODAAIAALpg");
        var mask_graphics_41 = new cjs.Graphics().p("AnBF+IAAr7IODAAIAAL7g");
        var mask_graphics_42 = new cjs.Graphics().p("AnBGIIAAsPIODAAIAAMPg");
        var mask_graphics_43 = new cjs.Graphics().p("AnBGSIAAsjIODAAIAAMjg");
        var mask_graphics_44 = new cjs.Graphics().p("AnBGbIAAs1IODAAIAAM1g");
        var mask_graphics_45 = new cjs.Graphics().p("AnBGlIAAtJIODAAIAANJg");
        var mask_graphics_46 = new cjs.Graphics().p("AnBGvIAAtdIODAAIAANdg");
        var mask_graphics_47 = new cjs.Graphics().p("AnBG4IAAtvIODAAIAANvg");
        var mask_graphics_48 = new cjs.Graphics().p("AnBHCIAAuDIODAAIAAODg");
        var mask_graphics_49 = new cjs.Graphics().p("AnBHLIAAuVIODAAIAAOVg");
        var mask_graphics_50 = new cjs.Graphics().p("AnBHVIAAupIODAAIAAOpg");
        var mask_graphics_51 = new cjs.Graphics().p("AnBHfIAAu9IODAAIAAO9g");
        var mask_graphics_52 = new cjs.Graphics().p("AnBHoIAAvPIODAAIAAPPg");
        var mask_graphics_53 = new cjs.Graphics().p("AnBHyIAAvjIODAAIAAPjg");
        var mask_graphics_54 = new cjs.Graphics().p("AnBH7IAAv1IODAAIAAP1g");
        var mask_graphics_55 = new cjs.Graphics().p("AnBIFIAAwJIODAAIAAQJg");
        var mask_graphics_56 = new cjs.Graphics().p("AnBIPIAAwdIODAAIAAQdg");
        var mask_graphics_57 = new cjs.Graphics().p("AnBIYIAAwvIODAAIAAQvg");
        var mask_graphics_58 = new cjs.Graphics().p("AnBIiIAAxDIODAAIAARDg");
        var mask_graphics_59 = new cjs.Graphics().p("AnBIsIAAxXIODAAIAARXg");
        var mask_graphics_60 = new cjs.Graphics().p("AnBI1IAAxpIODAAIAARpg");
        var mask_graphics_61 = new cjs.Graphics().p("AnBI/IAAx9IODAAIAAR9g");
        var mask_graphics_62 = new cjs.Graphics().p("AnBJIIAAyPIODAAIAASPg");
        var mask_graphics_63 = new cjs.Graphics().p("AnBJSIAAyjIODAAIAASjg");
        var mask_graphics_64 = new cjs.Graphics().p("AnBJcIAAy3IODAAIAAS3g");
        var mask_graphics_65 = new cjs.Graphics().p("AnBJlIAAzJIODAAIAATJg");
        var mask_graphics_66 = new cjs.Graphics().p("AnBJvIAAzdIODAAIAATdg");
        var mask_graphics_67 = new cjs.Graphics().p("AnBJ5IAAzxIODAAIAATxg");
        var mask_graphics_68 = new cjs.Graphics().p("AnBKCIAA0DIODAAIAAUDg");
        var mask_graphics_69 = new cjs.Graphics().p("AnBKMIAA0XIODAAIAAUXg");
        var mask_graphics_70 = new cjs.Graphics().p("AnBKVIAA0pIODAAIAAUpg");
        var mask_graphics_71 = new cjs.Graphics().p("AnBKfIAA09IODAAIAAU9g");
        var mask_graphics_72 = new cjs.Graphics().p("AnBKpIAA1RIODAAIAAVRg");
        var mask_graphics_73 = new cjs.Graphics().p("AnBKyIAA1jIODAAIAAVjg");
        var mask_graphics_74 = new cjs.Graphics().p("AnBK8IAA13IODAAIAAV3g");
        var mask_graphics_75 = new cjs.Graphics().p("AnBLFIAA2KIODAAIAAWKg");
        var mask_graphics_76 = new cjs.Graphics().p("AnBLPIAA2dIODAAIAAWdg");
        var mask_graphics_77 = new cjs.Graphics().p("AnBLZIAA2xIODAAIAAWxg");
        var mask_graphics_78 = new cjs.Graphics().p("AnBLiIAA3DIODAAIAAXDg");
        var mask_graphics_79 = new cjs.Graphics().p("AnBLsIAA3XIODAAIAAXXg");
        var mask_graphics_80 = new cjs.Graphics().p("AnBL2IAA3rIODAAIAAXrg");
        var mask_graphics_81 = new cjs.Graphics().p("AnBL/IAA39IODAAIAAX9g");
        var mask_graphics_82 = new cjs.Graphics().p("AnBMJIAA4RIODAAIAAYRg");
        var mask_graphics_83 = new cjs.Graphics().p("AnBMSIAA4jIODAAIAAYjg");
        var mask_graphics_84 = new cjs.Graphics().p("AnBMcIAA43IODAAIAAY3g");
        var mask_graphics_85 = new cjs.Graphics().p("AnBMmIAA5LIODAAIAAZLg");
        var mask_graphics_86 = new cjs.Graphics().p("AnBMvIAA5dIODAAIAAZdg");
        var mask_graphics_87 = new cjs.Graphics().p("AnBM5IAA5xIODAAIAAZxg");
        var mask_graphics_88 = new cjs.Graphics().p("AnBNDIAA6FIODAAIAAaFg");
        var mask_graphics_89 = new cjs.Graphics().p("AnBNMIAA6XIODAAIAAaXg");
        var mask_graphics_90 = new cjs.Graphics().p("AnBNWIAA6rIODAAIAAarg");
        var mask_graphics_91 = new cjs.Graphics().p("AnBNfIAA69IODAAIAAa9g");
        var mask_graphics_92 = new cjs.Graphics().p("AnBNpIAA7RIODAAIAAbRg");
        var mask_graphics_93 = new cjs.Graphics().p("AnBNzIAA7lIODAAIAAblg");
        var mask_graphics_94 = new cjs.Graphics().p("AnBN8IAA73IODAAIAAb3g");
        var mask_graphics_95 = new cjs.Graphics().p("AnBOGIAA8LIODAAIAAcLg");
        var mask_graphics_96 = new cjs.Graphics().p("AnBOQIAA8fIODAAIAAcfg");
        var mask_graphics_97 = new cjs.Graphics().p("AnBOZIAA8xIODAAIAAcxg");
        var mask_graphics_98 = new cjs.Graphics().p("AnBOjIAA9FIODAAIAAdFg");
        var mask_graphics_99 = new cjs.Graphics().p("AnBOsIAA9XIODAAIAAdXg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(5).to({
            graphics: mask_graphics_5,
            x: 15.5043,
            y: -1.7427
        }).wait(1).to({
            graphics: mask_graphics_6,
            x: 15.5043,
            y: -0.8513
        }).wait(1).to({
            graphics: mask_graphics_7,
            x: 15.5043,
            y: 0.04
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: 15.5043,
            y: 0.9314
        }).wait(1).to({
            graphics: mask_graphics_9,
            x: 15.5043,
            y: 1.8227
        }).wait(1).to({
            graphics: mask_graphics_10,
            x: 15.5043,
            y: 2.7141
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: 15.5043,
            y: 3.6054
        }).wait(1).to({
            graphics: mask_graphics_12,
            x: 15.5043,
            y: 4.4968
        }).wait(1).to({
            graphics: mask_graphics_13,
            x: 15.5043,
            y: 5.3881
        }).wait(1).to({
            graphics: mask_graphics_14,
            x: 15.5043,
            y: 6.2795
        }).wait(1).to({
            graphics: mask_graphics_15,
            x: 15.5043,
            y: 7.1708
        }).wait(1).to({
            graphics: mask_graphics_16,
            x: 15.5043,
            y: 8.0622
        }).wait(1).to({
            graphics: mask_graphics_17,
            x: 15.5043,
            y: 8.9535
        }).wait(1).to({
            graphics: mask_graphics_18,
            x: 15.5043,
            y: 9.8449
        }).wait(1).to({
            graphics: mask_graphics_19,
            x: 15.5043,
            y: 10.7362
        }).wait(1).to({
            graphics: mask_graphics_20,
            x: 15.5043,
            y: 11.6276
        }).wait(1).to({
            graphics: mask_graphics_21,
            x: 15.5043,
            y: 12.5189
        }).wait(1).to({
            graphics: mask_graphics_22,
            x: 15.5043,
            y: 13.4103
        }).wait(1).to({
            graphics: mask_graphics_23,
            x: 15.5043,
            y: 14.3016
        }).wait(1).to({
            graphics: mask_graphics_24,
            x: 15.5043,
            y: 15.193
        }).wait(1).to({
            graphics: mask_graphics_25,
            x: 15.5043,
            y: 16.0843
        }).wait(1).to({
            graphics: mask_graphics_26,
            x: 15.5043,
            y: 16.9757
        }).wait(1).to({
            graphics: mask_graphics_27,
            x: 15.5043,
            y: 17.867
        }).wait(1).to({
            graphics: mask_graphics_28,
            x: 15.5043,
            y: 18.7583
        }).wait(1).to({
            graphics: mask_graphics_29,
            x: 15.5043,
            y: 19.6497
        }).wait(1).to({
            graphics: mask_graphics_30,
            x: 15.5043,
            y: 20.541
        }).wait(1).to({
            graphics: mask_graphics_31,
            x: 15.5043,
            y: 21.4324
        }).wait(1).to({
            graphics: mask_graphics_32,
            x: 15.5043,
            y: 22.3237
        }).wait(1).to({
            graphics: mask_graphics_33,
            x: 15.5043,
            y: 23.2151
        }).wait(1).to({
            graphics: mask_graphics_34,
            x: 15.5043,
            y: 24.1064
        }).wait(1).to({
            graphics: mask_graphics_35,
            x: 15.5043,
            y: 24.9978
        }).wait(1).to({
            graphics: mask_graphics_36,
            x: 15.5043,
            y: 25.8891
        }).wait(1).to({
            graphics: mask_graphics_37,
            x: 15.5043,
            y: 26.7805
        }).wait(1).to({
            graphics: mask_graphics_38,
            x: 15.5043,
            y: 27.6718
        }).wait(1).to({
            graphics: mask_graphics_39,
            x: 15.5043,
            y: 28.5632
        }).wait(1).to({
            graphics: mask_graphics_40,
            x: 15.5043,
            y: 29.4545
        }).wait(1).to({
            graphics: mask_graphics_41,
            x: 15.5043,
            y: 30.3459
        }).wait(1).to({
            graphics: mask_graphics_42,
            x: 15.5043,
            y: 31.2372
        }).wait(1).to({
            graphics: mask_graphics_43,
            x: 15.5043,
            y: 32.1286
        }).wait(1).to({
            graphics: mask_graphics_44,
            x: 15.5043,
            y: 33.0199
        }).wait(1).to({
            graphics: mask_graphics_45,
            x: 15.5043,
            y: 33.9113
        }).wait(1).to({
            graphics: mask_graphics_46,
            x: 15.5043,
            y: 34.8026
        }).wait(1).to({
            graphics: mask_graphics_47,
            x: 15.5043,
            y: 35.694
        }).wait(1).to({
            graphics: mask_graphics_48,
            x: 15.5043,
            y: 36.5853
        }).wait(1).to({
            graphics: mask_graphics_49,
            x: 15.5043,
            y: 37.4767
        }).wait(1).to({
            graphics: mask_graphics_50,
            x: 15.5043,
            y: 38.368
        }).wait(1).to({
            graphics: mask_graphics_51,
            x: 15.5043,
            y: 39.2594
        }).wait(1).to({
            graphics: mask_graphics_52,
            x: 15.5043,
            y: 40.1507
        }).wait(1).to({
            graphics: mask_graphics_53,
            x: 15.5043,
            y: 41.0421
        }).wait(1).to({
            graphics: mask_graphics_54,
            x: 15.5043,
            y: 41.9334
        }).wait(1).to({
            graphics: mask_graphics_55,
            x: 15.5043,
            y: 42.8247
        }).wait(1).to({
            graphics: mask_graphics_56,
            x: 15.5043,
            y: 43.7161
        }).wait(1).to({
            graphics: mask_graphics_57,
            x: 15.5043,
            y: 44.6074
        }).wait(1).to({
            graphics: mask_graphics_58,
            x: 15.5043,
            y: 45.4988
        }).wait(1).to({
            graphics: mask_graphics_59,
            x: 15.5043,
            y: 46.3901
        }).wait(1).to({
            graphics: mask_graphics_60,
            x: 15.5043,
            y: 47.2815
        }).wait(1).to({
            graphics: mask_graphics_61,
            x: 15.5043,
            y: 48.1728
        }).wait(1).to({
            graphics: mask_graphics_62,
            x: 15.5043,
            y: 49.0642
        }).wait(1).to({
            graphics: mask_graphics_63,
            x: 15.5043,
            y: 49.9555
        }).wait(1).to({
            graphics: mask_graphics_64,
            x: 15.5043,
            y: 50.8469
        }).wait(1).to({
            graphics: mask_graphics_65,
            x: 15.5043,
            y: 51.7382
        }).wait(1).to({
            graphics: mask_graphics_66,
            x: 15.5043,
            y: 52.6296
        }).wait(1).to({
            graphics: mask_graphics_67,
            x: 15.5043,
            y: 53.5209
        }).wait(1).to({
            graphics: mask_graphics_68,
            x: 15.5043,
            y: 54.4123
        }).wait(1).to({
            graphics: mask_graphics_69,
            x: 15.5043,
            y: 55.3036
        }).wait(1).to({
            graphics: mask_graphics_70,
            x: 15.5043,
            y: 56.195
        }).wait(1).to({
            graphics: mask_graphics_71,
            x: 15.5043,
            y: 57.0863
        }).wait(1).to({
            graphics: mask_graphics_72,
            x: 15.5043,
            y: 57.9777
        }).wait(1).to({
            graphics: mask_graphics_73,
            x: 15.5043,
            y: 58.869
        }).wait(1).to({
            graphics: mask_graphics_74,
            x: 15.5043,
            y: 59.7604
        }).wait(1).to({
            graphics: mask_graphics_75,
            x: 15.5043,
            y: 60.6517
        }).wait(1).to({
            graphics: mask_graphics_76,
            x: 15.5043,
            y: 61.5431
        }).wait(1).to({
            graphics: mask_graphics_77,
            x: 15.5043,
            y: 62.4344
        }).wait(1).to({
            graphics: mask_graphics_78,
            x: 15.5043,
            y: 63.3258
        }).wait(1).to({
            graphics: mask_graphics_79,
            x: 15.5043,
            y: 64.2171
        }).wait(1).to({
            graphics: mask_graphics_80,
            x: 15.5043,
            y: 65.1085
        }).wait(1).to({
            graphics: mask_graphics_81,
            x: 15.5043,
            y: 65.9998
        }).wait(1).to({
            graphics: mask_graphics_82,
            x: 15.5043,
            y: 66.8912
        }).wait(1).to({
            graphics: mask_graphics_83,
            x: 15.5043,
            y: 67.7825
        }).wait(1).to({
            graphics: mask_graphics_84,
            x: 15.5043,
            y: 68.6738
        }).wait(1).to({
            graphics: mask_graphics_85,
            x: 15.5043,
            y: 69.5652
        }).wait(1).to({
            graphics: mask_graphics_86,
            x: 15.5043,
            y: 70.4565
        }).wait(1).to({
            graphics: mask_graphics_87,
            x: 15.5043,
            y: 71.3479
        }).wait(1).to({
            graphics: mask_graphics_88,
            x: 15.5043,
            y: 72.2392
        }).wait(1).to({
            graphics: mask_graphics_89,
            x: 15.5043,
            y: 73.1306
        }).wait(1).to({
            graphics: mask_graphics_90,
            x: 15.5043,
            y: 74.0219
        }).wait(1).to({
            graphics: mask_graphics_91,
            x: 15.5043,
            y: 74.9133
        }).wait(1).to({
            graphics: mask_graphics_92,
            x: 15.5043,
            y: 75.8046
        }).wait(1).to({
            graphics: mask_graphics_93,
            x: 15.5043,
            y: 76.696
        }).wait(1).to({
            graphics: mask_graphics_94,
            x: 15.5043,
            y: 77.5873
        }).wait(1).to({
            graphics: mask_graphics_95,
            x: 15.5043,
            y: 78.4787
        }).wait(1).to({
            graphics: mask_graphics_96,
            x: 15.5043,
            y: 79.37
        }).wait(1).to({
            graphics: mask_graphics_97,
            x: 15.5043,
            y: 80.2614
        }).wait(1).to({
            graphics: mask_graphics_98,
            x: 15.5043,
            y: 81.1527
        }).wait(1).to({
            graphics: mask_graphics_99,
            x: 15.5043,
            y: 82.0441
        }).wait(1));

        // Layer 6
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AAEORQgFgBgFgFQgFgFgDgGIgJgTIgHgZIgCgNIgBgOQgBgGAAgGIAAgNIgDgMIgCgMIgCgNIgCgMIACgNIABgMIgBgNIgBgNQAAgGACgGQACgGABgHIgBgbIAAgOIgBgNIACgNIADgNIgCgPIgBgOIACgaIABgOIABgOIAAgNIAAgOQABgGADgFQADgFAAgGIgBgLIgBgLIABgNIACgMIABgZIAAgNIgBgMQAAgHgCgGIgBgNIACgMIACgNIACgMQABgGAAgHIgBgZIABgZIAAgZIABgZIgCgNQgCgGAAgGIABgZQAAgHABgGIACgMIAAgZQgBgHgCgGQgCgGgBgGQABgHACgGQADgGAAgGIgCgNQgCgGgBgGIgBgaIABgOIACgOIABgKIABgKQgBgJgBgEQgCgEgBgJQABgIABgEQACgEAAgIIAAgNIAAgNIAAgNIABgOIAAgNIABgNQAAgFgCgGIgCgKIACgLIACgMIABgYIgCgNIgCgMIgCgYIABgZIABgMIAAgMIgCgMIgDgMIgCgYIABgMIABgMIgCgNIgCgNIAAgaIgBgaIgCgMIgCgNIgDgZIACgMIABgMQgBgGgCgGQgDgGgBgGQAAgHACgGIABgMIgBgbIACgbIACgbIADgbIADgLIACgLQAAgGgCgGQgCgHAAgGIACgYIACgNQACgGAAgGIgBgYIgDgbIABgMQACgGADgEQAEgFAHgCQAGgCAHAAQAKAAAIAHQAKAHAAANIADAMIADAMIAAAZIgCAZIgCAcIgCANIgCAOIgDAbIAAAWIAAALIAAAMIgCAMIgBANIgBAZIAAAZIABAZIADAZIABAWIAEAXIABAWIADAXIACAaIgBALQgBAGABAGIABAXIACAaIABAYIABANIACANIgBAOIgBANIACANIABANIgBAOIgBANIABAbQAAAHgCAGIgDAOIABAKIAAAKQAAAJACAEQACAEABAJIAAAMIAAAMIAAANIAAANQgBAJgCAEQgCAEAAAKQAAAJABAEIACANIABALIABAKQAAAHgBAGIgCALIgBANIgBAMIACANQADAGAAAHIAAAZIgCAZIgCAZIACAZIABANQABAGAAAGQAAAHgDAGQgCAGgBAGQAAAHADAGQACAGAAAHIgBAZIgCAZQAAAGABAGIACANIgCAZIgDANIgCAMIABANIABAMIABAZIgCAZIgBAcIgCANIgCAOQAAAIACAEQACAEgBAJIgBALIgDAIIgBAMQgBAFACAFIABAMIgDALIgCAMIgCAXIgBAMIgCAMIgBAaQAAAHADAHQACAGABAHQgBAGgCAHQgDAGAAAHQAAAGADAGQADAHAAAGQAAAHgCAHQgCAHAAAHIACAaQABAHADAGQAEAGACAHIAAANQgBAHABAFQADAHAEAGIAHALQACAFgBAGQgBAGgCAGQgBAGgEAFQgEAFgGADQgFADgGAAIgEAAIgIgBg");
        this.shape.setTransform(-0.0083, 91.5417);
        this.shape._off = true;

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({
            _off: false
        }, 0).wait(95));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.6,-0.2,11.3,180.1);

    (lib.drip1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 3
        this.instance = new lib.drop1();
        this.instance.parent = this;
        this.instance.setTransform(-0.55, 5.1);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
            _off: false
        }, 0).to({
            guide: {
                path: [-0.4, 5.2, -0.2, 5.8, -0.2, 6.2, -0.3, 6.6, -0.4, 7.8, -0.7, 12.1, -1.4, 16.5, -2.1, 20.9, -2.4, 25.3, -2.9, 34.9, -2.7, 44.1, -2.4, 53.3, -0.5, 62.7, 1.2, 71.6, 1.7, 80.2, 1.7, 80.7, 1.8, 81.2, 2.2, 89.2, 2.2, 97.3, 2.1, 106, 2.2, 115, 2.4, 123.1, 2.7, 131.4, 3, 139.7, 2.8, 147.9, 2.8, 150.5, 2.7, 153.1, 2.5, 157.6, 2.1, 162, 1.9, 163.2, 1.8, 164.3, 1.7, 165.1, 1.6, 165.9]
            }
        }, 94).wait(1));

        // Layer 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_5 = new cjs.Graphics().p("AnBAkIAAhHIODAAIAABHg");
        var mask_graphics_6 = new cjs.Graphics().p("AnBAtIAAhZIODAAIAABZg");
        var mask_graphics_7 = new cjs.Graphics().p("AnBA2IAAhrIODAAIAABrg");
        var mask_graphics_8 = new cjs.Graphics().p("AnBBAIAAh/IODAAIAAB/g");
        var mask_graphics_9 = new cjs.Graphics().p("AnBBJIAAiRIODAAIAACRg");
        var mask_graphics_10 = new cjs.Graphics().p("AnBBSIAAijIODAAIAACjg");
        var mask_graphics_11 = new cjs.Graphics().p("AnBBbIAAi1IODAAIAAC1g");
        var mask_graphics_12 = new cjs.Graphics().p("AnBBkIAAjHIODAAIAADHg");
        var mask_graphics_13 = new cjs.Graphics().p("AnBBuIAAjbIODAAIAADbg");
        var mask_graphics_14 = new cjs.Graphics().p("AnBB3IAAjtIODAAIAADtg");
        var mask_graphics_15 = new cjs.Graphics().p("AnBCAIAAj/IODAAIAAD/g");
        var mask_graphics_16 = new cjs.Graphics().p("AnBCJIAAkRIODAAIAAERg");
        var mask_graphics_17 = new cjs.Graphics().p("AnBCSIAAkjIODAAIAAEjg");
        var mask_graphics_18 = new cjs.Graphics().p("AnBCcIAAk3IODAAIAAE3g");
        var mask_graphics_19 = new cjs.Graphics().p("AnBClIAAlJIODAAIAAFJg");
        var mask_graphics_20 = new cjs.Graphics().p("AnBCuIAAlbIODAAIAAFbg");
        var mask_graphics_21 = new cjs.Graphics().p("AnBC3IAAltIODAAIAAFtg");
        var mask_graphics_22 = new cjs.Graphics().p("AnBDAIAAl/IODAAIAAF/g");
        var mask_graphics_23 = new cjs.Graphics().p("AnBDKIAAmTIODAAIAAGTg");
        var mask_graphics_24 = new cjs.Graphics().p("AnBDTIAAmlIODAAIAAGlg");
        var mask_graphics_25 = new cjs.Graphics().p("AnBDcIAAm3IODAAIAAG3g");
        var mask_graphics_26 = new cjs.Graphics().p("AnBDlIAAnJIODAAIAAHJg");
        var mask_graphics_27 = new cjs.Graphics().p("AnBDuIAAnbIODAAIAAHbg");
        var mask_graphics_28 = new cjs.Graphics().p("AnBD4IAAnvIODAAIAAHvg");
        var mask_graphics_29 = new cjs.Graphics().p("AnBEBIAAoBIODAAIAAIBg");
        var mask_graphics_30 = new cjs.Graphics().p("AnBEKIAAoTIODAAIAAITg");
        var mask_graphics_31 = new cjs.Graphics().p("AnBETIAAolIODAAIAAIlg");
        var mask_graphics_32 = new cjs.Graphics().p("AnBEcIAAo3IODAAIAAI3g");
        var mask_graphics_33 = new cjs.Graphics().p("AnBElIAApJIODAAIAAJJg");
        var mask_graphics_34 = new cjs.Graphics().p("AnBEvIAApdIODAAIAAJdg");
        var mask_graphics_35 = new cjs.Graphics().p("AnBE4IAApvIODAAIAAJvg");
        var mask_graphics_36 = new cjs.Graphics().p("AnBFBIAAqBIODAAIAAKBg");
        var mask_graphics_37 = new cjs.Graphics().p("AnBFKIAAqTIODAAIAAKTg");
        var mask_graphics_38 = new cjs.Graphics().p("AnBFTIAAqlIODAAIAAKlg");
        var mask_graphics_39 = new cjs.Graphics().p("AnBFdIAAq5IODAAIAAK5g");
        var mask_graphics_40 = new cjs.Graphics().p("AnBFmIAArLIODAAIAALLg");
        var mask_graphics_41 = new cjs.Graphics().p("AnBFvIAArdIODAAIAALdg");
        var mask_graphics_42 = new cjs.Graphics().p("AnBF4IAArvIODAAIAALvg");
        var mask_graphics_43 = new cjs.Graphics().p("AnBGBIAAsBIODAAIAAMBg");
        var mask_graphics_44 = new cjs.Graphics().p("AnBGLIAAsVIODAAIAAMVg");
        var mask_graphics_45 = new cjs.Graphics().p("AnBGUIAAsnIODAAIAAMng");
        var mask_graphics_46 = new cjs.Graphics().p("AnBGdIAAs5IODAAIAAM5g");
        var mask_graphics_47 = new cjs.Graphics().p("AnBGmIAAtLIODAAIAANLg");
        var mask_graphics_48 = new cjs.Graphics().p("AnBGvIAAtdIODAAIAANdg");
        var mask_graphics_49 = new cjs.Graphics().p("AnBG5IAAtxIODAAIAANxg");
        var mask_graphics_50 = new cjs.Graphics().p("AnBHCIAAuDIODAAIAAODg");
        var mask_graphics_51 = new cjs.Graphics().p("AnBHLIAAuVIODAAIAAOVg");
        var mask_graphics_52 = new cjs.Graphics().p("AnBHUIAAunIODAAIAAOng");
        var mask_graphics_53 = new cjs.Graphics().p("AnBHdIAAu5IODAAIAAO5g");
        var mask_graphics_54 = new cjs.Graphics().p("AnBHnIAAvNIODAAIAAPNg");
        var mask_graphics_55 = new cjs.Graphics().p("AnBHwIAAvfIODAAIAAPfg");
        var mask_graphics_56 = new cjs.Graphics().p("AnBH5IAAvxIODAAIAAPxg");
        var mask_graphics_57 = new cjs.Graphics().p("AnBICIAAwDIODAAIAAQDg");
        var mask_graphics_58 = new cjs.Graphics().p("AnBILIAAwVIODAAIAAQVg");
        var mask_graphics_59 = new cjs.Graphics().p("AnBIUIAAwnIODAAIAAQng");
        var mask_graphics_60 = new cjs.Graphics().p("AnBIeIAAw7IODAAIAAQ7g");
        var mask_graphics_61 = new cjs.Graphics().p("AnBInIAAxNIODAAIAARNg");
        var mask_graphics_62 = new cjs.Graphics().p("AnBIwIAAxfIODAAIAARfg");
        var mask_graphics_63 = new cjs.Graphics().p("AnBI5IAAxxIODAAIAARxg");
        var mask_graphics_64 = new cjs.Graphics().p("AnBJCIAAyDIODAAIAASDg");
        var mask_graphics_65 = new cjs.Graphics().p("AnBJMIAAyXIODAAIAASXg");
        var mask_graphics_66 = new cjs.Graphics().p("AnBJVIAAypIODAAIAASpg");
        var mask_graphics_67 = new cjs.Graphics().p("AnBJeIAAy7IODAAIAAS7g");
        var mask_graphics_68 = new cjs.Graphics().p("AnBJnIAAzNIODAAIAATNg");
        var mask_graphics_69 = new cjs.Graphics().p("AnBJwIAAzfIODAAIAATfg");
        var mask_graphics_70 = new cjs.Graphics().p("AnBJ6IAAzzIODAAIAATzg");
        var mask_graphics_71 = new cjs.Graphics().p("AnBKDIAA0FIODAAIAAUFg");
        var mask_graphics_72 = new cjs.Graphics().p("AnBKMIAA0XIODAAIAAUXg");
        var mask_graphics_73 = new cjs.Graphics().p("AnBKVIAA0pIODAAIAAUpg");
        var mask_graphics_74 = new cjs.Graphics().p("AnBKeIAA07IODAAIAAU7g");
        var mask_graphics_75 = new cjs.Graphics().p("AnBKoIAA1PIODAAIAAVPg");
        var mask_graphics_76 = new cjs.Graphics().p("AnBKxIAA1hIODAAIAAVhg");
        var mask_graphics_77 = new cjs.Graphics().p("AnBK6IAA1zIODAAIAAVzg");
        var mask_graphics_78 = new cjs.Graphics().p("AnBLDIAA2FIODAAIAAWFg");
        var mask_graphics_79 = new cjs.Graphics().p("AnBLMIAA2XIODAAIAAWXg");
        var mask_graphics_80 = new cjs.Graphics().p("AnBLWIAA2rIODAAIAAWrg");
        var mask_graphics_81 = new cjs.Graphics().p("AnBLfIAA29IODAAIAAW9g");
        var mask_graphics_82 = new cjs.Graphics().p("AnBLoIAA3PIODAAIAAXPg");
        var mask_graphics_83 = new cjs.Graphics().p("AnBLxIAA3hIODAAIAAXhg");
        var mask_graphics_84 = new cjs.Graphics().p("AnBL6IAA3zIODAAIAAXzg");
        var mask_graphics_85 = new cjs.Graphics().p("AnBMDIAA4FIODAAIAAYFg");
        var mask_graphics_86 = new cjs.Graphics().p("AnBMNIAA4ZIODAAIAAYZg");
        var mask_graphics_87 = new cjs.Graphics().p("AnBMWIAA4rIODAAIAAYrg");
        var mask_graphics_88 = new cjs.Graphics().p("AnBMfIAA49IODAAIAAY9g");
        var mask_graphics_89 = new cjs.Graphics().p("AnBMoIAA5PIODAAIAAZPg");
        var mask_graphics_90 = new cjs.Graphics().p("AnBMxIAA5hIODAAIAAZhg");
        var mask_graphics_91 = new cjs.Graphics().p("AnBM7IAA51IODAAIAAZ1g");
        var mask_graphics_92 = new cjs.Graphics().p("AnBNEIAA6HIODAAIAAaHg");
        var mask_graphics_93 = new cjs.Graphics().p("AnBNNIAA6ZIODAAIAAaZg");
        var mask_graphics_94 = new cjs.Graphics().p("AnBNWIAA6rIODAAIAAarg");
        var mask_graphics_95 = new cjs.Graphics().p("AnBNfIAA69IODAAIAAa9g");
        var mask_graphics_96 = new cjs.Graphics().p("AnBNpIAA7RIODAAIAAbRg");
        var mask_graphics_97 = new cjs.Graphics().p("AnBNyIAA7jIODAAIAAbjg");
        var mask_graphics_98 = new cjs.Graphics().p("AnBN7IAA71IODAAIAAb1g");
        var mask_graphics_99 = new cjs.Graphics().p("AnBOEIAA8HIODAAIAAcHg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(5).to({
            graphics: mask_graphics_5,
            x: 4.2543,
            y: -2.6927
        }).wait(1).to({
            graphics: mask_graphics_6,
            x: 4.2655,
            y: -1.8276
        }).wait(1).to({
            graphics: mask_graphics_7,
            x: 4.2767,
            y: -0.9625
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: 4.2878,
            y: -0.0974
        }).wait(1).to({
            graphics: mask_graphics_9,
            x: 4.299,
            y: 0.7677
        }).wait(1).to({
            graphics: mask_graphics_10,
            x: 4.3102,
            y: 1.6327
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: 4.3214,
            y: 2.4978
        }).wait(1).to({
            graphics: mask_graphics_12,
            x: 4.3325,
            y: 3.3629
        }).wait(1).to({
            graphics: mask_graphics_13,
            x: 4.3437,
            y: 4.228
        }).wait(1).to({
            graphics: mask_graphics_14,
            x: 4.3549,
            y: 5.093
        }).wait(1).to({
            graphics: mask_graphics_15,
            x: 4.366,
            y: 5.9581
        }).wait(1).to({
            graphics: mask_graphics_16,
            x: 4.3772,
            y: 6.8232
        }).wait(1).to({
            graphics: mask_graphics_17,
            x: 4.3884,
            y: 7.6883
        }).wait(1).to({
            graphics: mask_graphics_18,
            x: 4.3996,
            y: 8.5534
        }).wait(1).to({
            graphics: mask_graphics_19,
            x: 4.4107,
            y: 9.4184
        }).wait(1).to({
            graphics: mask_graphics_20,
            x: 4.4219,
            y: 10.2835
        }).wait(1).to({
            graphics: mask_graphics_21,
            x: 4.4331,
            y: 11.1486
        }).wait(1).to({
            graphics: mask_graphics_22,
            x: 4.4442,
            y: 12.0137
        }).wait(1).to({
            graphics: mask_graphics_23,
            x: 4.4554,
            y: 12.8788
        }).wait(1).to({
            graphics: mask_graphics_24,
            x: 4.4666,
            y: 13.7438
        }).wait(1).to({
            graphics: mask_graphics_25,
            x: 4.4777,
            y: 14.6089
        }).wait(1).to({
            graphics: mask_graphics_26,
            x: 4.4889,
            y: 15.474
        }).wait(1).to({
            graphics: mask_graphics_27,
            x: 4.5001,
            y: 16.3391
        }).wait(1).to({
            graphics: mask_graphics_28,
            x: 4.5113,
            y: 17.2041
        }).wait(1).to({
            graphics: mask_graphics_29,
            x: 4.5224,
            y: 18.0692
        }).wait(1).to({
            graphics: mask_graphics_30,
            x: 4.5336,
            y: 18.9343
        }).wait(1).to({
            graphics: mask_graphics_31,
            x: 4.5448,
            y: 19.7994
        }).wait(1).to({
            graphics: mask_graphics_32,
            x: 4.5559,
            y: 20.6645
        }).wait(1).to({
            graphics: mask_graphics_33,
            x: 4.5671,
            y: 21.5295
        }).wait(1).to({
            graphics: mask_graphics_34,
            x: 4.5783,
            y: 22.3946
        }).wait(1).to({
            graphics: mask_graphics_35,
            x: 4.5894,
            y: 23.2597
        }).wait(1).to({
            graphics: mask_graphics_36,
            x: 4.6006,
            y: 24.1248
        }).wait(1).to({
            graphics: mask_graphics_37,
            x: 4.6118,
            y: 24.9899
        }).wait(1).to({
            graphics: mask_graphics_38,
            x: 4.623,
            y: 25.8549
        }).wait(1).to({
            graphics: mask_graphics_39,
            x: 4.6341,
            y: 26.72
        }).wait(1).to({
            graphics: mask_graphics_40,
            x: 4.6453,
            y: 27.5851
        }).wait(1).to({
            graphics: mask_graphics_41,
            x: 4.6565,
            y: 28.4502
        }).wait(1).to({
            graphics: mask_graphics_42,
            x: 4.6676,
            y: 29.3152
        }).wait(1).to({
            graphics: mask_graphics_43,
            x: 4.6788,
            y: 30.1803
        }).wait(1).to({
            graphics: mask_graphics_44,
            x: 4.69,
            y: 31.0454
        }).wait(1).to({
            graphics: mask_graphics_45,
            x: 4.7011,
            y: 31.9105
        }).wait(1).to({
            graphics: mask_graphics_46,
            x: 4.7123,
            y: 32.7756
        }).wait(1).to({
            graphics: mask_graphics_47,
            x: 4.7235,
            y: 33.6406
        }).wait(1).to({
            graphics: mask_graphics_48,
            x: 4.7347,
            y: 34.5057
        }).wait(1).to({
            graphics: mask_graphics_49,
            x: 4.7458,
            y: 35.3708
        }).wait(1).to({
            graphics: mask_graphics_50,
            x: 4.757,
            y: 36.2359
        }).wait(1).to({
            graphics: mask_graphics_51,
            x: 4.7682,
            y: 37.101
        }).wait(1).to({
            graphics: mask_graphics_52,
            x: 4.7793,
            y: 37.966
        }).wait(1).to({
            graphics: mask_graphics_53,
            x: 4.7905,
            y: 38.8311
        }).wait(1).to({
            graphics: mask_graphics_54,
            x: 4.8017,
            y: 39.6962
        }).wait(1).to({
            graphics: mask_graphics_55,
            x: 4.8128,
            y: 40.5613
        }).wait(1).to({
            graphics: mask_graphics_56,
            x: 4.824,
            y: 41.4263
        }).wait(1).to({
            graphics: mask_graphics_57,
            x: 4.8352,
            y: 42.2914
        }).wait(1).to({
            graphics: mask_graphics_58,
            x: 4.8464,
            y: 43.1565
        }).wait(1).to({
            graphics: mask_graphics_59,
            x: 4.8575,
            y: 44.0216
        }).wait(1).to({
            graphics: mask_graphics_60,
            x: 4.8687,
            y: 44.8867
        }).wait(1).to({
            graphics: mask_graphics_61,
            x: 4.8799,
            y: 45.7517
        }).wait(1).to({
            graphics: mask_graphics_62,
            x: 4.891,
            y: 46.6168
        }).wait(1).to({
            graphics: mask_graphics_63,
            x: 4.9022,
            y: 47.4819
        }).wait(1).to({
            graphics: mask_graphics_64,
            x: 4.9134,
            y: 48.347
        }).wait(1).to({
            graphics: mask_graphics_65,
            x: 4.9246,
            y: 49.2121
        }).wait(1).to({
            graphics: mask_graphics_66,
            x: 4.9357,
            y: 50.0771
        }).wait(1).to({
            graphics: mask_graphics_67,
            x: 4.9469,
            y: 50.9422
        }).wait(1).to({
            graphics: mask_graphics_68,
            x: 4.9581,
            y: 51.8073
        }).wait(1).to({
            graphics: mask_graphics_69,
            x: 4.9692,
            y: 52.6724
        }).wait(1).to({
            graphics: mask_graphics_70,
            x: 4.9804,
            y: 53.5374
        }).wait(1).to({
            graphics: mask_graphics_71,
            x: 4.9916,
            y: 54.4025
        }).wait(1).to({
            graphics: mask_graphics_72,
            x: 5.0027,
            y: 55.2676
        }).wait(1).to({
            graphics: mask_graphics_73,
            x: 5.0139,
            y: 56.1327
        }).wait(1).to({
            graphics: mask_graphics_74,
            x: 5.0251,
            y: 56.9978
        }).wait(1).to({
            graphics: mask_graphics_75,
            x: 5.0363,
            y: 57.8628
        }).wait(1).to({
            graphics: mask_graphics_76,
            x: 5.0474,
            y: 58.7279
        }).wait(1).to({
            graphics: mask_graphics_77,
            x: 5.0586,
            y: 59.593
        }).wait(1).to({
            graphics: mask_graphics_78,
            x: 5.0698,
            y: 60.4581
        }).wait(1).to({
            graphics: mask_graphics_79,
            x: 5.0809,
            y: 61.3232
        }).wait(1).to({
            graphics: mask_graphics_80,
            x: 5.0921,
            y: 62.1882
        }).wait(1).to({
            graphics: mask_graphics_81,
            x: 5.1033,
            y: 63.0533
        }).wait(1).to({
            graphics: mask_graphics_82,
            x: 5.1144,
            y: 63.9184
        }).wait(1).to({
            graphics: mask_graphics_83,
            x: 5.1256,
            y: 64.7835
        }).wait(1).to({
            graphics: mask_graphics_84,
            x: 5.1368,
            y: 65.6485
        }).wait(1).to({
            graphics: mask_graphics_85,
            x: 5.148,
            y: 66.5136
        }).wait(1).to({
            graphics: mask_graphics_86,
            x: 5.1591,
            y: 67.3787
        }).wait(1).to({
            graphics: mask_graphics_87,
            x: 5.1703,
            y: 68.2438
        }).wait(1).to({
            graphics: mask_graphics_88,
            x: 5.1815,
            y: 69.1089
        }).wait(1).to({
            graphics: mask_graphics_89,
            x: 5.1926,
            y: 69.9739
        }).wait(1).to({
            graphics: mask_graphics_90,
            x: 5.2038,
            y: 70.839
        }).wait(1).to({
            graphics: mask_graphics_91,
            x: 5.215,
            y: 71.7041
        }).wait(1).to({
            graphics: mask_graphics_92,
            x: 5.2261,
            y: 72.5692
        }).wait(1).to({
            graphics: mask_graphics_93,
            x: 5.2373,
            y: 73.4343
        }).wait(1).to({
            graphics: mask_graphics_94,
            x: 5.2485,
            y: 74.2993
        }).wait(1).to({
            graphics: mask_graphics_95,
            x: 5.2597,
            y: 75.1644
        }).wait(1).to({
            graphics: mask_graphics_96,
            x: 5.2708,
            y: 76.0295
        }).wait(1).to({
            graphics: mask_graphics_97,
            x: 5.282,
            y: 76.8946
        }).wait(1).to({
            graphics: mask_graphics_98,
            x: 5.2932,
            y: 77.7596
        }).wait(1).to({
            graphics: mask_graphics_99,
            x: 5.3043,
            y: 78.6247
        }).wait(1));

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgJNVIgIgJQgCgFgBgGIABgBIABAAIAAgLIgBgMIAEgNIADgOIAAgKIACgLIAEgYIADgZIAAgZIABgZIACgZQAAgHgCgGQgDgGABgHIABgcIABgNIABgOIAAgXIgBgZIAAgZIABgNQABgGAAgGIgBgOIgCgOIABgNIABgOIgBgbIgBgLIgBgLIgCgOIgCgPQAAgJACgEQACgEAAgJIAAgOIgBgNQgBgJgBgDQgCgEAAgJIgBgMIgBgNIAAgOIABgEIAAgLIAAgOIAAgFIAAgIIAAgOIAAgPIgBgWIAAgcQAAgFACgFQACgFABgGIABgLIAAgLIgBgWIgCgMIgCgKIABgLIABgLIAAgXIgCgMIgCgNIgBgZIgBgZIgEgMIgDgMQgBgGABgHIgBgMIgBgNIgBgNIgEgMIgDgNIgFgZIgCgVIgEgMQgDgGgBgGIgCgZIgCgZIgFgYIAAgZIgCgMIgBgMIAAgMIABgMQgBgHABgHIABgNQAAgHgCgHIgBgNIgBgZIABgcIACgbIgBgOIAAgOQAAgHADgHQADgGABgHIgCgKQgCgFAAgFQABgHADgGQADgGAAgGQABgGgBgGQgCgHABgGIADgMIAFgMIgBgNQgBgHABgGQABgHACgHIADgNQABgHgBgIIAAgOIACgLIABgFIgDgIQAAgFADgEIAEgHIAGgJQADgEAGgCQAFgCAGAAQAFABAEACQAGACAGAFQAFAFACAGQADAKAAAHIgCANIAAAEIAAAFIgDAVIgDAWIgEAXIgCAWIgDAVIAAALIAAAMQgCAFgDAFIgDALQAAAGABAFIAAALIgCAKIgCAKIADAMQACAFAAAGIgCAWIgCANIgBAMQAAAGACAHIACAMIAAAZIgBANQgCAGAAAGIADAZQAAAGgCAHQgCAGAAAGQABAGACAHIADAMIABAZIAAANIABANIADAMIADAMIADAaIAEAMIADANQABAFgBAGQgBAGABAFIAGAZIADAMIAEAMIABAMIABAMIACAZIACAMIACAMIgBAMIgBAMIAEAMIAEAMIABAZIgBAMIgBAMIgBAYIgBAaIABAZQAAAHACAHQACAGABAHIgBAOIgBAOIgBAMIgBANQgBAHACAEQACADAAAIIAAAOIAAAOIgBANIgBADIAAAKIAAAOIABAOQABAKgCAEIgBAPQAAAIACAEQACAEAAAIQAAAJgBAEIgBAMIAAANIAAANQABAKABAEQABAEABAKIACAWIABAWIAAAZIgBAZIAAAZIABANIACANIgCAMQgBAGAAAHIAAAZIgCAZIACANQABAGAAAGIAAAZIgCANIgCAMIgBAZQgBAGABAGIAAANQAAAGgDAGIgDAMQAAAHABAGIAAAMQgBAIgDAEQgCADgBAIQgBAFABAFQACAFgBAFIgBAWQgBAFgDAFIgIAIQgHAJgOgBIgBABQgJAAgIgHg");
        this.shape.setTransform(0.35, 87.6518);
        this.shape._off = true;

        var maskedShapeInstanceList = [this.shape];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({
            _off: false
        }, 0).wait(95));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.1,-0.4,15.1,173.9);

    // library properties: 800x600, 25 fps

    window.assets = lib;

}
)(createjs);
