import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { AuthState } from '../state/AuthState'

const Home: NextPage = () => {
  const [Auth, setAuth] = useRecoilState(AuthState)
  return (
    <div>start template</div>
  )
}

export default Home
