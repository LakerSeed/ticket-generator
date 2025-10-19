import Item from './formItem'

function main(){

    return(
        <div className=" flex items-center flex-col">
            <h1 className='text-white font-bold text-5xl w-3xl text-center mt-1.5 mb-5'>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className='text-gray-400 mb-8'>Secure your spot at next year's biggest coding conference.</p>
            <form action="" className=" w-100 flex flex-col h-fit">
                <Item texto='Upload File' nome='file' type='file' description='Upload you photo (JPG or PNG, masx size: 500KB).'
                 className=" border-gray-100 border-2 border-dashed bg-gray-500 opacity-30 rounded-lg h-30"/>
                <Item texto='Full Name' nome='name' type='textarea' className=" border-gray-500 border-2 bg-gray-800 opacity-80 backdrop-blur-2 rounded-lg h-12 mb-3 text-white"/>
                <Item texto='Email Address' nome='email' type='textarea' className=" border-gray-500 border-2 bg-gray-800 rounded-lg h-12 mb-3 text-white"/>
                <Item texto='Github Username' nome='github' type='textarea' className=" border-gray-500 border-2 bg-gray-800 rounded-lg h-12 mb-7 text-white"/>
                <button type="submit" className=' bg-orange-500 h-12 rounded-xl font-bold text-indigo-950 p-2 mb-30'>Generate My Ticket</button>
            </form>
        </div>
    )
}
export default main