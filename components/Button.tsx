import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: 'btn_dark_green'
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
   <button
   className={`flex justify-center gap-3 rounded-full border ${variant}`}
     type='button'
   >
    {icon && <Image src={icon} width={24} height={24} alt="title"/>}
    <label className="whitespace-nowrap bold-16">{title}</label>
   </button>
  )
}

export default Button