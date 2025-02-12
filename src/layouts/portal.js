export default function PortalLayout({ children, geistSans, geistMono }) {
    return (
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
    
            {/* <nav className=" flex justify-center h-[100px] ">
              <div className="w-[1240px] flex items-center justify-between">
                <div className="flex items-center w-[577px] justify-between">
                  <Image
                    aria-hidden
                    src="/icon-app.png"
                    alt="Icon app"
                    width={40}
                    height={40}
                    className=""
                  />
                  <div className="flex w-[340px] justify-between">
                    <p className="text-purple-700">Home</p>
                    <p>Artikel</p>
                    <p>Series</p>
                  </div>
                </div>
                <div className="w-[279px] flex justify-between">
                  <button className="bg-purple-200 px-[36px] py-[10px] rounded-[47px]">
                    <p className="text-purple-700">Sign in</p>
                  </button>
                  <button className="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
                    <p className="text-white">Sign Up</p>
                  </button>
                </div>
              </div>
            </nav> */}
    
            {/* <nav className="flex justify-center h-[80px] bg-red-600">
              <div className="flex items-center">
                <div className="flex items-center">
                <Image
                  aria-hidden
                  src="/icon-app.png"
                  alt="Icon app"
                  width={40}
                  height={40}
                />
                </div>
                
              </div>
            </nav> */}
    
    
            {children}
          </body>
        </html>
      );
}
