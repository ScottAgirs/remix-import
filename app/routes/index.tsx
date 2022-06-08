import { ClientOnly } from "remix-utils";

import { Nav } from '~/components/Nav';
import { Scanner } from "~/components/Scanner";

const errorMsg = ` Error: Cannot find module 'https://cdn.jsdelivr.net/npm/@undecaf/zbar-wasm@0.9.10/dist/main.js'
Require stack:
- /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/build/index.js
- /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/@remix-run/serve/index.js
- /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/@remix-run/dev/cli/commands.js
- /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/@remix-run/dev/cli/run.js
- /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/@remix-run/dev/cli/index.js
- /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/@remix-run/dev/index.js
- /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/@remix-run/dev/cli.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/Users/scottagirs/workspace/contributions/wi-hurt/remix-import/app/components/Nav.js:7:79)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at /Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/@remix-run/serve/index.js:43:17
    at Layer.handle [as handle_request] (/Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/express/lib/router/route.js:137:13)
    at next (/Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/express/lib/router/route.js:131:14)
    at next (/Users/scottagirs/workspace/contributions/wi-hurt/remix-import/node_modules/express/lib/router/route.js:131:14)`

export default function Index() {
  if (typeof window !== "undefined") {
    console.log(window);
  }

  return (
    <main className="relative min-h-screen bg-white flex flex-col gap-12 items-center justify-center">
     
      <div>
        <h1 className="text-2xl font-bold text-pink-400">Remix Import issue 🤷🏼‍♂️</h1>
        <h2 className="text-4xl font-bold mb-7 text-slate-400">importing from <code className="text-slate-800">node_modules</code></h2>

        <ClientOnly fallback={<p>Loading...</p>}>
          {() => (
            <>
              <h1>Loaded Client.</h1>

              <p>
                The component below imports
                <code className='bg-purple-50 py-1 px-2 my-3 block rounded'>
                {`import { BarcodeDetectorPolyfill } from "@undecaf/barcode-detector-polyfill";`}
                </code>

                Which results in

                <pre className='bg-slate-700 text-white py-1 px-2 my-3 block rounded-xl max-w-2xl mx-auto overflow-auto'>
                {errorMsg}
                </pre>
              </p>
              {/* <Scanner /> */}
            </>
          )}
        </ClientOnly>


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
        {/* {console.log('BarcodeDetectorPolyfill', BarcodeDetectorPolyfill)} */}
        
      </div>

      <Nav />
    </main>
  );
}

