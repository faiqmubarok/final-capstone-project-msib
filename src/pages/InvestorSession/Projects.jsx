import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import TableContainer from "../../components/Table/TableContainer";
import SearchProject from "../../components/Search & Select/SearchProject";
import FilterProjects from "../../components/Dropdown/FilterProjects";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const ProjectPage = () => {
  const [allProjects, setAllProjects] = useState([]); // Semua proyek
  const [filteredProjects, setFilteredProjects] = useState([]); // Proyek setelah filter
  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState("Semua"); // Filter tipe
  const [statusFilter, setStatusFilter] = useState("Semua"); // Filter status
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/projects/`
        );
        const data = await response.json();
        setAllProjects(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    fetchProjects();
  }, []);

  // Filter proyek berdasarkan tipe dan status
  useEffect(() => {
    const applyFilter = () => {
      let filtered = allProjects;

      // Filter berdasarkan tipe
      if (typeFilter !== "Semua") {
        filtered = filtered.filter(
          (project) => project.type_display === typeFilter
        );
      }

      // Filter berdasarkan status
      if (statusFilter !== "Semua") {
        filtered = filtered.filter(
          (project) => project.status_display === statusFilter
        );
      }

      // Filter berdasarkan pencarian
      if (searchKey !== "") {
        filtered = filtered.filter((project) =>
          project.name.toLowerCase().includes(searchKey.toLowerCase())
        );
      }

      setFilteredProjects(filtered);
      setCurrentPage(1);
    };

    applyFilter();
  }, [typeFilter, statusFilter, searchKey, allProjects]);

  const handleReset = () => {
    setTypeFilter("Semua");
    setStatusFilter("Semua");
    setSearchKey("");
    setFilteredProjects(allProjects);
    setCurrentPage(1);
  };

  return (
    <>
      <Breadcrumbs pageName="Proyek" mainRoute={"/dashboard"} />
      <div className="bg-white shadow-md rounded-sm border border-gray-100 flex flex-col gap-6 p-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <SearchProject
              onSearch={(searchResult, searchKey) => {
                setFilteredProjects(searchResult);
                setSearchKey(searchKey);
                setCurrentPage(1);
              }}
              allProjects={allProjects}
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 md:flex md:justify-end">
            <FilterProjects
              selectedFilter={typeFilter}
              setSelectedFilter={setTypeFilter}
              options={["Semua", "Pertanian", "Peternakan", "Perikanan"]}
            >
              Tipe
            </FilterProjects>
            <FilterProjects
              selectedFilter={statusFilter}
              setSelectedFilter={setStatusFilter}
              options={[
                "Semua",
                "Tersedia",
                "Sedang berlangsung",
                "Tidak tersedia",
              ]}
            >
              Status
            </FilterProjects>
            <button
              onClick={handleReset}
              className="w-full col-span-2 md:col-span-1 md:w-fit rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 gap-2"
            >
              Atur Ulang
            </button>
          </div>
        </div>
        <hr className="border-gray-200" />
        {searchKey !== "" && (
          <p className="text-sm text-gray-700">
            Menampilkan proyek dengan kata kunci &quot;{searchKey}&quot;
          </p>
        )}
        <TableContainer
          columns={[
            "Nama Proyek",
            "Tipe",
            "Lokasi",
            "Dana Kelola",
            "Keuntungan",
            "Status",
          ]}
          items={filteredProjects.slice(
            (currentPage - 1) * 10,
            currentPage * 10
          )}
          filteredProjects={filteredProjects}
        />
        <Pagination
          page={currentPage}
          totalPages={Math.ceil(filteredProjects.length / 10)}
          setPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default ProjectPage;