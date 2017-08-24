var tubes = [];
function initJoshua() {
  addSilos();
	
	for (i=0; i<4; i++) {
		var phi = i*Math.PI/2;
		
		tubes[i] = makeSiloTubes(i);
		tubes[i].rotateOnAxis(zAxis, phi);
		tubes[i].translateY(136.5);
		tubes[i].translateX(i%2 ? 123.5 : -123.5);
		tubes[i].translateZ(21);
		scene.add(tubes[i]);
		
		var stand = makeProduceStand();
		stand.rotateOnAxis(zAxis, phi);
		stand.translateX(i%2 ? -44.25 : 44.25);
		stand.translateY(151);
		stand.translateZ(-11.5);
		scene.add(stand);
	}
	makeSeeds();
}

function addSilos() {
  var phi = 2*Math.PI/2;
  var siloWallGeomLong = new THREE.BoxGeometry(36.75, 0.75, 3.5);
  var siloWallGeomShort = new THREE.BoxGeometry(9, 0.75, 3.5);
  var siloWallLong1 = makeBoxMesh(siloWallGeomLong, woodMat);
  var siloWallShort1 = makeBoxMesh(siloWallGeomShort, woodMat);
  var siloWallLong2 = makeBoxMesh(siloWallGeomLong, woodMat);
  var siloWallShort2 = makeBoxMesh(siloWallGeomShort, woodMat);
  var siloWallShort3 = makeBoxMesh(siloWallGeomShort, woodMat);
  var siloWallShort4 = makeBoxMesh(siloWallGeomShort, woodMat);
  
  //red-blue corner
  siloWallLong1.rotateOnAxis(zAxis, Math.PI/4);
  siloWallLong1.translateZ(1.75);
  siloWallLong1.translateY(169.175);
  //siloWallLong1.translateX(119.625);
  
	
  siloWallShort1.rotateOnAxis(zAxis, phi/2);
  siloWallShort1.translateZ(1.75);
  siloWallShort1.translateY(107);
  siloWallShort1.translateX(137.125);

  //the billy corner
  var silo1 = new THREE.CylinderGeometry(5, 5, 36, 32);
  var siloMesh1 = makeCylinderMesh(silo1, purpleMat);
  siloMesh1.rotateOnAxis(xAxis,Math.PI/2);
  siloMesh1.translateX(136.5);
  siloMesh1.translateY(18);
  siloMesh1.translateZ(136.5);

  var geom = new THREE.SphereGeometry(5, 16, 32);
  var geomMesh1 = makeSphereMesh(geom, purpleMat);
  geomMesh1.translateX(136.5);
  geomMesh1.translateY(-136.5);
  geomMesh1.translateZ(36);
  scene.add(geomMesh1);


  var silo2 = new THREE.CylinderGeometry(5, 5, 26, 32);
  var siloMesh2 = makeCylinderMesh(silo2, greenMat);
  siloMesh2.rotateOnAxis(xAxis,Math.PI/2);
  siloMesh2.translateX(136.5);
  siloMesh2.translateY(13);
  siloMesh2.translateZ(113);

  var geom = new THREE.SphereGeometry(5, 16, 32);
  var geomMesh2 = makeSphereMesh(geom, greenMat);
  geomMesh2.translateX(136.5);
  geomMesh2.translateY(-113);
  geomMesh2.translateZ(26);
  scene.add(geomMesh2);

  var silo3 = new THREE.CylinderGeometry(5, 5, 26, 32);
  var siloMesh3 = makeCylinderMesh(silo3, yellowMat);
  siloMesh3.rotateOnAxis(xAxis,Math.PI/2);
  siloMesh3.translateX(113.);
  siloMesh3.translateY(13);
  siloMesh3.translateZ(136.5);

  var geom = new THREE.SphereGeometry(5, 16, 32);
  var geomMesh3 = makeSphereMesh(geom, yellowMat);
  geomMesh3.translateX(113.);
  geomMesh3.translateY(-136.5);
  geomMesh3.translateZ(26);
  scene.add(geomMesh3);

  var silo4 = new THREE.CylinderGeometry(5, 5, 36, 32);
  var siloMesh4 = makeCylinderMesh(silo4, purpleMat);
  siloMesh4.rotateOnAxis(xAxis,Math.PI/2);
  siloMesh4.translateX(-136.5);
  siloMesh4.translateY(18);
  siloMesh4.translateZ(-136.5);

  var geom = new THREE.SphereGeometry(5, 16, 32);
  var geomMesh4 = makeSphereMesh(geom, purpleMat);
  geomMesh4.translateX(-136.5);
  geomMesh4.translateY(136.5);
  geomMesh4.translateZ(36);
  scene.add(geomMesh4);

  var silo5 = new THREE.CylinderGeometry(5, 5, 26, 32);
  var siloMesh5 = makeCylinderMesh(silo5, redMat);
  siloMesh5.rotateOnAxis(xAxis,Math.PI/2);
  siloMesh5.translateX(-113.);
  siloMesh5.translateY(13);
  siloMesh5.translateZ(-136.5);

  var geom = new THREE.SphereGeometry(5, 16, 32);
  var geomMesh5 = makeSphereMesh(geom, redMat);
  geomMesh5.translateX(-113.);
  geomMesh5.translateY(136.5);
  geomMesh5.translateZ(26);
  scene.add(geomMesh5);

  var silo6 = new THREE.CylinderGeometry(5, 5, 26, 32);
  var siloMesh6 = makeCylinderMesh(silo6, blueMat);
  siloMesh6.rotateOnAxis(xAxis,Math.PI/2);
  siloMesh6.translateX(-136.5);
  siloMesh6.translateY(13);
  siloMesh6.translateZ(-113);

  var geom = new THREE.SphereGeometry(5, 16, 32);
  var geomMesh6 = makeSphereMesh(geom, blueMat);
  geomMesh6.translateX(-136.5);
  geomMesh6.translateY(113);
  geomMesh6.translateZ(26);
  scene.add(geomMesh6);

  scene.add(siloMesh1);	
  scene.add(siloMesh2);
  scene.add(siloMesh3);
  scene.add(siloMesh4);
  scene.add(siloMesh5);	
  scene.add(siloMesh6);	
  
  siloWallShort3.translateZ(1.75);
  siloWallShort3.translateY(107);
  siloWallShort3.translateX(-137.125);
  
  scene.add(siloWallLong1);
  scene.add(siloWallShort1);
  scene.add(siloWallShort3);
  
  //green-yellow corner
  siloWallLong2.rotateOnAxis(zAxis, phi/4);
  siloWallLong2.translateZ(1.75);
  siloWallLong2.translateY(-169.175);
  
  siloWallShort2.rotateOnAxis(zAxis, phi*-0.5);
  siloWallShort2.translateZ(1.75);
  siloWallShort2.translateY(107);
  siloWallShort2.translateX(137.125);
  
  siloWallShort4.rotateOnAxis(zAxis, phi);
  siloWallShort4.translateZ(1.75);
  siloWallShort4.translateY(107);
  siloWallShort4.translateX(-137.125);
  
  scene.add(siloWallLong2);
  scene.add(siloWallShort2);
  scene.add(siloWallShort4);
}

