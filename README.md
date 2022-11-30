# 😍 Hobby

22.11.29 ~

Hobby

<img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=Three.js&logoColor=white"/></a>
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white"/></a>

## 🖼 ScreenShot

<img src="https://github.com/aubepluieh3/hobby/blob/c813a3e9217ed95ed279bb50248eb6c48177055f/screenshot/HI.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/445ea0335e09f8717b8aff86cc21ba059e6613c5/screenshot/swim.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/445ea0335e09f8717b8aff86cc21ba059e6613c5/screenshot/basketball.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/445ea0335e09f8717b8aff86cc21ba059e6613c5/screenshot/baseball.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/c813a3e9217ed95ed279bb50248eb6c48177055f/screenshot/MUSIC.JPG" width="500px" hegiht="300px"/>

## 📚 Study

### Perspective Camera

PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
fov — Camera frustum vertical field of view.
aspect — Camera frustum aspect ratio.
near — Camera frustum near plane.
far — Camera frustum far plane.

### WebGLRenderer

antialias - whether to perform antialiasing. Default is false.

### BoxGeometry

'width', 'height', and 'depth'

### fog

.near : Float
안개 적용을 시작할 최소 거리
활성 카메라에서 'near' 단위 미만의 물체는 안개의 영향을 받지 않음

Default is 1.

.far : Float
안개가 계산 및 적용을 중지하는 최대 거리.
활성 카메라에서 'far' 단위 이상 떨어진 물체는 안개의 영향을 받지 않음

Default is 1000.

.color : Color
Fog color. Example: If set to black, far away objects will be rendered black.

### FBXLoader

```
const fbxLoader = new FBXLoader()
fbxLoader.load(
    'models/name.fbx',
    (object) => {
        // object.traverse(function (child) {
        //     if ((child as THREE.Mesh).isMesh) {
        //         // (child as THREE.Mesh).material = material
        //         if ((child as THREE.Mesh).material) {
        //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
        //         }
        //     }
        // })
        // object.scale.set(.01, .01, .01)
        scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)
```

### AnimationMixer( rootObject : Object3D )

AnimationMixer는 장면에 있는 특정 오브젝트의 애니메이션 플레이어

.clipAction (clip : AnimationClip, optionalRoot : Object3D) : AnimationAction
전달받은 클립의 AnimationAction을 리턴하며, 믹서의 루트 경로가 아닌 다른 루트 경로를 사용

### AnimationClip

AnimationClip은 재활용 가능한 키프레임 트랙 모음으로, 애니메이션을 대표하는 단위

.findByName ( objectOrClipArray : Object, name : String ) : AnimationClip

Searches for an AnimationClip을 위한 검색기로, 첫 파라미터 혹은 AnimationClips 배열, "animations"라는 이름을 가진 mesh, geometry 배열로부터 이름을 기반으로 검색

### Clock

시간을 파악하는 객체

.getDelta () : Float
oldTime이 설정된 이후로부터 지난 초를 가져오며 oldTime을 현재 시간으로 설정
autoStart가 true 이고 시계가 멈춰있는 상태라면, 시계를 시작시킴

### updateProjectionMatrix

변경된 값을 카메라에 적용
