'use client'
import withAuth from '@/lib/hoc/withAuth'
import DashboardComponent from '@/components/screens/Dashboard'
import React from 'react'

function Dashboard() {
  return (
    <div>
      <DashboardComponent/>
    </div>
  )
}

export default withAuth(Dashboard)
