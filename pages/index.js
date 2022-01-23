import dynamic  from 'next/dynamic'
const WangEditor = dynamic(
  () => import('../components/myEditor'),
  {ssr: false}
)

export default function Home() {
  return <WangEditor />
}
