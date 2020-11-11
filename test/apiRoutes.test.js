const axios = require("axios");

describe("API Routes", () => {
  // Create
  // POST /api/todos
  describe("POST /api/todos", () => {
    // it should return a 200 status
    it("should return a 200 status", async () => {
      // arrange/act
      const newTodo = {
        text: "Buy CDs",
      };
      const { status } = await axios.post("/api/todos", newTodo);
      console.log(status);
      // assert
      expect(status).toBe(200);
    });
    // it should return the todo that was added
    it("should return the todo that was added", async () => {
      // arrange/act
      const newTodo = {
        text: "Buy CDs",
      };
      const { data } = await axios.post("/api/todos", newTodo);
      const isObject = typeof data === "object";

      // assert
      expect(isObject).toBe(true);
    });
    // it should receive an object with a text property
  });

  // Read
  // GET /api/todos
  // GET /api/todos/:id
});
