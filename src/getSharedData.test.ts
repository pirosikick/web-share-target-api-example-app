import { URL } from "url";
import qs from "querystring";

import getSharedData from "./getSharedData";

const BASE_URL = "http://example.com/share-target/";
const EXAMPLE_URL = "http://shared.example.com/";

test.each([
  {
    search: "",
    expected: {
      title: "",
      text: "",
      url: ""
    }
  },
  // from Native App
  {
    search: qs.stringify({
      text: EXAMPLE_URL
    }),
    expected: {
      text: "",
      title: "",
      url: EXAMPLE_URL
    }
  },
  // from Web Share API
  {
    search: qs.stringify({
      title: "DUMMY TITLE",
      text: `DUMMY TEXT ${EXAMPLE_URL}`
    }),
    expected: {
      text: "DUMMY TEXT",
      title: "DUMMY TITLE",
      url: EXAMPLE_URL
    }
  }
])("case %#", ({ search, expected }) => {
  const actual = getSharedData(new URL(`${BASE_URL}?${search}`));
  expect(actual).toEqual(expected);
});
