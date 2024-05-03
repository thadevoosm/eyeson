import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="text-center relative bg-black-900">
      <div className="absolute top-0 left-0 ml-10 mt-7 text-white text-4xl lg:text-5xl font-normal leading-60" style={{fontFamily: 'Old English Text MT'}}>eyeson</div>
      <nav className="text-white py-4">
        <div className="flex justify-center">
          <Link href="/" legacyBehavior>
            <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal" style={{ fontSize: "40px", lineHeight: "56px", fontFamily: 'Levenim MT' }}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="mx-4 text-lg md:text-xl lg:text-2xl font-bold border-b-2 border-white" style={{ fontSize: "40px", lineHeight: "56px", fontWeight: "bold", fontFamily: 'Levenim MT' }}> About </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal" style={{ fontSize: "40px", lineHeight: "56px", fontFamily: 'Levenim MT' }}>Services</a>
          </Link>
          <Link href="/careers" legacyBehavior>
            <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal" style={{ fontSize: "40px", lineHeight: "56px", fontFamily: 'Levenim MT' }}>Careers</a>
          </Link>
        </div>
      </nav>

      <Link href="/option" legacyBehavior>
        <a>
          <Image 
            src="/Group 22.png"
            alt="Image"
            className="absolute"
            width={20}
            height={15}
            style={{
              top: "0",
              right: "0", 
              marginRight: "25px", 
              marginTop: "28px"
            }}
          />
        </a>
      </Link>

      <br /><br /><br />
      
      <div className="py-8 text-left ml-10 font-bold text-white" style={{ fontSize: "40px", lineHeight: "53.2px", fontWeight: "700", fontFamily: "Segoe UI" }}>
        <p>About Eyeson</p>
      </div>
      
      <div className="py-2 text-left ml-10 mr-30 mt-0 text-white" style={{ fontSize: "23px", lineHeight: "39.9px", fontWeight: "400" }}>
        <p>
          Welcome to Eyeson Solution, where innovation meets imagination to craft cutting-edge software solutions.
          <br />
          With a relentless pursuit of excellence, we specialize in developing and designing software that redefines
          <br />
          the technological landscape. Our team of visionary experts is dedicated to creating seamless and transformative
          <br />
          experiences that empower businesses and individuals alike.
        </p>
      </div>
      
      <br />
      <br />
      <br />
      
      <div className="py-8 text-left ml-10 mr-10 text-white" style={{ fontSize: "23px", lineHeight: "39.9px", fontWeight: "400" }}>
        <div className="flex items-center">
          <div>
            <p>
              We invite dreamers, creators, and innovators to join us on our
              <br />
              journey to shape the future. Collaborate with Eyeson Solution
              <br />
              to turn ideas into reality, disrupt industries, and leave an indelible
              <br />
              mark on the world of technology.
            </p>
          </div>
          <div className="ml-auto">
          <Image 
            src="/01.png"
            alt="Image"
            className="h-70 w-70"
            width={598}
            height={598}
            style={{
              width: 598,
              height: 598,
              left: 840,
              top: 363,
              position: 'absolute'
            }}
          />
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />      
      <div className="py-8 text-left ml-10 mr-10 text-white" style={{ fontSize: "70px", lineHeight: "106.41px", fontWeight: "700" }}>
        Define. Refine. Make it Possible
      </div>
      <br /><br /><br />
      <div className="flex items-center text-left ml-10 mr-10">
        <div style={{ color: 'white', fontSize: '23px', fontWeight: '400', lineHeight: '39.9px'}}>
          Our skilled engineers breathe life into concepts, transforming 
          <br />
          ideas into powerful, intuitive, and scalable software applications
        </div>
      </div>
      <br /><br />
      <div className="flex items-center text-left ml-10 mr-10">
        <div style={{ color: 'white', fontSize: '23px', fontWeight: '400', lineHeight: '39.9px'}}>
          Our design team crafts interfaces that not only captivate but
          <br />
          also ensure effortless usability.
        </div>
      </div>
      <br /><br />
      <Image 
        src="/2.png"
        alt="Image"
        className="h-70 w-70"
        width={662}
        height={662}
        style={{
          width: 662,
          height: 662,
          left: 840,
          top: 1111,
          position: 'absolute'
        }}
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br />
      <div className="absolute ml-10 mt-7 text-white text-4xl lg:text-5xl font-normal leading-60" style={{fontFamily: 'Old English Text MT'}}>eyeson</div>
      <div className="absolute mt-12 text-white font-normal leading-60" style={{ color: 'white', fontSize: '20px', fontWeight: '500', lineHeight: '39.9px', marginLeft: '700px', textAlign: 'center' }}>Navigations</div>
      <div className="absolute mt-12 text-white font-normal leading-60" style={{ color: 'white', fontSize: '20px', fontWeight: '500', lineHeight: '39.9px', marginLeft: '1200px', textAlign: 'center' }}>Social</div>
      <div className="absolute text-left ml-10" style={{ color: '#FEFEFE', fontSize: 15, fontWeight: '400', marginTop: '125px' }}>
        At Eyeson Solutions, we specialize in turning ideas
        <br />
        into reality through expert web development, design,
        <br />
        and cross-platform mobile app solutions.
        <br />
        Join us in crafting digital experiences that captivate and innovate
      </div>
      <Image 
        src="/Icon awesome-phone-alt.png"
        alt="Image"
        className="h-70 w-70"
        width={25}
        height={25}
        style={{
          width: 25,
          height: 25,
          left: 45,
          top: 2185,
          position: 'absolute'
        }}
      />
      <div className="absolute text-left" style={{ color: '#FEFEFE', fontSize: 17, fontWeight: '400', marginTop: '241px', marginLeft: 85 }}>+91 807 859 065</div>
      <Image 
        src="/Icon material-email.png"
        alt="Image"
        className="h-70 w-70"
        width={25}
        height={25}
        style={{
          width: 25,
          height: 25,
          left: 45,
          top: 2240,
          position: 'absolute'
        }}
      />
      <div className="absolute text-left" style={{ color: '#FEFEFE', fontSize: 17, fontWeight: '400', marginTop: '295px', marginLeft: 85 }}>info@eyeson.in</div>
      <div className="absolute text-left" style={{ color: '#FEFEFE', fontSize: 17, fontWeight: '400', marginTop: '140px', marginLeft: 720 }}>
        <Link href="/careers" legacyBehavior>
          <a>Careers</a>
        </Link>
      </div>
      <div className="absolute text-left" style={{ color: '#FEFEFE', fontSize: 17, fontWeight: '400', marginTop: '180px', marginLeft: 729 }}>About</div>
      <div className="absolute text-left" style={{ color: '#FEFEFE', fontSize: 17, fontWeight: '400', marginTop: '220px', marginLeft: 670 }}>Terms and Conditions</div>
      <div className="absolute text-left" style={{ color: '#FEFEFE', fontSize: 17, fontWeight: '400', marginTop: '260px', marginLeft: 670 }}>Have Any Complaints?</div>
      <Image 
        src="/Group 59.png"
        alt="Image"
        className="h-70 w-70"
        width={300}
        height={40}
        style={{
          width: 300,
          height: 40,
          left: 1100,
          top: 2100,
          position: 'absolute'
        }}
      />
      <div className="absolute text-left" style={{ color: '#FEFEFE', fontSize: 17, fontWeight: '400', marginTop: '260px', marginLeft: 1060 }}>© 2023 Eyeson Solutions. All rights reserved.</div>
      <p className="text-transparent text-8xl" style={{marginTop: '280px'}}>...</p>
    </div>
  )
}

