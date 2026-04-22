import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

function ResizeHandler() {
  const { gl, camera } = useThree();

  useEffect(() => {
    const onFullscreenChange = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      gl.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, [gl, camera]);

  return null;
}
export default ResizeHandler;