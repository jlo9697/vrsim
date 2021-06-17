/*
function vrMode(){
    document.getElementById('maat').enterVR();
}
vrMode()
*/

var rotationSpeed = 0.09;
var myOtherBox = document.getElementById('eyes1');
var eye2= document.getElementById('eyes2');
var eye3= document.getElementById('eyes3');
var eye4= document.getElementById('eyes4');
var eye5= document.getElementById('eyes5');
var eye6= document.getElementById('eyes6');
var eye7= document.getElementById('eyes7');
var eye8= document.getElementById('eyes8');
var eye9= document.getElementById('eyes9');
var eye10= document.getElementById('eyes10');
var eye11= document.getElementById('eyes11');
var eye12= document.getElementById('eyes12');
var eye13= document.getElementById('eyes13');
var eye14= document.getElementById('eyes14');

function spin() {
    myOtherBox.object3D.rotation.x += rotationSpeed/4;
    console.log(myOtherBox.object3D.rotation.x);

    myOtherBox.object3D.rotation.y += rotationSpeed;
    console.log(myOtherBox.object3D.rotation.y);

    //eye2
    eye2.object3D.rotation.x += rotationSpeed/2;
    console.log(eye2.object3D.rotation.x);

    eye2.object3D.rotation.y += rotationSpeed;
    console.log(eye2.object3D.rotation.y);

    //eye3
    eye3.object3D.rotation.x += rotationSpeed/4;
    console.log(eye3.object3D.rotation.x);

    eye3.object3D.rotation.y += rotationSpeed;
    console.log(eye3.object3D.rotation.y);

    //eye4
    eye4.object3D.rotation.x += rotationSpeed/2;
    console.log(eye4.object3D.rotation.x);

    eye4.object3D.rotation.y += rotationSpeed;
    console.log(eye4.object3D.rotation.y);

    //eye5
    eye5.object3D.rotation.x += rotationSpeed/4;
    console.log(eye5.object3D.rotation.x);

    eye5.object3D.rotation.y += rotationSpeed;
    console.log(eye5.object3D.rotation.y);

    //eye6
    eye6.object3D.rotation.x += rotationSpeed/2;
    console.log(eye6.object3D.rotation.x);

    eye6.object3D.rotation.y += rotationSpeed;
    console.log(eye6.object3D.rotation.y);

    //eye7
    eye7.object3D.rotation.x += rotationSpeed/4;
    console.log(eye7.object3D.rotation.x);

    eye7.object3D.rotation.y += rotationSpeed;
    console.log(eye7.object3D.rotation.y);

    //eye8
    eye8.object3D.rotation.x += rotationSpeed/2;
    console.log(eye8.object3D.rotation.x);

    eye8.object3D.rotation.y += rotationSpeed;
    console.log(eye8.object3D.rotation.y);

    //eye9
    eye9.object3D.rotation.x += rotationSpeed/4;
    console.log(eye9.object3D.rotation.x);

    eye9.object3D.rotation.y += rotationSpeed;
    console.log(eye9.object3D.rotation.y);

    //eye10
    eye10.object3D.rotation.x += rotationSpeed/2;
    console.log(eye10.object3D.rotation.x);

    eye10.object3D.rotation.y += rotationSpeed;
    console.log(eye10.object3D.rotation.y);

    //eye11
    eye11.object3D.rotation.x += rotationSpeed/4;
    console.log(eye11.object3D.rotation.x);

    eye11.object3D.rotation.y += rotationSpeed;
    console.log(eye11.object3D.rotation.y);


    //eye12
    eye12.object3D.rotation.x += rotationSpeed/2;
    console.log(eye12.object3D.rotation.x);

    eye12.object3D.rotation.y += rotationSpeed;
    console.log(eye12.object3D.rotation.y);

    //eye13
    eye13.object3D.rotation.x += rotationSpeed/4;
    console.log(eye13.object3D.rotation.x);

    eye13.object3D.rotation.y += rotationSpeed;
    console.log(eye13.object3D.rotation.y);

    //eye14
    eye14.object3D.rotation.x += rotationSpeed/2;
    console.log(eye14.object3D.rotation.x);

    eye14.object3D.rotation.y += rotationSpeed;
    console.log(eye14.object3D.rotation.y);

    //setTimeout();s
    //sleep();
}

setInterval(spin, 26); //equivalent to 60 fps