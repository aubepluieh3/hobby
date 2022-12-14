# π Hobby

22.11.29 ~

Hobby

<img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=Three.js&logoColor=white"/></a>
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white"/></a>

## πΌ ScreenShot

<img src="https://github.com/aubepluieh3/hobby/blob/c813a3e9217ed95ed279bb50248eb6c48177055f/screenshot/HI.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/445ea0335e09f8717b8aff86cc21ba059e6613c5/screenshot/swim.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/445ea0335e09f8717b8aff86cc21ba059e6613c5/screenshot/basketball.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/445ea0335e09f8717b8aff86cc21ba059e6613c5/screenshot/baseball.JPG" width="500px" hegiht="300px"/>

<img src="https://github.com/aubepluieh3/hobby/blob/c813a3e9217ed95ed279bb50248eb6c48177055f/screenshot/MUSIC.JPG" width="500px" hegiht="300px"/>

## π Study

### Perspective Camera

PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
fov β Camera frustum vertical field of view.
aspect β Camera frustum aspect ratio.
near β Camera frustum near plane.
far β Camera frustum far plane.

### WebGLRenderer

antialias - whether to perform antialiasing. Default is false.

### BoxGeometry

'width', 'height', and 'depth'

### fog

.near : Float
μκ° μ μ©μ μμν  μ΅μ κ±°λ¦¬
νμ± μΉ΄λ©λΌμμ 'near' λ¨μ λ―Έλ§μ λ¬Όμ²΄λ μκ°μ μν₯μ λ°μ§ μμ

Default is 1.

.far : Float
μκ°κ° κ³μ° λ° μ μ©μ μ€μ§νλ μ΅λ κ±°λ¦¬.
νμ± μΉ΄λ©λΌμμ 'far' λ¨μ μ΄μ λ¨μ΄μ§ λ¬Όμ²΄λ μκ°μ μν₯μ λ°μ§ μμ

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

AnimationMixerλ μ₯λ©΄μ μλ νΉμ  μ€λΈμ νΈμ μ λλ©μ΄μ νλ μ΄μ΄

.clipAction (clip : AnimationClip, optionalRoot : Object3D) : AnimationAction
μ λ¬λ°μ ν΄λ¦½μ AnimationActionμ λ¦¬ν΄νλ©°, λ―Ήμμ λ£¨νΈ κ²½λ‘κ° μλ λ€λ₯Έ λ£¨νΈ κ²½λ‘λ₯Ό μ¬μ©

### AnimationClip

AnimationClipμ μ¬νμ© κ°λ₯ν ν€νλ μ νΈλ λͺ¨μμΌλ‘, μ λλ©μ΄μμ λννλ λ¨μ

.findByName ( objectOrClipArray : Object, name : String ) : AnimationClip

Searches for an AnimationClipμ μν κ²μκΈ°λ‘, μ²« νλΌλ―Έν° νΉμ AnimationClips λ°°μ΄, "animations"λΌλ μ΄λ¦μ κ°μ§ mesh, geometry λ°°μ΄λ‘λΆν° μ΄λ¦μ κΈ°λ°μΌλ‘ κ²μ

### Clock

μκ°μ νμνλ κ°μ²΄

.getDelta () : Float
oldTimeμ΄ μ€μ λ μ΄νλ‘λΆν° μ§λ μ΄λ₯Ό κ°μ Έμ€λ©° oldTimeμ νμ¬ μκ°μΌλ‘ μ€μ 
autoStartκ° true μ΄κ³  μκ³κ° λ©μΆ°μλ μνλΌλ©΄, μκ³λ₯Ό μμμν΄

### updateProjectionMatrix

λ³κ²½λ κ°μ μΉ΄λ©λΌμ μ μ©
