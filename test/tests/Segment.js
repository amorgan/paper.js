module('Segment');
test('new Segment(point)', function(){
	var segment = new Segment(new Point(10, 10));
	var expected = { point: { x: 10, y: 10 } };
	compareSegments(segment, expected);
});

test('new Segment(x, y)', function(){
	var segment = new Segment(10, 10);
	var expected = { point: { x: 10, y: 10 } };
	compareSegments(segment, expected);
});

test('new Segment(object)', function(){
	var segment = new Segment({ point: { x: 10, y: 10 }, handleIn: { x: 5, y: 5 }, handleOut: { x: 15, y: 15 } });
	var expected = { point: { x: 10, y: 10 }, handleIn: { x: 5, y: 5 }, handleOut: { x: 15, y: 15 } };
	compareSegments(segment, expected);
});

test('new Segment(point, handleIn, handleOut)', function(){
	var segment = new Segment(new Point(10, 10), new Point(5, 5), new Point(15, 15));
	var expected = { point: { x: 10, y: 10 }, handleIn: { x: 5, y: 5 }, handleOut: { x: 15, y: 15 } };
	compareSegments(segment, expected);
});

test('new Segment(x, y, inX, inY, outX, outY)', function(){
	var segment = new Segment(10, 10, 5, 5, 15, 15);
	var expected = { point: { x: 10, y: 10 }, handleIn: { x: 5, y: 5 }, handleOut: { x: 15, y: 15 } };
	compareSegments(segment, expected);
});

test('segment.reverse()', function(){
	var segment = new Segment(new Point(10, 10), new Point(5, 5), new Point(15, 15));
	segment = segment.reverse();
	var expected = { point: { x: 10, y: 10 }, handleIn: { x: 15, y: 15 }, handleOut: { x: 5, y: 5 } };
	compareSegments(segment, expected);
});

test('segment.clone()', function(){
	var segment = new Segment(new Point(10, 10), new Point(5, 5), new Point(15, 15));
	var clone = segment.clone();
	equals(segment == clone, false);
	compareSegments(segment, clone);
});