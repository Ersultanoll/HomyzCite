import Image from "next/image"
import prologis from '@/assets/prologis.png'
import american_tower from '@/assets/tower.png'
import reality from '@/assets/realty.png'
function Companies() {
  return (
		<div className='padding-x box-width py-8'>
			<div className='flex gap-4 flex-wrap justify-between items-center'>
				<div>
					<Image src={prologis} alt='#' width={150} />
				</div>
				<div>
					<Image src={american_tower} alt='#' width={150} />
				</div>
				<div>
					<Image src={american_tower} alt='#' width={150} />
				</div>
				<div>
					<Image src={reality} alt='#' width={150} />
				</div>
			</div>
		</div>
  );
}

export default Companies