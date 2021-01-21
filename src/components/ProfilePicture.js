import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ProfilePicture = (props) => {
  const rendererRef = useRef(null)

  // Threejs scene setup
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(400, 400)

  // Create objects
  const geometry = new THREE.CylinderGeometry(1, 1, 3)
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  const edges = new THREE.EdgesGeometry(geometry)
  const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }))
  scene.add(line)
  camera.position.z = 5

  const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.001
    cube.rotation.y += 0.001
    line.rotation.x += 0.001
    line.rotation.y += 0.001
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
