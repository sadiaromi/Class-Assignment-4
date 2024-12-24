export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="grid grid-cols-12 gap-2 min-h-screen">
        
        <div className="col-span-2 bg-yellow-400">
          <h1 className="p-4 text-center">Nav</h1>
        </div>

        <div className="col-span-10 grid grid-rows-[auto_1fr] grid-cols-9 gap-2">
          {/* Header*/}
          <div className="col-span-9 bg-yellow-400 h-20">
            <h1 className="p-4 text-center">Header</h1>
          </div>

          <div className="col-span-9 grid grid-cols-8 gap-2">
            {/* Article */}
            <div className="col-span-7 bg-yellow-400">
              <h1 className="p-4 text-center">Article</h1>
            </div>

            {/* Ads */}
            <div className="col-span-1 bg-yellow-400">
              <h1 className="p-4 text-center">Ads</h1>
            </div>
          </div>

          {/* Footer */}
          <div className="col-span-9 bg-yellow-400 h-20">
            <h1 className="p-4 text-center">Footer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
