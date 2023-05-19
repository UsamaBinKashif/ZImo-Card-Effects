import Button from "components/Button";
import Modal from "components/Modal";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZIMO </title>
        <meta name="description" content="zimo " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-wrap gap-10 items-center justify-center ">
          <Button text={"one"} number={1} />
          <Button text={"two"} number={2}/>
          <Button text={"three"} number={3}/>
          <Button text={"four"} number={4}/>
          <Button text={"five"} number={5}/>
          <Button text={"six"} number={6}/>
          <Button text={"seven"} number={7}/>
          <Button text={"eight"} number={8} />
          <Button text={"nine"} number={9} />
          <Modal />
        </div>
      </main>
    </>
  );
}
