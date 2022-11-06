import React, { useState, useEffect } from "react";

export default function Loading({ inView, setLoadMore, loadMore }) {
  useEffect(() => {
    inView && setLoadMore(loadMore + 10);
  }, [inView, loadMore]);

  return <div>Loading</div>;
}
