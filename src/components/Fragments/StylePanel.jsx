import { stylesBg } from "../../assets/images";
import { useNavigate } from 'react-router-dom';

const StylePanel = () => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    console.log(`Navigating to /category?${category}`); // Debugging line
    navigate(`../category?${category}`);
  };

  return (
    <section className="main-container py-10">
      <div className="bg-gray-20 flex flex-col px-6 py-12 gap-8 xl:px-20 xl:py-24 xl:gap-16 rounded-2xl">
        <h2 className="text-center">browse by dress style</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div
            className="rounded-2xl bg-red-10 h-72 xl:h-96 px-9 py-7 bg-cover bg-top cursor-pointer"
            style={{ backgroundImage: `url(${stylesBg.casual})` }}
            onClick={() => handleNavigation('casual')}
          >
            <p className="tx-4 font-bold capitalize">casual</p>
          </div>
          <div
            className="rounded-2xl col-span-1 xl:col-span-2 bg-red-10 h-72 xl:h-96 px-9 py-7 bg-cover bg-top cursor-pointer"
            style={{ backgroundImage: `url(${stylesBg.formal})` }}
            onClick={() => handleNavigation('formal')}
          >
            <p className="tx-4 font-bold capitalize">formal</p>
          </div>
          <div
            className="rounded-2xl col-span-1 xl:col-span-2 bg-red-10 h-72 xl:h-96 px-9 py-7 bg-cover bg-top cursor-pointer"
            style={{ backgroundImage: `url(${stylesBg.party})` }}
            onClick={() => handleNavigation('party')}
          >
            <p className="tx-4 font-bold capitalize">party</p>
          </div>
          <div
            className="rounded-2xl bg-red-10 h-72 xl:h-96 px-9 py-7 bg-cover bg-top cursor-pointer"
            style={{ backgroundImage: `url(${stylesBg.gym})` }}
            onClick={() => handleNavigation('gym')}
          >
            <p className="tx-4 font-bold capitalize">gym</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylePanel;
