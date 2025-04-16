var RandomUtil = {};
RandomUtil.pick = function(pool, exceptions)
{
	if (exceptions != null)
	{
		var pool2 = [];
		var n = pool.length;
		for (var i = 0; i < n; i++)
		{
			var item = pool[i];
			if (exceptions.indexOf(item) == -1) pool2.push(item);
		}
		pool = pool2;
	}
	return pool[Math.floor(Math.random() * pool.length)];
}
RandomUtil.between = function(min, max, integer, extremeFactor)
{
	var p = Math.random();
	if (extremeFactor)
	{
		var f = Math.pow((p < .5) ? p * 2 : (1 - p) * 2, extremeFactor);
		p = (p < .5) ? f / 2 : 1 - (f / 2);
	}
	var n = min + p * (max-min);
	if (integer) return Math.floor(n);
	else return n;
}

const Point = createjs.Point;
Point.distance = function (p0, p1) {
	return Math.sqrt(Math.pow(p0.x - p1.x, 2) + Math.pow(p0.y - p1.y, 2));
}

const MathUtil = {};
MathUtil.lerp = function (v0, v1, t, clamp) {
	if (clamp) t = Math.max(0, Math.min(1, t));
	var v = v0 + (v1 - v0) * t;
	return v;
}
MathUtil.lerp2d = function (p0, p1, t, clamp) {
	return new Point(MathUtil.lerp(p0.x, p1.x, t, clamp), MathUtil.lerp(p0.y, p1.y, t, clamp))
}

var ArrayUtil = {};
ArrayUtil.lookup = function(table, x, interpolate)
{
	//'table' should be array of format [x0,y0, x1,y1, x2,y2 ...], with x0,x1,x2 increasing
	if (x<table[0]) return table[1];//x < x0: return y0
	for (var i=0;i<table.length-2;i+=2)
	{
		var xp = table[i];
		var xn = table[i+2];
		if (xp<=x && x<=xn)
		{
			var yp = table[i+1];
			var yn = table[i+3];
			if (interpolate)
			{
				return yp + (yn-yp) * (x-xp)/(xn-xp);
			}
			else
			{
				return table[i+1];//return low y
			}
		}
	}
	//not found: x must be larger than largest x in table
	return table[table.length-1];//x > xLast: return yLast
}