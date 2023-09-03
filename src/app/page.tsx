"use client";
import React from "react";
import Loading from "@/components/pages/Loading";
import Main from "@/components/pages/Main";

export default function Page() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return <Main />;
}