function makeSiloTubes(i){
	var tubes = new THREE.Group();
	
	var tubelh1 = new THREE.CylinderGeometry(1.1875, 1.1875, 16, 32, 1, false, 0, 6.3);
	var tubelh1Mesh1 = makeCylinderMesh(tubelh1, pvcMat, 0, 0.8, 0.4);
	tubelh1Mesh1.rotateOnAxis(zAxis, Math.PI/2);
	tubelh1Mesh1.rotateOnAxis(xAxis, Math.PI/4);
	tubelh1Mesh1.translateY(8);
	tubes.add(tubelh1Mesh1);
	
	var tubelh2 = new THREE.CylinderGeometry(1.1875, 1.1875, 18.5, 32, 1, true, 0, 6.3);
	var tubelh2Mesh1 = makeCylinderMesh(tubelh2, pvcMat, 0, 0.8, 0.4);
	tubelh2Mesh1.rotateOnAxis(zAxis, Math.PI/2);
	tubelh2Mesh1.translateY(-9.25);
	tubes.add(tubelh2Mesh1);
	
	var elbowlh1 = new THREE.TorusGeometry( 2.375, 1.4, 16, 20, Math.PI/4 );
	var elbowlh1Mesh1 = new THREE.Mesh(elbowlh1, pvcMat);
	elbowlh1Mesh1.rotateOnAxis(yAxis, Math.PI/2);
	elbowlh1Mesh1.rotateOnAxis(xAxis, -Math.PI/2);
	elbowlh1Mesh1.translateX(-2.375);
	elbowlh1Mesh1.translateY(-1);
	tubes.add(elbowlh1Mesh1);
	
	// Add other parts here (just one copy)
	var tubeS1 = new THREE.CylinderGeometry(1.1875, 1.1875, 5.5, 32, 1, false, 0, 6.3);
	var tubeS1Mesh1 = makeCylinderMesh(tubeS1, pvcMat, 0, 0.8, 0.4);	
	tubeS1Mesh1.rotateOnAxis(xAxis, Math.PI/4);
	tubeS1Mesh1.translateY(2.75);
	tubelh1Mesh1.add(tubeS1Mesh1);
	
	var elbowlh1Mesh2 = new THREE.Mesh(elbowlh1, pvcMat);
	elbowlh1Mesh2.rotateOnAxis(yAxis, Math.PI/2);
	elbowlh1Mesh2.translateX(-2.375);
	elbowlh1Mesh2.translateY(2.75);
	elbowlh1Mesh2.translateZ(0);
	tubeS1Mesh1.add(elbowlh1Mesh2);
	
	var cap = new THREE.CylinderGeometry(1.5, 1.5, 2, 32, 1, false, 0, 6.3);
	var capMesh1 = makeCylinderMesh(cap, pvcMat, 0, 0.8, 0.4);
	capMesh1.rotateOnAxis(zAxis, Math.PI/4);
	capMesh1.translateX(2.375);
	capMesh1.translateY(1);
	capMesh1.translateZ(0);
	elbowlh1Mesh2.add(capMesh1);
	
	
	
	var Otube = new THREE.TorusGeometry( 2.375, 1.4, 16, 20, Math.PI/2);
	var OtubeMesh = new THREE.Mesh(Otube, pvcMat);
	OtubeMesh.rotateOnAxis(yAxis, Math.PI/-2);
	OtubeMesh.rotateOnAxis(xAxis, Math.PI/-2);
	OtubeMesh.translateX(-2.5);
	OtubeMesh.translateY(18);
	OtubeMesh.translateZ(0);
	tubes.add(OtubeMesh);
	
	// Flip the odd tubes around 180 degrees
	tubes.rotateOnAxis(zAxis, (i%2 ? Math.PI: 0));
	// Uncomment next line to tilt the tubes to their final orientation
	tubes.rotateOnAxis(yAxis, Math.PI/18);

	var tubeAssembly = new THREE.Object3D();
	tubeAssembly.add(tubes);

	return tubeAssembly;
}

