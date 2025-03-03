"use client"
import CreateProductComponent from '@/components/screens/CreateProduct'
import withAuth from '@/lib/hoc/withAuth'
import React from 'react'

function CreateProduct() {
  return (
    <div>
      <CreateProductComponent/>
    </div>
  )
}

export default withAuth(CreateProduct)
