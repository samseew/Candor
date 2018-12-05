import React from "react";
import Login from "../components/LoggedOut/Login";

function sum(a, b) {
  return a + b;
}
test("adds 1 + 2 and equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});
