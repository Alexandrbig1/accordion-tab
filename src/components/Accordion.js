import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map(({ title, text }, idx) => (
        <AccordionItem
          onSetCurOpen={setCurOpen}
          curOpen={curOpen}
          title={title}
          num={idx}
          key={idx}
        >
          {text}
        </AccordionItem>
      ))}
    </div>
  );
}
