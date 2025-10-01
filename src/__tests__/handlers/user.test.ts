import { mockRequest, mockResponse } from "../../__mocks__";
import { getUsers } from "../../handlers/user";

describe("getUsers", () => {
  it("should return and array of users", () => {
    getUsers(mockRequest, mockResponse);
  });
});
