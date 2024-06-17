import Link from "next/link";

function Footer() {
  return (
		<div className='box-width padding-x'>
			<div className='mt-14'>
				<div className='flex sm:flex-row flex-col gap-y-4 justify-between'>
					<div>
						<h2 className='text-blue-600 font-bold text-3xl'>Homyz</h2>
						<p className='pt-4 text-gray-500'>
							Our vision is to make all people <br />
							the best place to live for them
						</p>
					</div>
					<div>
						<div className='flex-col gap-2 flex'>
							<h1 className='text-blue-950 font-bold text-4xl'>
								Information
							</h1>
							<p>145 New York, FL 5467, USA</p>
							<div className="flex items-center gap-3 flex-wrap">
								<Link href={'#'}>Property</Link>
								<Link href={'#'}>Services</Link>
								<Link href={'#'}>Product</Link>
								<Link href={'#'}>About Us</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Footer