var seeds = [];

function makeSeeds() {
	var seedGeom = new THREE.SphereGeometry(.84, 16, 8);
  for (var i=0; i<4; ++i) {
    seeds[i] = [];
    var phi = i*Math.PI/2;
    for (var j=0; j<24; ++j) {
      seeds[i][j] = makeSphereMesh(seedGeom, colorMats[i], 5.0, 0.1, 0.8);
      seeds[i][j].position.i = i;
      seeds[i][j].position.j = j;
      seeds[i][j].rotateOnAxis(zAxis, phi);
      seeds[i][j].position.x = (i%2 ? -20 : 20);
      seeds[i][j].position.z = 16 + j*2;
      tubes[i].add(seeds[i][j]);
    }
  }
}


function makeProduceStand() {
	var shelf = makeShelfassy();
	var legs = addProduceleg();
	var stand = new THREE.Object3D();
	stand.add(shelf);
	stand.add(legs);
	return stand;
}




function makeShelfassy() {
	var orail = new THREE.BoxGeometry(15.75, .75, 1.5);
	var orailwall = makeBoxMesh(orail, colorMats[i]);
	orailwall.rotateOnAxis(zAxis,Math.PI/2);
	orailwall.translateZ(20.75);
	orailwall.translateX(0);
	orailwall.translateY(12.875);


	var orail2 = new THREE.BoxGeometry(15.75,.75,1.5);
	var orailMesh2 = makeBoxMesh(orail2, colorMats[i]);
	orailMesh2.rotateOnAxis(zAxis,Math.PI/2);
	orailMesh2.translateX(0);
	orailMesh2.translateY(-12.875);
	orailMesh2.translateZ(20.75);
	
	var irail = new THREE.BoxGeometry(15,.75,1.5);
	var irailMesh = makeBoxMesh(irail, colorMats[i]);
	irailMesh.rotateOnAxis(zAxis,Math.PI/2);
	irailMesh.translateX(.375);
	irailMesh.translateY(-2);
	irailMesh.translateZ(20.75);
	
	var endgate = new THREE.BoxGeometry(25,3.5,.75);
	var endgateMesh = makeBoxMesh(endgate, colorMats[i]);
	endgateMesh.rotateOnAxis(xAxis,Math.PI/2);
	endgateMesh.translateX(0);
	endgateMesh.translateY(21.75);
	endgateMesh.translateZ(7.5);
	
	var lowsupport = new THREE.BoxGeometry(26.5,.75,1.5);
	var lowsupportMesh = makeBoxMesh(lowsupport, colorMats[i]);
	lowsupportMesh.rotateOnAxis(xAxis,Math.PI/2);
	lowsupportMesh.translateX(0);
	lowsupportMesh.translateY(19.475);
	lowsupportMesh.translateZ(-7.125);
	
	var base = new THREE.BoxGeometry(26.5,15.75,.125);
	var baseMesh = makeBoxMesh(base, colorMats[i]);
	baseMesh.translateX(0);
	baseMesh.translateY(0);
	baseMesh.translateZ(20);
	
	var shelf = new THREE.Object3D();
	shelf.add(irailMesh);
	shelf.add(endgateMesh);
	shelf.add(lowsupportMesh);
	shelf.add(baseMesh);
	shelf.add(orailwall);
	shelf.add(orailMesh2);
	shelf.rotateOnAxis(zAxis,Math.PI);
	shelf.rotateOnAxis(xAxis,57.34);
	shelf.translateX (0)
	shelf.translateY (15)
	shelf.translateZ (-10)
	
	return shelf;
}

