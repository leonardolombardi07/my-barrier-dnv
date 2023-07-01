"use client";

import React from "react";
import AuthenticatedLayout from "./_components/layout/AuthenticatedLayout";
import Diagram from "./_components/page/Diagram";

export const metadata = {
  title: "My Barriers 2",
  description: "Create graphs with DNV.",
};

export default function Home() {
  const [json, setJson] = React.useState({
    leo: 10,
  });

  return (
    <AuthenticatedLayout json={json} setJson={setJson}>
      <Diagram json={json} setJson={setJson} />
    </AuthenticatedLayout>
  );
}
