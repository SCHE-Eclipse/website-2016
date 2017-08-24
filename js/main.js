//toggles for various cpu intensive features
var usePhysics = true;
var useShadows = true;

if (usePhysics) {
  Physijs.scripts.worker = 'js/libs/physijs_worker.js';
  Physijs.scripts.ammo = 'ammo.js';
}

var render_stats, physics_stats;
var camera, scene, renderer, controsl, gamepad;
var clock;

var activeSection = 0;

//axis shortcuts
var xAxis = new THREE.Vector3(1, 0, 0);
var yAxis = new THREE.Vector3(0, 1, 0);
var zAxis = new THREE.Vector3(0, 0, 1);

//color shortcuts
var woodMat = new THREE.MeshLambertMaterial({color: 0xbf935a});
var pvcMat = new THREE.MeshLambertMaterial({color: 0xf1f1f1});
var floorMat = new THREE.MeshLambertMaterial({color: 0x99ccff});
var grayMat = new THREE.MeshLambertMaterial({color: 0x808080});
var whiteMat = new THREE.MeshLambertMaterial({color: 0xffffff});
var redMat = new THREE.MeshLambertMaterial({color: 0xff3300});
var blueMat = new THREE.MeshLambertMaterial({color: 0x0066ff});
var yellowMat = new THREE.MeshLambertMaterial({color: 0xffff00});
var greenMat = new THREE.MeshLambertMaterial({color: 0x00ff00});
var purpleMat = new THREE.MeshLambertMaterial({color: 0x800080});
var colorMats = [redMat, blueMat, yellowMat, greenMat];

function init() {
  var div = document.createElement("div");
  div.id = "container";
  document.body.appendChild(div);
  
  var aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 10000);
  camera.position.set(0, 350, 200);
  camera.lookAt(new THREE.Vector3(0, 0, 100));
  camera.up.set(0, 0, 1);
  
  render_stats = new Stats();
  render_stats.domElement.style.position = 'absolute';
  render_stats.domElement.style.top = '0px';
  render_stats.domElement.style.zIndex = 100;
  div.appendChild(render_stats.domElement);
  
  if (usePhysics) {
    physics_stats = new Stats();
    physics_stats.domElement.style.position = 'absolute';
    physics_stats.domElement.style.top = '50px';
    physics_stats.domElement.style.zIndex = 100;
    div.appendChild(physics_stats.domElement);
    
    scene = new Physijs.Scene({reportsize: 500, fixedTimeStep: 1/60});
    scene.setGravity(new THREE.Vector3(0, 0, -30));
    scene.addEventListener(
      'update',
      function() {
        scene.simulate(undefined, 2);
        physics_stats.update();
      }
    );
  }
  else {
    scene = new THREE.Scene();
  }
  
  var light0 = new THREE.AmbientLight(0x666666);
  scene.add(light0);true
  
  var light1 = ShadowedLight( 050, 100, 200, 0xffffff, 0.75);
  scene.add(light1);
  
  // var light2 = ShadowedLight(-200, 100, 205, 0xffffff, 0.75);
  // scene.add(light2);
  
  initScene();
  
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = useShadows;
  div.appendChild(renderer.domElement);
  
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.damping = 0.2;
  controls.maxPolarAngle = 0.49*Math.PI;

  clock = new THREE.Clock();
  
  initEventListeners();
  
  if (usePhysics) {
    scene.simulate(undefined, 2);
  }
  
  render();
  demoRun();
}

function initEventListeners() {
  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener('keydown', onKeydown);
  // window.addEventListener('keyup', onKeyup);
  window.addEventListener('gamepadconnected', function(e) {
    var gp = navigator.getGamepads()[e.gamepad.index];
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
                gp.index, gp.id, gp.buttons.length, gp.axes.length);
    gamepad = gp;
  });
  window.addEventListener('gamepaddisconnected', function(e) {
    var gp = navigator.getGamepads()[e.gamepad.index];
    console.log("Gamepad disconnected at index %d:", gp.index);
    gamepad = null;
  });
}

//initialize the scene
function initScene() {
  initKatelyn();
  initJonathan();
  initJoshua();
  initHal();
  initRobot();
}

