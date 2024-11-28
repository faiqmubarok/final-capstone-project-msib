import TableContainer from "./TableContainer";
import FilterProjects from "../Dropdown/FilterProjects";
import { useState, useEffect } from "react";
import axios from "axios";
import TopProjectList from "./TopProjectList";

const TopProject = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Mendatang");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endPoint =
          filter === "Dana"
            ? "topFunds"
            : filter === "Keuntungan"
            ? "topProfit"
            : "upcoming";

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/projects/${endPoint}/`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <div className="rounded-sm border border-gray-50 bg-white px-4 pt-6 pb-2.5 shadow-sm sm:px-6 no-scrollbar lg:min-h-[445px]">
      <div className="flex justify-between items-center mb-6 gap-3">
        <h4 className="text-xl font-semibold text-black w-2/3 md:w-full">
          Rekomendasi Proyek
        </h4>
        <div className="flex justify-end w-1/3 md:w-full">
          <FilterProjects
            selectedFilter={filter}
            setSelectedFilter={setFilter}
            options={["Mendatang", "Keuntungan", "Dana"]}
          >
            {filter}
          </FilterProjects>
        </div>
      </div>
      <TableContainer
        columns={["Nama Proyek", "Tipe", "Dana Kelola", "Keuntungan"]}
        loading={loading}
      >
        {data.map((data, index) => (
          <TopProjectList key={index} item={data} />
        ))}
      </TableContainer>
    </div>
  );
};

export default TopProject;
