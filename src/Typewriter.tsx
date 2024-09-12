import  useTypewriter  from "./useTypewriter";
import "./Typewriter.css";

interface TypewriterProps {
  text: string;
  speed: number;
}

const Typewriter = ({ text, speed }: TypewriterProps) => {
    const displayText = useTypewriter(text, speed);
  
    return <p className="typewriter">{displayText}</p>;
  };
  
  export default Typewriter;