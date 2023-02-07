import React, { useState } from 'react'

const Section =({title,description,isVisible,setIsVisible}) =>{
  return (
    <div className='border border-black p-2 m-2'>
      <h3 className='font-bold text-xl'>{title}</h3>
      
      {/* if is Visible is true then show hide button else show the show button */}
      {
        isVisible ? <button
        onClick={()=>setIsVisible(false)}
        className='cursor-pointer underline '
      >
        Hide
      </button> 
          :<button 
        onClick={()=>setIsVisible(true)}
        className='cursor-pointer underline'
      >Show
      </button>
      }
      
      {/* render description only if isVisible is true */}
      {isVisible && <p>{description} </p>}
    </div>
  ) 
}


const Instamart = () => {
  const[visibleSection,setIsVisibleSection] = useState("about");
  return (
    <div>
      <div className='text-3xl p-2 m-2 font-bold'>Instamart</div>
      <Section  
          title={"AboutInstamart"} 
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
          isVisible={visibleSection === "about"}
          setIsVisible={()=>
          setIsVisibleSection("about")}
          />
      <Section 
          title={"TeamInstamart"} 
          description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
          // isvisible controls whether it is visible or not
          isVisible={visibleSection === "team"}
          //setIsVisible controls what is visible
          setIsVisible={() =>
            setIsVisibleSection("team")}
          />
      <Section 
          title={"Careers"} 
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32. "
          isVisible={visibleSection === "career"}
          setIsVisible={() =>
            setIsVisibleSection("career")}
          />
      
      {/* <AboutInstamart/>
      <DetailsOfInstamary/>
      <TeamInstamart/>
      <Product/>
      <Careers/> */}
    </div>
  )
}

export default Instamart
