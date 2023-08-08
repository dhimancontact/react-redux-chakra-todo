import React from "react";
import Title from "./Title";
import { tourList } from "../data";
import Tour from "./Tour";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        {tourList.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
