import { useLocation } from "react-router-dom";

export default function NewsDetails() {
  const { state } = useLocation();

  if (!state) return <h1>News not found</h1>;

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">
      <img
        src={state.image_url}
        className="w-full h-[450px] object-cover rounded"
        alt={state.title}
      />

      <h1 className="text-4xl font-bold mt-6">
        {state.title}
      </h1>

      <p className="mt-5">
        {state.description}
      </p>

      <a
        href={state.link}
        target="_blank"
        rel="noreferrer"
        className="bg-red-600 text-white px-5 py-3 rounded mt-6 inline-block"
      >
        Original Source
      </a>
    </div>
  );
}