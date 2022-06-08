// @ts-ignore
import { BarcodeDetectorPolyfill } from "https://cdn.skypack.dev/@undecaf/barcode-detector-polyfill@0.9.9";

import { Nav } from '../components/Nav';

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col gap-12 items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold text-pink-400">Remix Import issue 🤷🏼‍♂️</h1>
        <h2 className="text-4xl font-bold mb-7 text-slate-400">importing <span className="text-slate-800">from CDN</span></h2>

        <p>
          Perhaps, I'm just missing the instructions on how to import from CDN?
        </p>

        <div>
          <code className='bg-purple-50 py-1 px-2 my-3 block rounded'>
            To see the error, please uncomment the line below in the code.
          </code>
          {/* {console.log('BarcodeDetectorPolyfill', BarcodeDetectorPolyfill)} */}
        </div>
      </div>

      <Nav />
    </main>
  );
}
