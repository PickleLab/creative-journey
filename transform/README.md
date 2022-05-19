# Transform Objects

## Useful Functions

A quick guide on how to transform objects in a scene

To help you visualize object transformation, you can use the AxesHelper.

```js
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
```


### Position

The position is an instance of a [Vector3](https://threejs.org/docs/#api/en/math/Vector3) Object. Here's a small set of things you can do with position.

#### Set position
```js
object.position.set(x, y, z);
```

#### Get vector lenght
```js
object.position.length()
```

#### Get distance to another Vector
```js
object.position.distanceTo(vector)
```
#### Normalize values
```js
object.position.normalize()
```

### Scale
Scale is also a Vector3 Object, and you can use it to change on the desired axis

#### Set Scale

```js
object.scale.x = 1
object.scale.y = 0.5
object.scale.z = 0.75 
```

You can also use a `set` function to do that
```js
object.scale.set(x, y, z)
```

### Rotation
Unlike the two previos properties, rotation is a [Euler](https://threejs.org/docs/index.html#api/en/math/Euler), you can use float values for the axes, as it is expressed in radians.

#### Setting rotation

```js
object.rotation.x = 1.5
object.rotation.y = 0.25
object.rotation.z = 0.172 
```

You can also use a `set` function to do that
```js
object.rotation.set(x, y, z)
```

#### Using Math.PI

As it is expressed in radians, you can use Math.PI to define your values, like:

```js
object.rotation.x = Math.PI * 0.25
object.rotation.y = Math.PI * 0.25
```

#### Rotation Order

By default, the rotation order is `XYZ`, respectively. You can change it to avoid gimbal lock and other rotation issues, like:

```js
object.rotation.reorder('YXZ')
```


### Camera
Object3D has a `lookAt` method, and you can set an object position as parameter to change the camera focus, like:

```js
camera.lookAt(new THREE.Vector3(0, - 1, 0))
```

or

```js
camera.lookAt(cube.position)
```