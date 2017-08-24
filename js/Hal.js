var ropeMat = new THREE.MeshLambertMaterial({color: 0xD2B48C});
var blackMat = new THREE.MeshLambertMaterial({color: 0x000000});

function initHal() {
	for (var j=0; j<2; j++){
		var p = j*Math.PI+Math.PI/4;
		for(var i=-21.5; i<=21.5;i=i+43){
			var skinny=MakePvcPipe();
			skinny.rotateOnAxis(xAxis,Math.PI/2);
			skinny.rotateOnAxis(yAxis,p);
			skinny.translateX(176);
			skinny.translateY(25);
			skinny.translateZ(21.5);
			scene.add(skinny);
		}
	}
	for(var i=-21.5; i<=21.5;i=i+43) {
		var skinny=MakePvcPipe();
		skinny.rotateOnAxis(xAxis,Math.PI/2);
		skinny.rotateOnAxis(yAxis,p);
		skinny.translateX(176);
		skinny.translateY(25);
		skinny.translateZ(-21.5);
		scene.add(skinny);
	}			
	
	for(var i=-21.5; i<=21.5;i=i+43){
		var skinny=MakePvcPipe();
		skinny.rotateOnAxis(xAxis,Math.PI/2);
		skinny.rotateOnAxis(yAxis,p);
		skinny.translateX(-176);
		skinny.translateY(25);
		skinny.translateZ(21.5);
		scene.add(skinny);
	}	
	
	for(var i=-1; i<=1;i=i+1){
		var skinny2=MakePvcPipe2();
		skinny2.rotateOnAxis(zAxis,p);
		skinny2.translateX(-176);
		skinny2.translateZ(15);
		scene.add(skinny2);
	}
	
	for(var i=-1; i<=1;i=i+1){
		var skinny2=MakePvcPipe2();
		skinny2.rotateOnAxis(zAxis,p);
		skinny2.translateX(176);
		skinny2.translateZ(15);
		scene.add(skinny2);
	}
	
	for(var i=-1; i<=1;i=i+1){
		var skinny2=MakePvcPipe2();
		skinny2.rotateOnAxis(zAxis,p);
		skinny2.translateX(-176);
		skinny2.translateZ(51);
		scene.add(skinny2);
	}
	
	for(var i=-1; i<=1;i=i+1){
		var skinny2=MakePvcPipe2();
		skinny2.rotateOnAxis(zAxis,p);
		skinny2.translateX(176);
		skinny2.translateZ(51);
		scene.add(skinny2);
	}
	
	var skinny3=MakePvcPipe3();
	skinny3.translateX(141);
	skinny3.translateY(125);
	scene.add(skinny3);
		
	var skinny3=MakePvcPipe3();
	skinny3.translateX(-141);
	skinny3.translateY(-125);
	scene.add(skinny3);
	
	var skinny3=MakePvcPipe3();
	skinny3.rotateOnAxis(zAxis,Math.PI/2);
	skinny3.translateX(141);
	skinny3.translateY(-125);
	scene.add(skinny3);
	
	var skinny3=MakePvcPipe3();
	skinny3.rotateOnAxis(zAxis,Math.PI/2);
	skinny3.translateX(-141);
	skinny3.translateY(125);
	scene.add(skinny3);
	
	var skinny4=MakePvcPipe4();
	skinny4.rotateOnAxis(zAxis,p);
	skinny4.translateX(176);
	scene.add(skinny4);
	
	var skinny4=MakePvcPipe4();
	skinny4.rotateOnAxis(zAxis,p);
	skinny4.translateX(-176);
	scene.add(skinny4);
	
	var ropey=MakeRope();
	ropey.rotateOnAxis(zAxis,p);
	ropey.rotateOnAxis(xAxis,Math.PI/2);
	ropey.translateX(176);
	ropey.translateY(33);
	scene.add(ropey);
	
	var ropey=MakeRope();
	ropey.rotateOnAxis(zAxis,p);
	ropey.rotateOnAxis(xAxis,Math.PI/2);
	ropey.translateX(176);
	ropey.translateY(33);
	ropey.translateZ(10.875);
	scene.add(ropey);
	
	var ropey=MakeRope();
	ropey.rotateOnAxis(zAxis,p);
	ropey.rotateOnAxis(xAxis,Math.PI/2);
	ropey.translateX(176);
	ropey.translateY(33);
	ropey.translateZ(-10.875);
	scene.add(ropey);
	
	var ropey=MakeRope();
	ropey.rotateOnAxis(zAxis,p);
	ropey.rotateOnAxis(xAxis,Math.PI/2);
	ropey.translateX(-176);
	ropey.translateY(33);
	ropey.translateZ(-10.875);
	scene.add(ropey);
	
	var ropey=MakeRope();
	ropey.rotateOnAxis(zAxis,p);
	ropey.rotateOnAxis(xAxis,Math.PI/2);
	ropey.translateX(-176);
	ropey.translateY(33);
	ropey.translateZ(10.875);
	scene.add(ropey);
	
	var ropey=MakeRope();
	ropey.rotateOnAxis(zAxis,p);
	ropey.rotateOnAxis(xAxis,Math.PI/2);
	ropey.translateX(-176);
	ropey.translateY(33);
	scene.add(ropey);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(21);
	blackStuff.translateZ(10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(21);
	blackStuff.translateZ(-10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(21);
	blackStuff.translateZ(10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(21);
	blackStuff.translateZ(-10.875);
	scene.add(blackStuff);

	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(27);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(27);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(33);
	blackStuff.translateZ(10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(33);
	blackStuff.translateZ(10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(33);
	blackStuff.translateZ(-10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(33);
	blackStuff.translateZ(-10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(39);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(39);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(45);
	blackStuff.translateZ(-10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(176);
	blackStuff.translateY(45);
	blackStuff.translateZ(10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(45);
	blackStuff.translateZ(-10.875);
	scene.add(blackStuff);
	
	var blackStuff=MakeBlackStuff();
	blackStuff.rotateOnAxis(zAxis,p);
	blackStuff.rotateOnAxis(xAxis,Math.PI/2);
	blackStuff.translateX(-176);
	blackStuff.translateY(45);
	blackStuff.translateZ(10.875);
	scene.add(blackStuff);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateY(10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateY(-10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateY(10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateY(-10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(175);
	Bob.translateY(10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(175);
	Bob.translateY(-10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-175);
	Bob.translateY(-10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-175);
	Bob.translateY(10.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(11.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-11.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-11.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(11.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(9.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-9.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(9.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-9.875);
	Bob.translateZ(21);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(175);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-175);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(1);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(1);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-1);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-1);
	Bob.translateZ(27);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-11.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(11.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(11.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-11.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-9.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(9.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(9.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-9.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-175);
	Bob.translateY(-10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-175);
	Bob.translateY(10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(175);
	Bob.translateY(-10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(175);
	Bob.translateY(10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateY(-10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateY(-10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateY(10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateY(10.875);
	Bob.translateZ(33);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(1);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(1);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-1);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(1);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-1);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(175);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-175);
	Bob.translateZ(39);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateY(10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateY(10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(177);
	Bob.translateY(-10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-177);
	Bob.translateY(-10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-10.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(11.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(11.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-11.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-11.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(9.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(9.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(176);
	Bob.translateY(-9.875);
	Bob.translateZ(45);
	scene.add(Bob);
	
	var Bob=MakeTomatoes();
	Bob.rotateOnAxis(zAxis,p);
	Bob.translateX(-176);
	Bob.translateY(-9.875);
	Bob.translateZ(45);
	scene.add(Bob);
	scene.add(Bob);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(176);
	Macaroni.translateY(19.5);
	Macaroni.translateZ(49);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(176);
	Macaroni.translateY(-19.5);
	Macaroni.translateZ(49);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(-176);
	Macaroni.translateY(19.5);
	Macaroni.translateZ(49);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(-176);
	Macaroni.translateY(-19.5);
	Macaroni.translateZ(49);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(176);
	Macaroni.translateY(19.5);
	Macaroni.translateZ(13);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(-176);
	Macaroni.translateY(19.5);
	Macaroni.translateZ(13);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(176);
	Macaroni.translateY(-19.5);
	Macaroni.translateZ(13);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(-176);
	Macaroni.translateY(-19.5);
	Macaroni.translateZ(13);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis, -Math.PI/2);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(176);
	Macaroni.translateY(19.5);
	Macaroni.translateZ(17);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(-176);
	Macaroni.translateY(19.5);
	Macaroni.translateZ(17);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(176);
	Macaroni.translateY(-19.5);
	Macaroni.translateZ(17);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	scene.add(Macaroni);
	
	var Macaroni = makeConvexMesh(elbowGeom, pvcMat);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.translateX(-176);
	Macaroni.translateY(-19.5);
	Macaroni.translateZ(17);
	Macaroni.rotateOnAxis(yAxis, -Math.PI/2);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	Macaroni.rotateOnAxis(zAxis,p);
	scene.add(Macaroni);

	for (var j=0; j<2; j++){
		var p = j*Math.PI+Math.PI/4;
		var board1=new THREE.BoxGeometry(3.5,43,0.75);
		var boardMesh1=makeBoxMesh(board1,woodMat);
		boardMesh1.rotateOnAxis(zAxis,p)
		boardMesh1.translateX(178);
		boardMesh1.translateZ(0.875);
		scene.add(boardMesh1);
		for(var i=-14; i<=14;i=i+7){
			var Steve=MakeLettuce();
			Steve.rotateOnAxis(zAxis,p);
			Steve.translateX(178);
			Steve.translateY(i);
			Steve.translateZ(3);
			scene.add(Steve);
		}
		var board2=new THREE.BoxGeometry(3.5,37,0.75);
		var boardMesh2=makeBoxMesh(board2,woodMat);
		boardMesh2.rotateOnAxis(zAxis,p)
		boardMesh2.translateX(186);
		scene.add(boardMesh2);
		boardMesh2.translateZ(0.875);
		for(var i=-10.5; i<=10.5;i=i+10.5){
			var Steve=MakeLettuce();
			Steve.rotateOnAxis(zAxis,p);
			Steve.translateX(186);
			Steve.translateY(i);
			Steve.translateZ(3);
			scene.add(Steve);
		}		
	}
}

function MakePvcPipe() {
	var geom=new THREE.CylinderGeometry(1/2,1/2,49);
	var mesh=makeCylinderMesh(geom,pvcMat);
	return mesh;
}

function MakePvcPipe2() {
	var geom=new THREE.CylinderGeometry(1/2,1/2,40);
	var mesh=makeCylinderMesh(geom,pvcMat);
	return mesh;
}

function MakePvcPipe3() {
	var geom=new THREE.CylinderGeometry(1/2,1/2,31.75);
	var mesh=makeCylinderMesh(geom,pvcMat);
	return mesh;
}

function MakePvcPipe4() {
	var geom=new THREE.CylinderGeometry(1/2,1/2,42);
	var mesh=makeCylinderMesh(geom,pvcMat);
	return mesh;
}

function MakeRope() {
	var geom=new THREE.CylinderGeometry(1/8,1/8,45);
	var mesh=makeCylinderMesh(geom,ropeMat);
	return mesh;
}

function MakeBlackStuff() {
	var geom=new THREE.CylinderGeometry(1/2,1/2,3);
	var mesh=makeCylinderMesh(geom,blackMat);
	return mesh;
}

function MakeTomatoes() {
	var geom=new THREE.SphereGeometry(1);
	var mesh=makeSphereMesh(geom,redMat);
	return mesh;
}

var elbowGeom = new THREE.TorusGeometry(2, 1/2, 16, 20, Math.PI/2);

function MakeLettuce() {
	var geom=new THREE.SphereGeometry(2.5);
	var mesh=makeSphereMesh(geom,greenMat);
	return mesh;
}
