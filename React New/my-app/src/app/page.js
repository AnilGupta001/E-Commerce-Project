"use client"
import Header from './Header';
import { useState } from 'react';
import { useEffect } from 'react';
import ImageSlider from './ImageSlider';
import { BottomPart } from './BottomPart';

export default function Home() {
  const arr = ["https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/370011363_779009090896533_827709121359574602_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=075rhFEng1wAX_hsmW5&_nc_ht=scontent.fbho1-1.fna&oh=00_AfBuRxft5s_D_fHwSw8s_3btTczRerkIcC0fstBEHcjpNw&oe=6505D3D8",
  "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/369874704_779009010896541_9122823887049554687_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=rZWdEUrShJcAX_wETDn&_nc_ht=scontent.fbho1-2.fna&oh=00_AfDISrGl49hw7osYk76ISTfB99xsqltxxhtXK-da5dVG2A&oe=6506B541"
    ,"https://scontent.fbho1-1.fna.fbcdn.net/v/t45.1600-4/374423247_6444542923818_3326103238248657892_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=102&ccb=1-7&_nc_sid=67cdda&_nc_ohc=BECa5REOWGsAX-rg6_m&_nc_ht=scontent.fbho1-1.fna&oh=00_AfAievpaz0VPwKLRezciD-VFIgQfeDJxEXMWqVMn-Ro8uA&oe=650687C0","https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/378283663_792044016259707_589417676546419127_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1o_rexM4chwAX8Ky1NS&_nc_ht=scontent.fbho1-2.fna&oh=00_AfD9g9j4vIw7swjwchiewRuKCLNQTOM-6F2QCPsoVzHI-A&oe=65068580"
  ,
  "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/370011363_779009090896533_827709121359574602_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=075rhFEng1wAX_hsmW5&_nc_ht=scontent.fbho1-1.fna&oh=00_AfBuRxft5s_D_fHwSw8s_3btTczRerkIcC0fstBEHcjpNw&oe=6505D3D8",
  "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/369874704_779009010896541_9122823887049554687_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=rZWdEUrShJcAX_wETDn&_nc_ht=scontent.fbho1-2.fna&oh=00_AfDISrGl49hw7osYk76ISTfB99xsqltxxhtXK-da5dVG2A&oe=6506B541"
    ,"https://scontent.fbho1-1.fna.fbcdn.net/v/t45.1600-4/374423247_6444542923818_3326103238248657892_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=102&ccb=1-7&_nc_sid=67cdda&_nc_ohc=BECa5REOWGsAX-rg6_m&_nc_ht=scontent.fbho1-1.fna&oh=00_AfAievpaz0VPwKLRezciD-VFIgQfeDJxEXMWqVMn-Ro8uA&oe=650687C0","https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/378283663_792044016259707_589417676546419127_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1o_rexM4chwAX8Ky1NS&_nc_ht=scontent.fbho1-2.fna&oh=00_AfD9g9j4vIw7swjwchiewRuKCLNQTOM-6F2QCPsoVzHI-A&oe=65068580"];
    const images = ["https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/358552977_813932906834537_4571279197432570435_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=eV3L4-Qv0oUAX9_H0xt&_nc_ht=scontent.fbho1-4.fna&oh=00_AfAdBN0SZxV8RA6s-OkvA2z2uSbkgXHg_HsVL8o-RI9mjQ&oe=65075CD0"
    ,"https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/358645503_813551836872644_6751871621137109162_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=crDp5RXnqqEAX9-GKdQ&_nc_ht=scontent.fbho1-1.fna&oh=00_AfDd95pBIsgLct316sXrDTcFoIQF6-r_ODkJauCWJPwXtw&oe=65064FBD",
    ,"https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/358146313_811307533763741_5103644562873139733_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=exNQl26g_fwAX9BxraC&_nc_ht=scontent.fbho1-4.fna&oh=00_AfDiEbaKDLaZTdQ-Q8JMc6Q3hgiqgwisitQoFMMjwaf8iw&oe=65077720"
     ,"https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/358599293_810723767155451_2681347762955934183_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=DX4ADCOkwqAAX_zm-em&_nc_ht=scontent.fbho1-2.fna&oh=00_AfBTNdWKR9cS5QTyem3zBnasmcNk6m6D2E485r08xKQVKg&oe=65062903"
    ,"https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/357580549_809012370659924_4838056660164185068_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=FRcN3yTNMRQAX91MRaS&_nc_ht=scontent.fbho1-4.fna&oh=00_AfCvaVp2scI0LoZPSUXIUWgJ4ukR3WHnvCCRDJsv_7GVfg&oe=65061045"
    ,"https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/357375806_807860534108441_6888423668152432171_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=GSx-RgnulWIAX85x1m_&_nc_ht=scontent.fbho1-1.fna&oh=00_AfC86TZzABv0wlYee2FY9zEAUK4HS8kJJ-ZBMxV00hSdHQ&oe=650623FC"];
    
    
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  setInterval(() => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length-1);
   }, 1000);
  

    // Change interval duration as needed
 }, []);
  return (
    <div className="w-full h-200">
      <nav className='mb-10'>
        <Header />
      </nav>
      
      <div className='bg-[url("https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/377880272_204259189323669_3425504590854691836_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=pNSMapUERRYAX-4IQNG&_nc_ht=scontent.fbho1-4.fna&oh=00_AfCaHFnTHmSBDjrfH-eMCVYX_irVFITTcUFDxoir_Ni5_w&oe=65063ED5")]'>
        <div className='flex justify-center p-10'>
          <img width={100} className='rounded-full' src="https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/250924339_424464512448047_8930160149564044045_n.png?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=YOQSBqJ4b78AX-zGJZP&_nc_ht=scontent.fbho1-3.fna&oh=00_AfCIU8LfLmLXNTagwJzkVmviqWqHvlmNkLaqxOZCjqJ0rA&oe=6505C539" alt="" />
          <h1 className="bg-gradient-to-r from-purple-600 to-pink-500 text-white pt-2 px-8 py-4 mt-8 font-extrabold text-2xl md:text-xl sm:text-xl rounded-full shadow-2xl flex items-center justify-center">
  Welcome to  <span className="text-yellow-400 ">World Book of Star Records</span>
</h1>


        </div>
      </div>
      <div className='w-full h-2 bg-white '></div>
      <div className='flex flex-col items-center justify-center w-auto h-300px text-center m-auto bg-black'>
        
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold">
⭐ Our ONGOING Programs ⭐
  </h2>
</div>

 <div className='p-5'>
 <ImageSlider images={arr}></ImageSlider>
  </div>
  </div>
  <div>
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg shadow-lg">
  <h2 className="animate-pulse pl-3 pr-3 mt-1 font-bold text-black bg-slate-50 sm:h-20 rounded-3xl text-2xl flex items-center">
    <span className="text-red-500 mr-2">🔴</span> Our Completed Events and Awards <span className="text-red-500 ml-2">🔴</span>
  </h2>
</div>


<div className='bg-black p-4'>
<ImageSlider images={images} ></ImageSlider>
</div>
   </div>
   <div className='item-center m-auto clear-right pt-5 '> 
    <h1 className='p-2 font-bold text-2xl flex flex-col items-center justify-center w-auto h-300px text-center m-auto' >Owr Motive</h1>
    <hr/>
    <p className=' justify-stretch start-0 overflow-auto text-2xl text-justify'>
    The "World Book of Star Records - India" sounds like an organization dedicated to cataloging and verifying world records, particularly those achieved in India. Similar to the Guinness World Records, which is a well-known international organization that recognizes and records various achievements and feats worldwide, it seems that the "World Book of Star Records - India" focuses on Indian achievements and records.
These types of organizations play an important role in recognizing and celebrating exceptional achievements and talents, whether they are related to sports, entertainment, science, or any other field. They often maintain a record book or database of these accomplishments and may provide certificates or awards to record holders.
    </p>
<hr />

   </div>
   <about>
   <BottomPart></BottomPart>
   </about>
    </div>
  );
}
