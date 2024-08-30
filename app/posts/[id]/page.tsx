import React, { Suspense } from 'react'
import Navbar from '@/src/components/Navbar/Navbar'

export default async function postPage() {
  return(
    <main>
    <Suspense fallback="Loading...">
      <Navbar />
    </Suspense>
    </main>
  )
  
}
