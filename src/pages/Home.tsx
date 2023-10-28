import Select from '../components/Select';
import Fact from '../components/Fact';
import useFetchFacts from '../hooks/useFetchFacts';
import usePeriodJobs from '../hooks/usePeriodJobs';
import { saveFavourite } from '../lib/ipc';
import { notify } from '../lib/notification';

const Home = () => {
  const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
  const customNotify = (item: [{ setup: string }]) => {
    item[0] && notify('New feed!', item[0].setup);
  };
  const postHandle = (res: object[]) => {
    return res.map(
      (item: { id: string; setup: string; punchline: string }) => ({
        id: String(item.id),
        text: `${item.setup} ${item.punchline}`,
        setup: item.setup,
      })
    );
  };
  const { facts, isLoading, forceReload } = useFetchFacts(
    apiUrl,
    postHandle,
    customNotify
  );
  const periodJob = forceReload;
  const options = [
    { value: '5', text: 'Every 5 minutes' },
    { value: '10', text: 'Every 10 minutes' },
    { value: '30', text: 'Every 30 minutes' },
    { value: '60', text: 'Every 60 minutes' },
    { value: '20000', text: 'Every 20000 minutes' },
  ];
  const { setPeriod } = usePeriodJobs(options[0].value, periodJob);
  const favouriteHandle = (fact: { id: string; text: string }) => {
    saveFavourite(fact.id, fact.text);
    forceReload();
  };
  const deleteHandle = forceReload;

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Select label='Update period' options={options} onChange={setPeriod} />
      <Fact
        facts={facts}
        isLoading={isLoading}
        showFavourite
        showDelete
        favouriteHandle={() => favouriteHandle(facts[0])}
        deleteHandle={deleteHandle}
      />
    </div>
  );
};

export default Home;
