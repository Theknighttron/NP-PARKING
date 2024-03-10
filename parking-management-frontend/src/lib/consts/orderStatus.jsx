import React from 'react'

function orderStatus(status) {
  switch (status) {
    case 'placed':
        return (
            <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-200'>
                {status.replaceAll('_', ' ').toLowerCase()}
            </span>
        )
    case 'confirmed':
        return (
            <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-orange-200'>
                {status.replaceAll('_', ' ').toLowerCase()}
            </span>
        )
    case 'delivered':
        return (
            <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-green-200'>
                {status.replaceAll('_', ' ').toLowerCase()}
            </span>
        )
    case 'out_of_delivery':
        return (
            <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-red-300'>
                {status.replaceAll('_', ' ').toLowerCase()}
            </span>
        )
    case 'out_for_delivery':
        return (
            <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-yellow-200'>
                {status.replaceAll('_', ' ').toLowerCase()}
            </span>
        )
    default:
        return (
            <span className='capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-gray-200'>
                {status.replaceAll('_', ' ').toLowerCase()}
            </span>
        )
  }
}

export default orderStatus