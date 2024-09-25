import images from "../../images/images.jsx";

const HomePage = () => {
  
  return (
    <>
      <div className=" flex items-center justify-center mt-24">
        <div className="absolute top-[82px] h-56 inset-0 bg-black opacity-50 z-0"></div>
        <img
          loading="lazy"
          src={images.riceField}
          className="w-screen h-56 absolute left-0 object-cover object-center -z-10 shadow-md"
          alt="riceField"
        />
        <h1 className="text-3xl font-bold z-10 text-white">Tentang Kami</h1>
      </div>
      <div className="mt-32">halo dunia</div>
    </>
  );
};

export default HomePage;
