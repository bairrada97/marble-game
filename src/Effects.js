import { DepthOfField, EffectComposer, SSR } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer disableNormalPass>
      <DepthOfField focusDistance={0.01} focalLength={0.2} bokehScale={3} />
    </EffectComposer>
  );
}
