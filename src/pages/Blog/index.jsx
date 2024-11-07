import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import BlogCard from "../../widgets/BlogCard";

const Blog = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="blog-section">
        <div className="container">
          <HeadinContent
            h1Heading="Blog"
            h2Heading="Our Blog"
            paraName="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <div className="row d-flex">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
});

export default Blog;
