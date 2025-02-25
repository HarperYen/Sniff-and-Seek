import Svg, { Path, G } from "react-native-svg";

function LikeMessage({ size = 54, color = "#B41F24" }) {
  return (
    <Svg width={size} height={(size * 34.72) / 46.02} viewBox="0 0 46.02 34.72">
      <G>
        <Path
          fill={color}
          opacity={0.7}
          d="M41.26,0H4.76C2.13,0,0,2.13,0,4.76v19.28c0,2.63,2.13,4.76,4.76,4.76h13.22l4.15,5.48c.44.59,1.32.59,1.77,0l4.15-5.48h13.22c2.63,0,4.76-2.13,4.76-4.76V4.76c0-2.63-2.13-4.76-4.76-4.76Z"
        />
        <Path
          fill="#fff"
          d="M28.59,10.78h0c-1.28-1.28-3.36-1.28-4.64,0l-.93.93-.93-.93c-1.28-1.28-3.36-1.28-4.64,0-1.28,1.28-1.28,3.36,0,4.64l.93.93,4.63,4.63s0,0,0,0c0,0,0,0,0,0l4.63-4.63.93-.93c1.28-1.28,1.28-3.36,0-4.64Z"
        />
      </G>
    </Svg>
  );
}

export default LikeMessage;
