import { deleteFavorite } from '../lib/ipc';
import useGetFavorites from '../hooks/useGetFavorites';
import Fact from '../components/Fact';

const Favorite = () => {
  const { facts, setFacts, isLoading } = useGetFavorites();

  const deleteHandle = (factId: string) => {
    setFacts(facts.filter((f) => f.id != factId));
    deleteFavorite(factId);
  };

  return (
    <div className='flex flex-col items-center h-full overflow-y-scroll'>
      {isLoading ? (
        <Fact
          facts={[]}
          isLoading={true}
          showFavorite={false}
          showDelete={false}
        />
      ) : (
        facts.map((fact) => (
          <Fact
            key={fact.id}
            facts={[fact]}
            isLoading={false}
            showFavorite={false}
            showDelete
            deleteHandle={() => deleteHandle(fact.id)}
          />
        ))
      )}
    </div>
  );
};

export default Favorite;
