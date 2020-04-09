import { GreetingPipe } from "./greeting.pipe";

describe("GreetingPipe", () => {
  it("create an instance", () => {
    const pipe = new GreetingPipe();
    expect(pipe).toBeTruthy();
  });

  it("should return prepend Hi with Value", () => {
    const pipe = new GreetingPipe();
    expect(pipe.transform("Test")).toBe("Hi Test");
  });
  it("should return empty if value is empty", () => {
    const pipe = new GreetingPipe();
    expect(pipe.transform("")).toBe("");
  });
});
