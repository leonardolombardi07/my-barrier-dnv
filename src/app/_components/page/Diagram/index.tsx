"use client";
import React from "react";
import DXDiagram from "devextreme-react/diagram";
import json from "./json.json";

interface DiagramProps {
  json: any;
  setJson: (json: any) => void;
}

export default function Diagram({ json: propsJson, setJson }: DiagramProps) {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    const diagram = ref.current.instance;
    diagram.import(JSON.stringify(json));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "red",
        height: "calc(100vh)",
        marginTop: 100,
      }}
    >
      {JSON.stringify(propsJson, null, 2)}

      <DXDiagram id="diagram" ref={ref} height={"calc(100vh)"} />
    </div>
  );
}
