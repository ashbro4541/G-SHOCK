// import  { useEffect, useState } from 'react'
// import Axios from 'axios'
// import { NavLink } from 'react-router-dom';


// const Card_new_drop = () => {

  
//     const [data, setData] =useState([]);



//     const lodeData = async () => {

//         try {
//             const result = await Axios.get('http://localhost:3000/card1')
//             // console.log(result)


//             // set state

//             setData(result.data)


//         } catch (error) {
//             // console.log(Error)
//         }
//     }


//     //axios

//     useEffect(() => {
//         lodeData()

//     }, [])

//     console.log(data)

// return (
//     <>

//         <div className="contener ">
//             <div className="col-12">
//                 <div className="boxhead bg-light color-dark text-center mx-2 "> <h2>New Drops</h2></div>


//             </div></div>

//         <div className="col-md-12 ">
//             <div className="row">
//                 {
//                     data.map((val, index, array) => {
//                         return (
//                             <>
//                                 <div class="card">
//                                     <img src={val.card1img1} class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title">{val.Brand}</h5>
//                                         <p class="card-text">{val.Model}</p>
//                                         <p class="card-text"><small class="text-body-secondary">{val.prise}</small></p>
//                                     </div>
//                                 </div>


//                             </>
//                         )
//                              } )  
//                 }
//             </div></div>

//     </>
//   )
// }

// export default Card_new_drop;
