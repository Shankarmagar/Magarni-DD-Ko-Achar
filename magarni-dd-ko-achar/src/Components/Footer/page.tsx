import Image from 'next/image';
import Logo from '../../images/logoAchar.png';
import facebookIcon from '../../images/Facebook.png';
import instagramIcon from '../../images/Instagram Circle.png';
import youTubeIcon from '../../images/YouTube.png';
import twitterIcon from '../../images/Twitter.png';
import '../Footer/footer.css'

export default function Footer(){
  return (
    <div className='Footer'>
      <div className='OtherDetails'>
        <div className='logoWithName pt-20 pl-20'>
         <Image src={Logo} alt="logo" className="h-500 w-500" />
        </div>

       <div className="grid grid-cols-2 gap-4 pt-20 pr-20">
              <div className="text-lg font-bold text-[#86898C]">Address:</div>
              <div className="text-lg font-bold text-[#86898C]">Workout videos</div>
              <div className="text-lg font-bold text-[#86898C]">Healthy diet</div>
              <div className="text-lg font-bold text-[#86898C]">Workout</div>
              <div className="text-lg font-bold text-[#86898C]">Workout videos</div>
              <div className="text-lg font-bold text-[#86898C]">Experts</div>
            </div>

      </div>
      <div className='license_links'>

     <div className='lic'>Copyright © 2023 Fitness Blender. All rights reserved. Terms of Use Privacy Policy</div>
     <div className='mediaLinks pb-5'>
      <Image src={facebookIcon} alt='facebook' height={40} width={40} />
      <Image src={instagramIcon} alt='instagram' height={40} width={40} />
      <Image src={youTubeIcon} alt='youtube' height={40} width={40} />
      <Image src={twitterIcon} alt='twitter' height={40} width={40} />
     </div>
      </div>
     </div>
  );
};