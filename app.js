hubble_data = [
	{ nebulae: "NGC 6822", distance: 0.500, distance_error: 0.010, velocity: 57, velocity_error: 2, },
	{ nebulae: "NGC 221", distance: 0.763, distance_error: 0.024, velocity: 200, velocity_error: 6,},
	{ nebulae: "NGC 598", distance: 0.835, distance_error: 0.105, velocity: 179, velocity_error: 3,},
	{ nebulae: "NGC 4736", distance: 4.900, distance_error: 0.400, velocity: 308, velocity_error: 1,},
	{ nebulae: "NGC 5457", distance: 6.400, distance_error: 0.500, velocity: 241, velocity_error: 2,},
	{ nebulae: "NGC 4258", distance: 7.000, distance_error: 0.500, velocity: 448, velocity_error: 3,},
	{ nebulae: "NGC 5194", distance: 7.100, distance_error: 1.200, velocity: 463, velocity_error: 3,},
	{ nebulae: "NGC 4826", distance: 7.400, distance_error: 0.610, velocity: 408, velocity_error: 4,},
	{ nebulae: "NGC 3627", distance: 11.000, distance_error: 1.500, velocity: 727, velocity_error: 3,},
	{ nebulae: "NGC 7331", distance: 12.200, distance_error: 1.000, velocity: 816, velocity_error: 1,},
	{ nebulae: "NGC 4486", distance: 16.400, distance_error: 0.500, velocity: 1307, velocity_error: 7,},
	{ nebulae: "NGC 4649", distance: 16.800, distance_error: 1.200, velocity: 1117, velocity_error: 6,},
	{ nebulae: "NGC 4472", distance: 17.100, distance_error: 1.200, velocity: 729, velocity_error: 2,},
];

var margin = {top: 20, right: 20, bottom: 30, left: 40},
		width = 640 - margin.left - margin.right,
		height = 400 - margin.top - margin.bottom;

var svg = d3.select("#container").append("svg")
	.attr("height", height + margin.left + margin.right)
	.attr("width", width + margin.top + margin.bottom);

var chart = svg.append("g")
	.attr("transform",
		"translate(" + margin.left + ", " + margin.top + " )"
	);

var xScale = d3.scale.linear()
	.range([0, width]);
var yScale = d3.scale.linear()
	.range([height, 0]);

xScale.domain([
		d3.min(hubble_data, function(nebulae) {
			return nebulae.distance - nebulae.distance_error;
		}),
		d3.max(hubble_data, function(nebulae) {
			return nebulae.distance + nebulae.distance_error;
		});
	]).nice();

yScale.domain([
		d3.min(hubble_data, function (nebulae) {
			return nebulae.velocity - nebulae.velocity_error;
		}),
		d3.max(hubble_data, function (nebulae) {
			return nebulae.velocity + nebulae.velocity_error;
		});
	]).nice();