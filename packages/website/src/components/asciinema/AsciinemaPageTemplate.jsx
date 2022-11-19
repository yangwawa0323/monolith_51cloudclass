import React from 'react'
import Editor from '@react-page/editor'

import { cellPlugins } from '../../plugins';
import Navbar from '../common/navbar'
import Footer from '../common/footer'


const AsciinemaPage = ({ pageContext }) => {
  const { content } = pageContext
  return (
    <div>
      <Navbar />
      <div className='p-24'>
        <Editor
          cellPlugins={cellPlugins}
          value={content} readOnly />
      </div>
      <Footer />
    </div>
  )
}

export default AsciinemaPage