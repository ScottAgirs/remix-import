import { BarcodeDetectorPolyfill } from "@undecaf/barcode-detector-polyfill";

import { Nav } from '~/components/Nav';

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col gap-12 items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold text-pink-400">Remix Import issue 🤷🏼‍♂️</h1>
        <h2 className="text-4xl font-bold mb-7 text-slate-400">importing from <code className="text-slate-800">node_modules</code></h2>

        <div>
          App fails when importing an installed ESM (?) package with the <a target="_blank" className="text-pink-400 hover:text-pink-500" href="https://remix.run/docs/en/v1/pages/gotchas#importing-esm-packages" rel="noreferrer">Remix docs instructions</a>:

          <pre className="border rounded-xl my-5 bg-slate-600 text-white py-4 px-3 space-y-5">
            <div>// remix.config.js</div>

            <div>
              <div>module.exports = {`{`}</div>
                <div>  ...</div>
                <div>  serverDependenciesToBundle: ["@undecaf/barcode-detector-polyfill"],</div>
                {`};`}
              <div>
            </div>
            </div>
          </pre>
        </div>

        <p>
          <code className='bg-purple-50 py-1 px-2 my-3 block rounded'>
            To see the error, please uncomment the line below in the code.
          </code>
        </p>
      </div>

      <Nav />
    </main>
  );
}

