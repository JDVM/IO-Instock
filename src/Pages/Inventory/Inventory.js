import { useLocation } from "react-router-dom";
import "./Inventory.scss";

import AddInventory from "../../components/AddInventory/AddInventory";

function Inventory() {
  const location = useLocation();

  console.log(location.pathname);
  if (location.pathname.endsWith("/new"))
    return (
      <div className="inventories">
        <AddInventory />
      </div>
    );

  return (
    <div className="inventories">
      <>
        <h1>InStock</h1>
        <p>
          Welcome to <strong>InStock</strong> - Your modern inventory management
          system.
        </p>
        <p>
          This application is currently under development by team{" "}
          <strong>IO</strong> at BrainStation's Software Engineering Bootcamp,
          Cohort: <strong>The Nameless '23</strong>.
        </p>
        <p>Stay tuned for more updates!</p>
      </>
    </div>
  );
}

export default Inventory;
