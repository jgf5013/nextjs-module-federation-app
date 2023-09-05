import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const { query: { uid } } = context
  const res = await fetch(`${process.env.BASE_URL}/api/user/${uid}`)
  const user = await res.json()
 
  return {
    props: { user }
  };
}
 
export default function Page({ user }) {
  console.log('user=', user)
  return (
    <div>
      <span>{user.first_name} {user.last_name}</span>
      <p>New Id: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
    </div>
  )
}