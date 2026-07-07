//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-api-yrZNFAua.js
var API_URL = "http://localhost:3001";
async function fetchPublishedPortfolio() {
	try {
		const response = await fetch(`${API_URL}/api/portfolio?published=true`);
		if (!response.ok) return [];
		return (await response.json()).items;
	} catch {
		return [];
	}
}
async function fetchPortfolioItem(idOrSlug) {
	try {
		const response = await fetch(`${API_URL}/api/portfolio/${idOrSlug}`);
		if (!response.ok) return null;
		return (await response.json()).item;
	} catch {
		return null;
	}
}
//#endregion
export { fetchPublishedPortfolio as n, fetchPortfolioItem as t };
