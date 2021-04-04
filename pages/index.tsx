import { HomeContainer } from '../containers/Home';



export async function getStaticProps() {
  const getCollection = await fetch('https://jobs.github.com/positions.json?search=node');
  const collection = await getCollection.json();
  return {
    props: {
      collection,
    },
  }
}

export default function Home({collection}) {
  return (
    <HomeContainer { ...collection } />
  );
};