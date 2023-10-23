export async function LongWaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return (
    <>
      <span className="font-bold text-xl">Long Wait Component</span>
    </>
  )
}
