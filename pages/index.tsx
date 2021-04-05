import { HomeContainer } from 'containers/Home';
import { datePosted } from 'utils/tools';



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
  let newest = collection.sort((a: any, b: any) => datePosted(a.created_at) - datePosted(b.created_at));
  console.log('NEWEST ', newest)
  return (
    <HomeContainer { ...newest } />
  );
};