function addProduceleg(){
	var leg = new THREE.BoxGeometry(20.5, 1.5, 1.5);
	var legMesh1 = makeBoxMesh(leg, colorMats[i]);
	legMesh1.rotateOnAxis(yAxis,Math.PI/2);
	var legMesh2 = makeBoxMesh(leg, colorMats[i]);	
	legMesh2.rotateOnAxis(yAxis,Math.PI/2);
	legMesh1.translateX(-22);
	legMesh1.translateY(7);
	legMesh1.translateZ(-14);

	legMesh2.translateX(-22);
	legMesh2.translateY(7);
	legMesh2.translateZ(14);

	var sign = new THREE.BoxGeometry(29.5, 3.5, .125);

	var signMesh1 = makeBoxMesh(sign, colorMats[i]);
	signMesh1.rotateOnAxis(xAxis,Math.PI/2);
	signMesh1.translateX(0);
	signMesh1.translateY(30.5);
	signMesh1.translateZ(-7.75);

	var legrail = new THREE.BoxGeometry(29.5, 3.5, .75);
	var legrailMesh = makeBoxMesh(legrail, colorMats[i]);
	legrailMesh.rotateOnAxis(xAxis,Math.PI/2);
	legrailMesh.translateX(0);
	legrailMesh.translateY(13.5);
	legrailMesh.translateZ(-8.125);

	
	var legs = new THREE.Object3D();
	legs.add(legMesh1);
	legs.add(legMesh2);
	legs.add(legrailMesh);
	legs.add(signMesh1);
	
	legs.rotateOnAxis(zAxis,Math.PI);
	
	return legs;
}
