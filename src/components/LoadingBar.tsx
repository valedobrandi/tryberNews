export default function LoadingBar() {
    return (
      <div className="max-w-[700px] mx-auto mt-28">
        <div className="flex-start flex h-3.5 w-full overflow-hidden rounded-full border border-gray-900/10 bg-gray-900/5 p-1 font-sans text-xs font-medium">
        <div className="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-gray-900 rounded-full"></div>
      </div>
      </div>
    )
}