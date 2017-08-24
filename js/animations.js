//robot demo tweening
function openGate() {
  var target = { z: Math.PI/2 };
  var gateOpen = new TWEEN.Tween(StartGate[0].rotation)
      .to(target, 1000);
  return gateOpen;
}

var moveRate  = 0.05;
function moveRobot(toX, toY, delay) {
	var dx = toX - robot.position.x;
	var dy = toY - robot.position.y;
	var dr = Math.sqrt(dx*dx + dy*dy);
	var dt = dr/moveRate;
  var target = {x: toX, y: toY};
  var tween1 = new TWEEN.Tween(robot.position)
      .delay(delay || 0)
      .to(target, dt);
  return tween1;
}

var turnRate = 0.01;
function turnRobot(toZ, delay) {
  var target = { z: toZ };
	var dt = Math.abs(target.z - robot.rotation.z)/turnRate;
  var tween1 = new TWEEN.Tween(robot.rotation)
		  .delay(delay || 0)
      .to(target, dt);
  return tween1;
}

var liftHeight = 0;
function moveRobotPlantSeed(i, j, onRHS) {
  var jj = (onRHS ? j+1 : j-11);
  var sqrt18 = Math.sqrt(18);
  var x0 = (onRHS ? -70 + jj*sqrt18 : 26 + jj*sqrt18);
  var y0 = (onRHS ? 107.25 - jj*sqrt18 : 63 + jj*sqrt18 );
  var dx = (x0 - robot.position.x);
  var dy = (y0 - robot.position.y);
  var dr = Math.sqrt(dx*dx + dy*dy);
 	var dt = dr/moveRate;
  //var dt = 1000;
  var target = { x: x0, y: y0, i: i, j: j };
  var tween = new TWEEN.Tween(robot.position)
      .delay(1500)
      .to(target, dt)
      .onComplete( function() {
        var i = this.i;
        var j = this.j;
        var seed = (onRHS ? ( j<0 ? undefined : seeds[i][j]) :
                    ( j<12 ? undefined : seeds[i][j] ) );
        if (seed) {
          // Plant a seed
          robot.remove(seed);
          seed.position = robot.localToWorld(seed.position);
          scene.add(seed);
          if (!usePhysics) {
            var seedTween = new TWEEN.Tween(seed.position)
                .to( { z: 1 }, 100 )
                .easing( TWEEN.Easing.Quadratic.In )
                .start();
          }
        }
        if ( (onRHS && j<10) || (!onRHS && j<22) ) {
          var setLift = moveLift(0.6 + (2-(j+2)%3)/3, 0);
          var deployArm = new TWEEN.Tween( arm.rotation )
              .to( { x: 0, i: i, j: j }, 1000 )
              .onComplete( function() {
                var i = this.i;
                var j = this.j + 2;
                scene.remove(corn[i][j]);
                arm.add(corn[i][j]);
                corn[i][j].quaternion.copy(arm.quaternion);
                corn[i][j].position.copy(arm.worldToLocal(corn[i][j].position));
              } );
          var stowArm = new TWEEN.Tween( arm.rotation )
              .to( { x: -Math.PI/1.5, i: i, j: j }, 1000 )
              .onComplete( function() {
                var i = this.i;
                var j = this.j + 2;
                arm.remove(corn[i][j]);
                corn[i][j].position = robot.worldToLocal(arm.localToWorld(corn[i][j].position));
                
                // if (usePhysics) {
                //   corn[i][j].position = robot.localToWorld(corn[i][j].position);
                //   scene.add(corn[i][j]);
                // }
                // else {
                  robot.add(corn[i][j]);
                  var dropCorn = new TWEEN.Tween( corn[i][j].position )
                      .to( { z: 10 }, 500 )
                      .easing( TWEEN.Easing.Quadratic.In )
                      .start();
                // }
              } );
          setLift.chain(deployArm);
          deployArm.chain(stowArm);
          setLift.start();
        }
      } );
  return tween;
}

// function turnRobot(toX, toY, delay) {
// var target = { z: Math.atan2(toY - robot.position.y, toX - robot.position.x) };
// var dt = Math.abs(target.z - robot.rotation.z)*turnRate;
// console.log(target, dt);
// var tween1 = new TWEEN.Tween(robot.rotation)
// .delay(delay || 0)
// .to(target, dt);
// return tween1;
// }

function scissorScale(lift, scaleY, scaleZ) {
  var target = {y: scaleY, z: scaleZ};
  var tween1 = new TWEEN.Tween(lift.scale)
      .to(target, 400);
  return tween1;
}

function scissorPos(lift, posZ) {
  var target = {z: posZ };
  var tween1 = new TWEEN.Tween(lift.position)
      .to(target, 400);
  return tween1;
}

function platformPos(posZ) {
  var target = {z: posZ };
  var tween1 = new TWEEN.Tween(platform.position)
      .to(target, 400);
  return tween1;
}

function armPos(posZ) {
  var target = {z: posZ };
  var tween1 = new TWEEN.Tween(arm.position)
      .to(target, 400);
  return tween1;
}

function rotateArm(toX) {
  var target = {x: toX};
  var tween1 = new TWEEN.Tween(arm.rotation)
      .to(target, 1000);
  return tween1;
}

