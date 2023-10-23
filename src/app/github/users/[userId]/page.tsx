import { Suspense } from 'react'

import { GithubProfile, LongWaitComponent } from '@/components'

interface UserProps {
  params: { userId: string }
}

export default function User({ params }: UserProps) {
  const { userId } = params

  return (
    <main>
      <h1>User Page</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ad
        necessitatibus perferendis tempore, quos voluptatibus, quo impedit,
        dolorum provident quasi corrupti cum illum in at. Officia repellendus ex
        eveniet? Ullam!
      </p>

      <Suspense fallback={<span>Loading...</span>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<span>Loading...</span>}>
        <GithubProfile userId={userId} />
      </Suspense>
    </main>
  )
}
