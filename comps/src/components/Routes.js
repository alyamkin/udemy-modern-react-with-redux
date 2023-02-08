import Route from "./Route";
import AccordionPage from "../Pages/AccordionPage";
import DropdownPage from "../Pages/DropdownPage";
import ButtontPage from "../Pages/ButtonPage";
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
    </div>
  );
}

export default Routes;
