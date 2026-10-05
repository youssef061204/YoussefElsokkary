import { projects } from "../app/lib/projects.ts";

const links = [
  ...projects.flatMap((project) => [project.github, ...(project.live ? [project.live] : []), ...project.docs.map((item) => item.url)]),
  "https://github.com/youssef061204",
  "https://www.linkedin.com/in/youssef-elsokkary-2135422aa/",
];

const unique = [...new Set(links)];
const results = await Promise.all(unique.map(async (url) => {
  try {
    let response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(12000) });
    if (response.status === 405) response = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(12000) });
    return { url, status: response.status, ok: response.ok, blocked: response.status === 999 };
  } catch (error) {
    return { url, status: "unavailable", ok: false, detail: String(error) };
  }
}));

for (const result of results) console.log((result.ok ? "OK " : result.blocked ? "BLOCKED " : "FAIL ") + result.status + " " + result.url);
if (results.some((result) => !result.ok && !result.blocked)) process.exitCode = 1;
