import Head from 'next/head'

export default function HeadTitle({ children }: { children: string }) {
  return (
    <Head>
      <title>solace°{' ' + children.toLowerCase() + ' '}• Decentralized Coverage Protocol</title>
    </Head>
  )
}
