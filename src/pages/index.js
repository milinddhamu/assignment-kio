import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@mui/material/Button';
import DoughnutChart from '@/components/DoughnutChart';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import CreateMediaAd from '@/components/CreateMediaAd';
import CreateAd from '@/components/CreateAd';
import {useState} from "react"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main >
      <Dashboard />
    </main>
    </>
  )
}
