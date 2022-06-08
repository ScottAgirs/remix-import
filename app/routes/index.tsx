import { BarcodeDetectorPolyfill } from "https://cdn.skypack.dev/@undecaf/barcode-detector-polyfill@0.9.9";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col gap-12 items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-pink-400">Remix Import issue</h1>
        <p>
          When importing the regular way, the app fails with:
        </p>
        <p>
          <a
            className="text-pink-400 hover:text-pink-500"
            target="_blank"
            href="https://remix.run/docs/en/v1/pages/gotchas#importing-esm-packages"
            rel="noreferrer"
          >
            the ESM Package-Gotcha, as seen here.
          </a>
        </p>
        <p>
          When provided the fix described in the docs there's a different error. 🤷🏼‍♂️
        </p>
        <p>
          <code className='bg-purple-50 py-1 px-2 my-3 block rounded'>
            To see the error, please uncomment the line below in the code.
          </code>
          {console.log('BarcodeDetectorPolyfill', BarcodeDetectorPolyfill)}
        </p>
      </div>
    </main>
  );
}
