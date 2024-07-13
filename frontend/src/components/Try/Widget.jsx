import React from 'react';

const Widget = () => {
    return (
        <div className='bg-[#111111]'>
            <div className="min-h-screen bg-background text-foreground">
          <header className="flex justify-between items-center p-4 bg-card">
            <div className="text-2xl font-bold text-[#E7E7E7]">WEPAIR</div>
            <nav className="flex space-x-4">
              <a href="#" className="text-[#E7E7E7] hover:text-primary">Home</a>
              <a href="#" className="text-[#E7E7E7] hover:text-primary">About Us</a>
              <a href="#" className="text-[#E7E7E7] hover:text-primary">Our Services</a>
              <a href="#" className="text-[#E7E7E7] hover:text-primary">Our Fleets</a>
              <a href="#" className="text-[#E7E7E7] hover:text-primary">Cooperation</a>
            </nav>
            <div className="flex items-center space-x-2">
              <button className="bg-secondary text-[#E7E7E7] text-secondary-foreground px-2 py-1 rounded">ENG</button>
              <button className="bg-secondary text-[#E7E7E7] text-secondary-foreground px-2 py-1 rounded">🇬🇧</button>
            </div>
          </header>
          <main className="absolute flex flex-col items-center justify-center bg-[#695448] p-8 bg-card rounded-xl shadow-lg m-5">
            <h1 className="text-4xl font-bold mb-2">Limousine <span className="text-white">VIP Transfers</span></h1>
            <p className="text-lg mb-4 text-muted-foreground">Welcome to our limousine rental website! We offer luxury transportation services for any occasion, from weddings and proms to corporate events and airport transfers.</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 mb-8">Open Fleet</button>
            {/* <img src="https://placehold.co/800x400?text=Limousine+Car" alt="Luxury Limousine Car" className="w-full h-auto mb-8 rounded-lg shadow-lg"/> */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-bold">Pick Up Address</p>
            <p className="text-muted-foreground">From: address, airport, hotel, ...</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-bold">Drop Off Address</p>
            <p className="text-muted-foreground">Distance, Hourly, Flat Rate</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-bold">Pick Up Date</p>
            <p className="text-muted-foreground">APR 19, 2023</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-bold">Pick Up Time</p>
            <p className="text-muted-foreground">12:25 am</p>
          </div>
        </div>
        <button className="bg-accent text-accent-foreground px-6 py-3 rounded mt-8 hover:bg-accent/80">Book Now</button>
          </main>
        </div>
        </div>
    )
}

export default Widget;