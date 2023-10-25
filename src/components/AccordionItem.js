export default function AccordionItem({
  title,
  num,
  curOpen,
  onSetCurOpen,
  children,
}) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onSetCurOpen(isOpen ? null : num);
  }

  return (
    <div onClick={handleToggle} className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
