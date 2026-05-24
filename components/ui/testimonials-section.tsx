'use client';

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <div className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black">What Our Students Say</h1>
            <p className="text-sm md:text-base text-black mt-4">Join thousands of successful students who transformed their careers with us</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5 text-left">
            {/* Card 1 */}
            <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white">
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203" fill="#2563EB"/>
              </svg>
              <div className="flex items-center justify-center mt-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm mt-3 text-black">Chatura Solutions helped me crack my Google interview. The mock interviews were incredibly realistic and the feedback was invaluable. I landed my dream job!</p>
              <div className="flex items-center gap-3 mt-4">
                <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100" alt="Donald Jackman" />
                <div>
                  <h2 className="text-lg text-black font-medium">Donald Jackman</h2>
                  <p className="text-sm text-black">SWE @ Google</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white">
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203" fill="#2563EB"/>
              </svg>
              <div className="flex items-center justify-center mt-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm mt-3 text-black">The upskilling courses at Chatura Solutions are comprehensive and taught by industry experts. I was able to transition from engineering to product management smoothly.</p>
              <div className="flex items-center gap-3 mt-4">
                <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" alt="Richard Nelson" />
                <div>
                  <h2 className="text-lg text-black font-medium">Richard Nelson</h2>
                  <p className="text-sm text-black">Product Manager @ Microsoft</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white">
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203" fill="#2563EB"/>
              </svg>
              <div className="flex items-center justify-center mt-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm mt-3 text-black">The educational consultation service helped me choose the right MBA program and craft my application strategy. I got accepted to my top choice!</p>
              <div className="flex items-center gap-3 mt-4">
                <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" alt="James Washington" />
                <div>
                  <h2 className="text-lg text-black font-medium">James Washington</h2>
                  <p className="text-sm text-black">MBA @ IIM Ahmedabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
