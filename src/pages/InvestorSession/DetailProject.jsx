import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/dummy-projects.json";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import images from "../../images/images";

const DetailProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [investment, setInvestment] = useState(10000000); // Default investasi Rp 10 juta
  const [simulatedReturns, setSimulatedReturns] = useState({});

  useEffect(() => {
    const fetchProject = data.data.find(
      (project) => project.id === parseInt(id)
    );
    if (fetchProject) {
      setProject(fetchProject);
      setInvestment(fetchProject.profit);
    }
  }, [id]);

  const calculateSimulation = (profitPercentage) => {
    const profitDecimal = parseFloat(profitPercentage) / 100;
    const returns = {
      "6 bulan": investment + (investment * profitDecimal * 0.5) , // Setengah dari setahun
      "1 tahun": investment + investment * profitDecimal,
      "3 tahun": investment + investment * profitDecimal * 3,
      "5 tahun": investment + investment * profitDecimal * 5,
    };
    setSimulatedReturns(returns);
  };

  const handleInvestmentChange = (e) => {
    setInvestment(parseInt(e.target.value));
    if (project) {
      calculateSimulation(project.profit);
    }
  };

  const getRecommendedPlatforms = (type) => {
    return data.data.filter((platform) => platform.type === type).slice(0, 5);
  };

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <>
      <PageTitle title={`${project?.name} | Patani`} />
      <Breadcrumbs pageName={project?.name} pageLink={[{ name: "Proyek", link: "/projects" }]} mainRoute={"/dashboard"} />
      {/* Header */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <img
          src={images.agricultureHeroImage}
          alt={`Image of ${project.name}`}
          loading="lazy"
          className="w-full h-auto object-cover aspect-video"
        />
      </div>

      {/* Project Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-sm">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Tentang</h2>
          <p className="mt-4 text-gray-600 text-justify">
            Keuntungan berinvestasi di {project.name} mencakup potensi profit
            sebesar {project.profit} dan mendukung petani lokal dalam
            pengembangan {project.type}. Dana yang dibutuhkan sebesar{" "}
            {project.dana}.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Project Details
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Type:</strong> {project.type}
            </li>
            <li>
              <strong>Location:</strong> {project.location}
            </li>
            <li>
              <strong>Profit:</strong> {project.profit}
            </li>
            <li>
              <strong>Dana:</strong> {project.dana}
            </li>
          </ul>
        </div>
      </div>

      {/* Investment Simulation */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Simulasi Investasi
        </h2>
        <label className="block mb-2 text-gray-600">
          Jumlah Investasi (Rp):
        </label>
        <input
          type="number"
          value={investment}
          onChange={handleInvestmentChange}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(simulatedReturns).map(([term, value]) => (
            <div key={term} className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold">{term}</h3>
              <p className="text-xl font-bold">Rp {value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Platforms */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Rekomendasi Platform Serupa
        </h2>
        <ul className="space-y-4">
          {getRecommendedPlatforms(project.type).map((platform) => (
            <li key={platform.id} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{platform.name}</h3>
              <p className="text-gray-600">{platform.description}</p>
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Kunjungi {platform.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailProject;


