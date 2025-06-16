"use client";

/* 
    form client component
    
*/

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(pathname + "?" + String(params), { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      <Button
        handleFilter={handleFilter}
        filter="all"
        activeFilter={activeFilter}
      >
        All
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        1&mdash;3
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        4&mdash;7
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        8&mdash;12
      </Button>
    </div>
  );
}

function Button({ children, handleFilter, filter, activeFilter }) {
  return (
    <button
      className={`py-2 px-5 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
