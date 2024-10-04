import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Sidebar from "./../Sidebar";
import { useState } from "react";
import { data } from "../utils/dummyData";
import SidebarCard from "../SidebarCard";
import Profile from "../Profile";

function RootLayout() {
  const [disableSideBar, setDisableSideBar] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  function onHamburgerClick() {
    setDisableSideBar((prev) => !prev);
  }
  const [isactive, setIsActive] = useState(1);
  function getActiveComponent(id) {
    setIsActive(id);
  }

  return (
    <div>
      <Nav
        onHamburgerClick={onHamburgerClick}
        isactive={isactive}
        onActive={getActiveComponent}
        setEditProfile={setEditProfile}
      />
      <div className="rootLayout">
        {!disableSideBar && (
          <Sidebar>
            {data.map((item) => (
              <SidebarCard
                key={item.key}
                id={item.key}
                name={item.name}
                icon={item.icon}
                pathway={item.pathway}
                onActive={getActiveComponent}
                isactive={isactive}
              />
            ))}
          </Sidebar>
        )}
        <main>
          <Outlet />
        </main>
      </div>
      {editProfile && <Profile setEditProfile={setEditProfile} />}
    </div>
  );
}

export default RootLayout;
