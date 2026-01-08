const fs = require("fs");
const path = require("path");
const glob = require("glob");
const cheerio = require("cheerio");

// Heurística simple: no tocar scripts que probablemente NO conviene defer
const SKIP_IF_SRC_MATCHES = [
  /googletagmanager|gtag|google-analytics/i, // tracking suele ir async según docs
];

function shouldSkip(src) {
  return SKIP_IF_SRC_MATCHES.some((re) => re.test(src));
}

const htmlFiles = glob.sync("**/*.html", {
  ignore: ["node_modules/**", "dist/**", "build/**"],
});

let changed = 0;

for (const file of htmlFiles) {
  const original = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(original, { decodeEntities: false });

  let modifiedThisFile = false;

  $("script[src]").each((_, el) => {
    const src = $(el).attr("src") || "";

    // si ya tiene async o defer, no tocar
    if ($(el).attr("defer") !== undefined) return;
    if ($(el).attr("async") !== undefined) return;

    // skip de algunos externos típicos
    if (shouldSkip(src)) return;

    // agregar defer
    $(el).attr("defer", "");
    modifiedThisFile = true;
  });

  if (modifiedThisFile) {
    fs.writeFileSync(file, $.html(), "utf8");
    changed++;
    console.log(`✅ Updated: ${file}`);
  }
}

console.log(`\nDone. Files updated: ${changed}/${htmlFiles.length}`);
