interface GithubProfileProps {
  userId: string
}

export async function GithubProfile({ userId }: GithubProfileProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch(`https://api.github.com/users/${userId}`)
  const user = await response.json()

  return (
    <div>
      <h1>User</h1>

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  )
}
