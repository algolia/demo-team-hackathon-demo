import { useHits, UseHitsProps } from "react-instantsearch";
import { BaseHit } from "instantsearch.js/es/types/results";

// To test Hits

const Hit = ({ hit }: { hit: BaseHit }) => {
  return (
    <div className="w-full relative before:absolute before:rounded-full before:-left-2.5 before:z-[-1] before:h-full before:w-full before:animate-gradient before:bg-[linear-gradient(to_right,#1E59FF,#0DB7EB,#CEFF00,#0DB7EB,#1E59FF)] before:bg-[200%_200%] before:p-2.5 before:content-['']">
      <div className="relative flex flex-col p-4 pb-0">
        <div className="relative">
          <div className="mx-auto aspect-square w-5/5 p-4">
            <img
              className="aspect-square w-full object-contain"
              src={hit.image_link as string}
              onError={(e) => {
                console.log(e);
              }}
            />
          </div>
        </div>

        <div className="relative flex grow flex-col">
          <h2 className="mb-4 line-clamp-2 text-sm font-normal leading-snug text-colorBp-800">
            {hit.title as string}
          </h2>
        </div>
      </div>
    </div>
  );
};

function CustomHits(props: UseHitsProps<BaseHit> | undefined) {
  const { hits } = useHits(props);

  console.log(hits);

  return (
    <div className="flex flex-wrap w-full h-[30rem] overflow-scroll">
      {hits.map((hit) => (
        <div key={hit.objectID} className="w-1/4 p-2">
          <Hit hit={hit} />
        </div>
      ))}
    </div>
  );
}

export default CustomHits;
