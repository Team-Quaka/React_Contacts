import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'
import { useRecoilState } from 'recoil'
import { AuthState } from '../state/AuthState'

const Home: NextPage = () => {
  const [Auth, setAuth] = useRecoilState(AuthState)
  return (
    <div className='flex flex-col justify-center items-center h-screen'>{
      Auth.logedIn === false ? 
      <Link href={'/signup'}>
        <Button variant='outlined'>start</Button>
      </Link> : 
      <Link href={'/contacts'}>
        <Button variant='outlined'>start</Button>
      </Link>
    }</div>
  )
}

export default Home
