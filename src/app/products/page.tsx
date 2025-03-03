'use client'
import withAuth from '@/lib/hoc/withAuth'
import ProductComponent from '@/components/screens/Product'
import React from 'react'

function Product() {
  return (
    <div>
      <ProductComponent/>
    </div>
  )
}

export default withAuth(Product)
