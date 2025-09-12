import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test("add()", () => {
  assertEquals(add(3, 3), 6);
});
