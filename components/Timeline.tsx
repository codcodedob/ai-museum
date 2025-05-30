import { Chrono } from "react-chrono";

const items = [
  {
    title: "1950s",
    cardTitle: "Alan Turing and the Turing Test",
    cardSubtitle: "The question: Can machines think?",
    cardDetailedText: "Alan Turing formalizes the idea of a machine imitating human intelligence."
  },
  {
    title: "1966",
    cardTitle: "ELIZA is Created",
    cardSubtitle: "Joseph Weizenbaum",
    cardDetailedText: "The first chatbot simulating a Rogerian psychotherapist is born."
  },
  {
    title: "2012",
    cardTitle: "Deep Learning Breakthrough",
    cardSubtitle: "AlexNet wins ImageNet",
    cardDetailedText: "Deep neural networks begin to outperform classic algorithms in computer vision."
  }
];

export default function Timeline() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" theme={{ primary: "#00f5d4", secondary: "#1e1e2f" }} />
    </div>
  );
}
