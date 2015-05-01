//this list is the seed, from which various forms are conjugated
var verbs = (function() {
    //verbs
    var main = [
      "collapse",
      "stake",
      "forsee",
      "hide",
      "suck",
      "answer",
      "argue",
      "tend",
      "examine",
      "depend",
      "form",
      "figure",
      "compete",
      "mind",
      "surround",
      "suspect",
      "reflect",
      "wonder",
      "act",
      "hope",
      "end",
      "thank",
      "file",
      "regard",
      "report",
      "imagine",
      "consider",
      "miss",
      "ensure",
      "cause",
      "work",
      "enter",
      "stop",
      "defeat",
      "surge",
      "launch",
      "turn",
      "give",
      "win",
      "like",
      "control",
      "relate",
      "remember",
      "join",
      "listen",
      "train",
      "break",
      "spring",
      "enjoy",
      "fail",
      "understand",
      "recognize",
      "draw",
      "obtain",
      "learn",
      "fill",
      "announce",
      "prevent",
      "fall",
      "achieve",
      "find",
      "realize",
      "involve",
      "remove",
      "lose",
      "lie",
      "build",
      "aid",
      "visit",
      "test",
      "strike",
      "prepare",
      "wait",
      "ask",
      "carry",
      "suppose",
      "determine",
      "raise",
      "send",
      "love",
      "use",
      "pull",
      "improve",
      "contain",
      "think",
      "offer",
      "speak",
      "rise",
      "talk",
      "pick",
      "care",
      "express",
      "remain",
      "operate",
      "deal",
      "close",
      "add",
      "mention",
      "read",
      "support",
      "grow",
      "decide",
      "walk",
      "vary",
      "demand",
      "describe",
      "sell",
      "agree",
      "happen",
      "allow",
      "suffer",
      "have",
      "study",
      "be",
      "press",
      "watch",
      "seem",
      "occur",
      "contribute",
      "claim",
      "become",
      "make",
      "compare",
      "develop",
      "apply",
      "direct",
      "discuss",
      "know",
      "sit",
      "see",
      "lead",
      "indicate",
      "require",
      "change",
      "fix",
      "come",
      "reach",
      "prove",
      "expect",
      "exist",
      "play",
      "permit",
      "meet",
      "kill",
      "pay",
      "charge",
      "increase",
      "fight",
      "tell",
      "catch",
      "believe",
      "create",
      "continue",
      "live",
      "help",
      "represent",
      "edit",
      "serve",
      "ride",
      "appear",
      "cover",
      "set",
      "maintain",
      "start",
      "stay",
      "move",
      "extend",
      "leave",
      "wear",
      "run",
      "design",
      "supply",
      "suggest",
      "want",
      "say",
      "hear",
      "drive",
      "approach",
      "cut",
      "call",
      "include",
      "try",
      "receive",
      "save",
      "discover",
      "marry",
      "throw",
      "show",
      "choose",
      "need",
      "establish",
      "keep",
      "assume",
      "attend",
      "buy",
      "unite",
      "feel",
      "explain",
      "publish",
      "accept",
      "settle",
      "reduce",
      "bring",
      "do",
      "let",
      "shoot",
      "look",
      "take",
      "interact",
      "concern",
      "put",
      "labor",
      "hold",
      "return",
      "select",
      "die",
      "provide",
      "seek",
      "stand",
      "spend",
      "begin",
      "get",
      "wish",
      "hang",
      "write",
      "finish",
      "follow",
      "forget",
      "feed",
      "eat",
      "disagree",
      "produce",
      "attack",
      "attempt",
      "bite",
      "blow",
      "brake",
      "brush",
      "burn",
      "bang",
      "bomb",
      "bet",
      "budget",
      "comfort",
      "cook",
      "copy",
      "cough",
      "crush",
      "cry",
      "check",
      "claw",
      "clip",
      "combine",
      "damage",
      "desire",
      "doubt",
      "drain",
      "drink",
      "dance",
      "decrease",
      "defect",
      "deposit",
      "drift",
      "dip",
      "dive",
      "divorce",
      "dream",
      "exchange",
      "envy",
      "exert",
      "exercise",
      "export",
      "fold",
      "flood",
      "focus",
      "forecast",
      "fracture",
      "grip",
      "guide",
      "guard",
      "guarantee",
      "guess",
      "hate",
      "heat",
      "handle",
      "hire",
      "host",
      "hunt",
      "hurry",
      "import",
      "judge",
      "jump",
      "jam",
      "kick",
      "kiss",
      "knock",
      "laugh",
      "lift",
      "lock",
      "lecture",
      "link",
      "load",
      "loan",
      "lump",
      "melt",
      "message",
      "murder",
      "neglect",
      "overlap",
      "overtake",
      "overuse",
      "print",
      "protest",
      "pump",
      "push",
      "post",
      "progress",
      "promise",
      "purchase",
      "regret",
      "request",
      "reward",
      "roll",
      "rub",
      "rent",
      "repair",
      "sail",
      "scale",
      "screw",
      "shake",
      "shock",
      "sleep",
      "slip",
      "smash",
      "smell",
      "smoke",
      "sneeze",
      "snow",
      "stick",
      "surprise",
      "swim",
      "scratch",
      "search",
      "share",
      "shave",
      "slide",
      "spit",
      "splash",
      "stain",
      "stress",
      "swing",
      "switch",
      "taste",
      "touch",
      "trade",
      "trick",
      "twist",
      "tie",
      "trap",
      "travel",
      "tune",
      "undergo",
      "undo",
      "uplift",
      "vote",
      "wash",
      "wave",
      "whistle",
      "wreck",
      "yawn",
      "betray",
      "restrict",
      "perform",
      "worry",
      "point",
      "activate",
      "fear",
      "plan",
      "note",
      "face",
      "predict",
      "differ",
      "deserve",
      "torture",
      "recall",
      "count",
      "swear",
      "admit",
      "insist",
      "lack",
      "pass",
      "belong",
      "complain",
      "constitute",
      "beat",
      "rely",
      "refuse",
      "range",
      "cite",
      "flash",
      "arrive",
      "reveal",
      "consist",
      "observe",
      "notice",
      "trust",
      "imply",
      "display",
      "view",
      "stare",
      "acknowledge",
      "owe",
      "gaze",
      "treat",
      "account",
      "gather",
      "address",
      "confirm",
      "estimate",
      "manage",
      "participate",
      "sneak",
      "drop",
      "mirror",
      "experience",
      "strive",
      "teach",
      "cost",
      "arch",
      "dislike",
      "favor",
      "earn",
      "emphasize",
      "fly",
      "match",
      "question",
      "emerge",
      "encourage",
      "matter",
      "name",
      "head",
      "line",
      "slam",
      "list",
      "sing",
      "warn",
      "ignore",
      "resemble",
      "spread",
      "feature",
      "place",
      "reverse",
      "accuse",
      "spoil",
      "retain",
      "survive",
      "praise",
      "function",
      "please",
      "date",
      "remind",
      "deliver",
      "echo",
      "engage",
      "deny",
      "obey",
      "yield",
      "center",
      "gain",
      "anticipate",
      "reason",
      "side",
      "thrive",
      "defy",
      "dodge",
      "enable",
      "applaud",
      "bear",
      "persist",
      "pose",
      "reject",
      "attract",
      "await",
      "inhibit",
      "declare",
      "process",
      "risk",
      "urge",
      "value",
      "block",
      "confront",
      "credit",
      "cross",
      "wake",
      "amuse",
      "dare",
      "resent",
      "smile",
      "gloss",
      "threaten",
      "collect",
      "depict",
      "dismiss",
      "submit",
      "benefit",
      "step",
      "deem",
      "limit",
      "sense",
      "issue",
      "embody",
      "force",
      "govern",
      "replace",
      "aim",
      "bother",
      "cater",
      "adopt",
      "empower",
      "outweigh",
      "alter",
      "enrich",
      "influence",
      "prohibit",
      "pursue",
      "warrant",
      "convey",
      "approve",
      "reserve",
      "rest",
      "strain",
      "wander",
      "adjust",
      "dress",
      "market",
      "mingle",
      "disapprove",
      "evaluate",
      "flow",
      "inhabit",
      "pop",
      "rule",
      "depart",
      "roam",
      "assert",
      "disappear",
      "envision",
      "pause",
      "afford",
      "challenge",
      "grab",
      "grumble",
      "house",
      "portray",
      "revel",
      "base",
      "conduct",
      "review",
      "stem",
      "crave",
      "mark",
      "store",
      "target",
      "unlock",
      "weigh",
      "resist",
      "steal",
      "drag",
      "pour",
      "reckon",
      "assign",
      "cling",
      "rank",
      "attach",
      "decline",
      "destroy",
      "interfere",
      "paint",
      "skip",
      "sprinkle",
      "wither",
      "allege",
      "retire",
      "score",
      "monitor",
      "expand",
      "honor",
      "lend",
      "pack",
      "assist",
      "float",
      "appeal",
      "sink",
      "stretch",
      "undermine",
      "assemble",
      "boast",
      "bounce",
      "grasp",
      "install",
      "borrow",
      "crack",
      "elect",
      "shine",
      "shout",
      "contrast",
      "overcome",
      "relax",
      "relent",
      "strengthen",
      "conform",
      "dump",
      "pile",
      "scare",
      "relive",
      "resort",
      "rush",
      "boost",
      "cease",
      "command",
      "excel",
      "plug",
      "plunge",
      "proclaim",
      "discourage",
      "endure",
      "ruin",
      "stumble",
      "abandon",
      "cheat",
      "convince",
      "merge",
      "convert",
      "harm",
      "multiply",
      "overwhelm",
      "chew",
      "invent",
      "bury",
      "wipe",
      "added",
      "took",
      "define",
      "goes",
      "measure",
      "enhance",
      "distinguish",
      "hit",
      "avoid"
    ]

  if (typeof module !== "undefined" && module.exports) {
    module.exports = main;
  }

  return main
})()