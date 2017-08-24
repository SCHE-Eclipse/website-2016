var hubMesh;

function addWindmill() {
  var riserGeom = new THREE.BoxBufferGeometry(1.5, 3.5, 16);
  var legGeom = new THREE.BoxBufferGeometry(1.5, 1.5, 72);
  for (var i=0; i<4; ++i) {
    var phi = i*Math.PI/2 + Math.PI/4;
    var riserMesh = makeBoxMesh(riserGeom, woodMat);
    riserMesh.rotateOnAxis(zAxis, phi);
    riserMesh.translateZ(8);
    riserMesh.translateX(19.5);
    scene.add(riserMesh);
    
    var legMesh = makeBoxMesh(legGeom, woodMat);
    legMesh.rotateOnAxis(zAxis, phi);
    legMesh.translateZ(51.128);
    legMesh.translateX(10.5);
    legMesh.rotateOnAxis(yAxis, Math.asin(-15.75/72));
    scene.add(legMesh);

  }
  
  var platformSupportGeom = new THREE.BoxBufferGeometry(3.5, 16, 0.75);
  for(var i = 0; i < 4; ++i){
    var phi = i*Math.PI/2;
    var platformSupportMesh = makeBoxMesh(platformSupportGeom, woodMat);
    platformSupportMesh.rotateOnAxis(zAxis, phi);
    platformSupportMesh.translateX(6.25);
    platformSupportMesh.translateZ(75  + (i%2)*0.75);
    scene.add(platformSupportMesh);
  }
  
  var motorBaseGeom = new THREE.BoxBufferGeometry(6, 6, 11/32);
  var motorBaseMesh = makeBoxMesh(motorBaseGeom, woodMat);
  motorBaseMesh.translateZ(86.5);
  motorBaseMesh.rotateOnAxis(zAxis, Math.PI/4);
  scene.add(motorBaseMesh);

  var motorGeom = new THREE.BoxBufferGeometry(5.25, 6.0, 7);
  var motorMesh = makeBoxMesh(motorGeom, woodMat);
  motorMesh.translateZ(4);
  motorBaseMesh.add(motorMesh);
  
  var shaftGeom = new THREE.CylinderBufferGeometry(0.125, 0.125, 10);
  var shaftMesh = makeCylinderMesh(shaftGeom, grayMat);
  shaftMesh.translateZ(-1);
  shaftMesh.translateY(-2);
  motorMesh.add(shaftMesh);
  
  var hubGeom = new THREE.BoxBufferGeometry(3.5,1.5,3.5);
  hubMesh = makeBoxMesh(hubGeom, woodMat);
  hubMesh.translateY(-5);
  shaftMesh.add(hubMesh);

  for (var i=0; i<8; ++i) {
    var theta = i*Math.PI/4;
    var blade = makeBlade();
    blade.rotateOnAxis(yAxis, theta);
    blade.rotateOnAxis(xAxis, Math.PI/6);
    blade.translateX(1.75);
    hubMesh.add(blade);
  }
  var ribGeom = new THREE.BoxBufferGeometry(0.75, 16, 1.5);
  var ribMesh = makeBoxMesh(ribGeom, woodMat);
  ribMesh.translateY(11);
  motorMesh.add(ribMesh);
  
  var vaneMesh = makeVane();
  vaneMesh.translateY(-4);
  ribMesh.add(vaneMesh);

}

function makeBlade() {
  var bladeGeom = new THREE.BufferGeometry();
  var vertices = new Float32Array([
    0.0,  0.0625,  0.75,
    0.0,  0.0625, -0.75,
    8.0,  0.0625, -1.5,
    8.0,  0.0625,  1.5,
    0.0, -0.0625,  0.75,
    0.0, -0.0625, -0.75,
    8.0, -0.0625, -1.5,
    8.0, -0.0625,  1.5,
  ]);
  var indices = new Uint16Array([
    0,2,1,
    0,3,2,
    4,5,6,
    4,6,7,
    0,1,4,
    1,5,4,
    2,3,6,
    6,3,7,
    0,7,3,
    0,4,7,
    1,2,6,
    1,6,5
  ]);
  bladeGeom.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
  bladeGeom.setIndex(new THREE.BufferAttribute(indices, 1));
  bladeGeom.computeVertexNormals();
  bladeGeom.computeBoundingSphere();
  var bladeMesh = makeConvexMesh( bladeGeom, woodMat );
  return bladeMesh;
}

function makeVane() {
  var vaneGeom = new THREE.BufferGeometry();
  var vertices = new Float32Array([
    0.0625,  0.0,  2.0,
    0.0625,  0.0, -2.0,
    0.0625, 20.0, -4.0,
    0.0625, 20.0,  4.0,
   -0.0625,  0.0,  2.0,
   -0.0625,  0.0, -2.0,
   -0.0625, 20.0, -4.0,
   -0.0625, 20.0,  4.0
  ]);
  var indices = new Uint16Array([
    0,1,2,
    0,2,3,
    4,6,5,
    4,7,6,
    0,4,1,
    1,4,5,
    2,6,3,
    6,7,3,
    0,3,7,
    0,7,4,
    1,6,2,
    1,5,6
  ]);
  vaneGeom.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
  vaneGeom.setIndex(new THREE.BufferAttribute(indices, 1));
  vaneGeom.computeVertexNormals();
  vaneGeom.computeBoundingSphere();
  var vaneMesh = makeConvexMesh( vaneGeom, woodMat );
  return vaneMesh;
}

