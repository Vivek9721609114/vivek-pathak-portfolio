import React from "react";
import "./index.css";
import { MdOutlineMessage } from "react-icons/md";

const BlogCard = () => {
  return (
    <>
      <div className="col-md-4 d-flex">
        <div className="blog-content">
          <div className="blog-text mt-3 d-flex">
            <div className="d-flex align-items-center mb-3 meta">
              <p className="mb-0">
                <span className="mr-2">June 21, 2019</span>
                <a href="#" className="mr-2">
                  Admin
                </a>
                <a href="#" className="mets-chat">
                  <span>
                    <MdOutlineMessage />
                  </span>
                  <span> 3</span>
                </a>
              </p>
            </div>
          </div>
          <h3 className="heading">
            <a href="#">Why Lead Generation is Key for Business Growth</a>
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
