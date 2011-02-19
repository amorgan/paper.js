module('Group');

test('new Group()', function() {
	var doc = new Doc();
	var group = new Group();
	equals(doc.activeLayer.children[0] == group, true);
});

test('new Group([item])', function() {
	var doc = new Doc();
	var path = new Path();
	var group = new Group([path]);
	equals(doc.activeLayer.children.length == 1, true);
	equals(group.children[0] == path, true);
});

test('Group bounds', function() {
	var doc = new Doc();
	var path = new Path.Circle([150, 150], 60);
	var secondPath = new Path.Circle([175, 175], 85);
	var group = new Group([path, secondPath]);
	compareRectangles(group.bounds, { x: 90, y: 90, width: 170, height: 170 });
});