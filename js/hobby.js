import * as THREE from "https://unpkg.com/three@0.108.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.108.0/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "https://unpkg.com/three@0.108.0/examples/jsm/loaders/FBXLoader.js";

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let scene, camera, renderer;
let controls;

let model = new THREE.Object3D();
let mixers = [];

const init = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#eee"); //배경 컬러
  camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
  camera.position.set(0, 40, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;

  // document.body.appendChild(renderer.domElement);
  document.querySelector("#canvasWrap").appendChild(renderer.domElement);

  //카메라 컨트롤
  // controls = new OrbitControls(camera, renderer.domElement);

  //바닥
  const geometry = new THREE.BoxGeometry(5000, 1, 5000);
  const material = new THREE.MeshPhongMaterial({
    color: 0xeeeeee,
  });
  const boxMesh = new THREE.Mesh(geometry, material);
  boxMesh.position.set(0, 0, 0);
  boxMesh.receiveShadow = true;
  scene.add(boxMesh);

  {
    //조명 넣기
    var light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
    light.position.set(100, 100, 100);
    scene.add(light);
  }
  {
    //조명
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.PointLight(color, intensity);
    //light.castShadow = true;

    light.position.set(140, 360, 150);

    // light.shadow.mapSize.width = 1024;
    // light.shadow.mapSize.height = 1024;
    // light.shadow.radius = 10;

    scene.add(light);
  }
  {
    //안개
    const near = 1;
    const far = 250;
    const color = "#eeeeee";
    scene.fog = new THREE.Fog(color, near, far);
  }

  fbxLoadFunc("./model/standing.FBX", "mixamo.com", 2, 0, -20);
  fbxLoadFunc("./model/Swimming.FBX", "mixamo.com", 12, 0, -250);
  fbxLoadFunc("./model/Dribble.FBX", "mixamo.com", 12, 0, -400);
  fbxLoadFunc("./model/Baseball Pitching.FBX", "mixamo.com", 12, 0, -580);
  fbxLoadFunc("./model/Listening To Music.FBX", "mixamo.com", 12, 0, -750);
};

const fbxLoadFunc = (modelName, animationName, ...pos) => {
  const fbxLoader = new FBXLoader();
  fbxLoader.load(
    modelName,
    (object) => {
      // console.log(object);

      object.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      //애니메이션
      if (object.animations != undefined) {
        object.mixer = new THREE.AnimationMixer(object);
        const clips = object.animations;
        // console.log(clips);

        mixers.push(object.mixer);
        // console.log(mixers.length);

        if (mixers.length > 0) {
          // console.log(object.animations);
          const clip = THREE.AnimationClip.findByName(clips, animationName);
          let action = object.mixer.clipAction(clip);
          // var action = object.mixer.clipAction(object.animations[0]);
          action.play();
        }
      }

      //크기 조절
      let scaleNum = 0.3;
      object.scale.set(scaleNum, scaleNum, scaleNum);

      object.position.set(...pos);
      model.add(object);
      scene.add(model);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
};

const clock = new THREE.Clock();

const animate = () => {
  //controls.update();
  const delta = clock.getDelta();
  // console.log(delta);
  for (let i = 0; i < mixers.length; i++) {
    mixers[i].update(delta);
  }

  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

const stageResize = () => {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;

  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  //카메라 비율을 화면 비율에 맞춘다
};

init();
animate();
window.addEventListener("resize", stageResize);

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const content = document.getElementById("content");

let moveNum = 0;
let count = 0;

prevBtn.addEventListener("click", () => {
  if (camera.position.z == -150) {
    count = 0;
    moveNum = 0;
  } else if (camera.position.z == -330) {
    count--;
    moveNum = -150;
  } else if (camera.position.z == -500) {
    count--;
    moveNum = -330;
  } else if (camera.position.z == -730) {
    count--;
    moveNum = -500;
  }

  gsap.to(camera.position, {
    duration: 1.8,
    delay: 0,
    z: moveNum,
    ease: "Power4.easeInOut",
  });

  textChange();
});

nextBtn.addEventListener("click", () => {
  if (camera.position.z == 0) {
    count++;
    moveNum = -150;
  } else if (camera.position.z == -150) {
    count++;
    moveNum = -330;
  } else if (camera.position.z == -330) {
    count++;
    moveNum = -500;
  } else if (camera.position.z == -500) {
    count++;
    moveNum = -730;
  } else {
    moveNum = 0;
    count = 0;
  }

  //트윈맥스 카메라 이동
  gsap.to(camera.position, {
    duration: 1.8,
    delay: 0,
    z: moveNum,
    ease: "Power4.easeInOut",
  });

  //   gsap.to(camera, {
  //     duration: 1.8,
  //     delay: 0,
  //     fov: fov,
  //     ease: "Power4.easeInOut",
  //   });

  textChange();
});

//글자 변경
function textChange() {
  if (count == 0) {
    title.innerText = "Hi I'm SOO";
    content.innerText =
      "I will introduce you to my hobbies to make me live forever!";
  } else if (count == 1) {
    title.innerText = "Swimmming";
    content.innerText =
      "I liked swimming since I was young. I start my day by swimming every morning. It makes me healthier and gives me the strength to start my day feeling good. If you are looking for an interesting sport, I strongly recommend swimming! ";
  } else if (count == 2) {
    title.innerText = "BasketBall";
    content.innerText =
      "I love watching basketball games. After watching the game at the stadium, I realize the importance of every minute and every second again. Also, gain strength that I can do anything. My favorite player is Park Jihyun. She's the same age as me, and she's a really cool girl.";
  } else if (count == 3) {
    title.innerText = "BaseBall";
    content.innerText =
      "I started watching it because my friend is a big fan of baseball. It hasn't been long since I got to know the charm of baseball, but watching games in the stadium relieves stress and is fun! Especially, the food at the baseball stadium is delicious!";
  } else if (count == 4) {
    title.innerText = "Listening to Music";
    content.innerText =
      "Music is My life. It is indispensable to my life. I like music that I feel is good to listen to regardless of genre. But especially I like IU's songs, and I am a big fan of her. Recently, I went to her concert and I was really touched.";
  }

  gsap.from("#text", {
    duration: 1.8,
    delay: 0.35,
    y: 60,
    alpha: 0,
    ease: "Power2.easeInOut",
  });
}
