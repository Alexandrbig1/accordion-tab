import faqs from "./faqs.json";
import Accordion from "./Accordion";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
