import Link from "next/link"
import { FC } from "react"
import logoImage from '@/assets/images/logo.svg'
import Image from "next/image"

const Logo: FC = () => {
	return (
		<Link href='/'>
			<a className="px-layout mb-10 block">
				<Image src={logoImage} width={247} height={37} alt='Online Cinema'  draggable={false}/>
			</a>
		</Link>
	)
}

export default Logo