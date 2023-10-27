import Select from '../components/Select';
import Fact from '../components/Fact';
import useFetchFacts from '../hooks/useFetchFacts';
import usePeriodJobs from '../hooks/usePeriodJobs';
import { saveFavorite } from '../lib/ipc';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { facts, isLoading, forceReload } = useFetchFacts();
  const periodJob = forceReload;
  const options = [
    { value: '5', text: 'Every 5 minutes' },
    { value: '10', text: 'Every 10 minutes' },
    { value: '30', text: 'Every 30 minutes' },
    { value: '60', text: 'Every 60 minutes' },
    { value: '20000', text: 'Every 20000 minutes' },
  ];
  const { setPeriod } = usePeriodJobs(options[0].value, periodJob);
  const favoriteHandle = (fact: { _id: string; text: string }) => {
    saveFavorite(fact._id, fact.text);
    forceReload();
  };
  const deleteHandle = forceReload;

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Select label='Update period' options={options} onChange={setPeriod} />
      <Fact
        facts={facts}
        isLoading={isLoading}
        showFavorite
        showDelete
        favoriteHandle={() => favoriteHandle(facts[0])}
        deleteHandle={deleteHandle}
      />
    </div>
  );
};

export default Home;
