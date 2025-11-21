import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

interface windowSize {
  width: number;
  /* height: number; */
}

interface confettiProps {
  onConfettiComplete?: () => void;
}

export default ({ onConfettiComplete }: confettiProps) => {
  const { width }: windowSize = useWindowSize();
  return (
    <Confetti
      width={width}
      height={document.documentElement.scrollHeight}
      colors={["#441d81", "#ec315a", "#F2994A", "#F2C94C"]}
      tweenDuration={3000}
      numberOfPieces={300}
      recycle={false}
      onConfettiComplete={onConfettiComplete}
    />
  );
};
