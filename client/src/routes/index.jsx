import SearchPage from "views/Seardch/SearchPage.jsx";
import ResultsPage from "views/Results/ResultsPage.jsx";
import SavedPage from "views/Saved/SavedPage.jsx";

var indexRoutes = [
  { path: "/", name: "SearchPage", component: SearchPage },
  { path: "/results", name: "ResultsPage", component: ResultsPage },
  { path: "/saved", name: "SavedPage", component: SavedPage },
];

export default indexRoutes;
