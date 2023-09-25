import React from "react";
import { Link } from "react-router-dom";

const PublicPage = () => {
  return (
    <div>
      <h2>This is a public page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis iste
        voluptatem molestiae a adipisci impedit earum molestias optio id
        corrupti non quo nostrum, quidem dolor labore. Saepe animi ad debitis
        sit cum nihil voluptas pariatur sed atque fuga autem, fugit vitae nam?
        Est fuga doloremque, commodi voluptates voluptatum dignissimos?
      </p>
      <Link to="/private">Click here to visit private page!</Link>
    </div>
  );
};

export default PublicPage;