var fallingSeeds = [];
function loadSeed(i, j){
  var target = { z: -6.5, i: i, j: j };
  var dz = seeds[i][j].position.z - target.z;
  var dt = Math.sqrt(2*dz/0.0005);
  var tween = new TWEEN.Tween(seeds[0][j].position)
      .easing(TWEEN.Easing.Quadratic.In)
      .to(target, dt)
      .onComplete( function() {
        var ii = this.i;
        var jj = this.j;
        var pos = tubes[ii].localToWorld(seeds[ii][jj].position);
        seeds[ii][jj].position = robot.worldToLocal(pos);
        tubes[ii].remove(seeds[ii][jj]);
        robot.add(seeds[ii][jj]);
        var tween = new TWEEN.Tween(seeds[ii][jj].position)
            .to( { x: -7.5, y: -12, z: 12 }, 1000 )
            .onComplete( function() {
              var ii = this.i;
              var jj = this.j;
              var tween = new TWEEN.Tween(seeds[ii][jj].position)
                  .to( { x: -7.5, y: -12, z: 4 }, 100 )
                  .start();
            } )
            .start();
      } );
  return tween;
}

//event handlers
var liftUp = false;
var armUp = false;
function onKeydown(ev) {
  switch(ev.key) {
  case 'g':
    demoRun();
    break;
	case 'l':
    var toZ = (liftUp ? 0 : 1);
    moveLift(toZ).start();
		liftUp = !liftUp;
		break;
		// case 'h':
		// 	  var armLift = (armUp ? -Math.PI/1.5 : 0);
		// 	  var liftArmTween = rotateArm(armLift);
		// 	  liftArmTween.start();
		// 	  armUp = !armUp;
		// 	  break;
  };
}

var liftInProgress = false;
function moveLift(s, delay) {
  if (liftInProgress) return;
	var scaleZ = (1-s)*11  + s*13;
	var scaleY = (1-s)*7   + s*24;
  var liftZ  = (1-s)*6.5 + s*15;
	var platformPosZ = (1-s)*10.325 + s*27.325;
	var armPosZ = (1-s)*11 + s*28; // (liftUp ? 3.085 + 8.5 : 3.085 + 25.5);
  var startTween = new TWEEN.Tween(robot)
      .delay(delay)
      .to( { i: 0 }, 1)
      .onComplete( function() {
		    scissorScale(scissorLift1, scaleY, scaleZ)
          .onStart( function() { liftInProgress = true; } )
          .onComplete( function() { liftInProgress = false; } )
          .start();
		    scissorPos(scissorLift1, liftZ).start();
		    scissorScale(scissorLift2, scaleY, scaleZ).start();
		    scissorPos(scissorLift2, liftZ).start();
		    platformPos(platformPosZ).start();
		    armPos(armPosZ).start();
      } );
  return startTween;
}


var allTweens = [];
function demoRun() {
  // Open Gate
  allTweens.push( openGate() );
  // Pause for one second and then move west
  allTweens.push( moveRobot(10, 130, 1000) );
  // Turn north
  allTweens.push( turnRobot(-Math.PI/2, 0) );
  // Move north
  allTweens.push( moveRobot(10, 100, 0) );
  // Turn east
  allTweens.push( turnRobot(-Math.PI, 0) );
  // Move east
  allTweens.push( moveRobot(-62, 100, 0) );
  // Turn southeast
  allTweens.push( turnRobot(-5*Math.PI/4, 0) );
  // Move southeast
  allTweens.push( moveRobot(-94, 132, 0) );
  // Turn west
  for (var i=-4; i<=0; ++i) {
    allTweens.push( turnRobot(i*Math.PI/4, 0) );
  }
  // LOAD SEEDS
  var nseeds = seeds[0].length;
	for (var j=0; j<nseeds; ++j) {
    allTweens.push( loadSeed(0, j) );
  }
  
  // Turn northwest
	allTweens.push( turnRobot(-Math.PI/4, 0) );
  // Move northwest to beginning of seed row 
  // allTweens.push( moveRobot(-80, 118, 0) );
  
  // START PLANTING
  for (var j=-2; j<12; ++j) {
    var tween = moveRobotPlantSeed(0, j, true);
    allTweens.push(tween);
  }
  
	allTweens.push( turnRobot(0, 0) );
  allTweens.push( moveRobot(18, 55, 0) );
	allTweens.push( turnRobot(Math.PI/4, 0) );
  
  // PLANT SOME MORE
  for (var j=10; j<24; ++j) {
    var tween = moveRobotPlantSeed(0, j, false);
    allTweens.push(tween);
  }
  
  allTweens.push( moveRobot( 6, 43, 500) );
	allTweens.push( turnRobot(-3*Math.PI/4, 0) );
  allTweens.push( moveRobot(-5, 32, 500) );
  allTweens.push( moveLift( 1, 0 ) );
  for (var j=0; j<24; ++j) {
    var tween = new TWEEN.Tween(corn[0][j].position)
        .to( { y: 10, i: 0, j: j }, 500 )
        .onComplete( function() {
          var ii = this.i;
          var jj = this.j;
          robot.remove(corn[ii][jj]);
          corn[ii][jj].children[0].position = corn[ii][jj].localToWorld(corn[ii][jj].children[0].position);
          scene.add(corn[ii][jj].children[0]);
        } );
    allTweens.push( tween );
  }
  
  var NT = allTweens.length;
  for (var i=1; i<NT; ++i) {
    allTweens[i-1].chain(allTweens[i]);
  }
  allTweens[NT-1].onComplete( function() {
    // window.location.reload();
  } );
  allTweens[0].start();
}
