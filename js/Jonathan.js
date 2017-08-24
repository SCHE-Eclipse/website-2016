var cornStalkMat = new THREE.MeshLambertMaterial({color: 0x1a801d});
var cornMat = new THREE.MeshLambertMaterial({color: 0xb9af05});
var corn = [ [], [], [], [] ];

function initJonathan() {
  addWindmill();
  addCornPlot();
}

function addCornPlot(){
  var plotBaseGeom = new THREE.BoxGeometry(78, 36, 3/8);
  var plantingRow1Geom = new THREE.BoxGeometry(74.5, 3/4, 1.5);
  var plantingRow2Geom = new THREE.BoxGeometry(2, 4, 1.5);
  var plantingRow3Geom = new THREE.BoxGeometry(2, 3.25, 1.5);
  var growingRowGeom = new THREE.BoxGeometry(75, 3.5, 1.5);
  var cornStalkRowGeom = new THREE.CylinderGeometry(7/16, 7/16, 36, 12, 1, false, 0, 6.3);
  var stalkSkinHeight = [ 16, 24, 28 ];
  var stalkSkinGeom = [ ];
  for (var j=0; j<3; ++j) {
    stalkSkinGeom[j] = new THREE.CylinderGeometry(3/4, 3/4, stalkSkinHeight[j], 12, 1, false, 0, 6.3);
  }
  var stalkSkin2Geom = new THREE.CylinderGeometry(3/4, 3/4, 6, 12, 1, false, 0, 6.3);
  var cornGeom = new THREE.CylinderGeometry(1, 1, 8, 24, 6, false, 0, 6.3);
  var baseEndGeom = new THREE.BoxGeometry(36, 1.5, 1.5);
  var wheelGeom = new THREE.CylinderGeometry(6, 6, 3/8, 64, 1, false, 0, 6.3);
  var irrTowerLegGeom = new THREE.CylinderGeometry(1, 1, 39.5, 64, 1, false, 0, 6.3);
  var sprinklerPipeGeom = new THREE.CylinderGeometry(1, 1, 76, 64, 1, false, 0, 6.3);
  var towerTeesGeom = new THREE.CylinderGeometry(1.2, 1.2, 8, 12, 1, false, 0, 6.3);
  var irrPipe1Geom = new THREE.CylinderGeometry(1, 1, 25.5, 64, 1, false, 0, 6.3);
  var elbowGeom = new THREE.TorusGeometry(2, 1.10, 16, 20, Math.PI/2);
  var irrPipe2Geom = new THREE.CylinderGeometry(1, 1, 24.5, 64, 1, false, 0, 6.3);
  var towerTeeStubGeom = new THREE.CylinderGeometry(1, 1, 2, 12, 1, false, 0, 6.3);
  var dropLineGeom = new THREE.CylinderGeometry(1/4, 1/4, 16, 8, 1, false, 0, 6.3);
  var sprinklerHeadGeom = new THREE.CylinderGeometry(1.5, 1.5, 1, 64, 1, false, 0, 6.3);
  
  for(var i = 0; i < 4; ++i){
	  var phi = i * Math.PI/2 - Math.PI/4;
    var plotBaseMesh = makeBoxMesh(plotBaseGeom, woodMat);
    plotBaseMesh.rotateOnAxis(zAxis, phi);
    plotBaseMesh.translateX(94.125);
    scene.add(plotBaseMesh);
	  
	  for(var j = 0; j < 2; ++j){
	    var plantingRowMesh1 = makeBoxMesh(plantingRow1Geom, woodMat);
	    var plantingRowMesh2 = makeBoxMesh(plantingRow1Geom, woodMat);
	    plantingRowMesh1.rotateOnAxis(zAxis, phi);
	    plantingRowMesh2.rotateOnAxis(zAxis, phi);
	    plantingRowMesh1.translateX(94.125);
	    plantingRowMesh2.translateX(94.125);
	    plantingRowMesh1.translateY(12.8 + j * 2.75);
	    plantingRowMesh2.translateY(-12.8 - j * 2.75);
	    plantingRowMesh1.translateZ(3/4);
	    plantingRowMesh2.translateZ(3/4);
	    scene.add(plantingRowMesh1);
	    scene.add(plantingRowMesh2);
	  }
	  
	  for(var j = 0; j < 11; ++j){
	    var plantingRowMesh2 = makeBoxMesh(plantingRow2Geom, woodMat);
	    var plantingRowMesh3 = makeBoxMesh(plantingRow2Geom, woodMat);
	    plantingRowMesh2.rotateOnAxis(zAxis, phi);
	    plantingRowMesh3.rotateOnAxis(zAxis, phi);
	    plantingRowMesh2.translateX(j * 6 + 64);
	    plantingRowMesh3.translateX(j * 6 + 64);
	    plantingRowMesh2.translateY(14.175);
	    plantingRowMesh3.translateY(-14.175);
	    plantingRowMesh2.translateZ(3/4);
	    plantingRowMesh3.translateZ(3/4);
	    plantingRowMesh2.rotateOnAxis(zAxis, Math.PI/2);
	    plantingRowMesh3.rotateOnAxis(zAxis, Math.PI/2);
	    scene.add(plantingRowMesh2);
	    scene.add(plantingRowMesh3);
	  }
	  
	  for(var j = 0; j < 2; ++j){
	    var plantingRowMesh4 = makeBoxMesh(plantingRow3Geom, woodMat);
	    var plantingRowMesh5 = makeBoxMesh(plantingRow3Geom, woodMat);
	    plantingRowMesh4.rotateOnAxis(zAxis, phi);
	    plantingRowMesh5.rotateOnAxis(zAxis, phi);
	    plantingRowMesh4.translateX(58.25 + j * 71.5);
	    plantingRowMesh5.translateX(58.25 + j * 71.5);
	    plantingRowMesh4.translateY(14.175);
	    plantingRowMesh5.translateY(-14.175);
	    plantingRowMesh4.translateZ(3/4);
	    plantingRowMesh5.translateZ(3/4);
	    plantingRowMesh4.rotateOnAxis(zAxis, Math.PI/2);
	    plantingRowMesh5.rotateOnAxis(zAxis, Math.PI/2);
	    scene.add(plantingRowMesh4);
	    scene.add(plantingRowMesh5);
	  }
	  
	  var growingRowMesh1 = makeBoxMesh(growingRowGeom, woodMat);
	  var growingRowMesh2 = makeBoxMesh(growingRowGeom, woodMat);
	  growingRowMesh1.rotateOnAxis(zAxis, phi);
	  growingRowMesh2.rotateOnAxis(zAxis, phi);
	  growingRowMesh1.translateX(94.125);
	  growingRowMesh2.translateX(94.125);
	  growingRowMesh1.translateY(5.875);
	  growingRowMesh2.translateY(-5.875);
	  growingRowMesh1.translateZ(3/4);
	  growingRowMesh2.translateZ(3/4);
	  scene.add(growingRowMesh1);
	  scene.add(growingRowMesh2);

    var x0 = -127.325;
    var y1 = 61.325;
	  for(var j = 0; j < 12; ++j){
	    var J = 2 - j % 3;
	    var height = stalkSkinHeight[J];

	    var cornStalkRowMesh1 = makeCylinderMesh(cornStalkRowGeom, woodMat);
	    cornStalkRowMesh1.rotateOnAxis(zAxis, phi);
	    cornStalkRowMesh1.translateX(x0 + j * 6);
	    cornStalkRowMesh1.translateY( 5);
	    cornStalkRowMesh1.translateZ(18.28);
	    cornStalkRowMesh1.rotateOnAxis(xAxis, Math.PI/2);
	    scene.add(cornStalkRowMesh1);

	    var cornStalkRowMesh2 = makeCylinderMesh(cornStalkRowGeom, woodMat);
	    cornStalkRowMesh2.rotateOnAxis(zAxis, phi);
	    cornStalkRowMesh2.translateX(-5);
	    cornStalkRowMesh2.translateY(y1 + j * 6);
	    cornStalkRowMesh2.translateZ(18.28);
	    cornStalkRowMesh2.rotateOnAxis(xAxis, Math.PI/2);
	    scene.add(cornStalkRowMesh2);

	    var stalkSkinMesh1 = makeCylinderMesh(stalkSkinGeom[J], cornStalkMat);
	    stalkSkinMesh1.rotateOnAxis(zAxis, phi);
	    stalkSkinMesh1.translateX(x0 + j * 6);
	    stalkSkinMesh1.translateY( 5);
	    stalkSkinMesh1.rotateOnAxis(yAxis, Math.PI/2);
	    stalkSkinMesh1.rotateOnAxis(zAxis, Math.PI/2);
	    stalkSkinMesh1.translateY(1.5 + height/2);
	    scene.add(stalkSkinMesh1);

	    var stalkSkinMesh2 = makeCylinderMesh(stalkSkinGeom[J], cornStalkMat);
	    stalkSkinMesh2.rotateOnAxis(zAxis, phi);
	    stalkSkinMesh2.translateX(-5);
	    stalkSkinMesh2.translateY(y1 + j * 6);
	    stalkSkinMesh2.rotateOnAxis(yAxis, Math.PI/2);
	    stalkSkinMesh2.rotateOnAxis(zAxis, Math.PI/2);
	    stalkSkinMesh2.translateY(1.5 + height/2);
	    scene.add(stalkSkinMesh2);

	    var stalkSkinMesh3 = makeCylinderMesh(stalkSkin2Geom, cornStalkMat);
	    stalkSkinMesh3.rotateOnAxis(xAxis, 2*Math.PI/5);
      var stalk3 = new THREE.Object3D();
      stalk3.add(stalkSkinMesh3);
	    stalk3.rotateOnAxis(zAxis, phi);
	    stalk3.translateX(x0 + j * 6);
	    stalk3.translateY( 6.25);
	    stalk3.translateZ(4 + height);
	    scene.add(stalk3);

	    var stalkSkinMesh4 = makeCylinderMesh(stalkSkin2Geom, cornStalkMat);
	    stalkSkinMesh4.rotateOnAxis(zAxis, Math.PI/2);
	    stalkSkinMesh4.rotateOnAxis(xAxis, 2*Math.PI/5);
      var stalk4 = new THREE.Object3D();
      stalk4.add(stalkSkinMesh4);
	    stalk4.rotateOnAxis(zAxis, phi);
	    stalk4.translateX(-6.25);
	    stalk4.translateY(y1 + j * 6);
	    stalk4.translateZ(4 + height);
	    scene.add(stalk4);

      var earMesh3 = makeCylinderMesh(cornGeom, cornMat, 1);
	    earMesh3.rotateOnAxis(xAxis, 2*Math.PI/5);
      corn[i][j] = new THREE.Object3D();
      corn[i][j].add(earMesh3);
	    corn[i][j].rotateOnAxis(zAxis, phi);
	    corn[i][j].translateX(x0 + j * 6);
	    corn[i][j].translateY( 7.5);
	    corn[i][j].translateZ( 7.5 + height);
      corn[i][j].position.i = i;
      corn[i][j].position.j = j;
	    scene.add(corn[i][j]);

	    var earMesh4 = makeCylinderMesh(cornGeom, cornMat, 1);
	    earMesh4.rotateOnAxis(zAxis, Math.PI/2);
	    earMesh4.rotateOnAxis(xAxis, 2*Math.PI/5);
      corn[i][j+12] = new THREE.Object3D();
      corn[i][j+12].add(earMesh4);
	    corn[i][j+12].rotateOnAxis(zAxis, phi);
	    corn[i][j+12].translateX(-7.5);
	    corn[i][j+12].translateY(y1 + j * 6);
	    corn[i][j+12].translateZ( 7.5 + height);
      corn[i][j+12].position.i = i;
      corn[i][j+12].position.j = j + 12;
	    scene.add(corn[i][j+12]);
    }
	  
	  for(var j = 0; j < 2; ++j){
	    var baseEndMesh = makeBoxMesh(baseEndGeom, woodMat);
	    baseEndMesh.rotateOnAxis(zAxis, phi);
	    baseEndMesh.translateX(j * 76 + 56.125);
	    baseEndMesh.translateZ(1);
	    baseEndMesh.rotateOnAxis(zAxis, Math.PI/2);
	    scene.add(baseEndMesh);
	  }
	  
	  for(var j = 0; j < 2; ++j){
	    var wheelMesh1 = makeCylinderMesh(wheelGeom, woodMat);
	    var wheelMesh2 = makeCylinderMesh(wheelGeom, woodMat);
	    wheelMesh1.rotateOnAxis(zAxis, phi);
	    wheelMesh2.rotateOnAxis(zAxis, phi);
	    wheelMesh1.translateX(j * 78 + 55.125);
	    wheelMesh2.translateX(j * 78 + 55.125);
	    wheelMesh1.translateY(12.5);
	    wheelMesh2.translateY(-12.5);
	    wheelMesh1.translateZ(3);
	    wheelMesh2.translateZ(3);
	    wheelMesh1.rotateOnAxis(zAxis, Math.PI/2);
	    wheelMesh2.rotateOnAxis(zAxis, Math.PI/2);
	    scene.add(wheelMesh1);
	    scene.add(wheelMesh2);
	  }
	  
	  for(var j = 0; j < 2; ++j){
	    var irrTowerLegMesh1 = makeCylinderMesh(irrTowerLegGeom, pvcMat);
	    var irrTowerLegMesh2 = makeCylinderMesh(irrTowerLegGeom, pvcMat);
	    irrTowerLegMesh1.rotateOnAxis(zAxis, phi);
	    irrTowerLegMesh2.rotateOnAxis(zAxis, phi);
	    irrTowerLegMesh1.translateX(j * 78 + 53.75);
	    irrTowerLegMesh2.translateX(j * 78 + 56.5);
	    irrTowerLegMesh1.translateY(6.5);
	    irrTowerLegMesh2.translateY(-6.5);
	    irrTowerLegMesh1.translateZ(21);
	    irrTowerLegMesh2.translateZ(21);
	    irrTowerLegMesh1.rotateOnAxis(xAxis, -Math.PI/2.575);
	    irrTowerLegMesh2.rotateOnAxis(xAxis, Math.PI/2.575);
	    scene.add(irrTowerLegMesh1);
	    scene.add(irrTowerLegMesh2);
	  }
	  
	  var sprinklerPipeMesh = makeCylinderMesh(sprinklerPipeGeom, pvcMat);
	  sprinklerPipeMesh.rotateOnAxis(zAxis, phi);
	  sprinklerPipeMesh.translateY(95.625);
	  sprinklerPipeMesh.translateZ(40);
	  scene.add(sprinklerPipeMesh);
	  
	  var towerTeeMesh1 = makeCylinderMesh(towerTeesGeom, pvcMat);
	  towerTeeMesh1.rotateOnAxis(zAxis, phi);
	  towerTeeMesh1.translateX(55);
	  towerTeeMesh1.translateZ(40);
	  towerTeeMesh1.rotateOnAxis(zAxis, Math.PI/2);
	  scene.add(towerTeeMesh1);
	  
	  var towerTeeMesh2 = makeCylinderMesh(towerTeesGeom, pvcMat);
	  towerTeeMesh2.rotateOnAxis(zAxis, phi);
	  towerTeeMesh2.translateX(133);
	  towerTeeMesh2.translateZ(40);
	  towerTeeMesh2.rotateOnAxis(zAxis, Math.PI/2);
	  scene.add(towerTeeMesh2)
	  
	  var irrPipeMesh1 = makeCylinderMesh(irrPipe1Geom, pvcMat);
	  irrPipeMesh1.rotateOnAxis(zAxis, phi);
	  irrPipeMesh1.translateX(38.5);
	  irrPipeMesh1.rotateOnAxis(zAxis, Math.PI/2);
	  irrPipeMesh1.translateZ(40);
	  scene.add(irrPipeMesh1);
	  
	  var elbowMesh1 = makeConvexMesh(elbowGeom, pvcMat);
	  elbowMesh1.rotateOnAxis(zAxis, phi);
	  elbowMesh1.translateX(25.75);
	  elbowMesh1.translateZ(38);
	  elbowMesh1.rotateOnAxis(xAxis, Math.PI/2);
	  elbowMesh1.rotateOnAxis(zAxis, Math.PI/2);
	  scene.add(elbowMesh1);
	  
	  var irrPipeMesh2 = makeCylinderMesh(irrPipe2Geom, pvcMat);
	  irrPipeMesh2.rotateOnAxis(zAxis, phi);
	  irrPipeMesh2.translateX(23.75);
	  irrPipeMesh2.translateZ(26.5);
	  irrPipeMesh2.rotateOnAxis(xAxis, Math.PI/2);
	  scene.add(irrPipeMesh2);
	  
	  var elbowMesh2 = makeConvexMesh(elbowGeom, pvcMat);
	  elbowMesh2.rotateOnAxis(zAxis, phi);
	  elbowMesh2.translateX(21.75);
	  elbowMesh2.translateZ(15);
	  elbowMesh2.rotateOnAxis(xAxis, Math.PI/2);
	  elbowMesh2.rotateOnAxis(zAxis, -Math.PI/2);
	  scene.add(elbowMesh2);
	  
	  var towerTeeStubMesh = makeCylinderMesh(towerTeeStubGeom, pvcMat);
	  towerTeeStubMesh.rotateOnAxis(zAxis, phi);
	  towerTeeStubMesh.translateX(21.25);
	  towerTeeStubMesh.translateZ(13);
	  towerTeeStubMesh.rotateOnAxis(zAxis, Math.PI/2);
	  scene.add(towerTeeStubMesh);
	  
	  for(var j = 0; j < 6; ++j){
	    var dropLineMesh = makeCylinderMesh(dropLineGeom, pvcMat);
	    dropLineMesh.rotateOnAxis(zAxis, phi);
	    dropLineMesh.translateX(j * 12 + 64.125);
	    dropLineMesh.translateZ(35);
	    dropLineMesh.rotateOnAxis(xAxis, Math.PI/2);
	    scene.add(dropLineMesh);
	  }
	  
	  for(var j = 0; j < 6; ++j){
	    var sprinklerHeadMesh = makeCylinderMesh(sprinklerHeadGeom, woodMat);
	    sprinklerHeadMesh.rotateOnAxis(zAxis, phi);
	    sprinklerHeadMesh.translateX(j * 12 + 64.125);
	    sprinklerHeadMesh.translateZ(30);
	    sprinklerHeadMesh.rotateOnAxis(xAxis, Math.PI/2);
	    scene.add(sprinklerHeadMesh);
    }
  }
}

