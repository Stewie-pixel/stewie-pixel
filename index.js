import fetch from "node-fetch";

export default async function handler(req, res) {
  // Fetch your stats endpoint to refresh
  await fetch("https://github-vercel-deployment-seven.vercel.app/api?username=Stewie-pixel&theme=dracula&bg_color=000000&hide_border=false&show_icons=true&include_all_commits=true&count_private=true&cache_seconds=86400");
  
  res.status(200).json({ message: "GitHub stats refreshed!" });
}