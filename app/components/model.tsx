import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/human-model/scene.gltf");
  return <primitive object={scene} />;
};

export default Model;

//global model