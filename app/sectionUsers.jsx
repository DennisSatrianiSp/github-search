import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SectionUsers({ query }) {
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher);
  const loading = !data && !error;
  const totalCount = data? data.total_count : 0;


  return (
    <>
     <div className="min-h-screen">
         {/* Card */}
      <div>
        {loading && "Sedang Loading....Harap Bersabar"}
        {data && totalCount === 0 && <p className='bg-red-700 text-white w-60 ml-auto mr-auto px-3 py-2 mt-10 rounded-md'>Maaf,User tidak di temukan</p>}
        <div className="flex flex-wrap w-auto ml-3">
            {data &&
          data.items.map((user, index) => {
            return (
              <div key={index}>
                <div className='bg-white px-3 py-3 mt-3 mr-auto rounded-sm w-50 ml-3'>
                    <img src={user.avatar_url} alt="" className='w-28 rounded-md' />
                    <h1 className='font-bold'>{user.login}</h1>
                    <h2><Link href={user.html_url}>Repository</Link></h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Card End */}
     </div>
    </>
  );
}
