import { HomeContainer } from '../containers/Home';



export async function getStaticProps() {
  const getCollection = await fetch('https://jobs.github.com/positions.json?description=python&full_time=true&location=sf');
  const collection = await getCollection.json();
  return {
    props: {
      collection,
    },
  }
}

export default function Home({collection}) {
  console.log('GET STATIC PROPS', collection)
  return (
    <HomeContainer { ...collection } />
  )
}