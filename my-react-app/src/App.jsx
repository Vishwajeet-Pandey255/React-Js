// import React from 'react'
// import Home from './home';
// import New from './Comp/New'
// let count = 0;
// export const App = () => {
//   return (
//     <div>
//       <h1>hellow {count}</h1>
//       <p>Vishwajeet Pandey</p>
//       <Home></Home>
//       <New/>
//     </div>
//   )
// }

// export default App


//<--------------------------------------------------------------->

// import React from 'react'
// // import './Comp/My.css'
// const App = () => {

//   let arr = [1,2,3,4,5,6,7,8]
//   return (
//     <div>
//       {
//         arr.map((a,b)=>{
//           return(<>
//           <li>{a} {b}</li>
//           </>)
//         })
//       }
//     </div>
//   )
// }

// export default App


//<------------------------------------------------------------------>


import React from 'react'
import Home from './Home'

const App = () => {
  let a='Manish'
  let b=666
  return (
    <>   
    <Home data={a}/>
    </>
  )
}

export default App

// import React from 'react'

// const App = () => {
    
//     let arr =[1,2,3,4,5,6];
//   return (
//     <>
//     <div>
//         {
//             arr.map((a)=>{
//                 return( <>
//                 <li>{a}</li> 
//                 </>)
                
//             })
//         }
//     </div>
//  </> )
  
// }

// export default App
