import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center relative bg-black-900">
      <div className="absolute top-0 left-0 ml-10 mt-7 text-white text-4xl lg:text-5xl font-normal leading-60 fontFamily: 'Old English Text MT">eyeson</div>
      <nav className="text-white py-4">
        <div className="flex justify-center">
          <Link href="/" legacyBehavior>
            <a className="mx-4 text-lg md:text-xl lg:text-2xl font-bold border-b-2" style={{ fontSize: "40px", lineHeight: "56px" , fontWeight: "bold"}}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal levenim-mt border-white levenim-mt" style={{ fontSize: "40px", lineHeight: "56px" }}> About </a>
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
    <img src="/Group 22.png" alt="Logo" className="absolute" style={{ top: "0", right: "0", marginRight: "25px", marginTop: "28px", height: "15px", width: "20px" }} />
  </a>
</Link>

      <br />
      <br />
      <br />
      
      <div className=" text-left ml-10 font-bold text-white" style={{ fontSize: "40px", lineHeight: "53.2px", fontWeight: "700", fontFamily: "Segoe UI" }}>
      <img style={{width: 1896, height: 1117, border: '1px solid'}} src="bg.png" />
        <p>EyesOn Solutions</p>
      </div>
      
      <div className="py-2 text-left ml-10 mr-30 mt-0 text-white" style={{ fontSize: "23px", lineHeight: "39.9px", fontWeight: "400" }}>
        
      </div>
      
      <br />
      <br />
      <br />
      
      <div className="py-8 text-left ml-10 mr-10 text-white" style={{ fontSize: "40px", lineHeight: "39.9px", fontWeight: "600" }}>
    <div className="flex items-center">
        <div>
            <p>
                Portfolio
            </p>
            <div style={{ marginTop: 70, marginLeft:200 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginRight: 20 }}>
                        <div style={{ width: 450, height: 600, borderRadius: 10, border: '1px white solid' }}>
                            <img style={{ width: 450, height: 260, borderRadius: 10, border: '1px solid' }} src="swift.png" />
                            <div style={{ color: 'white', fontSize: 21, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '600', wordWrap: 'break-word', marginTop: 25 }}>SwiftDeliver</div>
                            <div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.2, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>SwiftDeliver is a cutting-edge delivery app designed to revolutionize the way people receive their goods and services. With a sleek and user-friendly interface, SwiftDeliver seamlessly connects users with a wide range of local businesses, restaurants, and services. Whether it&apos;s piping-hot meals, essentials from the grocery store, or even a last-minute gift, SwiftDeliver ensures swift, reliable, and secure doorstep deliveries at the tap of a button.</div>
                            <button style={{ width: 115, height: 45, background: 'white', borderRadius: 10, border: '1px #707070 solid', cursor: 'pointer', padding: 0, outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginLeft: 25 }}>
                                <div style={{ color: 'black', fontSize: 20, fontFamily: 'Segoe UI', fontWeight: '600', wordWrap: 'break-word' }}>View UI</div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div style={{ width: 450, height: 600, borderRadius: 10, border: '1px white solid', marginLeft:120 }}>
                            <img style={{ width: 450, height: 260, borderRadius: 10, border: '1px solid' }} src="onerecord.png" />
                            <div style={{ color: 'white', fontSize: 21, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '600', wordWrap: 'break-word', marginTop: 25 }}>OneRecord</div>
                            <div style={{ width: 400, color: '#FEFEFE', lineHeight: 1.5, fontSize: 17, fontFamily: 'Segoe UI', marginLeft: "30px", fontWeight: '300', wordWrap: 'break-word', marginTop: 10 }}>ONE Record is a standard for data sharing and creates a single record view of the shipment. This ONE Record standard defines a common data model for the data. Even though we had a small contribution to the OneRecord, but the website is completely owned and rights with OneRecord.</div>
                            <button style={{ width: 115, height: 45, background: 'white', borderRadius: 10, border: '1px #707070 solid', cursor: 'pointer', padding: 0, outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 45, marginLeft: 25 }}>
                                <div style={{ color: 'black', fontSize: 20, fontFamily: 'Segoe UI', fontWeight: '600', wordWrap: 'break-word' }}>View Site</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

     
      <div className="py-8 text-left ml-10 mr-10 text-white" style={{ fontSize: "40px", lineHeight: "106.41px", fontWeight: "700" }}>
        <p>Services</p>
        <div style={{ display: 'flex', justifyContent: 'center' ,marginTop:25}}>
    <div style={{ width: 350, marginTop: 20, height: 420, background: 'rgba(255, 255, 255, 0)', borderRadius: 10, border: '1px #707070 solid', marginRight: 40 }}>
        <div className='text-center' style={{ color: 'white', fontSize: 30, fontFamily: 'Segoe UI', fontWeight: '700', wordWrap: 'break-word', marginBottom: 20 }}>Web Development</div>
        <div style={{ color: '#FEFEFE', lineHeight: 1.5, fontSize: 17, fontFamily: 'Segoe UI', paddingLeft: 30, paddingRight: 30, fontWeight: '300', wordWrap: 'break-word' }}>Custom Web Development: Tailored solutions that align with your business goals and user needs. Responsive Design: Websites that look and function seamlessly across all devices. E-Commerce Solutions: Build a powerful online store to boost your sales. CMS Development: Manage your website content easily with a user-friendly CMS.</div>
    </div>

    <div style={{ width: 350, marginTop: 20, height: 420, background: 'rgba(255, 255, 255, 0)', borderRadius: 10, border: '1px #707070 solid', marginLeft: 40, marginRight: 40 }}>
        <div className='text-center' style={{ color: 'white', fontSize: 30, fontFamily: 'Segoe UI', fontWeight: '700', wordWrap: 'break-word', marginBottom: 20 }}>Web Designing</div>
        <div style={{ color: '#FEFEFE', lineHeight: 1.5, fontSize: 17, fontFamily: 'Segoe UI', paddingLeft: 30, paddingRight: 30, fontWeight: '300', wordWrap: 'break-word' }}>Elevate your online presence and captivate your audience with our exceptional web designing services. Let us create a digital experience that not only looks amazing but also drives your business forward. Contact us today to discuss how we can transform your vision into a visually stunning reality.</div>
    </div>

    <div style={{ width: 350, marginTop: 20, height: 420, background: 'rgba(255, 255, 255, 0)', borderRadius: 10, border: '1px #707070 solid', marginLeft: 40 }}>
        <div className='text-center' style={{ color: 'white', fontSize: 30, fontFamily: 'Segoe UI', fontWeight: '700', wordWrap: 'break-word', marginBottom: 20 }}>Mobile App</div>
        <div style={{ color: '#FEFEFE', lineHeight: 1.5, fontSize: 17, fontFamily: 'Segoe UI', paddingLeft: 30, paddingRight: 30, fontWeight: '300', wordWrap: 'break-word' }}>Our expert team transforms innovative ideas into functional and user-centric mobile applications. From concept to design and coding to testing, we ensure a seamless and engaging experience for your users across various platforms. Elevate your business, streamline processes, and engage your audience with our cutting-edge app solutions.</div>
    </div>
