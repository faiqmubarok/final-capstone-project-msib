import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import TableContainer from "../../components/Table/TableContainer";
import SearchProject from "../../components/Search & Select/SearchProject";
import FilterProjects from "../../components/Dropdown/FilterProjects";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import dummyProjects from "../../data/dummy-projects.json";

const ProjectPage = () => {
  const [allProjects, setAllProjects] = useState([]); // Menyimpan semua proyek
  const [filteredProjects, setFilteredProjects] = useState([]); // Menyimpan proyek yang sudah difilter
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(10); // Menentukan jumlah proyek per halaman
  const [filter, setFilter] = useState("Semua");
  const [searchKey, setSearchKey] = useState("");

  // Fetch data
  useEffect(() => {
    const fetchedProjects = dummyProjects;
    setAllProjects(fetchedProjects.data);
    setFilteredProjects(fetchedProjects.data); // Setel proyek yang difilter ke semua proyek
  }, []);

  // Menerapkan Filter
  useEffect(() => {
    const filterProjects = () => {
      if (filter === "Semua") {
        setFilteredProjects(allProjects);
      } else {
        const filtered = allProjects.filter(
          (project) => project.type === filter
        );
        setFilteredProjects(filtered);
      }
      // Reset halaman ke 1 saat filter berubah
      setCurrentPage(1);
    };

    filterProjects();
  }, [filter, allProjects]);

  // Fungsi untuk mengatur proyek hasil pencarian
  const handleSearchResult = (searchResult, searchKey) => {
    setFilteredProjects(searchResult);
    setSearchKey(searchKey); // Set searchKey dari hasil pencarian
    setCurrentPage(1); // Reset halaman ke 1 setelah pencarian
  };

  const handleReset = () => {
    setFilter("Semua"); 
    setFilteredProjects(allProjects); 
    setSearchKey("");
    setCurrentPage(1); 
  };

  // Menghitung indeks proyek saat ini
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <>
    <Breadcrumbs pageName="Proyek" mainRoute={"/dashboard"} />
    <div className="bg-white shadow-md rounded-sm border border-gray-100 flex flex-col gap-6 p-4">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <SearchProject onSearch={handleSearchResult} />
        </div>
        <div className="w-full md:w-1/2 flex justify-end gap-4">
          <FilterProjects
            selectedFilter={filter}
            setSelectedFilter={setFilter}
          />
          <button
            onClick={handleReset}
            className="w-1/2 md:w-fit rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 gap-2"
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
        columns={["Nama Proyek", "Tipe", "Lokasi", "Dana Kelola", "Keuntungan"]}
        items={currentProjects}
      />
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage}
      />
    </div>
    </>
  );
};

export default ProjectPage;