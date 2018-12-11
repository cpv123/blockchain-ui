import buildUrl from "../buildUrl";
import { baseUrl } from "../buildUrl";

describe('The buildUrl function', () => {

    it('should return the correct URL given a path', () => {
        const path = "test/path";
        expect(buildUrl(path)).toBe("http://0.0.0.0:5000/test/path");
    });

    it('should return the base URL if the path is an empty string', () => {
        expect(buildUrl("")).toBe(baseUrl);
    });
})