"use client"
import CategoryComponent from '@/components/screens/Category'
import withAuth from '@/lib/hoc/withAuth'
import React from 'react'

function Category() {
  return (
    <div>
      <CategoryComponent/>
    </div>
  )
}

export default withAuth(Category)
