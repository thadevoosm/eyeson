import Link from 'next/link';
import Image from 'next/image';

export default function Careers() {
  return (
    <div className="text-center relative bg-black-900">
      <div className="absolute top-0 left-0 ml-10 mt-7 text-white text-4xl lg:text-5xl font-normal leading-60 text-oldenglishtextmt">eyeson</div>
        <nav className="text-white py-4">
          <div className="flex justify-center">
            <Link href="/" legacyBehavior>
              <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal levenim-mt" style={{ fontSize: "40px", lineHeight: "56px" }}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="mx-4 text-lg md:text-xl lg:text-2xl font-bold border-b-2 border-white levenim-mt" style={{ fontSize: "40px", lineHeight: "56px", fontWeight: "bold" }}> About </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal levenim-mt" style={{ fontSize: "40px", lineHeight: "56px" }}>Services</a>
            </Link>
            <Link href="/careers" legacyBehavior>
              <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal levenim-mt" style={{ fontSize: "40px", lineHeight: "56px" }}>Careers</a>
            </Link>
          </div>
        </nav>

        <Link href="/option" legacyBehavior>
          <a>
            <Image 
            src="../../../public/Group 22.png"
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
      
        <div className="py-8 text-center ml-10 font-bold text-white" style={{ fontSize: "40px", lineHeight: "53.2px", fontWeight: "700", fontFamily: "Arial" }}>
          <p>Carees at Eyeson Solutions</p>
        </div>
        <div className="py-8 text-center ml-10 font-italic text-white" style={{ fontSize: "20px", lineHeight: "53.2px", fontWeight: "700", fontFamily: "Georgia" }}>
          <p>"Where your ambition meets innovation"</p>
        </div>



 <div className="absolute text-left col col-lg-8 mt-7 mt-lg-0"style={{ color: '#FEFEFE', fontSize: 10, fontWeight: '300', marginTop: '125px' }}>Role</div>
        <div className="absolute text-center col col-lg-8 mt-7 mt-lg-0"style={{ color: '#FEFEFE', fontSize: 10, fontWeight: '300', marginTop: '125px' }}>Location</div>
          <div className="absolute text-right col col-lg-8 mt-7 mt-lg-0"style={{ color: '#FEFEFE', fontSize: 10, fontWeight: '300', marginTop: '125px' }}>Type</div>


<div style={{ marginTop: 70, marginLeft:200 }}></div>
 <div style={{ display: 'flex', justifyContent: 'center' }}></div>
 <div style={{ marginRight: 20 }}></div>
   <div style={{ width: 450, height: 600, borderRadius: 10, border: '1px white solid' }}>
 <div style={{ color: 'white', fontSize: 21, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '600', wordWrap: 'break-word', marginTop: 25 }}>Intermediate React Developer</div>

<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>Location:Remote</div>

<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>Type:Part-Time</div>

<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>Are you a passionate React developer with a creative flair for building stunning web applications? Do you thrive on crafting seamless user experiences that combine functionality and aesthetics If you're ready to take your skills to the next level and join a team that's redefining technology, we want to hear from you.</div>

<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>Key Responsibilities:</div>

<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>• Collaborate with cross-functional teams to develop and implement user-friendly web applications using React.js.</div>
<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>•Translate design concepts and wireframes into high-quality code, ensuring seamless integration of front-end elements</div>
<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>•Optimize applications for maximum speed and scalability, ensuring exceptional performance across devices</div>
<div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>•Troubleshoot and debug issues that arise during development, testing, and deployment phases</div>

<button style={{ width: 115, height: 45, background: 'white', borderRadius: 10, border: '1px #707070 solid', cursor: 'pointer', padding: 0, outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginLeft: 25 }}>
<div style={{ color: 'black', fontSize: 20, fontFamily: 'Segoe UI', fontWeight: '600', wordWrap: 'break-word' }}>Cancel</div>
</button>

<button style={{ width: 115, height: 45, background: 'white', borderRadius: 10, border: '1px #707070 solid', cursor: 'pointer', padding: 0, outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginLeft: 25 }}>
<div style={{ color: 'black', fontSize: 20, fontFamily: 'Segoe UI', fontWeight: '600', wordWrap: 'break-word' }}>Apply</div>
</button>


<div class="columns">
<div class="column">
<div class="field">
<label class="label">First name</label>
<div class="control has-icons-left">
<input class="input is-primary" type="text"></input>
</div>
</div>
</div>
<div class="column">
<div class="field">
<label class="label">Last name</label>
<div class="control">
<input class="input is-info" type="text"></input>
</div>
</div>
</div>
</div>
<div class="columns">
<div class="column">
<div class="field">
<label class="label">Date of Birth</label>
<div class="control has-icons-left">
<input class="input is-primary" type="text"></input>
</div>
</div>
</div>
<div class="column">
<div class="field">
<label class="label">Mobile</label>
<div class="control">
<input class="input is-info" type="text"></input>
</div>
</div>
</div>
</div>










    <div className="absolute ml-10 mt-7 text-white text-4xl lg:text-5xl font-normal leading-60 text-oldenglishtextmt">eyeson</div>
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
