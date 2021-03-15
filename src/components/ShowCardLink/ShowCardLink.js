import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ShowCardLink(props) {
  const { show, children } = props;
  let match = useRouteMatch();

  return <Link to={`${match.url}/${show.id}`}>{children}</Link>;
}

export default ShowCardLink;
