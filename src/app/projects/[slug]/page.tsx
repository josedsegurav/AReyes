export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string, post: object }>
  }) {
    const slug = (await params).slug
    const post = (await params).post
    return <div>My Post: {name}</div>
  }