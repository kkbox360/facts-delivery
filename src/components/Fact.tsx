interface FactProps {
  facts: any;
  isLoading: boolean;
  showFavorite: boolean;
  showDelete: boolean;
  favoriteHandle?: any;
  deleteHandle?: any;
}

const Fact: React.FC<FactProps> = ({
  facts,
  isLoading,
  showFavorite = true,
  showDelete = true,
  favoriteHandle,
  deleteHandle,
}) => {
  return (
    <div className='bg-gray-700 w-[80%] flex min-h-min relative rounded-lg my-1 group'>
      <p className='p-3 text-gray-300'>
        {isLoading
          ? 'Loading'
          : facts[0]
          ? facts[0].text
          : 'Something went wrong.'}
      </p>
      {!isLoading && showFavorite ? (
        <button
          onClick={() => favoriteHandle(facts[0])}
          className='invisible bg-white group-hover:visible hover:bg-red-400 p-4 w-14 h-14 absolute top-[50%] translate-y-[-50%] right-[8rem] rounded-full'
        >
          ♥
        </button>
      ) : null}
      {!isLoading && showDelete ? (
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