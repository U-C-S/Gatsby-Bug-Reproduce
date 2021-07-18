import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <p>
        Sorry<span role="img">😔</span> we couldn’t find what you were looking
        for.
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
