import Head from 'next/head'
import React from 'react';




interface HomeContainerProps {}


export const HomeContainer: React.FC<HomeContainerProps> = ({}) => { 
    return (
        <div >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>
            Strivedash
          </h1>
        </main>
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo"/>
          </a>
        </footer>
      </div>
    )
}