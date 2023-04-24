
import './App.css';

function App() {
  return (
    <div className="max-w-32xl m-h-screen mt-16 mx-auto flex items-center justify-center ">


       
       <GetApp/>
      
    
    </div>
  );
}

export default App;

function GetApp(){
  return(
    <section className='flex flex-col space-y-4 md:flex-row md:space-x-14 md:space-y-0 items-center justify-center  '>
      <div>
    <div className='card-container  w-90 bg-slate-50 rounded-lg shadow-lg pt-3 p-10 text-center transition-all duration-300 hover:-translate-y-2 '>
    {/* card top box */}
      <div className='card-top p-3'>
        <p className='max-w-sm text-md text-slate-400 font-bold mb-6'>FREE</p>
        <p className='text-sm text-slate-700  '><span className='text-6xl font-medium font-sans text-slate-800'>$0</span>/month</p>
      </div>
      <div className='card-details flex flex-col space-y-4 text-left border-t-2 border-slate-700'>    
        <div className='mt-8'><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Single user</span></div>
        <div ><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg '>5GB Storage</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Unlimited Public Projects</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Community Access</span></div>
        <div   className='text-slate-400'><ion-icon name="close-outline"></ion-icon><span className='p-2 text-lg'>Unlimited Private Projects</span></div>
        <div  className='text-slate-400'><ion-icon name="close-outline"></ion-icon><span className='p-2 text-lg'>Dedicated Phone Support</span></div>
        <div  className='text-slate-400'><ion-icon name="close-outline"></ion-icon><span className='p-2 text-lg'>Free Subdomain</span></div>
        <div  className='text-slate-400'><ion-icon name="close-outline"></ion-icon><span className='p-2 text-lg'>Monthly Status Reports</span></div>
      <div className='pt-6 '>
       <button className='border-none w-full p-3 text-lg bg-blue-500 rounded-2xl  transition-all duration-300
       hover:-translate-y-1 text-white'>Button</button>
       </div>
      </div>
    </div>
    </div>
{/* standard */}
    <div>
    <div className='card-container  w-90 bg-slate-50 rounded-lg shadow-lg pt-3 p-10 text-center transition-all duration-300 hover:-translate-y-2 '>
    {/* card top box */}
      <div className='card-top p-3'>
        <p className='max-w-sm text-md text-slate-400 font-bold mb-6'>PLUS</p>
        <p className='text-sm text-slate-700  '><span className='text-6xl font-sans font-medium text-slate-800'>$9</span>/month</p>
      </div>
      <div className='card-details flex flex-col space-y-4 text-left border-t-2 border-slate-500'>    
        <div className='mt-8'><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg '>5 users</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg font-bold'>50GB Storage</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Unlimited Public Projects</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Community Access</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Unlimited Private Projects</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Dedicated Phone Support</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Free Subdomain</span></div>
        <div className='text-slate-400'><ion-icon name="close-outline"></ion-icon><span className='p-2 text-lg'>Monthly Status Reports</span></div>
      <div className='pt-6 '>
       <button className='border-none w-full p-3 text-lg bg-blue-500 rounded-2xl  transition-all duration-300
       hover:-translate-y-1 text-white'>Button</button>
       </div>
      </div>
    </div>
    </div>

{/* Premium */}
    <div>
    <div className='card-container  w-90 bg-slate-50 rounded-lg shadow-lg pt-3 p-10 text-center transition-all duration-300 hover:-translate-y-2 '>
    {/* card top box */}
      <div className='card-top p-3'>
        <p className='max-w-sm text-md text-slate-400 font-bold mb-6'>PRO</p>
        <p className='text-sm text-slate-700  '><span className='text-6xl font-sans font-medium text-slate-800'>$49</span>/month</p>
      </div>
      <div className='card-details flex flex-col space-y-4 text-left border-t-2 border-slate-500'>    
        <div className='mt-8'><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg font-bold'>Unlimited users</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg font-bold'>150GB Storage</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Unlimited Public Projects</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Community Access</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Unlimited Private Projects</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Dedicated Phone Support</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg font-bold'>Unlimited Free Subdomains</span></div>
        <div><ion-icon name="checkmark-outline"></ion-icon><span className='p-2 text-lg'>Monthly Status Reports</span></div>
      <div className='pt-6 '>
       <button className='border-none w-full p-3 text-lg bg-blue-500 rounded-2xl  transition-all duration-300
       hover:-translate-y-1 text-white'>Button</button>
       </div>
      </div>
    </div>
    </div>

    </section>
  )
}
