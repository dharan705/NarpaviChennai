import "./Design2.scss";

export default function GeneratingLoader() {
  const text = "Narpavi Research Institute";

  return (
    <div className="loader-wrapper">
      {text.split("").map((char, index) => (
        <span className="loader-letter" key={index}>
          {char}
        </span>
      ))}

      <div className="loader" />
    </div>
  );
}
