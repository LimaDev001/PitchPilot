import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";


function AITyping() {

  const { darkMode } = useTheme();


  const messages = [
    "AI is analyzing your startup idea...",
    "Finding market opportunities...",
    "Generating your investor pitch 🚀"
  ];


  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);



  useEffect(() => {

    let current = messages[index];
    let position = 0;



    const timer = setInterval(() => {


      setText(current.slice(0, position));


      position++;



      if (position > current.length) {

        clearInterval(timer);


        setTimeout(() => {

          setIndex((prev) => (prev + 1) % messages.length);

          setText("");

        }, 1500);

      }


    }, 50);




    return () => clearInterval(timer);



  }, [index]);







  return (

    <p
      className={`
        font-medium
        mt-1
        transition-colors
        duration-300

        ${
          darkMode
          ? "text-white"
          : "text-[#0F172A]"
        }

      `}
    >

      {text}

      <span className="animate-pulse">
        |
      </span>


    </p>

  );

}


export default AITyping;