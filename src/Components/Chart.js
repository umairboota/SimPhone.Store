import React from 'react'


export default function Chart({image,title}) {
  return (
    <div class="mt-8 my-8 inline-flex">
          <div className=" ">
            <img className="h-12  " src={image} alt="Loading..." />
            <a href='/' className="text-2xl ">{title}</a>
            {/* <p className='py-2'><br />
              Fusce non hendrerit ante. Curabitur in libero neque. <br /> Nulla at
              vestibulum massa. <br /> Fusce feugiat tellus fermen tum.
            </p> */}
          </div>
        </div>
  )
}
