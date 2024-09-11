// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <h1>Manish </h1>
//         <h2>Vishwajeet</h2>
//     </div>
//   )
// }

// export default Home


import React from 'react'
import Ghar from './Comp/Ghar'

const Home = (chotabheem) => {
  return (
    <div>
         {
          chotabheem.data
         }
        <Ghar b={chotabheem.data}/>
    </div>
  )
}

export default Home