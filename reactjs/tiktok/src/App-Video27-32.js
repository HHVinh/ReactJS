import { useState } from "react";
import Content from "./Content";

// *****Video29 - useTate*****

// function App() {

//   const [counter, setCounter] = useState(1)

//   const handleIncrease = () => {
//     setCounter(counter + 1)
//   }

//   return (
//     <div className="App" style={{textAlign: "center"}}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }



// function App() {

//   const [info, setInfo] = useState({
//     name: 'Nguyễn Văn A',
//     age: '20',
//     address: 'Hồ Chí Minh, Việt Nam'
//   })

//   const handleUpdate = () => {
//     setInfo(prev => ({
//       ...prev,
//       bio: 'Thích chơi thể thao!'
//     }))
//   }

//   return (
//     <div className="App" style={{textAlign: "center"}}>
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }



                    






// *****Video30 - Two-way binding*****

// const gifts = [
//   'Mắt kính',
//   'Đồ bơi',
//   'Phao bơi',
// ]

// function App() {

//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)

//     setGift(gifts[index]);
//   }

//   return (
//     <div className="App" style={{textAlign: "center"}}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Quay thưởng</button>
//     </div>
//   );
// }



// function App() {

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = () => {
//       // CALL API
//     console.log({
//       name,
//       email
//     })
//   }

//   return (
//     <div style={{textAlign: "center", padding:32}}>
//       <input
//         value = {name}
//         onChange = {e => setName(e.target.value)}
//         placeholder="Nhập họ và tên"
//       />

//       <input
//         value = {email}
//         onChange = {e => setEmail(e.target.value)}
//         placeholder="Nhập email"
//       />

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }



// // Response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

// function App() {
//   const [checked, setChecked] = useState(1)

//   const handleSubmit = () => {
//     // CALL API
//     console.log({ip: checked});
//   }

//   return (
//     <div style={{textAlign: "center", padding:32}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input 
//             type="radio"
//             checked = {checked === course.id}
//             onChange={() => setChecked(course.id)}
//             />
//           {course.name}
//         </div>
//       ))}
 
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }



// // Response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

// function App() {
//   const [checked, setChecked] = useState([])

//   console.log(checked)

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if(isChecked) {
//         return checked.filter(item => item !== id)
//       } else {
//         return [...prev, id]
//       }
//     })
//   }

//   const handleSubmit = () => {
//     // CALL API
//     console.log({ip: checked});
//   }

//   return (
//     <div style={{textAlign: "center", padding:32}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input 
//             type="checkbox"
//             checked = {checked.includes(course.id)}
//             onChange={ () => handleCheck(course.id)}
//             />
//           {course.name}
//         </div>
//       ))}
 
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }










// // *****Video31 - Todolist with useState****
// function App() {
//   // const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//   // // JSON.parse(a) => chuyển chuỗi a thành mảng

//   // const [job, setJob] = useState('')
//   // const [jobs, setJobs] = useState(storageJobs ?? [])
//   // // a ?? b => Nếu a = rỗng hoặc undefined thì trả về b
//   // // a || b => Nếu a = false, rỗng, NAN hoặc 0 thì trả về b


//   // 6 dòng trên chuyển thành bên dưới để đoạn JSON.parse không bị lãng phí
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     return storageJobs ?? []
//   })
//   // a ?? b => Nếu a = rỗng hoặc undefined thì trả về b
//   // a || b => Nếu a = false, rỗng, NAN hoặc 0 thì trả về b

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       // Save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       // JSON.stringify(a) => chuyển mảng a thành chuỗi

//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//   })
//     setJob('')
//   }

//   console.log(job)

//   return (
//     <div style={{textAlign: "center", padding:32}}>
//       <input 
//         value={job} 
//         onChange={e => setJob(e.target.value)}
//       />

//       <button onClick={handleSubmit}>App</button>

//       <ul style={{listStyle: 'none'}}>
//         {jobs.map((job, index) => (
//           <li key ={index}>{job}</li>
//         ))}
//       </ul>

//     </div>
//   );
// }









// // *****Video32 - Mounted & Unmounted*****
// // Import ở đầu file
// function App() {
//   const[show, setShow] = useState(false)
//   console.log(show)

//   return (
//     <div style={{textAlign: "center", padding:32}}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   );
// }









// *****Video33 - React useEffect hook*****

function App() {
  const[show, setShow] = useState(false)
  console.log(show)

  return (
    <div style={{textAlign: "center", padding:32}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}
export default App;
