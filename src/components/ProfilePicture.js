import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ProfilePicture = (props) => {
  const rendererRef = useRef(null)

  // Threejs scene setup
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })
  renderer.setSize(400, 400)

  // Create objects
  const geometry = new THREE.CylinderGeometry(1.25, 1.25, 3, 100)
  const texture = new THREE.TextureLoader().load('https://s.gravatar.com/avatar/558cb4dd16019bf6123d241ad5d6ee56?s=512')
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(3, 1)
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  camera.position.z = 5
  cube.rotation.z += 0.05

  const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.y += 0.005
    renderer.render(scene, camera)
  }

  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.appendChild(renderer.domElement)
    }
    animate()
  }, [])

  return (
    <div ref={rendererRef}></div>
  )
}

export default ProfilePicture
