import React from "react";

import AddAuthor from "../components/AddAuthor";
import AuthorList from "../components/AuthorList";
import Todos from "../components/CreateAuthor";

const Index = () => (
  <div>
    <h1>My Authors</h1>
    <AddAuthor />
    <AuthorList />
    <Todos />
  </div>
);

export default Index;