var robotOrange = new THREE.MeshLambertMaterial({color: 0xff6400});
var robotBlue = new THREE.MeshLambertMaterial({color: 0x0c5a73});

var robot;
var scissorLift1, scissorLift2;
var platform;
var arm;

function initRobot() {
  addRobot();
  robot.translateX(-25);
  robot.translateY(130);
}

function addRobot(){
  robot = new THREE.Object3D();
  robot.position.i = 0;
  robot.position.j = 0;
  var loader = new THREE.TextureLoader();
  loader.load("scissorlift.png",
              function(texture) {
                var scissorLiftSidesGeom = new THREE.BoxGeometry(1, 1, 1);
                var scissorMat = new THREE.MeshBasicMaterial( { map: texture } );
                scissorLift1 = new THREE.Mesh(scissorLiftSidesGeom, scissorMat);
                scissorLift1.rotateOnAxis(xAxis, Math.PI/2);
                scissorLift1.scale.x = 0.5;
                scissorLift1.scale.y = 7;
                scissorLift1.scale.z = 13;
                scissorLift1.translateX(-1);
                scissorLift1.translateY(3.5 + 3.085);
                robot.add(scissorLift1);
                scissorLift2 = new THREE.Mesh(scissorLiftSidesGeom, scissorMat);
                scissorLift2.rotateOnAxis(xAxis, Math.PI/2);
                scissorLift2.scale.x = 0.5;
                scissorLift2.scale.y = 7;
                scissorLift2.scale.z = 13;
                scissorLift2.translateX(9.25);
                scissorLift2.translateY(3.5 + 3.085);
                robot.add(scissorLift2);
              },
	            // Function called when download progresses
	            function ( xhr ) {
		            console.log('scissorlift.png ' + (xhr.loaded / xhr.total * 100) + '% loaded' );
	            },
	            // Function called when download errors
	            function ( xhr ) {
		            console.log( 'An error occurred while loading scissorlift.png' );
	            } );
  
  
  var robotBaseGeom = new THREE.BoxGeometry(20, 14, 1/4);
  var PVCPipe12inGeom = new THREE.CylinderGeometry(1/2, 1/2, 12, 12, 1, false, 0, 6.3);
  var PVCPipe6inGeom = new THREE.CylinderGeometry(1/2, 1/2, 6, 12, 1, false, 0, 6.3);
  var PVCPipe5inGeom = new THREE.CylinderGeometry(1/2, 1/2, 5, 12, 1, false, 0, 6.3);
  var robotSkidGeom = new THREE.TorusGeometry(2, 1/2, 20, 20, Math.PI);
  var elbowPipeGeom = new THREE.TorusGeometry(1, 1/2, 20, 20, Math.PI/2);
  var wheelGeom = new THREE.CylinderGeometry(4, 4, 1, 32, 1, false, 0, 6.3);
  var smallMotorGeom = new THREE.CylinderGeometry(3/4, 3/4, 2.875, 12, 1, false, 0, 6.3);
  var largeMotorGeom = new THREE.CylinderGeometry(3/4, 3/4, 3.75, 12, 1, false, 0, 6.3);
  var seederBase1Geom = new THREE.BoxGeometry(22, 3, 1.5);
  var seederBase2Geom = new THREE.BoxGeometry(18, 8, 1.5);
  var seederBase3Geom = new THREE.BoxGeometry(2, 8, 4);
  var seederWall1Geom = new THREE.BoxGeometry(22, 1/4, 4);
  var seederWall2Geom = new THREE.BoxGeometry(1/4, 8, 4);
  var seederRampGeom = new THREE.BoxGeometry(16, 8, 1/4);
  var seederPipeGeom = new THREE.CylinderGeometry(2, 2, 7, 12, 1, true, 0, 6.3);
  var scissorLiftRailGeom = new THREE.BoxGeometry(1, 9.5, 2/8);
  var scissorLiftBoardsGeom = new THREE.BoxGeometry(1, 1, 1);
  var platformBoard1Geom = new THREE.BoxGeometry(17, 1.75, 1/2);
  var platformBoard2Geom = new THREE.BoxGeometry(7/8, 12, 1/2);
  var platformBoard3Geom = new THREE.BoxGeometry(3.5, 12, 1/2);
  platform = new THREE.Object3D();
  var PVCPipe7inGeom = new THREE.CylinderGeometry(1/2, 1/2, 7, 12, 1, false, 0, 6.3);
  var armPanelGeom = new THREE.BoxGeometry(3, 3.5, 1);
  var armGripGeom = new THREE.BoxGeometry(1.25, 4, 1);
  arm = new THREE.Object3D();
  arm.rotation.i = 0;
  arm.rotation.j = 0;
  var robotBaseMesh = makeBoxMesh(robotBaseGeom, robotBlue);
  robotBaseMesh.translateZ(2.8125);
  robot.add(robotBaseMesh);
  
  robot.wheelL = makeCylinderMesh(wheelGeom, robotBlue);
  robot.wheelR = makeCylinderMesh(wheelGeom, robotBlue);
  robot.wheelL.translateX(-7);
  robot.wheelR.translateX(-7);
  robot.wheelL.translateY(8);
  robot.wheelR.translateY(-8);
  robot.wheelL.translateZ(4);
  robot.wheelR.translateZ(4);
  robot.add(robot.wheelL);
  robot.add(robot.wheelR);
  
  var robotSkidMesh1 = makeConvexMesh(robotSkidGeom, pvcMat);
  var robotSkidMesh2 = makeConvexMesh(robotSkidGeom, pvcMat);
  robotSkidMesh1.translateX(5);
  robotSkidMesh2.translateX(5);
  robotSkidMesh1.translateY(6.5);
  robotSkidMesh2.translateY(-6.5);
  robotSkidMesh1.translateZ(2.75);
  robotSkidMesh2.translateZ(2.75);
  robotSkidMesh1.rotateOnAxis(xAxis, -Math.PI/2);
  robotSkidMesh2.rotateOnAxis(xAxis, -Math.PI/2);
  robot.add(robotSkidMesh1);
  robot.add(robotSkidMesh2);
  
  var PVCPipe6inMesh1 = makeCylinderMesh(PVCPipe6inGeom, robotOrange);
  var PVCPipe6inMesh2 = makeCylinderMesh(PVCPipe6inGeom, robotOrange);
  PVCPipe6inMesh1.translateX(-4.125);
  PVCPipe6inMesh2.translateX(-4.125);
  PVCPipe6inMesh1.translateY(6.75);
  PVCPipe6inMesh2.translateY(-6.75);
  PVCPipe6inMesh1.translateZ(6);
  PVCPipe6inMesh2.translateZ(6);
  PVCPipe6inMesh1.rotateOnAxis(xAxis, Math.PI/2);
  PVCPipe6inMesh2.rotateOnAxis(xAxis, Math.PI/2);
  robot.add(PVCPipe6inMesh1);
  robot.add(PVCPipe6inMesh2);
  
  var elbowPipeMesh1 = makeConvexMesh(elbowPipeGeom, robotOrange);
  var elbowPipeMesh2 = makeConvexMesh(elbowPipeGeom, robotOrange);
  elbowPipeMesh1.translateX(-5.125);
  elbowPipeMesh2.translateX(-5.125);
  elbowPipeMesh1.translateY(6.75);
  elbowPipeMesh2.translateY(-6.75);
  elbowPipeMesh1.translateZ(9);
  elbowPipeMesh2.translateZ(9);
  elbowPipeMesh1.rotateOnAxis(xAxis, Math.PI/2);
  elbowPipeMesh2.rotateOnAxis(xAxis, Math.PI/2);
  robot.add(elbowPipeMesh1);
  robot.add(elbowPipeMesh2);
  
  var PVCPipe5inMesh1 = makeCylinderMesh(PVCPipe5inGeom, robotOrange);
  var PVCPipe5inMesh2 = makeCylinderMesh(PVCPipe5inGeom, robotOrange);
  PVCPipe5inMesh1.translateX(-7.6);
  PVCPipe5inMesh2.translateX(-7.6);
  PVCPipe5inMesh1.translateY(6.75);
  PVCPipe5inMesh2.translateY(-6.75);
  PVCPipe5inMesh1.translateZ(10);
  PVCPipe5inMesh2.translateZ(10);
  PVCPipe5inMesh1.rotateOnAxis(zAxis, Math.PI/2);
  PVCPipe5inMesh2.rotateOnAxis(zAxis, Math.PI/2);
  robot.add(PVCPipe5inMesh1);
  robot.add(PVCPipe5inMesh2);
  
  var elbowPipeMesh3 = makeConvexMesh(elbowPipeGeom, robotOrange);
  var elbowPipeMesh4 = makeConvexMesh(elbowPipeGeom, robotOrange);
  elbowPipeMesh3.translateX(-10.1);
  elbowPipeMesh4.translateX(-10.1);
  elbowPipeMesh3.translateY(5.75);
  elbowPipeMesh4.translateY(-5.75);
  elbowPipeMesh3.translateZ(10);
  elbowPipeMesh4.translateZ(10);
  elbowPipeMesh3.rotateOnAxis(zAxis, Math.PI/2);
  elbowPipeMesh4.rotateOnAxis(zAxis, Math.PI);
  robot.add(elbowPipeMesh3);
  robot.add(elbowPipeMesh4);
  
  var PVCPipe12inMesh = makeCylinderMesh(PVCPipe12inGeom, robotOrange);
  PVCPipe12inMesh.translateX(-11.1);
  PVCPipe12inMesh.translateZ(10);
  robot.add(PVCPipe12inMesh);
  
  robot.seederObject = new THREE.Object3D();

  var seederBaseMesh1 = makeBoxMesh(seederBase1Geom, robotOrange);
  seederBaseMesh1.translateY(2.5);
  robot.seederObject.add(seederBaseMesh1);
  
  var seederBaseMesh2 = makeBoxMesh(seederBase1Geom, robotOrange);
  seederBaseMesh2.translateY(-2.5);
  robot.seederObject.add(seederBaseMesh2);
  
  var seederBaseMesh3 = makeBoxMesh(seederBase2Geom, robotOrange);
  seederBaseMesh3.translateX(-2);
  robot.seederObject.add(seederBaseMesh3);
  
  var seederBaseMesh4 = makeBoxMesh(seederBase3Geom, robotOrange);
  seederBaseMesh4.translateX(10);
  seederBaseMesh4.translateZ(1.25);
  robot.seederObject.add(seederBaseMesh4);
  
  var seederWallMesh1 = makeBoxMesh(seederWall1Geom, robotOrange);
  seederWallMesh1.translateY(4);
  seederWallMesh1.translateZ(1.25);
  robot.seederObject.add(seederWallMesh1);
  
  var seederWallMesh2 = makeBoxMesh(seederWall1Geom, robotOrange);
  seederWallMesh2.translateY(-4);
  seederWallMesh2.translateZ(1.25);
  robot.seederObject.add(seederWallMesh2);
  
  var seederWallMesh3 = makeBoxMesh(seederWall2Geom, robotOrange);
  seederWallMesh3.translateX(-10.90);
  seederWallMesh3.translateZ(1.25);
  robot.seederObject.add(seederWallMesh3);
  
  robot.seederRampMesh = makeBoxMesh(seederRampGeom, robotOrange, 0.0, 0.1, 0.8);
  robot.seederRampMesh.translateX(-2.75);
  robot.seederRampMesh.translateZ(1.5);
  robot.seederRampMesh.rotateOnAxis(yAxis, Math.PI/32);
  robot.seederObject.add(robot.seederRampMesh);
  
  var seederPipeMesh = makeCylinderMesh(seederPipeGeom, robotOrange);
  seederPipeMesh.material.side = THREE.DoubleSide;
  seederPipeMesh.translateX(8);
  seederPipeMesh.translateZ(-4.25);
  seederPipeMesh.rotateOnAxis(xAxis, Math.PI/2);
  robot.seederObject.add(seederPipeMesh);
  
  robot.seederObject.translateX(-7.5);
  robot.seederObject.translateY(-4);
  robot.seederObject.translateZ(11.25);
  robot.seederObject.rotateOnAxis(zAxis, -Math.PI/2);
  robot.add(robot.seederObject);
  
  var largeMotorMesh1 = makeCylinderMesh(largeMotorGeom, grayMat);
  var largeMotorMesh2 = makeCylinderMesh(largeMotorGeom, grayMat);
  largeMotorMesh1.translateX(-7);
  largeMotorMesh2.translateX(-7);
  largeMotorMesh1.translateY(5);
  largeMotorMesh2.translateY(-5);
  largeMotorMesh1.translateZ(4);
  largeMotorMesh2.translateZ(4);
  robot.add(largeMotorMesh1);
  robot.add(largeMotorMesh2)
  
  var scissorLiftRailMesh1 = makeBoxMesh(scissorLiftRailGeom, grayMat);
  var scissorLiftRailMesh2 = makeBoxMesh(scissorLiftRailGeom, grayMat);
  scissorLiftRailMesh1.translateX(9.25);
  scissorLiftRailMesh2.translateX(-1);
  scissorLiftRailMesh1.translateY(2.25);
  scissorLiftRailMesh2.translateY(2.25);
  scissorLiftRailMesh1.translateZ(3.085);
  scissorLiftRailMesh2.translateZ(3.085);
  robot.add(scissorLiftRailMesh1);
  robot.add(scissorLiftRailMesh2);
  

  // scissorLift = makeBoxMesh(scissorLiftBoardsGeom, woodMat);
  // scissorLift.translateX(4.175);
  // scissorLift.translateZ(3.5 + 3.085);
  
  var platformBoardMesh1 = makeBoxMesh(platformBoard1Geom, robotBlue);
  platformBoardMesh1.translateY(5.125);
  platform.add(platformBoardMesh1);
  
  var platformBoardMesh2 = makeBoxMesh(platformBoard2Geom, robotBlue);
  platformBoardMesh2.translateX(8.05);
  platform.add(platformBoardMesh2);
  
  var platformBoardMesh3 = makeBoxMesh(platformBoard1Geom, robotBlue);
  platformBoardMesh3.translateY(-5.125);
  platform.add(platformBoardMesh3);
  
  var platformBoardMesh4 = makeBoxMesh(platformBoard3Geom, robotBlue);
  platformBoardMesh4.translateX(-6.75);
  platform.add(platformBoardMesh4);
  
  platform.translateX(4.25);
  platform.translateY(-1.5);
  platform.translateZ(7 + 3.085);
  platform.rotateOnAxis(zAxis, Math.PI/2);
  robot.add(platform);
  
  var armPipeMesh = makeCylinderMesh(PVCPipe7inGeom, pvcMat);
  armPipeMesh.translateY(3.5);
  arm.add(armPipeMesh);
  
  var armPanelMesh = makeCylinderMesh(armPanelGeom, grayMat);
  armPanelMesh.translateY(8.75);
  arm.add(armPanelMesh);
  
  var armGripMesh1 = makeCylinderMesh(armGripGeom, grayMat);
  armGripMesh1.translateX(1.375);
  armGripMesh1.translateY(11.25);
  arm.add(armGripMesh1);
  
  var armGripMesh2 = makeCylinderMesh(armGripGeom, grayMat);
  armGripMesh2.translateX(-1.375);
  armGripMesh2.translateY(11.25);
  arm.add(armGripMesh2);
  
  arm.translateX(4);
  arm.translateY(-9);
  arm.translateZ(8.5 + 3.085);
  arm.rotateOnAxis(xAxis, -Math.PI/1.5);
  arm.rotateOnAxis(zAxis, Math.PI);
  robot.add(arm);
  
  scene.add(robot);
}

function driveRobot(dt) {
  var r = 4; // wheel radius
  var dR = 16; // wheel separation
  var wL = joystick.dyL; // rate of left wheel turning
  var wR = joystick.dyR; // rate of right wheel turning
  var dw = wL - wR; // difference of wheel rates
  var R = wR*dR/dw; // distance from right wheel to center of rotation
  var W = wR*r/R; // rate of rotation about center of rotation
  var v = robot.wheelR.position.clone();
  v.sub(robot.wheelL.position);
  v.normalize().multiplyScalar(R);
  var center = robot.wheelR.position.clone();
  center.add(v);
  console.log(center);
  robot.position.sub(center);
  robot.rotateOnAxis(zAxis, W*dt);
  robot.position.add(center);
}
