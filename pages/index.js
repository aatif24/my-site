import Head from 'next/head'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Aatif | JS dev</title>
        <meta name="description" content="a javascript developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-full'>
        <div className='flex justify-center items-center h-full' >
          <div className='w-48'>
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_7psw7qge.json"
            >
            </Player>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
