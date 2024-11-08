const TopProject = () => {
  const brandData = [
    {
      logo: "",
      name: "Google",
      visitors: 3.5,
      revenues: "5,768",
      sales: 590,
      conversion: 4.8,
    },
    {
      logo: "",
      name: "Twitter",
      visitors: 2.2,
      revenues: "4,635",
      sales: 467,
      conversion: 4.3,
    },
    {
      logo: "",
      name: "Github",
      visitors: 2.1,
      revenues: "4,290",
      sales: 420,
      conversion: 3.7,
    },
    {
      logo: "",
      name: "Vimeo",
      visitors: 1.5,
      revenues: "3,580",
      sales: 389,
      conversion: 2.5,
    },
    {
      logo: "",
      name: "Facebook",
      visitors: 3.5,
      revenues: "6,768",
      sales: 390,
      conversion: 4.2,
    },
  ];

  return (
    <div className="rounded-sm border border-gray-50 bg-white px-5 pt-6 pb-2.5 shadow-sm sm:px-7">
      <div className="flex justify-between items-center mb-6">
        <h4 className=" text-xl font-semibold text-black">
          Rekomendasi Proyek
        </h4>
        <div className="flex max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-gray-100 p-1.5 ">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-sm">
              Terbaru
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-sm ">
              Keuntungan
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-sm">
              Dana
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-100 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase sm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase sm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase sm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase sm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase sm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProject;
