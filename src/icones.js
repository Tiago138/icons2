const icones = [
  {
    col1: "account-login",
    col2: "e000",
  },
  {
    col1: "account-logout",
    col2: "e001",
  },
  {
    col1: "action-redo",
    col2: "e002",
  },
  {
    col1: "action-undo",
    col2: "e003",
  },
  {
    col1: "align-center",
    col2: "e004",
  },
  {
    col1: "align-left",
    col2: "e005",
  },
  {
    col1: "align-right",
    col2: "e006",
  },
  {
    col1: "aperture",
    col2: "e007",
  },
  {
    col1: "arrow-bottom",
    col2: "e008",
  },
  {
    col1: "arrow-circle-bottom",
    col2: "e009",
  },
  {
    col1: "arrow-circle-left",
    col2: "e00a",
  },
  {
    col1: "arrow-circle-right",
    col2: "e00b",
  },
  {
    col1: "arrow-circle-top",
    col2: "e00c",
  },
  {
    col1: "arrow-left",
    col2: "e00d",
  },
  {
    col1: "arrow-right",
    col2: "e00e",
  },
  {
    col1: "arrow-thick-bottom",
    col2: "e00f",
  },
  {
    col1: "arrow-thick-left",
    col2: "e010",
  },
  {
    col1: "arrow-thick-right",
    col2: "e011",
  },
  {
    col1: "arrow-thick-top",
    col2: "e012",
  },
  {
    col1: "arrow-top",
    col2: "e013",
  },
  {
    col1: "audio-spectrum",
    col2: "e014",
  },
  {
    col1: "audio",
    col2: "e015",
  },
  {
    col1: "badge",
    col2: "e016",
  },
  {
    col1: "ban",
    col2: "e017",
  },
  {
    col1: "bar-chart",
    col2: "e018",
  },
  {
    col1: "basket",
    col2: "e019",
  },
  {
    col1: "battery-empty",
    col2: "e01a",
  },
  {
    col1: "battery-full",
    col2: "e01b",
  },
  {
    col1: "beaker",
    col2: "e01c",
  },
  {
    col1: "bell",
    col2: "e01d",
  },
  {
    col1: "bluetooth",
    col2: "e01e",
  },
  {
    col1: "bold",
    col2: "e01f",
  },
  {
    col1: "bolt",
    col2: "e020",
  },
  {
    col1: "book",
    col2: "e021",
  },
  {
    col1: "bookmark",
    col2: "e022",
  },
  {
    col1: "box",
    col2: "e023",
  },
  {
    col1: "briefcase",
    col2: "e024",
  },
  {
    col1: "british-pound",
    col2: "e025",
  },
  {
    col1: "browser",
    col2: "e026",
  },
  {
    col1: "brush",
    col2: "e027",
  },
  {
    col1: "bug",
    col2: "e028",
  },
  {
    col1: "bullhorn",
    col2: "e029",
  },
  {
    col1: "calculator",
    col2: "e02a",
  },
  {
    col1: "calendar",
    col2: "e02b",
  },
  {
    col1: "camera-slr",
    col2: "e02c",
  },
  {
    col1: "caret-bottom",
    col2: "e02d",
  },
  {
    col1: "caret-left",
    col2: "e02e",
  },
  {
    col1: "caret-right",
    col2: "e02f",
  },
  {
    col1: "caret-top",
    col2: "e030",
  },
  {
    col1: "cart",
    col2: "e031",
  },
  {
    col1: "chat",
    col2: "e032",
  },
  {
    col1: "check",
    col2: "e033",
  },
  {
    col1: "chevron-bottom",
    col2: "e034",
  },
  {
    col1: "chevron-left",
    col2: "e035",
  },
  {
    col1: "chevron-right",
    col2: "e036",
  },
  {
    col1: "chevron-top",
    col2: "e037",
  },
  {
    col1: "circle-check",
    col2: "e038",
  },
  {
    col1: "circle-x",
    col2: "e039",
  },
  {
    col1: "clipboard",
    col2: "e03a",
  },
  {
    col1: "clock",
    col2: "e03b",
  },
  {
    col1: "cloud-download",
    col2: "e03c",
  },
  {
    col1: "cloud-upload",
    col2: "e03d",
  },
  {
    col1: "cloud",
    col2: "e03e",
  },
  {
    col1: "cloudy",
    col2: "e03f",
  },
  {
    col1: "code",
    col2: "e040",
  },
  {
    col1: "cog",
    col2: "e041",
  },
  {
    col1: "collapse-down",
    col2: "e042",
  },
  {
    col1: "collapse-left",
    col2: "e043",
  },
  {
    col1: "collapse-right",
    col2: "e044",
  },
  {
    col1: "collapse-up",
    col2: "e045",
  },
  {
    col1: "command",
    col2: "e046",
  },
  {
    col1: "comment-square",
    col2: "e047",
  },
  {
    col1: "compass",
    col2: "e048",
  },
  {
    col1: "contrast",
    col2: "e049",
  },
  {
    col1: "copywriting",
    col2: "e04a",
  },
  {
    col1: "credit-card",
    col2: "e04b",
  },
  {
    col1: "crop",
    col2: "e04c",
  },
  {
    col1: "dashboard",
    col2: "e04d",
  },
  {
    col1: "data-transfer-download",
    col2: "e04e",
  },
  {
    col1: "data-transfer-upload",
    col2: "e04f",
  },
  {
    col1: "delete",
    col2: "e050",
  },
  {
    col1: "dial",
    col2: "e051",
  },
  {
    col1: "document",
    col2: "e052",
  },
  {
    col1: "dollar",
    col2: "e053",
  },
  {
    col1: "double-quote-sans-left",
    col2: "e054",
  },
  {
    col1: "double-quote-sans-right",
    col2: "e055",
  },
  {
    col1: "double-quote-serif-left",
    col2: "e056",
  },
  {
    col1: "double-quote-serif-right",
    col2: "e057",
  },
  {
    col1: "droplet",
    col2: "e058",
  },
  {
    col1: "eject",
    col2: "e059",
  },
  {
    col1: "elevator",
    col2: "e05a",
  },
  {
    col1: "ellipses",
    col2: "e05b",
  },
  {
    col1: "envelope-closed",
    col2: "e05c",
  },
  {
    col1: "envelope-open",
    col2: "e05d",
  },
  {
    col1: "euro",
    col2: "e05e",
  },
  {
    col1: "excerpt",
    col2: "e05f",
  },
  {
    col1: "expand-down",
    col2: "e060",
  },
  {
    col1: "expand-left",
    col2: "e061",
  },
  {
    col1: "expand-right",
    col2: "e062",
  },
  {
    col1: "expand-up",
    col2: "e063",
  },
  {
    col1: "external-link",
    col2: "e064",
  },
  {
    col1: "eye",
    col2: "e065",
  },
  {
    col1: "eyedropper",
    col2: "e066",
  },
  {
    col1: "file",
    col2: "e067",
  },
  {
    col1: "fire",
    col2: "e068",
  },
  {
    col1: "flag",
    col2: "e069",
  },
  {
    col1: "flash",
    col2: "e06a",
  },
  {
    col1: "folder",
    col2: "e06b",
  },
  {
    col1: "fork",
    col2: "e06c",
  },
  {
    col1: "fullscreen-enter",
    col2: "e06d",
  },
  {
    col1: "fullscreen-exit",
    col2: "e06e",
  },
  {
    col1: "globe",
    col2: "e06f",
  },
  {
    col1: "graph",
    col2: "e070",
  },
  {
    col1: "grid-four-up",
    col2: "e071",
  },
  {
    col1: "grid-three-up",
    col2: "e072",
  },
  {
    col1: "grid-two-up",
    col2: "e073",
  },
  {
    col1: "hard-drive",
    col2: "e074",
  },
  {
    col1: "header",
    col2: "e075",
  },
  {
    col1: "headphones",
    col2: "e076",
  },
  {
    col1: "heart",
    col2: "e077",
  },
  {
    col1: "home",
    col2: "e078",
  },
  {
    col1: "image",
    col2: "e079",
  },
  {
    col1: "inbox",
    col2: "e07a",
  },
  {
    col1: "infinity",
    col2: "e07b",
  },
  {
    col1: "info",
    col2: "e07c",
  },
  {
    col1: "italic",
    col2: "e07d",
  },
  {
    col1: "justify-center",
    col2: "e07e",
  },
  {
    col1: "justify-left",
    col2: "e07f",
  },
  {
    col1: "justify-right",
    col2: "e080",
  },
  {
    col1: "key",
    col2: "e081",
  },
  {
    col1: "laptop",
    col2: "e082",
  },
  {
    col1: "layers",
    col2: "e083",
  },
  {
    col1: "lightbulb",
    col2: "e084",
  },
  {
    col1: "link-broken",
    col2: "e085",
  },
  {
    col1: "link-intact",
    col2: "e086",
  },
  {
    col1: "list-rich",
    col2: "e087",
  },
  {
    col1: "list",
    col2: "e088",
  },
  {
    col1: "location",
    col2: "e089",
  },
  {
    col1: "lock-locked",
    col2: "e08a",
  },
  {
    col1: "lock-unlocked",
    col2: "e08b",
  },
  {
    col1: "loop-circular",
    col2: "e08c",
  },
  {
    col1: "loop-square",
    col2: "e08d",
  },
  {
    col1: "loop",
    col2: "e08e",
  },
  {
    col1: "magnifying-glass",
    col2: "e08f",
  },
  {
    col1: "map-marker",
    col2: "e090",
  },
  {
    col1: "map",
    col2: "e091",
  },
  {
    col1: "media-pause",
    col2: "e092",
  },
  {
    col1: "media-play",
    col2: "e093",
  },
  {
    col1: "media-record",
    col2: "e094",
  },
  {
    col1: "media-skip-backward",
    col2: "e095",
  },
  {
    col1: "media-skip-forward",
    col2: "e096",
  },
  {
    col1: "media-step-backward",
    col2: "e097",
  },
  {
    col1: "media-step-forward",
    col2: "e098",
  },
  {
    col1: "media-stop",
    col2: "e099",
  },
  {
    col1: "medical-cross",
    col2: "e09a",
  },
  {
    col1: "menu",
    col2: "e09b",
  },
  {
    col1: "microphone",
    col2: "e09c",
  },
  {
    col1: "minus",
    col2: "e09d",
  },
  {
    col1: "monitor",
    col2: "e09e",
  },
  {
    col1: "moon",
    col2: "e09f",
  },
  {
    col1: "move",
    col2: "e0a0",
  },
  {
    col1: "musical-note",
    col2: "e0a1",
  },
  {
    col1: "paperclip",
    col2: "e0a2",
  },
  {
    col1: "pencil",
    col2: "e0a3",
  },
  {
    col1: "people",
    col2: "e0a4",
  },
  {
    col1: "person",
    col2: "e0a5",
  },
  {
    col1: "phone",
    col2: "e0a6",
  },
  {
    col1: "pie-chart",
    col2: "e0a7",
  },
  {
    col1: "pin",
    col2: "e0a8",
  },
  {
    col1: "play-circle",
    col2: "e0a9",
  },
  {
    col1: "plus",
    col2: "e0aa",
  },
  {
    col1: "power-standby",
    col2: "e0ab",
  },
  {
    col1: "print",
    col2: "e0ac",
  },
  {
    col1: "project",
    col2: "e0ad",
  },
  {
    col1: "pulse",
    col2: "e0ae",
  },
  {
    col1: "puzzle-piece",
    col2: "e0af",
  },
  {
    col1: "question-mark",
    col2: "e0b0",
  },
  {
    col1: "rain",
    col2: "e0b1",
  },
  {
    col1: "random",
    col2: "e0b2",
  },
  {
    col1: "reload",
    col2: "e0b3",
  },
  {
    col1: "resize-both",
    col2: "e0b4",
  },
  {
    col1: "resize-height",
    col2: "e0b5",
  },
  {
    col1: "resize-width",
    col2: "e0b6",
  },
  {
    col1: "rss-alt",
    col2: "e0b7",
  },
  {
    col1: "rss",
    col2: "e0b8",
  },
  {
    col1: "script",
    col2: "e0b9",
  },
  {
    col1: "share-boxed",
    col2: "e0ba",
  },
  {
    col1: "share",
    col2: "e0bb",
  },
  {
    col1: "shield",
    col2: "e0bc",
  },
  {
    col1: "signal",
    col2: "e0bd",
  },
  {
    col1: "signpost",
    col2: "e0be",
  },
  {
    col1: "sort-ascending",
    col2: "e0bf",
  },
  {
    col1: "sort-descending",
    col2: "e0c0",
  },
  {
    col1: "spreadsheet",
    col2: "e0c1",
  },
  {
    col1: "star",
    col2: "e0c2",
  },
  {
    col1: "sun",
    col2: "e0c3",
  },
  {
    col1: "tablet",
    col2: "e0c4",
  },
  {
    col1: "tag",
    col2: "e0c5",
  },
  {
    col1: "tags",
    col2: "e0c6",
  },
  {
    col1: "target",
    col2: "e0c7",
  },
  {
    col1: "task",
    col2: "e0c8",
  },
  {
    col1: "terminal",
    col2: "e0c9",
  },
  {
    col1: "text",
    col2: "e0ca",
  },
  {
    col1: "thumb-down",
    col2: "e0cb",
  },
  {
    col1: "thumb-up",
    col2: "e0cc",
  },
  {
    col1: "timer",
    col2: "e0cd",
  },
  {
    col1: "transfer",
    col2: "e0ce",
  },
  {
    col1: "trash",
    col2: "e0cf",
  },
  {
    col1: "underline",
    col2: "e0d0",
  },
  {
    col1: "vertical-align-bottom",
    col2: "e0d1",
  },
  {
    col1: "vertical-align-center",
    col2: "e0d2",
  },
  {
    col1: "vertical-align-top",
    col2: "e0d3",
  },
  {
    col1: "video",
    col2: "e0d4",
  },
  {
    col1: "volume-high",
    col2: "e0d5",
  },
  {
    col1: "volume-low",
    col2: "e0d6",
  },
  {
    col1: "volume-off",
    col2: "e0d7",
  },
  {
    col1: "warning",
    col2: "e0d8",
  },
  {
    col1: "wifi",
    col2: "e0d9",
  },
  {
    col1: "wrench",
    col2: "e0da",
  },
  {
    col1: "x",
    col2: "e0db",
  },
  {
    col1: "yen",
    col2: "e0dc",
  },
  {
    col1: "zoom-in",
    col2: "e0dd",
  },
  {
    col1: "zoom-out",
    col2: "e0de",
  },
];

export default icones;