//add shadow-casting, directional light
function ShadowedLight(x, y, z, color, intensity) {
  var light = new THREE.SpotLight(color, intensity, 600, 35, 0);
  light.position.set(x, y, z);
  scene.add(light);
  
  light.castShadow = useShadows;
  
  // var d = 200;
  // light.shadow.camera.left = -d;
  // light.shadow.camera.right = d;
  // light.shadow.camera.top = d;
  // light.shadow.camera.bottom = -d;
  
  // light.shadow.camera.near = 1;
  // light.shadow.camera.far = 500;
  
  // light.shadow.mapSize.width = 2048;
  // light.shadow.mapSize.Height = 2048;
  
  // var helper = new THREE.SpotLightHelper( light );
  // scene.add(helper);
  
  return light;
}

//make appropriate box mesh for physics/nophysics
function makeBoxMesh(geom, mat, mass, friction, restitution) {
	var mesh;
	if (usePhysics && mass !== undefined && mass >= 0) {
		var m = mass || 0.0;
		var mu = friction || 0.8;
		var epsilon = restitution || 0.4;
		var pmat = Physijs.createMaterial(mat, 0.8, 0.4);
		mesh = new Physijs.BoxMesh(geom, pmat, mass);
	}
	else {
		mesh = new THREE.Mesh(geom, mat);
	}
	mesh.castShadow = useShadows;
	mesh.receiveShadow = useShadows;
	return mesh;
}

//make appropriate sphere mesh for physics/nophysics
function makeSphereMesh(geom, mat, mass, friction, restitution) {
	var mesh;
	if (usePhysics && mass !== undefined && mass >= 0) {
		var m = mass || 0.0;
		var mu = friction || 0.8;
		var epsilon = restitution || 0.4;
		var pmat = Physijs.createMaterial(mat, 0.8, 0.4);
		mesh = new Physijs.SphereMesh(geom, pmat, mass);
	}
	else {
		mesh = new THREE.Mesh(geom, mat);
	}
	mesh.castShadow = useShadows;
	mesh.receiveShadow = useShadows;
	return mesh;
}

//make appropriate cylinder mesh for physics/nophysics
function makeCylinderMesh(geom, mat, mass, friction, restitution) {
	var mesh;
	if (usePhysics && mass !== undefined && mass >= 0) {
		var m = mass || 0.0;
		var mu = friction || 0.8;
		var epsilon = restitution || 0.4;
		var pmat = Physijs.createMaterial(mat, 0.8, 0.4);
		mesh = new Physijs.CylinderMesh(geom, pmat, mass);
	}
	else {
		mesh = new THREE.Mesh(geom, mat);
	}
	mesh.castShadow = useShadows;
	mesh.receiveShadow = useShadows;
  return mesh;
}

//make appropriate convex mesh for physics/nophysics
function makeConvexMesh(geom, mat, mass, friction, restitution) {
  var mesh;
  if (usePhysics && mass !== undefined && mass >= 0) {
    var m = mass || 0.0;
    var mu = friction || 0.8;
    var epsilon = restitution || 0.4;
    var pmat = Physijs.createMaterial(mat, mu, epsilon);
    mesh = new Physijs.ConvexMesh(geom, pmat, m);
  }
  else {
    mesh = new THREE.Mesh(geom, mat);
  }
	mesh.castShadow = useShadows;
	mesh.receiveShadow = useShadows;
	return mesh;
}


var joystick = {
  dxL: 0, dyL: 0, dxR: 0, dyR: 0
};

var axis = 1;

function updateJoystick() {
  if (!gamepad) return;
  var dxL = gamepad.axes[0];
  var dyL = gamepad.axes[1];
  var dxR = gamepad.axes[2];
  var dyR = gamepad.axes[3];
  if (Math.abs(dxL) > 0.1) {
    console.log("dxL: " + dxL);
    joystick.dxL = dxL;
  }
  if (Math.abs(dyL) > 0.1) {
    console.log("dyL: " + dyL);
    joystick.dyL = dyL;
  }
  if (Math.abs(dxR) > 0.1) {
    console.log("dxR: " + dxR);
    joystick.dxR = dxR;
  }
  if (Math.abs(dyR) > 0.1) {
    console.log("dyR: " + dyR);
    joystick.dyR = dyR;
  }
}

function onWindowResize(e) {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//this function must stay at the bottom of the file
function render() {
  var dt = clock.getDelta();
  hubMesh.rotateOnAxis(yAxis, dt);
  requestAnimationFrame(render);
  updateJoystick();
  //driveRobot(dt);
  TWEEN.update();
  renderer.render(scene, camera);
  render_stats.update();
}
