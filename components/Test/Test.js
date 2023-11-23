import './Test.scss'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from '@chakra-ui/react'
import Image from 'next/image'


function Test() {
  return (
    <>
      <Card className="Test">
        <CardHeader>
          <div className="Test__header">
            <Image
              src="/next.svg"
              alt="test image"
              width={100}
              height={100}
            />
            <Image
              src="/vercel.svg"
              alt="test image"
              width={100}
              height={100}
            />
          </div>
        </CardHeader>
        <CardBody>
          <h1>Next Boilerplate with Chakra-UI, Sass and Iron Session</h1>
          <p>
          </p>
        </CardBody>
        <CardFooter>
          <span>
            Made with ❤️ by <a href="https://github.com/Gautam-Nandan"> Gautam Nanda</a>, <a href="https://github.com/Ary0405"> Aryan Sethia </a> and <a href="https://github.com/sujith-rek"> Sujith</a>
          </span>
        </CardFooter>
      </Card>

    </>
  )
}

export default Test