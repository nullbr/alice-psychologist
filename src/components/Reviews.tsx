import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    const div = document.querySelector("#reviews");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://static.elfsight.com/platform/platform.js"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    script.setAttribute("data-use-service-core", "");
    div?.appendChild(script);

    return () => {
      div?.removeChild(script);
    };
  }, []);

  return (
    <section id="reviews" className="section-offset">
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <h2 className="text-center mb-6">Depoimentos</h2>

        <div className="elfsight-app-1363a465-8e11-4be6-bc94-71914865b958"></div>
      </div>
    </section>
  );
};

export default Reviews;
