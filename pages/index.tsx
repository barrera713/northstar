import { HomeContainer } from 'containers/Home';
import { sortFromNewest } from "utils/tools";
import React from "React";

/*
  // use state to store build time data
  // use useeffect hook to update data when user interacts with form
*/



export async function getStaticProps() {
  
  const initialCollection = await fetch("https://jobs.github.com/positions.json?search=node");
  const collectionJson = await initialCollection.json();

  return {
    props: {
      collectionJson,
    },
  }
}

export default function Home({ collectionJson }) {

  // sorted collectionJson from newest
  let sortByNewest = sortFromNewest(collectionJson);
  return (
    <HomeContainer { ...sortByNewest } />
  );
};