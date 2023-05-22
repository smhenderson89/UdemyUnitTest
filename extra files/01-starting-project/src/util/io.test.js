import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

// Creates a temporary function to test the functionality without having to create the text input
vi.mock("fs");

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]; // returns the last index of the file name
      },
    },
  };
});

it("should execute the writeFile Method", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled; // Check if function is called
  expect(fs.writeFile).toBeCalled(testFileName, testData);
});

it("should execute the writeFile Method", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled; // Check if function is called
  // expect(fs.writeFile).toBeCalled(testFileName, testData);
});

it("should return a promise that resolves to no value if called correclty", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled; // Check if function is called
  // expect(fs.writeFile).toBeCalled(testFileName, testData);
});