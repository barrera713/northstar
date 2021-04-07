import { HomeContainer } from 'containers/Home';
import { sortFromNewest } from 'utils/tools';



export async function getStaticProps() {
  const getCollection = await fetch('https://jobs.github.com/positions.json?search=javascript');
  const collection = await getCollection.json();
  return {
    props: {
      collection,
    },
  }
}

export default function Home({collection}) {

  // sorted collection from newest
  let sortByNewest = sortFromNewest(collection);
  return (
    <HomeContainer { ...sortByNewest } />
  );
};