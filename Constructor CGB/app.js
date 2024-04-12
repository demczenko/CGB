import { initApp } from "./main/initApp.js";

initApp({
  startId: "22555",
  optimizeImg: true,
  token: "",
  tableQueries: [
    {
      tableId: "1u96Mv2nodKgtRQ6QaDA6vSCdoJWfb6MCKWrHcMDjiuc",
      tableName: "Arkusz8",
      tableRange: "A1:E20?majorDimension=COLUMNS",
      name: "cgb",
      tableColumns: false,
    },
    // {
    //   tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
    //   tableName: "Categories",
    //   tableRange: "A:JW?majorDimension=COLUMNS",
    //   name: "categories",
    //   tableColumns: false,
    // }
  ],
  tableColumns: {
    UK: "F",
    PL: "H",
    DE: "J",
    AT: "L",
    CHDE: "N",
    NL: "P",
    FR: "R",
    CHFR: "T",
    ES: "V",
    PT: "X",
    IT: "Z",
    DK: "AB",
    NO: "AD",
    FI: "AF",
    SE: "AH",
    CZ: "AJ",
    SK: "AL",
    HU: "AN",
  },
  newsletterLinks: [
    {
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
    },
    {
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/2024/240104gif.gif",
    },
    {
      value: (origin, country) => origin + "content/lp24-03-22",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240322b.png`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-21",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240321b.png`,
    },
  ],
  landingLinks: [
    {
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
    },
    {
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/2024/240104gif.gif",
    },
    {
      value: (origin, country) => origin + "content/lp24-03-22",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240322b.png`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-21",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240321b.png`,
    },
  ],
});
