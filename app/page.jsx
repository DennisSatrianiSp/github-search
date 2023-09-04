"use client"
import React,{useState} from "react"
import SectionUser from './sectionUsers';


export default function Home() {
  const [query,setQuery] = useState('');

  const onSearch = (e) =>{
    e.preventDefault();
    const input = e.target[0].value
    setQuery(input);
  }
  return (
   <>
   <div className="min-h-screen bg-gradient-to-r from-cyan-600 to-teal-500 w-100 py-2">
    <div>
      {/* Judul */}
      <div className="text-center text-sm px-2 py-3 rounded-md bg-black text-white w-60 ml-auto mr-auto lg:text-3xl lg:w-2/5">
      <h1>SEARCH GITHUB USERNAME</h1>
    </div>
    {/* Judul End */}

    {/* Kotak penjelasan */}
    <div className='text-justify bg-black text-sm text-white w-64 px-3 py-2 rounded-md mt-3 ml-auto mr-auto lg:text-xl lg:w-1/2'>
      <p>ini adalah sebuah tools untuk mencari username github seseorang. tools ini di buat sebagai latihan rest API dan juga fetch data di Next Js.</p>
    </div>
    {/* Kotak End */}

    {/* Form Search */}
    <div className='mt-3 px-6 lg:w-full py-2 lg:px-3 lg:ml-auto lg:mr-auto'>
      <form action="" onSubmit={onSearch}>
        <input type="text" placeholder='Masukan Username Github' className='w-60 h-7 p-3 rounded-sm lg:w-1/4 lg:h-9 lg:ml-96' />
        <button className='px-4 py-1 ml-2 bg-red-600 text-white rounded-md lg:py-2 lg:px-8'>Cari</button>
      </form>
    </div>
    {/* Form Search End */}

    {/* Section User */}
    <div>
      {query && <SectionUser query={query}/>}
    </div>
    {/* Section User End */}
    </div>
   </div>
   </>
  )
}
