// COMPONENTS
import CustomHits from "@/components/Hits";
import CustomStats from "@/components/CustomStats";

const ResultsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center m-2 ">
      <div className="w-full">
        <div className="flex justify-end ">
          <CustomStats />
        </div>
        <div>{/* HERE GOES THE FILTERS */}</div>
      </div>
      <div>
        <CustomHits />
      </div>
    </div>
  );
};

export default ResultsContainer;
