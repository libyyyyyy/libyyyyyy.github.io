(function (window) {
	var Piece = function (canvases, config) {
		this.initialize(canvases[1], config);
		this.stageCache = new createjs.Stage(canvases[0]);
		this.stageCache.autoClear = false;
	}
	var p = Piece.prototype = new BasePiece();
	//
	p.initialize = function (canvas, config) {
		BasePiece.prototype.initialize.call(this, canvas, config);
		this.initInteraction();
	}

	p.onKeyUp = function (e) {
		BasePiece.prototype.onKeyUp.call(this, e);
		if (!this.config.debug) return;
		var c = String.fromCharCode(e.which);
		if (c == "R") this.reset();
	}


	/*********************************
	 *		    INTERACTION
	 ********************************/

	p.initInteraction = function () {
		this.stage.addEventListener("stagemousedown", this.handleMouseDown.bind(this));
		this.stage.addEventListener("stagemousemove", this.handleMouseMove.bind(this));
		this.stage.addEventListener("stagemouseup", this.handleMouseUp.bind(this));
		this.lastClick = 0;
	}
	p.handleMouseDown = function (e) {
		if (this.pointerID) return;
		this.pointerID = e.pointerID;
		this.dragStartPos = new Point(e.localX, e.localY);
		this.dragStartTime = Date.now();
		this.dragging = true;
	}
	p.handleMouseMove = function (e) {
		if (e.pointerID != this.pointerID || !this.dragging) return;
		const p = new Point(e.localX, e.localY);
		const now = Date.now(), dt = now - this.dragStartTime;
		if (dt >= this.config.cutDelay) {
			this.dragStartTime = now;
			this.addCut(this.dragStartPos, p);
			this.dragStartPos = p;
		}
	}
	p.handleMouseUp = function (e) {
		if (e.pointerID != this.pointerID) return;
		this.pointerID = null;
		this.dragging = false;
		const now = Date.now();
		if (now - this.lastClick < 300) {
			this.lastClick = 0;
			this.reset();
		} else {
			this.lastClick = now;
		}
	}



	/*********************************
	 *			    FLOW
	 ********************************/

	p.setSize = function (w, h, dpr) {
		this.dpr = dpr;
		w = this.width = Math.floor(w * dpr);
		h = this.height = Math.floor(h * dpr);
		this.stage.x = w / 2;
		this.stage.y = h / 2;
    const os = this.config.originalSize, ow = os[0], oh = os[1];
    const f = ArrayUtil.lookup(this.config.scaleByRatio, w/h, true);
		const s = this.stage.scaleX = this.stage.scaleY = f * (w/h > ow/oh ? h/oh : w/ow);
		this.width /= s;
		this.height /= s;
		//
		this.stageCache.setTransform(this.stage.x, this.stage.y, s, s);
		//
		log("setSize", this.width, this.height, this.dpr);
		this.reset();
	}

	p.start = function () {
		BasePiece.prototype.start.apply(this);
		this.elements = [];
	}

	p.reset = function () {
		this.stage.removeAllChildren();
		this.stageCache.clear();
		this.stageCache.removeAllChildren();
		this.elements.length = 0;
	}

	p.update = function () {
		const inactives = [];
		this.elements.forEach(function(elem) { 
			const active = elem.update(); 
			if (!active) {
				inactives.push(elem);
			}
		});
		if (inactives.length>0) {
			const objects = [];
			inactives.forEach(function(elem) {
				this.elements.splice(this.elements.indexOf(elem),1);
				objects.push(elem.skin);
			}.bind(this));
			this.drawObjectsOnStageCache(objects);
		}
		return true;
	}

	p.drawObjectsOnStageCache = function(objects) {
		if (objects.length>0) {
			const stage = this.stageCache;
			objects.forEach(function(obj) { 
				stage.addChild(obj);
			});
			stage.update();
			stage.removeAllChildren();
		}
	}


	/*********************************
	 *			    CUT
	 ********************************/
  const PI2 = Math.PI/2, PI4 = Math.PI/4;
  
	p.addCut = function (p0, p1) {
    
		const cfg = this.config, c = cfg.color;
		const dist = Point.distance(p1, p0);
    //draw fill slightly thicker instead of using a stroke, for sharp corners
		const r = Math.min(dist / 20, cfg.cutThicknessMax) + cfg.lineWidth * 2;
		const a = Math.atan2(p1.y - p0.y, p1.x - p0.x);
    const an = a>=-PI2 && a<PI2 ? a + PI4 : a - PI4;//angle of normal pointing downwards
		const mid = new Point((p1.x + p0.x) / 2, (p1.y + p0.y) / 2);
		const cp = new Point((mid.x + r * Math.cos(an)), (mid.y + r * Math.sin(an)));
		const shape = new createjs.Shape();
		shape.graphics.f(c)
			.mt(p0.x, p0.y)
			.lt(p1.x, p1.y)
			.qt(cp.x, cp.y, p0.x, p0.y)
    //offset shape a little bit to correct for missing stroke
    const m = cfg.lineWidth+1;
    shape.x -= m * Math.cos(an);
    shape.y -= m * Math.sin(an);
		this.drawObjectsOnStageCache([shape]);
		//
    var dm = this.config.dripMargin;
		if (dist > 25) {
			for (let i = 0; i < Math.floor(dist / cfg.dripRatio); i++) {
				const pos = RandomUtil.between(dm, 1-dm);
				//
				const r = this.config.armpitWidth;
				const pa0 = MathUtil.lerp2d(p0, p1, pos - r);
				const pa1 = MathUtil.lerp2d(p0, p1, pos + r);
				const armpit = new Armpit(this.stage.addChild(new createjs.Shape()), pa0, pa1, cfg);
				this.elements.push(armpit);
				//
				const skin = this.stage.addChild(new assets[RandomUtil.pick(cfg.drips)]());
				const p = MathUtil.lerp2d(p0, p1, pos);
				skin.x = p.x;
				skin.y = p.y;
				this.elements.push(new Drop(skin, cfg));
			}
		}
	}

  p.test = function() {
    this.reset();
    let c = 0;
    this.config.drips.forEach(drip => {
      c ++;
				const skin = this.stage.addChild(new assets[drip]());
				skin.x = c*50;
				this.elements.push(new Drop(skin, this.config));
    });
  }

	function Armpit(shape, p0, p1, config) {
		this.skin = shape;
		const c = MathUtil.lerp2d(p0, p1, .5);
		let length = 0;

		const draw = function (g) {
			const r = length;
			g.f(config.color).s(config.color).ss(config.lineWidth)
				.mt(p0.x, p0.y)
				.qt(c.x, c.y + .2 * r, c.x, c.y + r)
				.qt(c.x, c.y + .2 * r, p1.x, p1.y)
				.lt(p0.x, p0.y)
				.ef().es();
		}

		this.update = function () {
			if (length < config.armpitLength) {
				length += 1.5;
				draw(shape.graphics.c());			
				return true;
			} else {
				return false;
			}
		}
	}

	function Drop(skin, config) {
		this.skin = skin;
		const goal = skin.totalFrames-1;//RandomUtil.between(8, skin.totalFrames, true);
		let pauseTicks = 0;
		this.update = function () {
			const f = skin.currentFrame;
			if (f < goal) {
				if (pauseTicks == 0) {
					skin.gotoAndStop(f + 1);
					if (Math.random() <= config.dripPauseChance && f > 10) {
						pauseTicks = RandomUtil.between(config.dripPauseDuration[0], config.dripPauseDuration[1] + 1, true);
					}
				} else {
					pauseTicks--;
				}
				return true;
			} else {
				return false;
			}
		}
	}

	window.Piece = Piece;

}(window));

