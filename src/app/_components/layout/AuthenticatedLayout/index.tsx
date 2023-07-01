"use client";

import React from "react";
import Button from "devextreme-react/button";
import Drawer from "devextreme-react/drawer";
import themes from "devextreme/ui/themes";
import { locale, loadMessages } from "devextreme/localization";
import ptMessages from "devextreme/localization/messages/pt.json";
import "./layout.scss";
import json from "../../../../../public/data/data.json";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  json: any;
  setJson: (json: any) => void;
}

export default function AuthenticatedLayout({
  children,
  json,
  setJson,
}: AuthenticatedLayoutProps) {
  useLocalization();

  const { isThemeInitialized } = useInitializedTheme();
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(true);

  function toggleMenu() {
    setIsDrawerOpened((prev) => !prev);
  }

  // Leo: this avoids bumpy behaviour and Cumulative Layout Shift (CLS) on first page load
  if (!isThemeInitialized) {
    return null;
  }

  return (
    <React.Fragment>
      <Header onMenuClick={toggleMenu} />

      <div className="rubik-body">
        <Drawer
          opened={isDrawerOpened}
          openedStateMode={"shrink"}
          position={"right"}
          revealMode={"slide"}
          component={() => {
            return <DrawerContent json={json} setJson={setJson} />;
          }}
          height={"100%"}
        >
          <div
            style={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
}

function useLocalization() {
  loadMessages(ptMessages);
  locale("pt");
}

function useInitializedTheme() {
  const [isThemeInitialized, setIsThemeInitialized] = React.useState(false);

  React.useEffect(function runOnce() {
    themes.initialized(() => {
      setIsThemeInitialized(true);
    });
  }, []);

  return { isThemeInitialized };
}

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="rubik-header">
      <div className="header-title">My Barriers</div>
      <div style={{ marginLeft: "1em" }}>
        <Button icon="menu" onClick={onMenuClick} />
      </div>
    </div>
  );
}

interface DrawerContentProps {
  json: any;
  setJson: (json: any) => void;
}

function DrawerContent({ json, setJson }: DrawerContentProps) {
  return (
    <div
      style={{
        width: "600px",
        minHeight: "100%",
        border: "1px solid lightgrey",
        position: "fixed",
        background: "lightblue",
        marginTop: 60,
        overflow: "auto",
      }}
    >
      <h1>Sidebar</h1>

      <code>
        <pre style={{ background: "pink", color: "black" }}>
          {JSON.stringify(json, null, 2)}
        </pre>
      </code>

      <Button
        onClick={() => {
          setJson({
            leo: 20,
          });
        }}
      >
        Alterar JSON!
      </Button>
    </div>
  );
}
