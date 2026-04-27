import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export function ClipPlane({ object }) {
  const plane = useRef(new THREE.Plane(new THREE.Vector3(1, 0, 0), 0))
  const direction = useRef(1)
  const position = useRef(-5)

  useEffect(() => {
    if (!object) return

    object.traverse((child) => {
      if (child.isMesh) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material]

        materials.forEach((mat, i) => {
          // clone to avoid shared material bugs
          const cloned = mat.clone()
          cloned.clippingPlanes = [plane.current]
          cloned.clipShadows = true
          cloned.needsUpdate = true

          materials[i] = cloned
        })

        child.material = Array.isArray(child.material)
          ? materials
          : materials[0]
      }
    })
  }, [object])

  useFrame((_, delta) => {
    position.current += delta * 4 * direction.current

    if (position.current > 40 || position.current < -40) {
      direction.current *= -1
    }

    plane.current.constant = position.current
  })

  return <primitive object={object} scale={0.001} />
}