</div>




      </div>
      
      <div className="py-8 text-left ml-10 mr-100 text-white" style={{ fontSize: "40px", lineHeight: "106.41px", fontWeight: "700" }}>
      <div style={{width: 70, height: 10, background: '#979797', border: '1px solid'}} />
        <p>Customer Review</p>
        <img style={{width: 126, height: 116, marginTop:30, marginLeft:60}} src="quote.png" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ width: 500, color: '#FEFEFE', lineHeight: 1.5, fontSize: 20, fontFamily: 'Segoe UI', marginTop: 30, fontWeight: '300', wordWrap: 'break-word' }}>
      &quot;They have the best services and done everything more I needed and on time delivery assured&quot;
      <div style={{ color: '#FEFEFE', fontSize: 20, fontFamily: 'Segoe UI', fontWeight: '300', wordWrap: 'break-word', textAlign: 'right', marginTop: 20 }}>
        - Mathew
      </div>
    </div>

    <div style={{ width: 500, color: '#FEFEFE', lineHeight: 1.5, fontSize: 20, fontFamily: 'Segoe UI', marginTop: 30, fontWeight: '300', wordWrap: 'break-word' }}>
      &quot;Wow, where do I even begin? EyesOn Solutions completely nailed it with our web design. It&apos;s like they plucked the ideas right out of my head and turned them into a visual masterpiece. The colors, fonts, and imagery work together seamlessly, creating a site that&apos;s a true reflection of our brand. The collaboration process was smooth, and the final design speaks for itself. Hats off to EyesOn Solutions for their design prowess!&quot;
      <div style={{ color: '#FEFEFE', fontSize: 20, fontFamily: 'Segoe UI', fontWeight: '300', wordWrap: 'break-word', textAlign: 'right', marginTop: 20 }}>
        - David
      </div>
    </div>
  </div>


        </div>
        <br></br>

        <div style={{width: 1400, height: 428, position: 'relative',marginLeft:100}}>
        <div style={{width: 1300, height: 0, left: 0, top: 0, position: 'absolute', border: '1px #707070 solid'}}></div>
        <div className='text-left' style={{color: 'white', fontSize: 70, fontFamily: 'Old English Text MT', fontWeight: '400', wordWrap: 'break-word'}}>eyeson
        <div style={{color: '#FEFEFE', fontSize: 18, fontFamily: 'Segoe UI', fontWeight: '300', wordWrap: 'break-word',marginTop:40}}>At Eyeson Solutions, we specialize in turning ideas<br/>into reality through expert web development, design, <br/>and cross-platform mobile app solutions. <br/>Join us in crafting digital experiences that captivate and innovate</div>
        <div style={{ display: 'flex', justifyContent: 'left' ,marginTop:25}}>

        <img style={{width: 20, height: 20, marginTop:5}} src="phone.png" />
        <div style={{color: '#FEFEFE', fontSize: 18, fontFamily: 'Segoe UI', fontWeight: '400', wordWrap: 'break-word',marginLeft:12}}>+91 807 859 065</div>
        
        </div>

        <div style={{ display: 'flex', justifyContent: 'left' ,marginTop:15}}>

        <img style={{width: 20, height: 20, marginTop:5}} src="mail.png" />
        <div style={{color: '#FEFEFE', fontSize: 18, fontFamily: 'Segoe UI', fontWeight: '400', wordWrap: 'break-word',marginLeft:12}}>info@eyeson.in</div>
        
        </div> 
        </div>
        </div>      
    </div>
  )
}
