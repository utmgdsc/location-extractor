const { extractLocation } = require("../src/controller/root");

describe("root", () => {
  test("success: extractLocation", () => {
    const req = {
      headers: {
        location: "test",
      },
    };
    expect(extractLocation(req)).toBe("test");
  });

  test("failure: extractLocation", () => {
    const req = {
      headers: {},
    };
    expect(() => extractLocation(req)).toThrowError();
  });
});
