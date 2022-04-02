import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function index() {
   return (
      <Layout>
         <div className='md:m-0 mx-10'>
            <Seo title='Portfolio'/>
            <h1 className="text-white text-4xl text-center">this is portfolio </h1>
         </div>
      </Layout>
   )
}
