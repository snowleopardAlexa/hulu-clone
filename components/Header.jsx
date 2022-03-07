import Image from "next/image";

function Header() {
  return (
    <header className="">
      <h1>hEADER</h1>
      <Image 
        src="https://links.papereact.com/ua6" 
        width={200} 
        height={100}  
      
       />
    </header>
  )
}

export default Header;