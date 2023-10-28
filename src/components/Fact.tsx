interface FactProps {
  facts: Array<{ id: string; text: string }>;
  isLoading: boolean;
  showFavourite?: boolean;
  showDelete?: boolean;
  favouriteHandle?: (fact: object) => void;
  deleteHandle?: () => void;
}

const Fact: React.FC<FactProps> = ({
  facts,
  isLoading,
  showFavourite = true,
  showDelete = true,
  favouriteHandle,
  deleteHandle,
}) => {
  return (
    <div className='bg-gray-700 w-[80%] flex min-h-min relative rounded-lg my-1 group'>
      <p className='p-3 text-gray-300'>
        {isLoading
          ? 'Loading...'
          : facts[0]
          ? facts[0].text
          : 'Something went wrong.'}
      </p>
      {!isLoading && facts[0] && showFavourite ? (
        <button
          onClick={() => favouriteHandle(facts[0])}
          className='invisible bg-white group-hover:visible hover:bg-red-400 p-4 w-14 h-14 absolute top-[50%] translate-y-[-50%] right-[8rem] rounded-full'
        >
          ♥
        </button>
      ) : null}
      {!isLoading && facts[0] && showDelete ? (
        <button
          onClick={deleteHandle}
          className='invisible bg-white group-hover:visible hover:bg-red-400 p-4 w-14 h-14 absolute top-[50%] translate-y-[-50%] right-[3rem] rounded-full'
        >
          𝖷
        </button>
      ) : null}
    </div>
  );
};

export default Fact;
