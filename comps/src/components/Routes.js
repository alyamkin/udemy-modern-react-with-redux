import Route from "./Route";
import AccordionPage from "../Pages/AccordionPage";
import DropdownPage from "../Pages/DropdownPage";
import ButtontPage from "../Pages/ButtonPage";
import ModalPage from "../Pages/ModalPage";
import TablePage from "../Pages/TablePage";

function Routes() {
  return (
    <div className="col-span-5">
      <Route path="/">
        <DropdownPage />
      </Route>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/buttons">
        <ButtontPage />
      </Route>
      <Route path="/modal">
        <ModalPage />
      </Route>
      <Route path="/table">
        <TablePage />
      </Route>
    </div>
  );
}

export default Routes;
