import { deleteFavourite } from '../lib/ipc';
import useGetFavourites from '../hooks/useGetFavourites';
import Fact from '../components/Fact';

const Favourite = () => {
  const { facts, setFacts, isLoading } = useGetFavourites();

  const deleteHandle = (factId: string) => {
    setFacts(facts.filter((f) => f.id != factId));
    deleteFavourite(factId);
  };

  return (
    <div className='flex flex-col items-center h-full overflow-y-scroll'>
      {isLoading ? (
        <Fact
          facts={[]}
          isLoading={true}
          showFavourite={false}
          showDelete={false}
        />
      ) : (
        facts.map((fact) => (
          <Fact
            key={fact.id}
            facts={[fact]}
            isLoading={false}
            showFavourite={false}
            showDelete
            deleteHandle={() => deleteHandle(fact.id)}
          />
        ))
      )}
    </div>
  );
};

export default Favourite;
