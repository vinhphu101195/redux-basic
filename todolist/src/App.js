import React from "react";
import Addtodo from "./pages/Addtodo";
import Footer from "./pages/Footer";
import Todolist from "./pages/Todolist";

export default function TodoApp() {
  return (
    <div>
      <Addtodo />
      <Todolist />
      <Footer />
    </div>
  );
}
