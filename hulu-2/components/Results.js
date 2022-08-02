import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    // tailwind for supporting all screens sizes
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-3 3xl:flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
