import { NavbarButton } from "./NavbarButton";
import { HouseSimple } from "phosphor-react";

export function Navbar() {
  return (
    <div className="flex flex-col bg-purple-900">
        <div className="flex flex-row">
            <h1>Logo</h1>
            <span>=</span>
        </div>

        <div className="mt-4">
            <NavbarButton icon={<HouseSimple />} title="DASHBOARD"/>
        </div>
    </div>
  );
}